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
    const apiUrl = `https://analyticsadmin.googleapis.com/v1beta/properties?filter=parent:${accountName}`;

    console.log("Fetching properties from:", apiUrl);

    const propertiesResponse = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (propertiesResponse.ok) {
      const propertiesData = await propertiesResponse.json();
      return propertiesData.properties || [];
    } else {
      const errorText = await propertiesResponse.text();
      console.warn(
        `Failed to fetch properties for account ${accountName}:`,
        propertiesResponse.status,
        propertiesResponse.statusText,
        errorText
      );
      return null;
    }
  } catch (error) {
    console.warn(
      `Error fetching properties for account ${accountName}:`,
      error
    );
    return null;
  }
};
