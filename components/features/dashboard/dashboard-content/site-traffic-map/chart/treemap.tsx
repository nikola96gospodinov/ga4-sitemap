import { Treemap, Tooltip, ResponsiveContainer } from "recharts";
import { SitemapNode } from "@/lib/sitemap-mapper";

type Props = {
  transformedData: SitemapNode[];
};

type TreemapNode = {
  name: string;
  size: number;
  path: string;
  depth: number;
  fill: string;
  children?: TreemapNode[];
};

const branchColors = [
  "#dbeafe", // blue-100
  "#ecfccb", // lime-100
  "#e0e7ff", // indigo-100
  "#fee2e2", // red-100
  "#f0fdfa", // teal-100
  "#ffedd5", // orange-100
  "#f3e8ff", // purple-100
  "#fef3c7", // amber-100
  "#dcfce7", // green-100
  "#fef9c3", // yellow-100
  "#d1fae5", // emerald-100
  "#fce7f3", // pink-100
  "#cffafe", // cyan-100
  "#ffe4e6", // rose-100
  "#e0f2fe", // sky-100
  "#fae8ff", // fuchsia-100
  "#ede9fe", // violet-100
];

const transformToTreemapData = (nodes: SitemapNode[]): TreemapNode[] => {
  if (!nodes.length) return [];

  const colorMap = new Map<string, string>();
  let colorIndex = 0;

  const getColorForParent = (parentPath: string): string => {
    if (!colorMap.has(parentPath)) {
      colorMap.set(parentPath, branchColors[colorIndex % branchColors.length]);
      colorIndex++;
    }
    return colorMap.get(parentPath)!;
  };

  const transformNode = (
    node: SitemapNode,
    parentPath: string = ""
  ): TreemapNode => {
    const color = parentPath ? getColorForParent(parentPath) : branchColors[0];

    const result: TreemapNode = {
      name:
        node.path === "/" ? "Home" : node.path.split("/").pop() || node.path,
      size: node.page_views,
      path: node.path,
      depth: parentPath ? parentPath.split("/").length : 0,
      fill: color,
    };

    if (node.children && node.children.length > 0) {
      result.children = node.children.map((child) =>
        transformNode(child, node.path)
      );
    }

    return result;
  };

  return nodes.map((node) => transformNode(node));
};

export const GA4TreemapChart = ({ transformedData }: Props) => {
  const treemapData = transformToTreemapData(transformedData);

  return (
    <div className="w-full h-[32rem]">
      <ResponsiveContainer width="100%" height={512}>
        <Treemap
          data={treemapData}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#020618"
        >
          <Tooltip
            content={({ payload, active }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-3 border border-slate-200 rounded-lg shadow-lg">
                    <p className="font-semibold">{data.name}</p>
                    <p className="text-sm text-slate-600">Path: {data.path}</p>
                    <p className="text-sm text-slate-600">
                      Page Views: {data.size?.toLocaleString()}
                    </p>
                    <p className="text-sm text-slate-600">
                      Depth: {data.depth}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};
