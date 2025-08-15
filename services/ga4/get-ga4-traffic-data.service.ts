import { URLS } from "@/lib/urls";

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
}: GetGA4TrafficDataProps): Promise<TrafficData | null> => {
  try {
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
      limit: 1000, // TODO: Check for higher limits
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
      throw new Error(
        `Failed to fetch traffic data for property ${propertyName}: ${trafficResponse.statusText}`
      );
    }

    const trafficData = await trafficResponse.json();

    return trafficData;
  } catch (error) {
    console.error(
      `Error fetching traffic data for property ${propertyName}:`,
      error
    );

    return null;
  }
};
