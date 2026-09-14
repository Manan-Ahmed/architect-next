import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/Layout';
import { Button } from '@/components/Button';
import { services, processSteps } from '@/data/content';
import type { Metadata } from "next";

export const metadata: Metadata = {
title: "Architecture & Interior Design Services | DESCORP",
description:
  "Explore DESCORP's architecture, interior design, planning, visualization, and project management services in Pakistan, plus remote design services for USA clients.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Full-spectrum architectural practice."
        subtitle="From first consultation to final handover, we deliver every discipline under one roof — unified by a single design language and held to a single standard."
      />

      <section className="bg-primary py-section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-px  sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 80}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block h-full bg-primary p-7 transition-colors duration-500 hover:bg-primary-200 md:p-8"
                >
                  <div className="font-mono text-sm text-secondary/30 transition-colors duration-500 group-hover:text-accent/50">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <service.icon className="mt-6 h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="mt-5 font-display text-lg font-bold text-secondary">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/60">
                    {service.description}
                  </p>
                  
                  <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    Learn More →
                  </span>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

<section className="bg-primary-100 py-section">
  <div className="container-content">
    <div className="max-w-2xl">
      <Reveal>
        <Eyebrow>USA · Remote Services</Eyebrow>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-5 font-display text-heading text-secondary">
          Remote architecture & interior design for USA clients.
        </h2>
      </Reveal>

      <Reveal delay={150}>
        <p className="mt-5 text-base leading-relaxed text-secondary/60 md:text-lg">
          Work with DESCORP remotely for architecture consultation, interior
          design, and 3D visualization services across the United States.
        </p>
      </Reveal>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-px bg-secondary/10 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          number: '01',
          title: 'Remote Architecture Consultation',
          description:
            'Professional architectural guidance, concept development, and design consultation delivered remotely for USA clients.',
          href: '/usa/remote-architecture-consultation',
        },
        {
          number: '02',
          title: 'Remote Interior Design Services',
          description:
            'Remote interior design services including space planning, design direction, material concepts, and visual development.',
          href: '/usa/remote-interior-design',
        },
        {
          number: '03',
          title: 'Remote 3D Visualization Services',
          description:
            'Photorealistic 3D architectural and interior visualizations to help USA clients clearly understand their design.',
          href: '/usa/remote-3d-visualization',
        },
      ].map((service, i) => (
        <Reveal key={service.href} delay={(i % 3) * 80}>
          <Link
            href={service.href}
            className="group relative block h-full bg-primary p-7 transition-colors duration-500 hover:bg-primary-200 md:p-8"
          >
            <div className="font-mono text-sm text-secondary/30 transition-colors duration-500 group-hover:text-accent/50">
              {service.number}
            </div>

            <h3 className="mt-6 font-display text-lg font-bold text-secondary">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-secondary/60">
              {service.description}
            </p>

            <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wider text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Explore Service →
            </span>

            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
          </Link>
        </Reveal>
      ))}
    </div>
  </div>
</section>





   
      <section className="bg-primary-100 py-section">
        <div className="container-content">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Our Process</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-heading text-secondary">
                Six phases. One standard.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 text-base leading-relaxed text-secondary/60 md:text-lg">
                Every project, regardless of scale, moves through the same disciplined sequence —
                each phase building on the last, each decision documented and defensible.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 space-y-px bg-secondary/10">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={(i % 3) * 80}>
                <div className="group flex flex-col gap-4 bg-primary p-7 transition-colors duration-500 hover:bg-primary-200 md:flex-row md:items-start md:gap-10 md:p-9">
                  <div className="font-mono text-3xl font-bold text-secondary/20 transition-colors duration-500 group-hover:text-accent md:text-4xl md:flex-shrink-0 md:w-20">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-secondary">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

  
      <section className="bg-primary py-section">
        <div className="container-content">
          <Reveal>
            <div className="flex flex-col items-start gap-6 border border-secondary/10 p-10 md:flex-row md:items-center md:justify-between md:p-14">
              <div>
                <h2 className="font-display text-heading text-secondary">
                  Ready to begin?
                </h2>
                <p className="mt-3 text-base text-secondary/60">
                  Tell us about your site, your brief, your ambition. We respond within two business days.
                </p>
              </div>
              <Button variant="primary" to="/contact">Start a Project</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
