type Props = {
  useMockData: boolean;
  setUseMockData: React.Dispatch<React.SetStateAction<boolean>>;
  mockScenario: "vertical" | "horizontal" | "mixed";
  setMockScenario: React.Dispatch<
    React.SetStateAction<"vertical" | "horizontal" | "mixed">
  >;
};

export const TestDataScenario = ({
  useMockData,
  setUseMockData,
  mockScenario,
  setMockScenario,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h4 className="font-medium text-blue-900">Test Data Selector</h4>
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={useMockData}
            onChange={(e) => setUseMockData(e.target.checked)}
            className="rounded border-slate-300"
          />
          <span className="text-sm text-blue-800">Use Mock Data</span>
        </label>

        {useMockData && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-blue-800">Scenario:</span>
            <select
              value={mockScenario}
              onChange={(e) =>
                setMockScenario(
                  e.target.value as "vertical" | "horizontal" | "mixed"
                )
              }
              className="text-sm border border-blue-300 rounded px-2 py-1 bg-white"
            >
              <option value="vertical">Vertical (Deep Hierarchy)</option>
              <option value="horizontal">Horizontal (Many Siblings)</option>
              <option value="mixed">Mixed (Balanced)</option>
            </select>
          </div>
        )}
      </div>
      {useMockData && (
        <p className="text-xs text-blue-600">
          {mockScenario === "vertical" &&
            "Testing with 30+ deep hierarchical pages"}
          {mockScenario === "horizontal" &&
            "Testing with 30+ shallow pages at same level"}
          {mockScenario === "mixed" &&
            "Testing with 50+ pages in balanced hierarchy"}
        </p>
      )}
    </div>
  );
};
