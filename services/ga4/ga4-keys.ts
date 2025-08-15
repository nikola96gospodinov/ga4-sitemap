export const GA4_KEYS = {
  _base: "ga4",
  ACCOUNTS: (userId: string) => [GA4_KEYS._base, "accounts", userId],
  PROPERTIES: () => [GA4_KEYS._base, "properties"],
  TRAFFIC: () => [GA4_KEYS._base, "traffic"],
};
