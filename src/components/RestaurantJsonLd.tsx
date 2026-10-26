import { restaurantJsonLd } from "@/lib/seo";

export function RestaurantJsonLd() {
  const json = JSON.stringify(restaurantJsonLd()).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
