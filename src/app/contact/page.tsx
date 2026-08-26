import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | DESCORP",
  description:
    "Get in touch with DESCORP for architecture, interior design, and construction consultations in Karachi, Pakistan.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}