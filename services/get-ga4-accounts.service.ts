import { URLS } from "@/lib/urls";

type GoogleAccount = {
  name: string;
  createTime: string;
  updateTime: string;
  displayName: string;
  regionCode: string;
};

export const getG4Accounts = async (
  accessToken: string
): Promise<GoogleAccount[] | null> => {
  try {
    const url = URLS.GA4.ACCOUNTS();

    const accountsResponse = await fetch(url, {
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

      throw new Error(
        `Failed to fetch accounts: ${accountsResponse.statusText}`
      );
    }

    const accountsData = await accountsResponse.json();

    if (!accountsData.accounts || accountsData.accounts.length === 0) {
      return [];
    }

    return accountsData.accounts;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    return null;
  }
};
