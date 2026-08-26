import { Reveal } from './Reveal';
import { Eyebrow } from './Layout';
import { stats } from '../data/content';





export function Stats() {
  return (
   
    <section className="bg-primary-200 py-16 text-secondary md:py-20">
  <div className="container-content">
    <div className="flex flex-col items-center gap-8 md:flex-row md:flex-nowrap md:items-center md:justify-between md:gap-6">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 100}>
          <div className="min-w-0 border-l border-accent/40 pl-5 text-center md:text-left">
            <div className="font-display text-4xl font-extrabold tracking-tight text-secondary-100 md:text-5xl">
              {stat.value}
            </div>

            <div className="mt-2 text-xs uppercase tracking-widest text-secondary/50">
              {stat.label}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
  );
}



export function PhilosophyTeaser() {
  return (
    <section className="relative overflow-hidden bg-primary py-section">
      <div className="grid-lines absolute inset-0 opacity-50" />
      <div className="container-content relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Our Philosophy</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-heading text-secondary">
                Minimal form.
                <br />
                Futuristic intent.
                <br />
                Absolute precision.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={150}>
              <p className="text-base leading-relaxed text-secondary/70 md:text-lg">
               We believe architecture begins with listening. Every space should be a reflection of the people who inhabit it their personality, lifestyle, experiences, and aspirations. Our role is not simply to impose a vision, but to translate the client’s ideas and emotions into a thoughtful architectural language.

Through active collaboration, we create spaces that balance architectural expertise with personal identity spaces that are functional, refined, and deeply personal. Because the most successful design is not just one that looks beautiful, but one that feels unmistakably yours.

              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-10 grid grid-cols-1 gap-px bg-secondary/10 sm:grid-cols-3">
                {['Human-Centered Design', 'Personal Expression', 'Meaningful Spaces'].map((item) => (
                  <div key={item} className="bg-primary p-2">
                    <div className="font-display text-sm font-bold uppercase tracking-wider text-accent">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
