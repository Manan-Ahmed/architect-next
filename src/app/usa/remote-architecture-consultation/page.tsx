import { Video, Box } from "lucide-react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Layout";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Remote Architecture Consultation in the USA | DESCORP",
  description:
    "Get remote architecture consultation in the USA from DESCORP. Review site plans, drawings, renovation ideas, and design decisions with an experienced architecture professional online.",
  alternates: {
    canonical: "/usa/remote-architecture-consultation",
  },
  openGraph: {
    title: "Remote Architecture Consultation in the USA | DESCORP",
    description:
      "Remote architecture consultation for homeowners, buyers, and builders across the USA. Review drawings, site plans, renovation ideas, and project decisions online.",
    url: "https://thedescorp.com/usa/remote-architecture-consultation",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is a remote architecture consultation?",
    answer:
      "A remote architecture consultation is an online session where you discuss your project with an architecture professional through a secure video call. Depending on your needs, the session can include reviewing drawings, site plans, renovation ideas, design decisions, or early-stage project questions.",
  },
  {
    question: "What can I discuss during an online architecture consultation?",
    answer:
      "You can discuss topics such as site planning, existing drawings, preliminary design ideas, home renovations, spatial planning, design direction, and questions you should resolve before moving into a larger architectural or construction process.",
  },
  {
    question: "Can you review my site plan remotely?",
    answer:
      "Yes. You can share your site plan or related documents before or during the consultation. We can review items such as site orientation, setbacks, access, general planning considerations, and design-related questions. Local zoning and approval requirements should always be confirmed with the relevant authority or qualified local professional.",
  },
  {
    question: "Can I get remote architecture advice for a renovation?",
    answer:
      "Yes. Remote consultations can be useful for homeowners planning renovations, remodels, additions, or changes to an existing property. You can share photographs, existing drawings, measurements, and your proposed ideas so the discussion can focus on practical design direction.",
  },
  {
    question: "Do I need to live near DESCORP to book a consultation?",
    answer:
      "No. This service is designed for remote clients across the USA. Consultations are conducted online, allowing you to discuss your project without traveling to an office.",
  },
  {
    question: "Does a remote consultation include permit drawings or permit submission?",
    answer:
      "No. The consultation is intended for professional review, advice, and planning direction. Construction documents, permit drawings, permit submissions, and on-site services are separate services and may require a locally licensed architect or other qualified professional depending on your location and project.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Remote Architecture Consultation",
  serviceType: "Architecture Consultation",
  description:
    "Remote architecture consultation for clients across the USA, including drawing reviews, site plan discussions, renovation guidance, and project-specific design advice.",
  provider: {
    "@type": "Organization",
    name: "DESCORP",
    url: "https://thedescorp.com",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  url: "https://thedescorp.com/usa/remote-architecture-consultation",
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

export default function RemoteArchitectureConsultation() {
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
            <Eyebrow>
              Remote Architecture Consultation · USA
            </Eyebrow>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-6 font-display text-display-2 text-secondary-100">
              Remote Architecture Consultation
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary/60 md:text-lg">
              Get professional architecture guidance online without
              traveling to an office. DESCORP provides remote consultations
              for homeowners, buyers, and builders who need help reviewing
              drawings, site plans, renovation ideas, or early-stage design
              decisions.
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
                  Our remote architecture consultation service gives you
                  direct access to professional project guidance through a
                  secure online video call. It is designed for clients who
                  want clear direction before committing time and money to
                  a larger design or construction process.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-5 text-lg leading-relaxed text-secondary/80">
                  During the consultation, we can review existing drawings,
                  sketches, renderings, site plans, renovation ideas, and
                  other project information. You can ask questions, explain
                  your goals, and receive practical recommendations tailored
                  to your specific project.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-5 text-lg leading-relaxed text-secondary/80">
                  Remote consultations are especially useful during the
                  early planning stage, when you are evaluating a property,
                  considering a renovation, or deciding what professional
                  design services your project may require next.
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
                    One-on-one online consultation with an experienced
                    architecture professional.
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    Review of existing architectural drawings, sketches,
                    renderings, or project documents.
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    Remote site plan review covering design-related
                    considerations such as orientation, access, and
                    preliminary planning concerns.
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    Guidance for home renovation, remodeling, additions,
                    and early-stage design decisions.
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    Real-time document and screen sharing during the
                    consultation.
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    Written summary with key recommendations and suggested
                    next steps after the consultation.
                  </li>

                  <li className="flex items-start gap-3 text-base text-secondary/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    Flexible scheduling for clients across the United
                    States.
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
                    This service provides advisory review and planning
                    direction. It does not automatically include construction
                    documents, permit drawings, permit submission, or
                    on-site supervision. Local licensing, zoning, and permit
                    requirements vary by jurisdiction, so additional local
                    professionals may be required for certain projects.
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
                How remote architecture consultation works.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 text-base leading-relaxed text-secondary/60 md:text-lg">
                A simple, structured process designed to give you useful
                architectural direction before your project moves forward.
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
                    Book Your Online Architecture Consultation
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    Choose a consultation time that works for your schedule
                    and provide a brief overview of your project.
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
                    Share Your Project Details
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    Share site plans, drawings, photographs, sketches,
                    measurements, or reference material so we can prepare
                    for the discussion.
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
                    Join the Remote Architecture Video Call
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    Meet online and walk through your project documents,
                    questions, and design challenges in real time.
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
                    Get Project-Specific Recommendations
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    Leave the consultation with clear direction on your
                    design questions, site planning concerns, renovation
                    ideas, or next steps.
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
                    Receive a Follow-Up Summary
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    Receive a written recap of the discussion with key
                    recommendations and suggested next steps.
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
              Remote architecture consultation FAQs.
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary/60 md:text-lg">
              Answers to common questions about online architecture
              consultations, project reviews, renovations, and remote
              architectural guidance.
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
            {/* Interior Design */}
            <Reveal delay={0}>
              <Link
                href="/usa/remote-interior-design"
                className="group relative flex h-full flex-col bg-primary p-7 transition-colors duration-500 hover:bg-primary-200"
              >
                <ArrowRight className="h-6 w-6 flex-shrink-0 text-accent transition-transform duration-500 group-hover:translate-x-1" />

                <h3 className="mt-4 font-display text-base font-bold text-secondary">
                  Remote Interior Design
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary/60">
                  Explore remote interior design services for residential
                  spaces, including design direction, space planning,
                  materials, and interior concepts.
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
                  Turn architectural ideas and drawings into photorealistic
                  3D exterior, interior, and architectural visualization
                  for clearer project communication.
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
                Have an architecture question? Let&apos;s review your project.
              </h2>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-5 text-base leading-relaxed text-secondary/60 md:text-lg">
                Share your project requirements, drawings, or ideas with
                DESCORP and schedule a remote architecture consultation
                online.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8">
                <Button variant="primary" to="/contact">
                  Book a Consultation
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}