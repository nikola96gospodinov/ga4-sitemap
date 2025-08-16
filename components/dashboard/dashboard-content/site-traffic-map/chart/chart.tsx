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
      xOffset: number = 0,
      parentPath?: string
    ) => {
      const radius = Math.max(
        4,
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
        parentPath,
      });

      if (expandedNodes.has(node.path) && node.children.length > 0) {
        const totalWidth = node.children.reduce(
          (sum, child) => sum + getNodeWidth(child),
          0
        );
        let currentOffset = xOffset - totalWidth / 2;

        for (const child of node.children) {
          const childWidth = getNodeWidth(child);
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

  const getNodeColor = (node: ChartNode, allNodes: ChartNode[]): string => {
    if (node.cluster === 0) {
      return "#cbd5e1";
    }

    const baseColors = [
      "#fca5a5", // red-300
      "#d9f99d", // lime-300
      "#fdba74", // orange-300
      "#5eead4", // teal-300
      "#fde68a", // amber-300
      "#d8b4fe", // purple-300
      "#86efac", // green-300
      "#fef08a", // yellow-300
      "#93c5fd", // blue-300
      "#6ee7b7", // emerald-300
      "#f9a8d4", // pink-300
      "#a5f3fc", // cyan-300
      "#fda4af", // rose-300
      "#7dd3fc", // sky-300
      "#a5b4fc", // indigo-300
      "#f0abfc", // fuchsia-300
      "#c4b5fd", // violet-300
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
        return adjustColorBrightness(parentColor, 0.9);
      }
    }

    return baseColors[node.cluster % baseColors.length];
  };

  const adjustColorBrightness = (hexColor: string, factor: number): string => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const newR = Math.round(r * factor);
    const newG = Math.round(g * factor);
    const newB = Math.round(b * factor);

    return `#${newR.toString(16).padStart(2, "0")}${newG
      .toString(16)
      .padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
  };

  const formatPageViews = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return value.toString();
  };

  const data = chartData();

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
                const tooltipData = payload[0].payload as ChartNode;
                return (
                  <div className="bg-white p-3 border border-slate-200 rounded-lg shadow-lg">
                    <p className="font-semibold">{tooltipData.path}</p>
                    <p className="text-sm text-slate-600">
                      Page Views: {formatPageViews(tooltipData.page_views)}
                    </p>
                    <p className="text-sm text-slate-600">
                      Cluster (depth): {tooltipData.cluster}
                    </p>
                    {tooltipData.parentPath && (
                      <p className="text-sm text-slate-600">
                        Parent: {tooltipData.parentPath}
                      </p>
                    )}

                    {tooltipData.hasChildren && (
                      <p className="text-sm text-slate-500">
                        {tooltipData.isExpanded
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
            data={data}
            dataKey="y"
            onClick={(clickData) => handleNodeClick(clickData)}
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
                  fill={getNodeColor(node, data)}
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
