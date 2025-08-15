import { URLS } from "@/lib/urls";

type getGA4Props = {
  accountName: string;
  accessToken: string;
};

type GA4Property = {
  name: string;
  parent: string;
  createTime: string;
  updateTime: string;
  displayName: string;
  timeZone: string;
  currencyCode: string;
  serviceLevel: string;
  account: string;
  propertyType: string;
};

export const getGA4Properties = async ({
  accountName,
  accessToken,
}: getGA4Props): Promise<GA4Property[] | null> => {
  try {
    const apiUrl = URLS.GA4.PROPERTIES(accountName);

    const propertiesResponse = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (propertiesResponse.ok) {
      const propertiesData = await propertiesResponse.json();
      return propertiesData.properties ?? [];
    } else {
      const errorText = await propertiesResponse.text();

      console.error(
        `Failed to fetch properties for account ${accountName}:`,
        propertiesResponse.status,
        propertiesResponse.statusText,
        errorText
      );

      return null;
    }
  } catch (error) {
    console.error(
      `Error fetching properties for account ${accountName}:`,
      error
    );

    return null;
  }
};
