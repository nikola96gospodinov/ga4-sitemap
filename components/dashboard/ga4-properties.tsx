import { auth } from "@/auth";
import { getGA4Properties } from "@/services/get-ga4-properties.service";
import { getG4Accounts } from "@/services/get-ga4-accounts.service";
import { getGA4TrafficData } from "@/services/get-ga4-traffic-data.service";
import {
  mapSitemapHierarchy,
  SitemapNode as SitemapNodeType,
} from "@/lib/sitemap-mapper";

const SitemapNode = ({
  node,
  depth = 0,
}: {
  node: SitemapNodeType;
  depth?: number;
}) => {
  const indentAmount = depth * 16;

  return (
    <div className="space-y-1">
      <div
        className="flex justify-between items-center p-2 border rounded"
        style={{ paddingLeft: `${indentAmount}px` }}
      >
        <span className="font-mono text-sm">{node.path}</span>
        <span className="font-semibold">
          {node.page_views.toLocaleString()}
        </span>
      </div>
      {node.children.length > 0 && (
        <div className="space-y-1">
          {node.children.map((child, index) => (
            <SitemapNode key={index} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

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

  const selectedAccount = accounts[1];
  const properties = await getGA4Properties({
    accountName: selectedAccount.name,
    accessToken,
  });

  let trafficData = null;
  if (properties && properties.length > 0) {
    trafficData = await getGA4TrafficData({
      propertyName: properties[2].name,
      accessToken,
      days: 30,
    });
  }

  const sitemap = trafficData ? mapSitemapHierarchy(trafficData) : null;

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

      {sitemap && (
        <div className="space-y-2">
          <h3 className="text-lg font-medium">
            Traffic Data - Last 30 Days (First Property):
          </h3>
          <div className="space-y-2">
            {sitemap.map((record, index) => (
              <SitemapNode key={index} node={record} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
