import { URLS } from "@/lib/urls";
import { GA4_KEYS } from "./ga4-keys";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

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
}: getGA4Props): Promise<GA4Property[]> => {
  const apiUrl = URLS.GA4.PROPERTIES(accountName);

  const propertiesResponse = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!propertiesResponse.ok) {
    const errorText = await propertiesResponse.text();

    console.error(
      `Failed to fetch properties for account ${accountName}:`,
      propertiesResponse.status,
      propertiesResponse.statusText,
      errorText
    );

    throw new Error(
      `Failed to fetch properties for account ${accountName}: ${propertiesResponse.statusText}`
    );
  }

  const propertiesData = await propertiesResponse.json();

  if (!propertiesData.properties || propertiesData.properties.length === 0) {
    return [];
  }

  return propertiesData.properties;
};

export const useGetGA4Properties = (accountName: string) => {
  const session = useSession();

  return useQuery({
    queryKey: GA4_KEYS.PROPERTIES(accountName),
    queryFn: () =>
      getGA4Properties({
        accountName,
        accessToken: session.data?.accessToken ?? "",
      }),
  });
};
