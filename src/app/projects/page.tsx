


import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Architecture & Interior Design Projects | DESCORP",
  description:
    "Discover luxury residential and commercial architecture projects designed by DESCORP.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Page() {
  return <ProjectsClient />;
}
