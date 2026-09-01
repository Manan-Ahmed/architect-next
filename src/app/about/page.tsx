import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/Layout';
import { Button } from '@/components/Button';
import { Stats, PhilosophyTeaser } from '@/components/Stats';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DESCORP | Architecture & Interior Design Studio",

  description:
    "Learn about DESCORP, our design philosophy, expertise, and commitment to creating timeless architecture.",

  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Studio"
        title="Building with intent since 2020."
        subtitle="DESCORP is an architecture, interior design and project execution studio working across residential, commercial, and cultural sectors across the globe."
      />

      {/* Studio story */}
      <section className="bg-primary py-section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Our Story</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-6 font-display text-heading text-secondary">
                  A practice built on precision and restraint.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={150}>
                <p className="text-base leading-relaxed text-secondary/70 md:text-lg">
                 Founded in 2020 by Nehal H. Mansoori, DESCORP began as a small studio built on a simple belief: <b>design should make life better.</b> What started as one designer’s vision has evolved into a growing multidisciplinary team delivering projects across multiple regions and around the globe.

Our work is rooted in a human-centered approach to architecture and design. We believe every project begins with understanding how people live, what they need, and the challenges their spaces present. By simplifying the design process, we create an environment where clients can actively express their stories, needs, and aspirations—and become part of the design journey.

                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-base leading-relaxed text-secondary/70 md:text-lg">
                 Today, DESCORP continues to build on that original vision: creating architecture and interiors that are <b>purposeful, intuitive, and deeply connected to the people who inhabit them.</b>

                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Philosophy */}
      <PhilosophyTeaser />

      {/* Team */}
      {/* <section className="bg-primary py-section">
        <div className="container-content">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Leadership</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-heading text-secondary">
                The partners behind every project.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px bg-secondary/10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 80}>
                <div className="group bg-primary">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-precise group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-secondary">{member.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-accent">{member.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-secondary/60">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* Awards */}
      {/* <section className="bg-primary-100 py-section">
        <div className="container-content">
          <Reveal>
            <Eyebrow>Recognition</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-heading text-secondary">
              32 awards across 19 countries.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-px bg-secondary/10">
            {awards.map((award, i) => (
              <Reveal key={`${award.title}-${i}`} delay={(i % 4) * 60}>
                <div className="flex items-center justify-between bg-primary p-6 transition-colors duration-300 hover:bg-primary-200">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-sm text-accent">{award.year}</span>
                    <div>
                      <div className="font-display text-base font-bold text-secondary">{award.title}</div>
                      <div className="mt-1 text-xs uppercase tracking-wider text-secondary/50">{award.organization}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-primary py-section">
        <div className="container-content">
          <Reveal>
            <div className="flex flex-col items-start gap-6 border border-secondary/10 p-10 md:flex-row md:items-center md:justify-between md:p-14">
              <div>
                <h2 className="font-display text-heading text-secondary">
                  Have a project in mind?
                </h2>
                <p className="mt-3 text-base text-secondary/60">
                  We'd love to hear about it. Every great building starts with a conversation.
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
