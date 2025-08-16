import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
  ScatterChart,
} from "recharts";
import { ChartNode } from "../chart-wrapper";
import { SitemapNode } from "@/lib/sitemap-mapper";
import { useState } from "react";
import { getChartData, getNodeColor } from "./scatter-chart.utils";
import { ScatterLegend } from "./scatter-legend";

type Props = {
  transformedData: SitemapNode[];
};

export const GA4ScatterChart = ({ transformedData }: Props) => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

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

  const formatPageViews = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return value.toString();
  };

  const data = getChartData(transformedData, expandedNodes);

  return (
    <>
      <div className="w-full h-[36rem] border border-slate-300 rounded-lg">
        <ResponsiveContainer className="w-full h-full">
          <ScatterChart margin={{ top: 48, right: 48, bottom: 48, left: 48 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.3}
              vertical={false}
            />

            <XAxis type="number" dataKey="x" domain={["auto", "auto"]} hide />

            <YAxis
              type="number"
              dataKey="depth"
              domain={[0, "dataMax"]}
              tickMargin={16}
              label={{
                value: "Depth",
                angle: -90,
                position: "insideLeft",
                style: { fill: "#334155", fontWeight: 600, fontSize: 16 },
              }}
              tickFormatter={(value) => (Number.isInteger(value) ? value : "")}
              allowDecimals={false}
              tick={{ fill: "#64748b", fontSize: 14, fontWeight: 500 }}
              axisLine={{
                stroke: "#cbd5e1",
                strokeWidth: 2,
                strokeDasharray: "3 3",
              }}
              tickLine={{ stroke: "#cbd5e1", strokeWidth: 2 }}
            />

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
                        Depth: {tooltipData.depth}
                      </p>

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

      <ScatterLegend />
    </>
  );
};
