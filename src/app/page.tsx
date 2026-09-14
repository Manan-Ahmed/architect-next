import { Hero } from '../components/Hero';
// import { Marquee } from '../components/Marquee';
import { FeaturedProjects } from '../components/Portfolio';
import { Stats, PhilosophyTeaser } from '../components/Stats';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { ContactSection } from '../components/ContactSection';
import { Testimonials } from '../components/Testimonials';

import Link from 'next/link';
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
      <Testimonials/>
      <section className="bg-primary-100 py-section">

        {/* <div className="container-content">
          <div className="border border-secondary/10 p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">International Practice</p>
            <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-heading text-secondary">Design beyond borders.</h2>
                <p className="mt-4 text-base leading-relaxed text-secondary/60 md:text-lg">Explore our dedicated service information for clients and project teams in the USA and UAE.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/usa" className="btn-secondary">USA <span>→</span></Link>
                <Link href="/uae" className="btn-secondary">UAE <span>→</span></Link>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* <PortfolioGrid /> */}
      <ContactSection />
    </>
  );
}
