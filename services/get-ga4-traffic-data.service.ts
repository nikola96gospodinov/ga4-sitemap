type GA4TrafficRecord = {
  url_path: string;
  page_views: number;
};

type TrafficData = {
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
}: GetGA4TrafficDataProps): Promise<GA4TrafficRecord[] | null> => {
  try {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const startDateStr = startDate.toISOString().split("T")[0];
    const endDateStr = endDate.toISOString().split("T")[0];

    const apiUrl = `https://analyticsdata.googleapis.com/v1beta/${propertyName}:runReport`;

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

    if (trafficResponse.ok) {
      const trafficData = (await trafficResponse.json()) as TrafficData;

      // TODO: Check if there is a better way to format the data and extract more from it
      if (trafficData.rows) {
        const records: GA4TrafficRecord[] = trafficData.rows.map((row) => ({
          url_path: row.dimensionValues[0].value || "/",
          page_views: parseInt(row.metricValues[0].value) || 0,
        }));

        records.sort((a, b) => b.page_views - a.page_views);

        return records;
      } else {
        console.warn("No traffic data rows found in response");
        return [];
      }
    } else {
      const errorText = await trafficResponse.text();
      console.warn(
        `Failed to fetch traffic data for property ${propertyName}:`,
        trafficResponse.status,
        trafficResponse.statusText,
        errorText
      );
      return null;
    }
  } catch (error) {
    console.warn(
      `Error fetching traffic data for property ${propertyName}:`,
      error
    );
    return null;
  }
};
