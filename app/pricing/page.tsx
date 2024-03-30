import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "SEO Pricing Description",
  keywords: ["Pricing Page", "SEO Keywords"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
