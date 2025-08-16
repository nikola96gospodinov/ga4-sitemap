export const GA4_KEYS = {
  _base: "ga4",
  ACCOUNTS: (userId: string) => [GA4_KEYS._base, "accounts", userId],
  PROPERTIES: (accountName: string) => [
    GA4_KEYS._base,
    "properties",
    accountName,
  ],
  TRAFFIC: (propertyName: string) => [GA4_KEYS._base, "traffic", propertyName],
};
