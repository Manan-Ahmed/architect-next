'use client';

import { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { ProjectCard } from '@/components/ProjectCard';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/data/content';

const categories = ['All', 'Residential', 'Commercial', 'Interior'] as const;

export default function ProjectsClient() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected Works"
        subtitle="A curated record of projects across residential, commercial, and interior disciplines — each one a study in material, light, and proportion."
      />

      {/* Filter bar */}
      <section className="bg-primary pb-8">
        <div className="container-content">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                  filter === cat
                    ? 'bg-accent text-white'
                    : 'border border-secondary/15 text-secondary/70 hover:border-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-primary pb-section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
