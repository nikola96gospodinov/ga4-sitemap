import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
  ScatterChart,
} from "recharts";
import { ChartNode } from "./chart-wrapper";
import { SitemapNode } from "@/lib/sitemap-mapper";
import { useState } from "react";

type Props = {
  transformedData: SitemapNode[];
};

export const Chart = ({ transformedData }: Props) => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const getMaxPageViews = (node: SitemapNode): number => {
    let max = node.page_views;
    for (const child of node.children) {
      max = Math.max(max, getMaxPageViews(child));
    }
    return max;
  };

  const getNodeWidth = (node: SitemapNode): number => {
    if (!expandedNodes.has(node.path) || node.children.length === 0) {
      return Math.max(20, Math.sqrt(node.page_views / 1000) * 80);
    }

    let totalWidth = 0;
    for (const child of node.children) {
      totalWidth += getNodeWidth(child);
    }
    return Math.max(
      totalWidth,
      Math.max(20, Math.sqrt(node.page_views / 1000) * 80)
    );
  };

  const chartData = () => {
    if (!transformedData.length) return [];

    const nodes: ChartNode[] = [];
    const maxPageViews = Math.max(
      ...transformedData.map((node) => getMaxPageViews(node))
    );

    const processNode = (
      node: SitemapNode,
      depth: number,
      xOffset: number = 0
    ) => {
      const radius = Math.max(
        2,
        Math.sqrt(node.page_views / maxPageViews) * 60
      );

      const y = depth * 100 + 50;

      const x = xOffset + radius;

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
      });

      if (expandedNodes.has(node.path) && node.children.length > 0) {
        const totalWidth = node.children.reduce(
          (sum, child) => sum + getNodeWidth(child),
          0
        );
        let currentOffset = xOffset - totalWidth / 2;

        for (const child of node.children) {
          const childWidth = getNodeWidth(child);
          processNode(child, depth + 1, currentOffset + childWidth / 2);
          currentOffset += childWidth;
        }
      }
    };

    for (const node of transformedData) {
      processNode(node, 0);
    }
    return nodes;
  };

  const handleNodeClick = (node: ChartNode) => {
    if (!node.hasChildren) return;

    const newExpandedNodes = new Set(expandedNodes);
    if (newExpandedNodes.has(node.path)) {
      newExpandedNodes.delete(node.path);
    } else {
      newExpandedNodes.add(node.path);
    }
    setExpandedNodes(newExpandedNodes);
  };

  const getNodeColor = (cluster: number) => {
    const baseColors = [
      "#94a3b8", // slate-600 - Cluster 0
      "#dc2626", // red-600 - Cluster 1
      "#ea580c", // orange-600 - Cluster 2
      "#d97706", // amber-600 - Cluster 3
      "#ca8a04", // yellow-600 - Cluster 4
      "#84cc16", // lime-600 - Cluster 5
      "#16a34a", // green-600 - Cluster 6
      "#15803d", // emerald-600 - Cluster 7
      "#0f766e", // teal-600 - Cluster 8
      "#06b6d4", // cyan-600 - Cluster 9
      "#0ea5e9", // sky-600 - Cluster 10
      "#2563eb", // blue-600 - Cluster 11
      "#6366f1", // indigo-600 - Cluster 12
      "#7e22ce", // violet-600 - Cluster 13
      "#a21caf", // purple-600 - Cluster 14
      "#db2777", // fuchsia-600 - Cluster 15
      "#f43f5e", // pink-600 - Cluster 16
      "#b91c1c", // rose-600 - Cluster 17
    ];

    return baseColors[cluster % baseColors.length];
  };

  const formatPageViews = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return value.toString();
  };

  return (
    <div className="w-full h-[48rem]">
      <ResponsiveContainer className="w-full h-full">
        <ScatterChart margin={{ top: 64, right: 64, bottom: 64, left: 64 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis type="number" dataKey="x" domain={["auto", "auto"]} hide />
          <YAxis type="number" dataKey="y" domain={["auto", "auto"]} hide />
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length > 0) {
                const data = payload[0].payload as ChartNode;
                return (
                  <div className="bg-white p-3 border border-slate-200 rounded-lg shadow-lg">
                    <p className="font-semibold">{data.path}</p>
                    <p className="text-sm text-slate-600">
                      Page Views: {formatPageViews(data.page_views)}
                    </p>
                    <p className="text-sm text-slate-600">
                      Cluster (depth): {data.cluster}
                    </p>

                    {data.hasChildren && (
                      <p className="text-sm text-slate-500">
                        {data.isExpanded
                          ? "Click to collapse"
                          : "Click to expand"}
                      </p>
                    )}
                  </div>
                );
              }
              return null;
            }}
          />
          <Scatter
            data={chartData()}
            dataKey="y"
            onClick={(data) => handleNodeClick(data)}
            shape={(props: unknown) => {
              const { cx, cy, payload } = props as {
                cx?: number;
                cy?: number;
                payload: ChartNode;
              };
              const node = payload;
              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={node.r}
                  fill={getNodeColor(node.cluster)}
                  stroke={node.hasChildren ? "#64748b" : "transparent"}
                  strokeWidth={node.hasChildren ? 3 : 0}
                  style={{ cursor: node.hasChildren ? "pointer" : "default" }}
                  onClick={() => handleNodeClick(node)}
                  className="hover:opacity-90 transition-opacity duration-200"
                />
              );
            }}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};
