import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "SEO About Description",
  keywords: ["About Page", "SEO Keywords"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
