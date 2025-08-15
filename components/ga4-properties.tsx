import { auth } from "@/auth";
import { getGA4Properties } from "@/services/get-ga4-properties.service";
import { getG4Accounts } from "@/services/get-ga4-accounts.service";
import { getGA4TrafficData } from "@/services/get-ga4-traffic-data.service";

export default async function GA4Properties() {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  const accessToken = session.accessToken;

  if (!accessToken) {
    return (
      <div className="p-4 border rounded-lg bg-yellow-50">
        <p className="text-yellow-800">
          No access token available. Please re-authenticate with Google
          Analytics permissions.
        </p>
      </div>
    );
  }

  const accounts = await getG4Accounts(accessToken);

  if (!accounts || accounts.length === 0) {
    return (
      <div className="p-4 border rounded-lg bg-red-50">
        <p className="text-red-800">No Google Analytics accounts found.</p>
      </div>
    );
  }

  // Use the first account instead of hardcoding accounts[1]
  const selectedAccount = accounts[1];
  const properties = await getGA4Properties({
    accountName: selectedAccount.name,
    accessToken,
  });

  // Get traffic data for the first property if available
  let trafficData = null;
  if (properties && properties.length > 0) {
    trafficData = await getGA4TrafficData({
      propertyName: properties[2].name,
      accessToken,
      days: 30,
    });
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Google Analytics 4 Properties</h2>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Selected Account:</h3>
        <pre className="p-2 rounded text-sm">
          {JSON.stringify(selectedAccount, null, 2)}
        </pre>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">All Accounts:</h3>
        <pre className="p-2 rounded text-sm">
          {JSON.stringify(accounts, null, 2)}
        </pre>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Properties:</h3>
        {properties ? (
          <pre className="p-2 rounded text-sm">
            {JSON.stringify(properties, null, 2)}
          </pre>
        ) : (
          <p className="text-red-600">Failed to fetch properties</p>
        )}
      </div>

      {trafficData && (
        <div className="space-y-2">
          <h3 className="text-lg font-medium">
            Traffic Data - Last 30 Days (First Property):
          </h3>
          <div className="space-y-2">
            {trafficData.map((record, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 border rounded"
              >
                <span className="font-mono text-sm">{record.url_path}</span>
                <span className="font-semibold">
                  {record.page_views.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
