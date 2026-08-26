import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/Layout';
import { Button } from '@/components/Button';
import { services, processSteps } from '@/data/content';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture & Interior Design Services",

  description:
    "Explore DESCORP's architecture, interior design, planning, visualization, and consultancy services.",

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

      {/* Services grid */}
      <section className="bg-primary py-section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-px bg-secondary/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 80}>
                <div className="group relative h-full bg-primary p-7 transition-colors duration-500 hover:bg-primary-200 md:p-8">
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
                  <ul className="mt-5 space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2.5 text-xs text-secondary/50">
                        <span className="h-1 w-1 bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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

      {/* CTA */}
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
