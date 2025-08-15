import { URLS } from "@/lib/urls";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { GA4_KEYS } from "./ga4-keys";

export type GoogleAccount = {
  name: string;
  createTime: string;
  updateTime: string;
  displayName: string;
  regionCode: string;
};

export const getGA4Accounts = async (
  accessToken: string
): Promise<GoogleAccount[] | null> => {
  const apiUrl = URLS.GA4.ACCOUNTS();

  const accountsResponse = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!accountsResponse.ok) {
    const errorText = await accountsResponse.text();

    console.error(
      "Accounts response:",
      accountsResponse.status,
      accountsResponse.statusText,
      errorText
    );

    throw new Error(`Failed to fetch accounts: ${accountsResponse.statusText}`);
  }

  const accountsData = await accountsResponse.json();

  if (!accountsData.accounts || accountsData.accounts.length === 0) {
    return [];
  }

  return accountsData.accounts;
};

export const useGetGA4Accounts = () => {
  const session = useSession();

  return useQuery({
    queryKey: GA4_KEYS.ACCOUNTS(session.data?.user?.id ?? ""),
    queryFn: () => getGA4Accounts(session.data?.accessToken ?? ""),
  });
};
