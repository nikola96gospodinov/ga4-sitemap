import { URLS } from "@/lib/urls";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { GA4_KEYS } from "./ga4-keys";
import { generateMockData } from "./mock-data";

export type TrafficData = {
  dimensionHeaders: { name: string }[];
  metricHeaders: { name: string; type: string }[];
  rows: {
    dimensionValues: { value: string }[];
    metricValues: { value: string }[];
  }[];
  rowCount: number;
  metadata: { currencyCode: string; timeZone: string };
  kind: string;
};

type GetGA4TrafficDataProps = {
  propertyName: string;
  accessToken: string;
  days?: number;
};

export const getGA4TrafficData = async ({
  propertyName,
  accessToken,
  days = 30,
}: GetGA4TrafficDataProps): Promise<TrafficData> => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const startDateStr = startDate.toISOString().split("T")[0];
  const endDateStr = endDate.toISOString().split("T")[0];

  const apiUrl = URLS.GA4.TRAFFIC(propertyName);

  const requestBody = {
    dateRanges: [
      {
        startDate: startDateStr,
        endDate: endDateStr,
      },
    ],
    dimensions: [
      {
        name: "pagePath",
      },
    ],
    metrics: [
      {
        name: "screenPageViews",
      },
    ],
  };

  const trafficResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!trafficResponse.ok) {
    const errorText = await trafficResponse.text();

    console.error(
      `Failed to fetch traffic data for property ${propertyName}:`,
      trafficResponse.status,
      trafficResponse.statusText,
      errorText
    );

    throw new Error(
      `Failed to fetch traffic data for property ${propertyName}: ${trafficResponse.statusText}`
    );
  }

  const trafficData = await trafficResponse.json();

  return trafficData;
};

export const useGetGA4TrafficData = (propertyName: string) => {
  const session = useSession();

  return useQuery({
    queryKey: GA4_KEYS.TRAFFIC(propertyName),
    queryFn: () =>
      getGA4TrafficData({
        propertyName,
        accessToken: session.data?.accessToken ?? "",
      }),
    enabled: !!propertyName,
  });
};

// THIS IS PURELY FOR TESTING LOCALLY
export const useMockGA4TrafficData = (
  scenario: "vertical" | "horizontal" | "mixed"
) => {
  return useQuery({
    queryKey: ["mock-traffic", scenario],
    queryFn: () => Promise.resolve(generateMockData(scenario)),
    enabled: true,
  });
};
