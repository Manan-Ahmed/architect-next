import { Reveal } from './Reveal';
import { Eyebrow } from './Layout';
import { Button } from './Button';
import { Eye, Target, Compass } from 'lucide-react';
import Image from "next/image";
const pillars = [
  {
    icon: Eye,
    title: 'Our Vision',
    // text: 'To create spaces that go beyond aesthetics spaces that connect with people, reflect their identity, and enrich the way they experience everyday life. We envision architecture where human experience, personal identity, and meaningful design come together to create spaces that remain relevant, personal, and enduring.'
 text: 'To create meaningful spaces that enhance everyday life and remain personal, relevant, and enduring.'
  },
  {
    icon: Target,
    title: 'Our Mission',
    // text: 'To transform our clients ideas, experiences, and aspirations into spaces that feel distinctly their own. Through an open and collaborative design process, we bring together the client’s individuality and our architectural expertise creating solutions that balance functionality, aesthetics, and emotional connection. We carry this approach through to execution, ensuring that every project is delivered with the same level of thought, precision, and commitment as its design.'
  text: 'To transform our clients ideas into well-designed, carefully executed spaces through a collaborative and precise process.'

  },
  {
    icon: Compass,
    title: 'Design Philosophy',
//  text: 'Human Experience. Personal Identity. Meaningful Spaces. We believe every space should tell a story about the people who inhabit it. Rather than imposing a singular architectural vision, we listen, understand, and translate the client’s personality, needs, and experiences into design. For us, successful architecture is not simply about creating a beautiful space. It is about creating a space that feels **personal, purposeful, and unmistakably yours and bringing that vision to life through thoughtful execution.'
text: 'Human Experience, Personal Identity, Meaningful Spaces. We believe the best spaces are personal, purposeful, and unmistakably yours.'  
},
];

export function AboutSection() {
  return (
    <section id="about" className="bg-primary py-section">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <div className="lg:col-span-5">
            {/* <Reveal className="relative overflow-hidden rounded-lg">
<div className="relative aspect-[3/4] overflow-hidden"> */}
                {/* <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="DESCORP studio interior"
                  className="h-full w-full object-cover"
                /> */}
   <Reveal className="relative overflow-hidden rounded-lg">
  <div className="relative aspect-[3/4]">
    <Image
      src="/interior/2.webp"
      alt="Modern luxury apartment interior designed by DESCORP"
      fill
      className="object-cover"
      
      sizes="(max-width: 1024px) 100vw, 42vw"
    />
  </div>

  <div className="absolute inset-0 bg-secondary/10" />
</Reveal>

            <Reveal delay={100}>
              <div className="mt-4 grid grid-cols-2 gap-px bg-secondary/10">
                <div className="bg-primary p-5">
                  <div className="font-display text-3xl font-extrabold text-secondary">Est.</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-secondary/50">2020</div>
                </div>
                <div className="bg-secondary p-5 text-primary">
                  <div className="font-display text-3xl font-extrabold">40+</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-primary/50">CLIENTS SERVED
</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal><Eyebrow>About DESCORP</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-heading text-secondary">
                Architecture shaped around people.
                {/* <span className="text-accent"> tomorrow's</span> architecture. */}
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 text-base leading-relaxed text-secondary/70 md:text-lg">
                {/* Founded in 2007, DESCORP is an architecture and interior design practice
                operating across three continents. We pair the rigor of industrial
                methodology with the imagination of a design laboratory — building spaces
                that are as technically resolved as they are visually uncompromising. */}

                
Established in 2020, DESCORP is an architecture, interior design, and project execution studio creating thoughtful, functional, and personal spaces.
</p>
              <p className="mt-6 text-base leading-relaxed text-secondary/70 md:text-lg">

We work collaboratively with our clients to translate their ideas, lifestyles, and aspirations into meaningful design. From concept to completion, we manage every stage with precision and care, ensuring that each project reflects both our expertise and the client’s identity.

              </p>
            </Reveal>

            <div className="mt-10 space-y-px bg-secondary/10">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={200 + i * 100}>
                  <div className="group flex gap-5 bg-primary p-6 transition-colors duration-500 hover:bg-primary-300 md:p-7">
                    <div className="flex-shrink-0">
                      <p.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-secondary">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-secondary/60">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={500}>
              <div className="mt-10">
                <Button variant="primary" to="/contact">Work With Us</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
