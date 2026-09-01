import { Hero } from '../components/Hero';
// import { Marquee } from '../components/Marquee';
import { FeaturedProjects } from '../components/Portfolio';
import { Stats, PhilosophyTeaser } from '../components/Stats';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { ContactSection } from '../components/ContactSection';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Architecture & Interior Design Studio",
  description:
    "DESCORP is a luxury architecture and interior design studio creating exceptional residential, commercial, and hospitality spaces worldwide.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Luxury Architecture & Interior Design Studio | DESCORP",
    description:
      "Luxury architecture and interior design studio creating exceptional spaces.",
    url: "https://thedescorp.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 600,
      },
    ],
  },
};
export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Marquee /> */}
      <FeaturedProjects />
      <Stats />
      <PhilosophyTeaser />
      <AboutSection />
      <ServicesSection />
      {/* <PortfolioGrid /> */}
      <ContactSection />
    </>
  );
}
