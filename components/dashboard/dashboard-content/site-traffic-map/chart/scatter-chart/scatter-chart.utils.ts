import { SitemapNode } from "@/lib/sitemap-mapper";
import { ChartNode } from "../chart-wrapper";

export const getNodeColor = (
  node: ChartNode,
  allNodes: ChartNode[]
): string => {
  if (node.cluster === 0) {
    return "#cbd5e1";
  }

  const baseColors = [
    "#60a5fa", // blue-400
    "#a3e635", // lime-400
    "#818cf8", // indigo-400
    "#f87171", // red-400
    "#2dd4bf", // teal-400
    "#fb923c", // orange-400
    "#a78bfa", // purple-400
    "#fbbf24", // amber-400
    "#4ade80", // green-400
    "#fde047", // yellow-400
    "#34d399", // emerald-400
    "#f472b6", // pink-400
    "#22d3ee", // cyan-400
    "#fb7185", // rose-400
    "#38bdf8", // sky-400
    "#e879f9", // fuchsia-400
    "#8b5cf6", // violet-400
  ];

  if (node.cluster === 1) {
    const cluster1Nodes = allNodes.filter((n) => n.cluster === 1);
    const nodeIndex = cluster1Nodes.findIndex((n) => n.path === node.path);
    return baseColors[nodeIndex % baseColors.length];
  }

  if (node.parentPath) {
    const parentNode = allNodes.find((n) => n.path === node.parentPath);
    if (parentNode && parentNode.cluster !== 0) {
      const parentColor = getNodeColor(parentNode, allNodes);
      const siblings = allNodes.filter((n) => n.parentPath === node.parentPath);
      const siblingIndex = siblings.findIndex((n) => n.path === node.path);
      return createVariedColor(parentColor, siblingIndex, siblings.length);
    }
  }

  return baseColors[node.cluster % baseColors.length];
};

const createVariedColor = (
  baseColor: string,
  index: number,
  totalSiblings: number
): string => {
  const hsl = hexToHsl(baseColor);

  const hueVariation = (index / totalSiblings) * 30 - 15;
  const saturationVariation = index % 2 === 0 ? 1 : 0.8;
  const lightnessVariation = 0.9 + index * 0.05;

  const newHue = (hsl.h + hueVariation + 360) % 360;
  const newSaturation = Math.min(100, Math.max(0, hsl.s * saturationVariation));
  const newLightness = Math.min(100, Math.max(0, hsl.l * lightnessVariation));

  return hslToHex(newHue, newSaturation, newLightness);
};

const hexToHsl = (hex: string): { h: number; s: number; l: number } => {
  hex = hex.replace("#", "");

  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: h * 360,
    s: s * 100,
    l: l * 100,
  };
};

const hslToHex = (h: number, s: number, l: number): string => {
  h = h / 360;
  s = s / 100;
  l = l / 100;

  const hue2rgb = (p: number, q: number, t: number): number => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (c: number): string => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const getMaxPageViews = (node: SitemapNode): number => {
  let max = node.page_views;
  for (const child of node.children) {
    max = Math.max(max, getMaxPageViews(child));
  }
  return max;
};

const getNodeWidth = (
  node: SitemapNode,
  expandedNodes: Set<string>
): number => {
  if (!expandedNodes.has(node.path) || node.children.length === 0) {
    return Math.max(20, Math.sqrt(node.page_views / 1000) * 80);
  }

  let totalWidth = 0;
  for (const child of node.children) {
    totalWidth += getNodeWidth(child, expandedNodes);
  }
  return Math.max(
    totalWidth,
    Math.max(20, Math.sqrt(node.page_views / 1000) * 80)
  );
};

export const getChartData = (
  transformedData: SitemapNode[],
  expandedNodes: Set<string>
) => {
  if (!transformedData.length) return [];

  const nodes: ChartNode[] = [];
  const maxPageViews = Math.max(
    ...transformedData.map((node) => getMaxPageViews(node))
  );

  const processNode = (
    node: SitemapNode,
    depth: number,
    xOffset: number = 0,
    parentPath?: string
  ) => {
    const radius = Math.max(5, Math.sqrt(node.page_views / maxPageViews) * 40);

    const y = depth;

    let x = xOffset + radius;

    const nodesAtSameDepth = nodes.filter((n) => n.depth === depth);
    for (const existingNode of nodesAtSameDepth) {
      const minDistance = radius + existingNode.r + 12;
      const currentDistance = Math.abs(x - existingNode.x);
      if (currentDistance < minDistance) {
        if (x < existingNode.x) {
          x = existingNode.x - minDistance;
        } else {
          x = existingNode.x + minDistance;
        }
      }
    }

    nodes.push({
      x,
      y,
      r: radius,
      path: node.path,
      depth: node.depth,
      page_views: node.page_views,
      isExpanded: expandedNodes.has(node.path),
      hasChildren: node.children.length > 0,
      cluster: depth,
      parentPath,
    });

    if (expandedNodes.has(node.path) && node.children.length > 0) {
      const totalWidth = node.children.reduce(
        (sum, child) => sum + getNodeWidth(child, expandedNodes),
        0
      );
      let currentOffset = xOffset - totalWidth / 2;

      for (const child of node.children) {
        const childWidth = getNodeWidth(child, expandedNodes);
        processNode(
          child,
          depth + 1,
          currentOffset + childWidth / 2,
          node.path
        );
        currentOffset += childWidth;
      }
    }
  };

  for (const node of transformedData) {
    processNode(node, 0);
  }
  return nodes;
};
