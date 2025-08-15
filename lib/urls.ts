export const URLS = {
  GA4: {
    _adminBase: "https://analyticsadmin.googleapis.com/v1beta",
    _dataBase: "https://analyticsdata.googleapis.com/v1beta",

    ACCOUNTS: () => `${URLS.GA4._adminBase}/accounts`,

    PROPERTIES: (accountName: string) =>
      `${URLS.GA4._adminBase}/properties?filter=parent:${accountName}`,

    TRAFFIC: (propertyName: string) =>
      `${URLS.GA4._dataBase}/${propertyName}:runReport`,
  },
};
