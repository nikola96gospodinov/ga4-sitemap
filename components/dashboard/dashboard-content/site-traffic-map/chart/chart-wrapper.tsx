import { mapSitemapHierarchy } from "@/lib/sitemap-mapper";
import {
  useGetGA4TrafficData,
  useMockGA4TrafficData,
} from "@/services/ga4/get-ga4-traffic-data.service";
import { useMemo, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { GA4ScatterChart } from "./scatter-chart/scatter-chart";
import { TestDataScenario } from "./test-data-scenario";
import { GA4SankeyChart } from "./snakey-chart";
import { ChartSelection } from "./chart-selection";

type Props = {
  selectedProperty: string;
};

export type ChartNode = {
  x: number;
  y: number;
  r: number;
  path: string;
  depth: number;
  page_views: number;
  isExpanded: boolean;
  hasChildren: boolean;
  cluster: number;
  parentPath?: string;
};

export const ChartWrapper = ({ selectedProperty }: Props) => {
  const [useMockData, setUseMockData] = useState(false);
  const [mockScenario, setMockScenario] = useState<
    "vertical" | "horizontal" | "mixed"
  >("mixed");
  const [chartType, setChartType] = useState<"scatter" | "sankey">("scatter");

  const {
    data: realData,
    isLoading: realDataLoading,
    isError: realDataError,
    refetch: realDataRefetch,
  } = useGetGA4TrafficData(selectedProperty);

  const { data: mockData, isLoading: mockDataLoading } =
    useMockGA4TrafficData(mockScenario);

  const data = useMockData ? mockData : realData;
  const isLoading = useMockData ? mockDataLoading : realDataLoading;
  const isError = useMockData ? false : realDataError;

  const transformedData = useMemo(() => {
    if (!data) return [];
    return mapSitemapHierarchy(data);
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-full gap-4 mt-8">
        <Spinner />
        <p>Loading data...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-full mt-8">
        <p className="text-red-700 text-lg font-semibold mb-1">
          Something went wrong...
        </p>
        <p className="text-slate-950 text-sm  mb-4">
          Please try again or come back later.
        </p>
        <Button size="sm" onClick={() => realDataRefetch()}>
          Try again
        </Button>
      </div>
    );
  }

  if (!transformedData.length) {
    return (
      <div className="flex flex-col gap-2 bg-white p-8 rounded-lg mt-4">
        <div className="text-slate-950 text-center">No data available</div>
        <p className="text-slate-600 text-sm text-center">
          Select a different property/account
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 bg-white p-8 rounded-lg mt-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-slate-900">
          Traffic Visualization
        </h3>
        <p className="text-sm text-slate-600">
          Click on nodes to expand/collapse their children. Node size represents
          traffic volume.
        </p>
      </div>
      {/* TODO: Remove this */}
      <TestDataScenario
        useMockData={useMockData}
        setUseMockData={setUseMockData}
        mockScenario={mockScenario}
        setMockScenario={setMockScenario}
      />
      <ChartSelection chartType={chartType} setChartType={setChartType} />
      {chartType === "scatter" && (
        <GA4ScatterChart transformedData={transformedData} />
      )}
      {chartType === "sankey" && <GA4SankeyChart />}{" "}
    </div>
  );
};
