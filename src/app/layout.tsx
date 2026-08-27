import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import {
  Inter,
  Montserrat,
  JetBrains_Mono,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thedescorp.com"),

  title: {
    default: "DESCORP | Luxury Architecture & Interior Design Studio",
    template: "%s | DESCORP",
  },
  description:
    "DESCORP is a luxury architecture and interior design studio delivering bespoke residential, commercial, and hospitality projects with timeless design and exceptional craftsmanship.",

  keywords: [
    "Architecture",
    "Architecture Studio",
    "Interior Design",
    "Luxury Architecture",
    "Luxury Interior Design",
    "Modern Villa Design",
    "Residential Architecture",
    "Commercial Architecture",
    "Architects",
    "Pakistan Architecture",
    "Luxury Homes",
    "Modern Homes",
    "DESCORP",
  ],

  authors: [
    {
      name: "DESCORP",
      url: "https://thedescorp.com",
    },
  ],
  creator: "DESCORP",

  publisher: "DESCORP",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://thedescorp.com",
    title: "DESCORP | Luxury Architecture & Interior Design Studio",
    description:
      "Luxury architecture and interior design studio creating iconic residential and commercial spaces.",
    siteName: "DESCORP",

    images: [
      {
        url: "/DESCORP LOGO PNG.png",
        width: 1200,
        height: 630,
        alt: "DESCORP",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DESCORP | Luxury Architecture & Interior Design Studio",
    description:
      "Luxury architecture and interior design studio creating iconic residential and commercial spaces.",
    images: ["/DESCORP LOGO PNG.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DESCORP",
  url: "https://thedescorp.com",
  logo: "https://thedescorp.com/icon.png",
  description:
    "Luxury Architecture & Interior Design Studio.",
  sameAs: [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.linkedin.com/company/",
    "https://www.youtube.com/"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DESCORP",
  url: "https://thedescorp.com",
  description:
    "Luxury Architecture & Interior Design Studio.",
  inLanguage: "en",
};

const architectSchema = {
  "@context": "https://schema.org",
  "@type": "Architect",
  name: "DESCORP",
  url: "https://thedescorp.com",
  logo: "https://thedescorp.com/logo.png",
  image: "https://thedescorp.com/og-image.jpg",
  description:
    "DESCORP is a luxury architecture and interior design studio specializing in residential, commercial, and hospitality projects.",
  areaServed: "Worldwide",
  email: "info@thedescorp.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/modern-banglo/banglo1.webp"
          type="image/webp"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(architectSchema),
          }}
        />
        
        <ScrollToTop />

        <div className="min-h-screen bg-primary text-secondary">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
