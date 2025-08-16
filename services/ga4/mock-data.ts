import { TrafficData } from "./get-ga4-traffic-data.service";

// THIS IS PURELY FOR TESTING LOCALLY

export const generateMockData = (
  scenario: "vertical" | "horizontal" | "mixed"
): TrafficData => {
  const baseData: TrafficData = {
    dimensionHeaders: [{ name: "pagePath" }],
    metricHeaders: [{ name: "screenPageViews", type: "TYPE_INTEGER" }],
    rows: [],
    rowCount: 0,
    metadata: { currencyCode: "USD", timeZone: "America/New_York" },
    kind: "analyticsData#runReport",
  };

  switch (scenario) {
    case "vertical":
      baseData.rows = [
        {
          dimensionValues: [{ value: "/" }],
          metricValues: [{ value: "10000" }],
        },
        {
          dimensionValues: [{ value: "/products" }],
          metricValues: [{ value: "5000" }],
        },
        {
          dimensionValues: [{ value: "/products/electronics" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/products/electronics/computers" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/computers/laptops" },
          ],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/computers/laptops/gaming" },
          ],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [
            {
              value: "/products/electronics/computers/laptops/gaming/high-end",
            },
          ],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [
            {
              value:
                "/products/electronics/computers/laptops/gaming/entry-level",
            },
          ],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/computers/laptops/business" },
          ],
          metricValues: [{ value: "700" }],
        },
        {
          dimensionValues: [
            {
              value:
                "/products/electronics/computers/laptops/business/ultrabook",
            },
          ],
          metricValues: [{ value: "350" }],
        },
        {
          dimensionValues: [
            {
              value:
                "/products/electronics/computers/laptops/business/workstation",
            },
          ],
          metricValues: [{ value: "350" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/computers/desktops" },
          ],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/computers/desktops/gaming" },
          ],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [
            {
              value: "/products/electronics/computers/desktops/gaming/high-end",
            },
          ],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [
            {
              value:
                "/products/electronics/computers/desktops/gaming/entry-level",
            },
          ],
          metricValues: [{ value: "150" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/computers/desktops/workstation" },
          ],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [
            {
              value:
                "/products/electronics/computers/desktops/workstation/graphics",
            },
          ],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [
            {
              value:
                "/products/electronics/computers/desktops/workstation/engineering",
            },
          ],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/products/electronics/phones" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/smartphones" },
          ],
          metricValues: [{ value: "1800" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/smartphones/iphone" },
          ],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/smartphones/iphone/14" },
          ],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/smartphones/iphone/13" },
          ],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/smartphones/android" },
          ],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [
            {
              value: "/products/electronics/phones/smartphones/android/samsung",
            },
          ],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [
            {
              value: "/products/electronics/phones/smartphones/android/google",
            },
          ],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/feature-phones" },
          ],
          metricValues: [{ value: "700" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/feature-phones/nokia" },
          ],
          metricValues: [{ value: "350" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/feature-phones/other" },
          ],
          metricValues: [{ value: "350" }],
        },
        {
          dimensionValues: [{ value: "/products/electronics/tablets" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/products/electronics/tablets/ipad" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/tablets/ipad/pro" },
          ],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/tablets/ipad/air" },
          ],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/products/electronics/tablets/android" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/tablets/android/samsung" },
          ],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/tablets/android/lenovo" },
          ],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/products/electronics/accessories" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/accessories/cables" },
          ],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/accessories/cables/usb-c" },
          ],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/accessories/cables/lightning" },
          ],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/accessories/chargers" },
          ],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/accessories/chargers/wireless" },
          ],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/accessories/chargers/fast" },
          ],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens/shirts" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens/shirts/casual" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens/shirts/formal" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens/pants" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens/pants/jeans" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens/pants/chinos" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/womens" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/womens/dresses" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [
            { value: "/products/clothing/womens/dresses/casual" },
          ],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [
            { value: "/products/clothing/womens/dresses/formal" },
          ],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/womens/tops" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [
            { value: "/products/clothing/womens/tops/blouses" },
          ],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [
            { value: "/products/clothing/womens/tops/t-shirts" },
          ],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/cart" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/cart/items" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/cart/save-for-later" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/checkout" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/checkout/shipping" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/checkout/payment" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/checkout/confirmation" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/payment" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/payment/credit-card" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/payment/paypal" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/payment/apple-pay" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/shipping" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/shipping/standard" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/shipping/express" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/shipping/overnight" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/account" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [{ value: "/account/profile" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/account/orders" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/account/orders/current" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/account/orders/history" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/account/orders/tracking" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/account/returns" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/account/returns/request" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/account/returns/status" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/account/wishlist" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/account/wishlist/public" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/account/wishlist/private" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/account/addresses" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/account/addresses/billing" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/account/addresses/shipping" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/account/payment-methods" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/account/payment-methods/credit-cards" }],
          metricValues: [{ value: "250" }],
        },
        {
          dimensionValues: [{ value: "/account/payment-methods/saved" }],
          metricValues: [{ value: "250" }],
        },
        {
          dimensionValues: [{ value: "/account/subscriptions" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/account/subscriptions/premium" }],
          metricValues: [{ value: "150" }],
        },
        {
          dimensionValues: [{ value: "/account/subscriptions/basic" }],
          metricValues: [{ value: "150" }],
        },
        {
          dimensionValues: [{ value: "/account/billing" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/account/billing/invoices" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/account/billing/statements" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/account/preferences" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/account/preferences/notifications" }],
          metricValues: [{ value: "250" }],
        },
        {
          dimensionValues: [{ value: "/account/preferences/privacy" }],
          metricValues: [{ value: "250" }],
        },
        {
          dimensionValues: [{ value: "/help" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/help/faq" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/help/faq/account" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/help/faq/orders" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/help/tutorials" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/help/tutorials/getting-started" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/help/tutorials/advanced" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/help/documentation" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/help/documentation/api" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/help/documentation/user-guide" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/help/contact" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/help/contact/email" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/help/contact/chat" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/deals" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/deals/today" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/deals/clearance" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/deals/flash-sale" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/deals/seasonal" }],
          metricValues: [{ value: "700" }],
        },
        {
          dimensionValues: [{ value: "/promotions" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/promotions/coupons" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/promotions/referral" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/promotions/loyalty" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/newsletter" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/newsletter/signup" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/newsletter/preferences" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/newsletter/archive" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/community" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/community/forums" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/community/forums/general" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/community/forums/support" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/community/reviews" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/community/reviews/products" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/community/reviews/services" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/community/events" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/community/events/webinars" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/community/events/meetups" }],
          metricValues: [{ value: "200" }],
        },
        // Mobile app specific
        {
          dimensionValues: [{ value: "/mobile" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/mobile/app" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/mobile/app/ios" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/mobile/app/android" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/mobile/download" }],
          metricValues: [{ value: "400" }],
        },
        // Internationalization
        {
          dimensionValues: [{ value: "/en" }],
          metricValues: [{ value: "8000" }],
        },
        {
          dimensionValues: [{ value: "/en/products" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/es" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/es/products" }],
          metricValues: [{ value: "750" }],
        },
        {
          dimensionValues: [{ value: "/fr" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/fr/products" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/de" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/de/products" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/ja" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/ja/products" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/api" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/api/docs" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/api/docs/authentication" }],
          metricValues: [{ value: "150" }],
        },
        {
          dimensionValues: [{ value: "/api/docs/endpoints" }],
          metricValues: [{ value: "150" }],
        },
        {
          dimensionValues: [{ value: "/api/playground" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/api/status" }],
          metricValues: [{ value: "100" }],
        },
        {
          dimensionValues: [{ value: "/developers" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/developers/sdk" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/developers/examples" }],
          metricValues: [{ value: "200" }],
        },
        // Seasonal and promotional content
        {
          dimensionValues: [{ value: "/holiday" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/holiday/black-friday" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/holiday/cyber-monday" }],
          metricValues: [{ value: "150" }],
        },
        {
          dimensionValues: [{ value: "/holiday/christmas" }],
          metricValues: [{ value: "150" }],
        },
        {
          dimensionValues: [{ value: "/seasonal" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/seasonal/summer" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/seasonal/winter" }],
          metricValues: [{ value: "200" }],
        },
        // Legal and compliance
        {
          dimensionValues: [{ value: "/legal" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/legal/privacy-policy" }],
          metricValues: [{ value: "150" }],
        },
        {
          dimensionValues: [{ value: "/legal/terms-of-service" }],
          metricValues: [{ value: "150" }],
        },
        {
          dimensionValues: [{ value: "/legal/cookie-policy" }],
          metricValues: [{ value: "100" }],
        },
        {
          dimensionValues: [{ value: "/legal/accessibility" }],
          metricValues: [{ value: "50" }],
        },
        // Search and discovery
        {
          dimensionValues: [{ value: "/search" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [{ value: "/search/products" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/search/content" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/search/advanced" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/browse" }],
          metricValues: [{ value: "1800" }],
        },
        {
          dimensionValues: [{ value: "/browse/categories" }],
          metricValues: [{ value: "900" }],
        },
        {
          dimensionValues: [{ value: "/browse/brands" }],
          metricValues: [{ value: "900" }],
        },
        {
          dimensionValues: [{ value: "/404" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/500" }],
          metricValues: [{ value: "100" }],
        },
        {
          dimensionValues: [{ value: "/maintenance" }],
          metricValues: [{ value: "50" }],
        },
        {
          dimensionValues: [{ value: "/sitemap" }],
          metricValues: [{ value: "150" }],
        },
        {
          dimensionValues: [{ value: "/robots.txt" }],
          metricValues: [{ value: "50" }],
        },
      ];
      break;

    case "horizontal":
      baseData.rows = [
        {
          dimensionValues: [{ value: "/" }],
          metricValues: [{ value: "15000" }],
        },
        {
          dimensionValues: [{ value: "/home" }],
          metricValues: [{ value: "8000" }],
        },
        {
          dimensionValues: [{ value: "/home/featured" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/home/latest" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/about" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/about/team" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/about/history" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/contact" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [{ value: "/contact/email" }],
          metricValues: [{ value: "1250" }],
        },
        {
          dimensionValues: [{ value: "/contact/phone" }],
          metricValues: [{ value: "1250" }],
        },
        {
          dimensionValues: [{ value: "/services" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/services/consulting" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/services/design" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/products" }],
          metricValues: [{ value: "6000" }],
        },
        {
          dimensionValues: [{ value: "/products/electronics" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/blog" }],
          metricValues: [{ value: "5000" }],
        },
        {
          dimensionValues: [{ value: "/blog/tech" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [{ value: "/blog/lifestyle" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [{ value: "/news" }],
          metricValues: [{ value: "3500" }],
        },
        {
          dimensionValues: [{ value: "/news/company" }],
          metricValues: [{ value: "1750" }],
        },
        {
          dimensionValues: [{ value: "/news/industry" }],
          metricValues: [{ value: "1750" }],
        },
        {
          dimensionValues: [{ value: "/events" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/events/webinars" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/events/conferences" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/careers" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/careers/openings" }],
          metricValues: [{ value: "750" }],
        },
        {
          dimensionValues: [{ value: "/careers/internships" }],
          metricValues: [{ value: "750" }],
        },
        {
          dimensionValues: [{ value: "/support" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/support/faq" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/support/tickets" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/faq" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/faq/account" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/faq/orders" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/privacy" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/terms" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/sitemap" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/login" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/login/forgot-password" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/login/help" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/register" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/register/verify" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/register/help" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/dashboard" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/dashboard/analytics" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/dashboard/settings" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/profile" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [{ value: "/profile/edit" }],
          metricValues: [{ value: "1250" }],
        },
        {
          dimensionValues: [{ value: "/profile/security" }],
          metricValues: [{ value: "1250" }],
        },
        {
          dimensionValues: [{ value: "/settings" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/settings/privacy" }],
          metricValues: [{ value: "750" }],
        },
        {
          dimensionValues: [{ value: "/settings/notifications" }],
          metricValues: [{ value: "750" }],
        },
        {
          dimensionValues: [{ value: "/notifications" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/notifications/email" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/notifications/push" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/messages" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/messages/inbox" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/messages/sent" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/orders" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/orders/current" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/orders/history" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/wishlist" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/wishlist/public" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/wishlist/private" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/reviews" }],
          metricValues: [{ value: "1800" }],
        },
        {
          dimensionValues: [{ value: "/reviews/products" }],
          metricValues: [{ value: "900" }],
        },
        {
          dimensionValues: [{ value: "/reviews/services" }],
          metricValues: [{ value: "900" }],
        },
        {
          dimensionValues: [{ value: "/compare" }],
          metricValues: [{ value: "900" }],
        },
        {
          dimensionValues: [{ value: "/compare/products" }],
          metricValues: [{ value: "450" }],
        },
        {
          dimensionValues: [{ value: "/compare/services" }],
          metricValues: [{ value: "450" }],
        },
        {
          dimensionValues: [{ value: "/search" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/search/products" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/search/blog" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/categories" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [{ value: "/categories/electronics" }],
          metricValues: [{ value: "1250" }],
        },
        {
          dimensionValues: [{ value: "/categories/clothing" }],
          metricValues: [{ value: "1250" }],
        },
        {
          dimensionValues: [{ value: "/brands" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/brands/apple" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/brands/samsung" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/deals" }],
          metricValues: [{ value: "3500" }],
        },
        {
          dimensionValues: [{ value: "/deals/today" }],
          metricValues: [{ value: "1750" }],
        },
        {
          dimensionValues: [{ value: "/deals/clearance" }],
          metricValues: [{ value: "1750" }],
        },
        {
          dimensionValues: [{ value: "/clearance" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/clearance/electronics" }],
          metricValues: [{ value: "750" }],
        },
        {
          dimensionValues: [{ value: "/clearance/clothing" }],
          metricValues: [{ value: "750" }],
        },
        // E-commerce enhanced endpoints
        {
          dimensionValues: [{ value: "/cart" }],
          metricValues: [{ value: "3500" }],
        },
        {
          dimensionValues: [{ value: "/cart/items" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/cart/save-for-later" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/checkout" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [{ value: "/checkout/shipping" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/checkout/payment" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/checkout/confirmation" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/payment" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/payment/credit-card" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/payment/paypal" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/payment/apple-pay" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/payment/google-pay" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/shipping" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/shipping/standard" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/shipping/express" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/shipping/overnight" }],
          metricValues: [{ value: "200" }],
        },
        // Enhanced user account management
        {
          dimensionValues: [{ value: "/account" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/account/profile" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/account/orders" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/account/orders/current" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/account/orders/history" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/account/orders/tracking" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/account/returns" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/account/returns/request" }],
          metricValues: [{ value: "250" }],
        },
        {
          dimensionValues: [{ value: "/account/returns/status" }],
          metricValues: [{ value: "250" }],
        },
        {
          dimensionValues: [{ value: "/account/wishlist" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/account/wishlist/public" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/account/wishlist/private" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/account/addresses" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/account/addresses/billing" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/account/addresses/shipping" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/account/payment-methods" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/account/payment-methods/credit-cards" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/account/payment-methods/saved" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/account/subscriptions" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/account/subscriptions/premium" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/account/subscriptions/basic" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/account/billing" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/account/billing/invoices" }],
          metricValues: [{ value: "250" }],
        },
        {
          dimensionValues: [{ value: "/account/billing/statements" }],
          metricValues: [{ value: "250" }],
        },
        {
          dimensionValues: [{ value: "/account/preferences" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/account/preferences/notifications" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/account/preferences/privacy" }],
          metricValues: [{ value: "300" }],
        },
      ];
      break;

    case "mixed":
      baseData.rows = [
        {
          dimensionValues: [{ value: "/" }],
          metricValues: [{ value: "20000" }],
        },
        {
          dimensionValues: [{ value: "/home" }],
          metricValues: [{ value: "8000" }],
        },
        {
          dimensionValues: [{ value: "/home/featured" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/home/latest" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/about" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/about/team" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/about/history" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/contact" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [{ value: "/contact/email" }],
          metricValues: [{ value: "1250" }],
        },
        {
          dimensionValues: [{ value: "/contact/phone" }],
          metricValues: [{ value: "1250" }],
        },
        {
          dimensionValues: [{ value: "/services" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/services/consulting" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/services/consulting/strategy" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/services/consulting/implementation" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/services/design" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/services/design/ui" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/services/design/ui/web" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/services/design/ui/mobile" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/services/design/ux" }],
          metricValues: [{ value: "700" }],
        },
        {
          dimensionValues: [{ value: "/services/development" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [{ value: "/services/development/web" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/services/development/web/frontend" }],
          metricValues: [{ value: "750" }],
        },
        {
          dimensionValues: [{ value: "/services/development/web/backend" }],
          metricValues: [{ value: "750" }],
        },
        {
          dimensionValues: [{ value: "/services/development/mobile" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/blog" }],
          metricValues: [{ value: "5000" }],
        },
        {
          dimensionValues: [{ value: "/blog/tech" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [{ value: "/blog/tech/programming" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/blog/tech/programming/javascript" }],
          metricValues: [{ value: "750" }],
        },
        {
          dimensionValues: [{ value: "/blog/tech/programming/python" }],
          metricValues: [{ value: "750" }],
        },
        {
          dimensionValues: [{ value: "/blog/tech/ai" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/blog/business" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/blog/business/strategy" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/blog/business/marketing" }],
          metricValues: [{ value: "700" }],
        },
        {
          dimensionValues: [{ value: "/shop" }],
          metricValues: [{ value: "6000" }],
        },
        {
          dimensionValues: [{ value: "/products" }],
          metricValues: [{ value: "8000" }],
        },
        {
          dimensionValues: [{ value: "/products/electronics" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/products/electronics/computers" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/computers/laptops" },
          ],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/computers/laptops/gaming" },
          ],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [
            {
              value: "/products/electronics/computers/laptops/gaming/high-end",
            },
          ],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [
            {
              value:
                "/products/electronics/computers/laptops/gaming/entry-level",
            },
          ],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/computers/laptops/business" },
          ],
          metricValues: [{ value: "700" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/computers/desktops" },
          ],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/computers/desktops/gaming" },
          ],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/computers/desktops/workstation" },
          ],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/products/electronics/phones" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/smartphones" },
          ],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/smartphones/iphone" },
          ],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/smartphones/iphone/14" },
          ],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/smartphones/iphone/13" },
          ],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/smartphones/android" },
          ],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [
            { value: "/products/electronics/phones/feature-phones" },
          ],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens/shirts" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens/shirts/casual" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens/shirts/formal" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens/pants" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens/pants/jeans" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/mens/pants/chinos" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/womens" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/womens/dresses" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [
            { value: "/products/clothing/womens/dresses/casual" },
          ],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [
            { value: "/products/clothing/womens/dresses/formal" },
          ],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/products/clothing/womens/tops" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [
            { value: "/products/clothing/womens/tops/blouses" },
          ],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [
            { value: "/products/clothing/womens/tops/t-shirts" },
          ],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/support" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/support/faq" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/support/tickets" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/support/tickets/technical" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/support/tickets/billing" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/account" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/account/profile" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/account/settings" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/account/settings/privacy" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/account/settings/notifications" }],
          metricValues: [{ value: "700" }],
        },
        // Enhanced e-commerce endpoints
        {
          dimensionValues: [{ value: "/cart" }],
          metricValues: [{ value: "4000" }],
        },
        {
          dimensionValues: [{ value: "/cart/items" }],
          metricValues: [{ value: "2500" }],
        },
        {
          dimensionValues: [{ value: "/cart/save-for-later" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/checkout" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/checkout/shipping" }],
          metricValues: [{ value: "1800" }],
        },
        {
          dimensionValues: [{ value: "/checkout/payment" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/checkout/confirmation" }],
          metricValues: [{ value: "1200" }],
        },
        // Enhanced content and learning
        {
          dimensionValues: [{ value: "/learn" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/learn/courses" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/learn/courses/beginner" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/learn/courses/advanced" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/learn/webinars" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/learn/certifications" }],
          metricValues: [{ value: "200" }],
        },
        // Enhanced community features
        {
          dimensionValues: [{ value: "/community" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/community/forums" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/community/forums/general" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/community/forums/support" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/community/reviews" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/community/reviews/products" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/community/reviews/services" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/community/events" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/community/events/webinars" }],
          metricValues: [{ value: "250" }],
        },
        {
          dimensionValues: [{ value: "/community/events/meetups" }],
          metricValues: [{ value: "250" }],
        },
        // Enhanced marketing tools
        {
          dimensionValues: [{ value: "/marketing" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/marketing/campaigns" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/marketing/email" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/marketing/social" }],
          metricValues: [{ value: "200" }],
        },
        // Enhanced analytics and reporting
        {
          dimensionValues: [{ value: "/analytics" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/analytics/dashboard" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/analytics/reports" }],
          metricValues: [{ value: "300" }],
        },
        // Enhanced mobile and app
        {
          dimensionValues: [{ value: "/mobile" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/mobile/app" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/mobile/app/ios" }],
          metricValues: [{ value: "250" }],
        },
        {
          dimensionValues: [{ value: "/mobile/app/android" }],
          metricValues: [{ value: "250" }],
        },
        {
          dimensionValues: [{ value: "/mobile/download" }],
          metricValues: [{ value: "500" }],
        },
        // Enhanced internationalization
        {
          dimensionValues: [{ value: "/en" }],
          metricValues: [{ value: "10000" }],
        },
        {
          dimensionValues: [{ value: "/en/products" }],
          metricValues: [{ value: "5000" }],
        },
        {
          dimensionValues: [{ value: "/es" }],
          metricValues: [{ value: "2000" }],
        },
        {
          dimensionValues: [{ value: "/es/products" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/fr" }],
          metricValues: [{ value: "1500" }],
        },
        {
          dimensionValues: [{ value: "/fr/products" }],
          metricValues: [{ value: "750" }],
        },
        {
          dimensionValues: [{ value: "/de" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/de/products" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/ja" }],
          metricValues: [{ value: "1000" }],
        },
        {
          dimensionValues: [{ value: "/ja/products" }],
          metricValues: [{ value: "500" }],
        },
        // Enhanced API and developer resources
        {
          dimensionValues: [{ value: "/api" }],
          metricValues: [{ value: "800" }],
        },
        {
          dimensionValues: [{ value: "/api/docs" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/api/docs/authentication" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/api/docs/endpoints" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/api/playground" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/api/status" }],
          metricValues: [{ value: "100" }],
        },
        {
          dimensionValues: [{ value: "/developers" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/developers/sdk" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/developers/examples" }],
          metricValues: [{ value: "300" }],
        },
        // Enhanced seasonal and promotional
        {
          dimensionValues: [{ value: "/holiday" }],
          metricValues: [{ value: "700" }],
        },
        {
          dimensionValues: [{ value: "/holiday/black-friday" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/holiday/cyber-monday" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/holiday/christmas" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/seasonal" }],
          metricValues: [{ value: "500" }],
        },
        {
          dimensionValues: [{ value: "/seasonal/summer" }],
          metricValues: [{ value: "250" }],
        },
        {
          dimensionValues: [{ value: "/seasonal/winter" }],
          metricValues: [{ value: "250" }],
        },
        // Enhanced legal and compliance
        {
          dimensionValues: [{ value: "/legal" }],
          metricValues: [{ value: "400" }],
        },
        {
          dimensionValues: [{ value: "/legal/privacy-policy" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/legal/terms-of-service" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/legal/cookie-policy" }],
          metricValues: [{ value: "150" }],
        },
        {
          dimensionValues: [{ value: "/legal/accessibility" }],
          metricValues: [{ value: "100" }],
        },
        // Enhanced search and discovery
        {
          dimensionValues: [{ value: "/search" }],
          metricValues: [{ value: "3000" }],
        },
        {
          dimensionValues: [{ value: "/search/products" }],
          metricValues: [{ value: "1800" }],
        },
        {
          dimensionValues: [{ value: "/search/content" }],
          metricValues: [{ value: "1200" }],
        },
        {
          dimensionValues: [{ value: "/search/advanced" }],
          metricValues: [{ value: "600" }],
        },
        {
          dimensionValues: [{ value: "/browse" }],
          metricValues: [{ value: "2200" }],
        },
        {
          dimensionValues: [{ value: "/browse/categories" }],
          metricValues: [{ value: "1100" }],
        },
        {
          dimensionValues: [{ value: "/browse/brands" }],
          metricValues: [{ value: "1100" }],
        },
        // Enhanced error and utility pages
        {
          dimensionValues: [{ value: "/404" }],
          metricValues: [{ value: "300" }],
        },
        {
          dimensionValues: [{ value: "/500" }],
          metricValues: [{ value: "150" }],
        },
        {
          dimensionValues: [{ value: "/maintenance" }],
          metricValues: [{ value: "100" }],
        },
        {
          dimensionValues: [{ value: "/sitemap" }],
          metricValues: [{ value: "200" }],
        },
        {
          dimensionValues: [{ value: "/robots.txt" }],
          metricValues: [{ value: "100" }],
        },
      ];
      break;
  }

  baseData.rowCount = baseData.rows.length;
  return baseData;
};
