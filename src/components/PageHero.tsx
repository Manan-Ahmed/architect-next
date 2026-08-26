import { Reveal } from './Reveal';
import { Eyebrow } from './Layout';

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="grid-lines absolute inset-0 opacity-30" />
      <div className="container-content relative">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 font-display text-display-2 text-secondary-100">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary/60 md:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
