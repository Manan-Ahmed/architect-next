


import { Video, Box, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Layout";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Remote 3D Architectural Visualization Services in the USA | DESCORP",
  description:
    "Remote 3D architectural visualization services for clients across the USA. Photorealistic exterior rendering, interior visualization, architectural CGI, and walkthroughs delivered fully online.",
  alternates: {
    canonical: "/usa/remote-3d-visualization",
  },
  openGraph: {
    title:
      "Remote 3D Architectural Visualization Services in the USA | DESCORP",
    description:
      "Photorealistic 3D architectural visualization, exterior rendering, interior visualization, CGI, and walkthroughs for clients across the USA.",
    url: "https://thedescorp.com/usa/remote-3d-visualization",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is your 3D architectural visualization service fully remote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our 3D architectural visualization process is fully remote. You can send drawings, floor plans, elevations, reference images, or existing 3D models digitally, and all reviews, revisions, and final delivery are handled online without requiring an in-person meeting or site visit.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in your remote 3D architectural visualization services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our remote 3D visualization services can include photorealistic exterior rendering, interior 3D visualization, architectural CGI, walkthroughs, lighting studies, material visualization, furniture and landscaping visualization, and high-resolution digital delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need finished architectural plans before requesting a rendering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most visualization projects, we need suitable architectural information such as floor plans, elevations, dimensions, reference images, or an existing 3D model. If your design information is still being developed, we can review the available material remotely and advise you on what is needed for visualization.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a photorealistic 3D rendering take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The turnaround depends on the complexity of the project, number of views, level of detail, and revision requirements. A single rendering can typically be completed within several business days after the scene and project requirements are finalized. Larger rendering packages and walkthroughs require additional time.",
      },
    },
    {
      "@type": "Question",
      name: "Can you create both interior and exterior renderings for the same project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can create coordinated interior and exterior visualizations for the same project, helping clients, architects, designers, developers, and other project stakeholders understand the overall design before construction or renovation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide remote 3D architectural rendering services for commercial projects across the USA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide remote 3D architectural visualization for residential, commercial, hospitality, and multi-unit projects across the USA. Project requirements, references, reviews, revisions, and final visualization delivery can all be handled digitally.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "3D Architectural Visualization",
  name: "Remote 3D Architectural Visualization Services",
  url: "https://thedescorp.com/usa/remote-3d-visualization",
  provider: {
    "@type": "Organization",
    name: "DESCORP",
    url: "https://thedescorp.com",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceType: "Remote / Online",
    availableLanguage: "English",
  },
  description:
    "Remote 3D architectural visualization services including photorealistic exterior rendering, interior 3D visualization, architectural CGI, walkthroughs, and digital presentation imagery for clients across the USA.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Remote 3D Visualization Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Photorealistic 3D Exterior Rendering",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior 3D Visualization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Architectural CGI and Walkthroughs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Architectural Rendering Packages",
        },
      },
    ],
  },
};

