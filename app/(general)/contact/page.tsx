import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "SEO Contact Description",
  keywords: ["Contact Page", "SEO Keywords"],
};
export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
