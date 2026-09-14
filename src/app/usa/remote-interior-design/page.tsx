import { Video, Box } from "lucide-react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Layout";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Remote Interior Design Services in the USA | DESCORP",
  description:
    "Get remote interior design services in the USA from DESCORP. Work online with our design team for room design, moodboards, space planning, furniture guidance, and material selection.",
  alternates: {
    canonical: "/usa/remote-interior-design",
  },
  openGraph: {
    title: "Remote Interior Design Services in the USA | DESCORP",
    description:
      "Professional remote interior design for homeowners across the USA, including room design, moodboards, space planning, furniture guidance, and material selection.",
    url: "https://thedescorp.com/usa/remote-interior-design",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is remote interior design?",
    answer:
      "Remote interior design is a fully online design service where you work with a designer through video calls, digital moodboards, space planning, furniture guidance, and design recommendations without requiring an in-person visit.",
  },
  {
    question: "Can I hire a remote interior designer in the USA?",
    answer:
      "Yes. DESCORP provides remote interior design services for residential clients across the USA through an online design process. You can work with our team remotely regardless of your location.",
  },
  {
    question: "What is included in a remote interior design service?",
    answer:
      "Depending on your project, remote interior design can include online consultation, room design, moodboards, space planning, furniture layout recommendations, material and finish selection, sourcing guidance, and overall design direction.",
  },
  {
    question: "Can you design just one room remotely?",
    answer:
      "Yes. Remote interior design can be used for a single room, multiple spaces, or an entire home. The scope can be adjusted according to your space, requirements, and design goals.",
  },
  {
    question: "Do you provide furniture sourcing guidance?",
    answer:
      "Yes. DESCORP can provide furniture and material sourcing guidance as part of the design process. Purchasing, delivery, installation, and local vendor coordination are handled by the client or their chosen local team.",
  },
  {
    question: "Do you provide on-site interior design services?",
    answer:
      "This service is designed as a remote online experience. We provide digital design direction, documentation, moodboards, and sourcing recommendations rather than on-site installation or styling services.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Remote Interior Design Services",
  serviceType: "Interior Design",
  description:
    "Remote interior design services for residential clients across the USA, including online consultations, room design, moodboards, space planning, furniture guidance, material selection, and design direction.",
  provider: {
    "@type": "Organization",
    name: "DESCORP",
    url: "https://thedescorp.com",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  url: "https://thedescorp.com/usa/remote-interior-design",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RemoteInteriorDesignService() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
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
            <Eyebrow>Remote Interior Design · USA</Eyebrow>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-6 font-display text-display-2 text-secondary-100">
              Remote Interior Design Services
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary/60 md:text-lg">
             Professional remote interior design services for clients across the United States. Through online consultations, mood boards, space planning, furniture guidance, material selection, and design direction, DESCORP helps residential, commercial, and hospitality clients create superior interiors without the need for an in-person designer visit.
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
                  Our remote interior design service brings professional design
                  direction to you through a streamlined online process. It is
                  designed for homeowners who want thoughtful interiors,
                  practical layouts, and a clear design direction without
                  requiring an in-person designer visit.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-5 text-lg leading-relaxed text-secondary/80">
                  Each project begins with an online interior design
                  consultation where we understand your space, lifestyle,
                  preferences, budget, and goals. From there, we develop
                  digital moodboards, room concepts, furniture layouts,
                  material direction, and sourcing recommendations based on
                  your requirements.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-5 text-lg leading-relaxed text-secondary/80">
                  Whether you need help transforming one room or developing a
                  cohesive interior for an entire home, our remote design
                  process gives you practical recommendations and visual
                  direction that you can implement at your own pace with local
                  vendors or contractors.
                </p>
              </Reveal>

              <Reveal delay={250}>
                <h2 className="mt-14 font-display text-heading text-secondary">
                  What&apos;s Included
                </h2>
              </Reveal>

              <Reveal delay={300}>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    Online interior design consultation to understand your space, style, lifestyle, budget, and project goals.

                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    Custom interior design concepts and digital moodboards for individual rooms or complete spaces.
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                   Space planning and furniture layout recommendations to improve functionality, circulation, and visual balance.
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    Material, finish, color, and interior styling guidance tailored to your design direction.
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    Furniture, lighting, decor, and product sourcing recommendations for your space.

                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    Room-by-room design direction for homes, apartments, condos, offices, and other interior spaces.
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                  Residential, commercial, and hospitality interior design guidance delivered through a flexible remote process.
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
                    This service covers interior design consultation,
                    planning, visual direction, styling advice, and sourcing
                    recommendations. Furniture purchasing, delivery,
                    installation, contractor management, and on-site styling
                    are not included unless separately agreed. You or a local
                    team can implement the recommendations directly.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="mt-6 flex flex-col gap-3">
                  <Button variant="primary" to="/contact">
                    Start a Project
                  </Button>

                  <Button variant="secondary" to="/contact">
                    Book a Consultation Call
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-primary-100 py-section">
        <div className="container-content">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Our Process</Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-heading text-secondary">
                How remote interior design works.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 text-base leading-relaxed text-secondary/60 md:text-lg">
                A clear, structured online process designed for homeowners
                working with us remotely across the USA and different time
                zones.
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
                    Book Your Online Interior Design Consultation
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    We discuss your style preferences, budget, lifestyle, and
                    the spaces you want to improve during your initial online
                    consultation.
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
                    Share Your Space & Requirements
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    Share room photographs, measurements, floor plans,
                    inspiration images, existing furniture details, and any
                    other information needed to understand your space.
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
                    Develop Moodboards & Design Direction
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    We develop visual direction covering color palettes,
                    materials, furniture, lighting, finishes, and the overall
                    atmosphere of your interior.
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
                    Finalize Layout & Sourcing Guidance
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    Receive furniture placement recommendations, sourcing
                    guidance, material direction, and practical suggestions
                    for implementing the design.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Step 05 */}
            <Reveal delay={320}>
              <div className="group flex flex-col gap-4 bg-primary p-7 transition-colors duration-500 hover:bg-primary-200 md:flex-row md:items-start md:gap-10 md:p-9">
                <div className="font-mono text-3xl font-bold text-secondary/20 transition-colors duration-500 group-hover:text-accent md:w-20 md:flex-shrink-0 md:text-4xl">
                  05
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-secondary">
                    Receive Your Design Recommendations
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    You receive a clear design summary and supporting visual
                    direction that you can use to implement your interior at
                    your own pace.
                  </p>
                </div>
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
              Remote interior design FAQs.
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary/60 md:text-lg">
              Answers to common questions about online interior design,
              remote room design, moodboards, sourcing, and working with
              DESCORP from the USA.
            </p>
          </Reveal>

          <div className="mt-10 space-y-px bg-secondary/10">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 60}>
                <div className="bg-primary p-7 md:p-8">
                  <h3 className="font-display text-lg font-bold text-secondary">
                    {faq.question}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-primary-100 py-section">
        <div className="container-content">
          <Reveal>
            <Eyebrow>Related Services</Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-heading text-secondary">
              Explore more remote design services.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-px bg-secondary/10 sm:grid-cols-2">
            {/* Architecture Consultation */}
            <Reveal delay={0}>
              <Link
                href="/usa/remote-architecture-consultation"
                className="group relative flex h-full flex-col bg-primary p-7 transition-colors duration-500 hover:bg-primary-200"
              >
                <ArrowRight className="h-6 w-6 flex-shrink-0 text-accent transition-transform duration-500 group-hover:translate-x-1" />

                <h3 className="mt-4 font-display text-base font-bold text-secondary">
                  Remote Architecture Consultation
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary/60">
                  Strategic guidance for project feasibility, site planning,
                  design direction, drawings, and early-stage architectural
                  decisions.
                </p>
              </Link>
            </Reveal>

            {/* 3D Visualization */}
            <Reveal delay={80}>
              <Link
                href="/usa/remote-3d-visualization"
                className="group relative flex h-full flex-col bg-primary p-7 transition-colors duration-500 hover:bg-primary-200"
              >
                <Box className="h-6 w-6 flex-shrink-0 text-accent transition-transform duration-500 group-hover:scale-110" />

                <h3 className="mt-4 font-display text-base font-bold text-secondary">
                  Remote 3D Visualization
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary/60">
                  Photorealistic 3D exterior and interior visualization that
                  helps clients communicate design concepts and understand
                  spaces before construction.
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
              <Eyebrow>Start Your Project</Eyebrow>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-heading text-secondary">
                Ready to transform your space remotely?
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 text-base leading-relaxed text-secondary/60 md:text-lg">
                Share your interior design requirements, room photographs,
                floor plans, or ideas with DESCORP and start your remote
                interior design project online.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8">
                <Button variant="primary" to="/contact">
                  Start Your Interior Design Project
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}