export default function Visualization() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid-lines absolute inset-0 opacity-30" />

        <div className="container-content relative">
          <Reveal>
            <Link
              href="/usa"
              className="group inline-flex items-center gap-2 text-sm text-secondary/60 transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              USA Services
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>
              Remote 3D Architectural Visualization · USA
            </Eyebrow>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-6 font-display text-display-2 text-secondary-100">
              Remote 3D Architectural Visualization Services
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary/60 md:text-lg">
              Photorealistic 3D architectural visualization for clients across
              the USA. DESCORP creates exterior renderings, interior
              visualizations, architectural CGI, and walkthroughs remotely —
              helping architects, designers, developers, builders, and property
              professionals present their projects clearly before construction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-primary pb-section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Overview</Eyebrow>
              </Reveal>

              <Reveal delay={100}>
                <p className="mt-6 text-lg leading-relaxed text-secondary/80">
                  Our remote 3D architectural visualization services transform
                  architectural drawings, floor plans, elevations, and 3D
                  models into photorealistic images and walkthroughs. These
                  visuals help you present, review, market, and communicate a
                  project before construction or renovation begins.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-5 text-lg leading-relaxed text-secondary/80">
                  We create photorealistic 3D exterior renderings, interior 3D
                  visualizations, architectural CGI, and walkthroughs for
                  residential, commercial, hospitality, and multi-unit
                  projects. Whether you need a single hero image or a complete
                  architectural rendering package, our remote team can
                  collaborate with your architect, interior designer, developer,
                  or project team entirely online.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <h2 className="mt-14 font-display text-heading text-secondary">
                  What&apos;s Included in Our Remote 3D Visualization Services
                </h2>
              </Reveal>

              <Reveal delay={200}>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    <span>
                      Photorealistic 3D exterior rendering for architectural
                      presentations, marketing, and client approvals.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    <span>
                      Interior 3D visualization for residential, commercial,
                      and hospitality spaces.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    <span>
                      Architectural CGI images for presentations, proposals,
                      investor pitches, and project marketing.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    <span>
                      3D architectural rendering packages ranging from
                      individual images to complete visualization sets.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    <span>
                      Day and night exterior visualization to explore lighting,
                      atmosphere, and presentation options.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    <span>
                      Material, finish, landscaping, furniture, and lighting
                      visualization based on your design requirements.
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    <span>
                      Remote review, revision, and digital delivery of
                      high-resolution final renderings.
                    </span>
                  </li>
                </ul>
              </Reveal>
            </div>

            {/* Scope Note */}
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={100}>
                <div className="border border-secondary/10 bg-primary-100 p-7">
                  <div className="text-eyebrow uppercase text-secondary/50">
                    Scope Note
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-secondary/70">
                    This is a fully remote visualization and rendering service.
                    You can provide existing drawings, floor plans, elevations,
                    reference images, or 3D models digitally. We can coordinate
                    online with your architect, interior designer, developer,
                    builder, or project team wherever they are based.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="mt-6 flex flex-col gap-3">
                  <Button variant="primary" to="/contact">
                    Start a Remote Project
                  </Button>

                  <Button variant="secondary" to="/contact">
                    Book a Remote Consultation Call
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* How it works remotely */}
      <section className="bg-primary-100 py-section">
        <div className="container-content">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Our Remote Process</Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-heading text-secondary">
                How our remote 3D visualization process works.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 text-base leading-relaxed text-secondary/60 md:text-lg">
                A clear, disciplined workflow built for remote collaboration
                with clients across the USA. Drawings, feedback, revisions, and
                final delivery are all handled digitally.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 space-y-px bg-secondary/10">
            {/* Step 01 */}
            <Reveal>
              <div className="group flex flex-col gap-4 bg-primary p-7 transition-colors duration-500 hover:bg-primary-200 md:flex-row md:items-start md:gap-10 md:p-9">
                <div className="font-mono text-3xl font-bold text-secondary/20 transition-colors duration-500 group-hover:text-accent md:w-20 md:flex-shrink-0 md:text-4xl">
                  01
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-secondary">
                    Share Your Drawings Online
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    Send your existing floor plans, elevations, dimensions, 3D
                    models, and reference images digitally, along with your
                    preferred style and material direction.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Step 02 */}
            <Reveal delay={80}>
              <div className="group flex flex-col gap-4 bg-primary p-7 transition-colors duration-500 hover:bg-primary-200 md:flex-row md:items-start md:gap-10 md:p-9">
                <div className="font-mono text-3xl font-bold text-secondary/20 transition-colors duration-500 group-hover:text-accent md:w-20 md:flex-shrink-0 md:text-4xl">
                  02
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-secondary">
                    Remote Scene Setup
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    Our team develops the 3D scene, camera angles, materials,
                    lighting, landscaping, furniture, and surrounding context
                    required for your architectural visualization.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Step 03 */}
            <Reveal delay={160}>
              <div className="group flex flex-col gap-4 bg-primary p-7 transition-colors duration-500 hover:bg-primary-200 md:flex-row md:items-start md:gap-10 md:p-9">
                <div className="font-mono text-3xl font-bold text-secondary/20 transition-colors duration-500 group-hover:text-accent md:w-20 md:flex-shrink-0 md:text-4xl">
                  03
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-secondary">
                    Draft Review & Revision
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    You receive draft renderings for feedback on materials,
                    lighting, camera angles, composition, and overall
                    presentation. Revisions are coordinated through video calls,
                    email, or other agreed digital channels.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Step 04 */}
            <Reveal delay={240}>
              <div className="group flex flex-col gap-4 bg-primary p-7 transition-colors duration-500 hover:bg-primary-200 md:flex-row md:items-start md:gap-10 md:p-9">
                <div className="font-mono text-3xl font-bold text-secondary/20 transition-colors duration-500 group-hover:text-accent md:w-20 md:flex-shrink-0 md:text-4xl">
                  04
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-secondary">
                    Final Renderings & Walkthroughs
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    Final high-resolution images or architectural CGI
                    walkthroughs are delivered digitally, ready for client
                    presentations, design reviews, marketing, proposals, and
                    project communication.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Remote Visualization */}
      <section className="bg-primary py-section">
        <div className="container-content">
          <Reveal>
            <Eyebrow>Why Remote Visualization</Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-5 max-w-3xl font-display text-heading text-secondary">
              Clear visual communication without geographic limitations.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-px bg-secondary/10 md:grid-cols-2">
            <Reveal>
              <div className="bg-primary-100 p-7">
                <h3 className="font-display text-lg font-bold text-secondary">
                  Present Ideas Clearly
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                  Photorealistic renderings help clients, investors, developers,
                  and project teams understand a design before construction or
                  renovation begins.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="bg-primary-100 p-7">
                <h3 className="font-display text-lg font-bold text-secondary">
                  Support Design Decisions
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                  Visualize materials, finishes, lighting, furniture, and
                  spatial relationships before committing to the final design.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="bg-primary-100 p-7">
                <h3 className="font-display text-lg font-bold text-secondary">
                  Built for Remote Teams
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                  Work with DESCORP from anywhere in the USA through digital
                  file sharing, online reviews, remote revisions, and digital
                  delivery.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="bg-primary-100 p-7">
                <h3 className="font-display text-lg font-bold text-secondary">
                  Flexible Project Types
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                  Visualization can support residential, commercial,
                  hospitality, multi-unit, renovation, and development
                  projects.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-primary py-section">
        <div className="container-content">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-heading text-secondary">
              Common questions about our remote 3D visualization services.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-px bg-secondary/10">
            {/* FAQ 01 */}
            <Reveal>
              <div className="bg-primary p-7 md:p-8">
                <h3 className="font-display text-lg font-bold text-secondary">
                  Is your 3D architectural visualization service fully remote?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                  Yes. Our 3D architectural visualization process is fully
                  remote. You can send drawings, floor plans, elevations,
                  reference images, or existing 3D models digitally, and all
                  reviews, revisions, and final delivery are handled online.
                </p>
              </div>
            </Reveal>

            {/* FAQ 02 */}
            <Reveal delay={80}>
              <div className="bg-primary p-7 md:p-8">
                <h3 className="font-display text-lg font-bold text-secondary">
                  What is included in your remote 3D architectural
                  visualization services?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                  Our services can include photorealistic exterior rendering,
                  interior 3D visualization, architectural CGI, walkthroughs,
                  lighting studies, material visualization, furniture and
                  landscaping visualization, and high-resolution digital
                  delivery.
                </p>
              </div>
            </Reveal>

            {/* FAQ 03 */}
            <Reveal delay={160}>
              <div className="bg-primary p-7 md:p-8">
                <h3 className="font-display text-lg font-bold text-secondary">
                  Do I need finished architectural plans before requesting a
                  rendering?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                  For most visualization projects, we need suitable
                  architectural information such as floor plans, elevations,
                  dimensions, reference images, or an existing 3D model. If
                  your design information is still being developed, we can
                  review the available material remotely and advise you on what
                  is needed.
                </p>
              </div>
            </Reveal>

            {/* FAQ 04 */}
            <Reveal delay={240}>
              <div className="bg-primary p-7 md:p-8">
                <h3 className="font-display text-lg font-bold text-secondary">
                  How long does a photorealistic 3D rendering take?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                  The turnaround depends on the complexity of the project,
                  number of views, level of detail, and revision requirements.
                  A single rendering can typically be completed within several
                  business days after the scene and project requirements are
                  finalized.
                </p>
              </div>
            </Reveal>

            {/* FAQ 05 */}
            <Reveal delay={320}>
              <div className="bg-primary p-7 md:p-8">
                <h3 className="font-display text-lg font-bold text-secondary">
                  Can you create both interior and exterior renderings for the
                  same project?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                  Yes. We can create coordinated interior and exterior
                  visualizations for the same project, helping clients,
                  architects, designers, developers, and other project
                  stakeholders understand the overall design.
                </p>
              </div>
            </Reveal>

            {/* FAQ 06 */}
            <Reveal delay={400}>
              <div className="bg-primary p-7 md:p-8">
                <h3 className="font-display text-lg font-bold text-secondary">
                  Do you provide remote 3D architectural rendering services for
                  commercial projects across the USA?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                  Yes. We provide remote 3D architectural visualization for
                  residential, commercial, hospitality, and multi-unit
                  projects across the USA. Project requirements, reviews,
                  revisions, and final delivery can all be handled digitally.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-primary-100 py-section">
        <div className="container-content">
          <Reveal>
            <Eyebrow>Related Remote Services</Eyebrow>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-px bg-secondary/10 sm:grid-cols-2">
            {/* Remote Architecture Consultation */}
            <Reveal delay={0}>
              <Link
                href="/usa/remote-architecture-consultation"
                className="group relative flex h-full flex-col bg-primary p-7 transition-colors duration-500 hover:bg-primary-200"
              >
                <Video className="h-6 w-6 flex-shrink-0 text-accent transition-transform duration-500 group-hover:scale-110" />

                <h3 className="mt-4 font-display text-base font-bold text-secondary">
                  Remote Architecture Consultation
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary/60">
                  Get remote architectural guidance on design decisions,
                  existing plans, site information, renovation ideas, and
                  project direction through an online consultation.
                </p>
              </Link>
            </Reveal>

            {/* Remote Interior Design */}
            <Reveal delay={80}>
              <Link
                href="/usa/remote-interior-design"
                className="group relative flex h-full flex-col bg-primary p-7 transition-colors duration-500 hover:bg-primary-200"
              >
                <Box className="h-6 w-6 flex-shrink-0 text-accent transition-transform duration-500 group-hover:scale-110" />

                <h3 className="mt-4 font-display text-base font-bold text-secondary">
                  Remote Interior Design
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary/60">
                  Explore online interior design concepts, moodboards, space
                  planning, furniture guidance, material selection, and design
                  direction for residential, commercial, and hospitality
                  interiors.
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-section">
        <div className="container-content">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Start Your Visualization Project</Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-heading text-secondary">
                Turn your architectural drawings into visuals people can
                understand.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary/60 md:text-lg">
                Have floor plans, elevations, architectural drawings, or a 3D
                model ready? Send your project details to DESCORP and discuss
                your remote 3D architectural visualization requirements online.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8">
                <Button variant="primary" to="/contact">
                  Start a 3D Visualization Project
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}