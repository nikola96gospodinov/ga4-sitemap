import { TrafficData } from "@/services/ga4/get-ga4-traffic-data.service";

export type GA4TrafficRecord = {
  url_path: string;
  page_views: number;
};

export type SitemapNode = {
  path: string;
  depth: number;
  page_views: number;
  children: SitemapNode[];
  parent?: SitemapNode;
};

export const mapSitemapHierarchy = (
  trafficData: TrafficData
): SitemapNode[] => {
  if (!trafficData?.rows?.length) return [];

  const rootNode: SitemapNode = {
    path: "/",
    depth: 0,
    page_views: 0,
    children: [],
  };

  const sortedRecords = [...trafficData.rows].sort((a, b) => {
    const aSegments = a.dimensionValues[0].value.split("/").filter(Boolean);
    const bSegments = b.dimensionValues[0].value.split("/").filter(Boolean);
    return aSegments.length - bSegments.length;
  });

  for (const record of sortedRecords) {
    const path =
      record.dimensionValues[0].value === "/"
        ? "/"
        : record.dimensionValues[0].value;
    const segments = path === "/" ? [] : path.split("/").filter(Boolean);

    if (path === "/") {
      rootNode.page_views += parseInt(record.metricValues[0].value);
    } else {
      let currentNode = rootNode;
      let currentPath = "";

      for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        currentPath += `/${segment}`;

        let childNode = currentNode.children.find(
          (child) => child.path === currentPath
        );

        if (!childNode) {
          childNode = {
            path: currentPath,
            depth: i + 1,
            page_views: 0,
            children: [],
            parent: currentNode,
          };
          currentNode.children.push(childNode);
        }

        currentNode = childNode;
      }

      currentNode.page_views += parseInt(record.metricValues[0].value);
    }
  }

  aggregateTrafficData(rootNode);

  return [rootNode];
};

const aggregateTrafficData = (node: SitemapNode): number => {
  let totalPageViews = node.page_views;

  for (const child of node.children) {
    totalPageViews += aggregateTrafficData(child);
  }

  node.page_views = totalPageViews;

  return totalPageViews;
};

export const flattenSitemap = (nodes: SitemapNode[]): GA4TrafficRecord[] => {
  const result: GA4TrafficRecord[] = [];

  const traverse = (node: SitemapNode) => {
    result.push({
      url_path: node.path,
      page_views: node.page_views,
    });

    for (const child of node.children) {
      traverse(child);
    }
  };

  for (const node of nodes) {
    traverse(node);
  }

  return result;
};

export const getNodesAtDepth = (
  nodes: SitemapNode[],
  depth: number
): SitemapNode[] => {
  const result: SitemapNode[] = [];

  const traverse = (node: SitemapNode) => {
    if (node.depth === depth) {
      result.push(node);
    }

    for (const child of node.children) {
      traverse(child);
    }
  };

  for (const node of nodes) {
    traverse(node);
  }

  return result;
};

export const findNodeByPath = (
  nodes: SitemapNode[],
  path: string
): SitemapNode | null => {
  for (const node of nodes) {
    if (node.path === path) {
      return node;
    }

    for (const child of node.children) {
      const found = findNodeByPath([child], path);
      if (found) return found;
    }
  }

  return null;
};
