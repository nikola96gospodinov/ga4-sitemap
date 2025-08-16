import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  chartType: "scatter" | "sankey";
  setChartType: React.Dispatch<React.SetStateAction<"scatter" | "sankey">>;
};

export const ChartSelection = ({ chartType, setChartType }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-start mt-8">
      <p className="text-sm text-slate-600">Chart Type:</p>
      <div className="inline-flex bg-slate-100 rounded-full p-1">
        <Button
          type="button"
          onClick={() => setChartType("scatter")}
          className={cn(
            "w-24 py-0.5 rounded-full text-sm font-medium transition-colors duration-150 focus:outline-none shadow-none hover:shadow-none hover:translate-y-[0]",
            chartType === "scatter"
              ? "bg-slate-950 text-slate-50 shadow"
              : "bg-transparent text-slate-950"
          )}
          aria-pressed={chartType === "scatter"}
        >
          Scatter
        </Button>
        <Button
          type="button"
          onClick={() => setChartType("sankey")}
          className={cn(
            "w-24 py-0.5 rounded-full text-sm font-medium transition-colors duration-150 focus:outline-none shadow-none hover:shadow-none hover:translate-y-[0]",
            chartType === "sankey"
              ? "bg-slate-950 text-slate-50 shadow"
              : "bg-transparent text-slate-950"
          )}
          aria-pressed={chartType === "sankey"}
        >
          Sankey
        </Button>
      </div>
    </div>
  );
};
