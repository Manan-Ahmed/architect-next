'use client';

import { useState } from 'react';
import { Reveal } from './Reveal';
import { Eyebrow } from './Layout';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/content';
import { Button } from './Button';

const filters = ['All', 'Residential', 'Commercial', 'Interior'] as const;

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  return (
    <section id="portfolio-preview" className="bg-primary py-section">
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal><Eyebrow>Selected Work</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-heading text-secondary">
                Featured Projects
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <p className="max-w-md text-sm leading-relaxed text-secondary/60">
              A curated selection of recent commissions spanning residential, commercial,
              and interior architecture across four continents.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex justify-center">
            <Button variant="secondary" to="/projects">View All Projects</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PortfolioGrid() {
  const [active, setActive] = useState<typeof filters[number]>('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="bg-primary py-section">
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal><Eyebrow>Portfolio</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-heading text-secondary">
                The Archive
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <p className="max-w-md text-sm leading-relaxed text-secondary/60">
              Two decades of work spanning bespoke residences, cultural landmarks, and
              refined interior environments.
            </p>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  active === f
                    ? 'bg-accent text-white'
                    : 'border border-secondary/15 text-secondary/70 hover:border-secondary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
