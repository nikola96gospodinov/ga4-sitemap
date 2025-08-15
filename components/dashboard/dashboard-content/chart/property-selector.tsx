import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Spinner } from "@/components/ui/spinner";
import { useGetGA4Properties } from "@/services/ga4/get-ga4-properties.service";
import { ChartScatter } from "lucide-react";
import { useState } from "react";

type Props = {
  selectedAccount: string;
};

export const PropertySelector = ({ selectedAccount }: Props) => {
  const [selectedProperty, setSelectedProperty] = useState("");

  const {
    data: properties,
    isLoading,
    isError,
    refetch,
  } = useGetGA4Properties(selectedAccount);

  const content = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col justify-center items-center h-full gap-4">
          <Spinner />
          <p>Loading properties...</p>
        </div>
      );
    }

    if (isError) {
      return (
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-red-700 text-lg font-semibold mb-1">
            Something went wrong...
          </p>
          <p className="text-slate-950 text-sm  mb-4">
            Please try again or come back later.
          </p>
          <Button size="sm" onClick={() => refetch()}>
            Try again
          </Button>
        </div>
      );
    }

    if (!properties || properties.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center h-full gap-2">
          <p className="text-slate-950 text-lg font-semibold">
            No properties found
          </p>
          <p className="text-slate-950 text-sm">
            Double check if you&apos;re using the correct Google account.
          </p>
        </div>
      );
    }

    if (properties.length === 1) {
      return (
        <div className="flex flex-col justify-center items-center h-full gap-2">
          <p className="text-slate-950 text-lg">
            Results showing for: <b>{properties[0].displayName}</b> ( #
            {properties[0].name.replace("accounts/", "")})
          </p>
        </div>
      );
    }

    return (
      <>
        <p className="text-slate-950 mb-0.5">
          Select the property you want to see the data for:
        </p>

        <Combobox
          options={properties.map((property) => ({
            value: property.name,
            label: property.displayName,
          }))}
          selectedValue={selectedProperty}
          onValueChange={setSelectedProperty}
          showValueInOptions
          formatValueForDisplay={(value) => value.replace("properties/", "")}
        />
      </>
    );
  };

  return (
    <div className="flex flex-col gap-4 bg-slate-300/30 p-8 rounded-lg mt-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-tl-lg rounded-br-lg transform -translate-y-8 -translate-x-8 border-l-2 border-t-2 border-slate-200 w-fit -mb-4">
          <ChartScatter className="w-4 h-4 text-white" />
          <h2 className="text-l text-white font-bold">Site Traffic Map</h2>
        </div>

        {content()}
      </div>
    </div>
  );
};
