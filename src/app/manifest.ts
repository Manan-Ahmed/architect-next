import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DESCORP",
    short_name: "DESCORP",
    description:
      "Luxury Architecture & Interior Design Studio",

    start_url: "/",

    display: "standalone",

    // background_color: "#0B0B0C",

    theme_color: "#0B0B0C",

    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}