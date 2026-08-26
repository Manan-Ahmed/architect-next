import { Reveal } from './Reveal';
import { Eyebrow } from './Layout';
import { services } from '../data/content';

export function ServicesSection() {
  return (
    <section id="services" className="bg-primary-100 py-section">
      <div className="container-content">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>What We Do</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-heading text-secondary">
              Full-Spectrum Architectural Practice
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 text-base leading-relaxed text-secondary/60 md:text-lg">
              From first consultation to final handover, we deliver every discipline under
              one roof — unified by a single design language.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-secondary/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 80}>
              <div className="group relative h-full bg-primary-100 p-7 transition-colors duration-500 hover:bg-secondary md:p-8">
                {/* Number */}
                <div className="font-mono text-sm text-secondary/30 transition-colors duration-500 group-hover:text-primary/30">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <service.icon className="mt-6 h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-110" />

                <h3 className="mt-5 font-display text-lg font-bold text-secondary transition-colors duration-500 group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/60 transition-colors duration-500 group-hover:text-primary/60">
                  {service.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
