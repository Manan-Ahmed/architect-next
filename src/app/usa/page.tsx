import type { Metadata } from 'next';
import Link from 'next/link';

import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/Layout';
import { Button } from '@/components/Button';
import { ContactSection } from '@/components/ContactSection';
import  Image  from 'next/image';

export const metadata: Metadata = {
  title: 'Architecture & Interior Design Services in the USA | DESCORP',
  description:
    'DESCORP provides remote architecture, interior design, custom home design, architectural consultation, and 3D visualization services for clients across the United States.',
  alternates: {
    canonical: '/usa',
  },
  openGraph: {
    title: 'Architecture & Interior Design Services in the USA | DESCORP',
    description:
      'Remote architecture, interior design, custom home design, architectural consultation, and 3D visualization services for projects across the United States.',
    url: 'https://thedescorp.com/usa',
  },
};

const services = [
  {
    title: 'Remote Architectural Consultation',
    description:
      'Strategic guidance for project feasibility, design direction, planning, and early-stage architectural decisions.',
    href: '/usa/remote-architecture-consultation',
  },
  {
    title: 'Remote Interior Design',
    description:
      'Concept-driven architectural design developed around your site, brief, lifestyle, and project goals.',
    href: '/usa/remote-interior-design',
  },
 
  {
    title: '3D Visualization',
    description:
      'High-quality architectural renders and visual studies that communicate design intent before construction.',
    href: '/usa/remote-3d-visualization',
  },
];

// const projectTypes = [
//   {
//     number: '01',
//     title: 'Luxury & Custom Homes',
//     description:
//       'Custom residential architecture shaped around lifestyle, site context, function, and contemporary living.',
//     image: '/farm-house/farmhouse1.webp',
//   },
//   {
//     number: '02',
//     title: 'Residential Interiors',
//     description:
//       'Refined interiors with thoughtful space planning, materials, lighting, furniture, and visual direction.',
//     image: 'interior/7.webp',
//       // 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
//   },
//   {
//     number: '03',
//     title: 'Commercial Spaces',
//     description:
//       'Design support for offices, retail, and commercial environments where functionality and experience work together.',
//     image: 'modern-banglo/banglo1.webp',
//       // 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85',
//   },
//   {
//     number: '04',
//     title: 'Hospitality Projects',
//     description:
//       'Architectural and interior concepts designed to create distinctive environments and memorable experiences.',
//     image:
//       'commercial/2night.webp',
//   },
// ];

const projectTypes = [
  {
    number: '01',
    title: 'Farmhouse & Custom Homes',
    description:
      'Custom farmhouse and residential architecture shaped around site context, lifestyle, and contemporary rural living.',
    image: '/farm-house/farmhouse1.webp',
  },
  {
    number: '02',
    title: 'Residential Interiors',
    description:
      'Refined interiors with thoughtful space planning, materials, lighting, furniture, and visual direction.',
    image: '/interior/7.webp',
  },
  {
    number: '03',
    title: 'Modern Bungalows',
    description:
      'Contemporary bungalow architecture balancing clean form, natural light, and functional, single-level living.',
    image: '/modern-banglo/banglo1.webp',
  },
  {
    number: '04',
    title: 'Hospitality Projects',
    description:
      'Architectural and interior concepts for hotels and hospitality spaces, designed to create distinctive, memorable guest experiences.',
    image: '/commercial/2night.webp',
  },
];


const faqs = [
  {
    question: 'Can DESCORP work on projects located in the USA?',
    answer:
      'Yes. DESCORP provides remote architectural and interior design support for clients and project teams across the United States.',
  },
  {
    question: 'What services does DESCORP provide in the USA?',
    answer:
      'Our USA services include architectural consultation, architectural design, custom home design, interior design, and 3D visualization.',
  },
  {
    question: 'Can you design a custom home remotely?',
    answer:
      'Yes. We can develop the design direction, spatial planning, concepts, and visual documentation remotely while coordinating with the local project team when required.',
  },
  {
    question: 'Do you provide architectural 3D visualization?',
    answer:
      'Yes. Our 3D visualization service can communicate architectural concepts, interiors, materials, lighting, and overall design intent through high-quality visualizations.',
  },
  {
    question: 'Do you provide licensed architectural services in the USA?',
    answer:
      'DESCORP provides remote design and consultancy support. Jurisdiction-specific approvals, stamped drawings, and licensed professional services remain the responsibility of appropriately licensed local professionals where required.',
  },
];

export default function USAPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-primary">
   

<div className="absolute inset-0">
  <Image
    src="/commercial/1.webp"
    alt="Contemporary architecture and interior design"
    fill
    priority
    className="object-cover object-center"
  />
</div>
        <div className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25" />

        <div className="container-content relative z-10 py-28 md:py-36">
          <Reveal>
            <Eyebrow>DESCORP · USA</Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 max-w-5xl font-display text-display-2 text-secondary-100">
              Architecture & Interior Design Services
              <br />
              <span className="text-accent">Across the USA.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-secondary-100/75 md:text-lg">
              Contemporary architectural and interior design support for
              homeowners, developers, and project teams across the United
              States.
            </p>
          </Reveal>

            <Reveal delay={220}>
  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-secondary-100/60 md:text-base">
    We deliver remote consultation, interior design, and 3D visualization to US clients — with construction execution based in Pakistan for international projects.
  </p>
</Reveal>

           <Reveal delay={280}>
  <div className="mt-9">
    <Button variant="primary" to="#usa-contact">
      Start a Project
    </Button>
  </div>
</Reveal>

<Reveal delay={320}>
  <p className="mt-6 font-mono text-xs uppercase tracking-widest text-secondary-100/50">
    10+ Years · 60+ Projects Delivered · 6+ Countries
  </p>
</Reveal>
          
          {/* <Reveal delay={240}>
            <div className="mt-9">
              <Button variant="primary" to="#usa-contact">
                Start a Project
              </Button>
            </div>
          </Reveal> */}
        </div>
      </section>

      {/* =========================================================
          USA INTRO
      ========================================================== */}
     
<section className="bg-primary-100 py-section">
  <div className="container-content">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      
      {/* LEFT — CONTENT */}
      <div>
        <Reveal>
          <Eyebrow>DESCORP · USA</Eyebrow>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-5 font-display text-heading text-secondary">
            Architecture & Interior Design USA
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <h3 className="mt-6 max-w-xl font-display text-2xl font-semibold text-secondary md:text-3xl">
            Contemporary design, developed with clarity and intent.
          </h3>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary/60 md:text-lg">
          DESCORP provides remote architecture, interior design, custom home design, architectural consultation, and 3D visualization services for clients across the United States, including California, Florida, New York, and Texas.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-8">
            <Button variant="primary" to="#usa-contact">
             Book a Free Consultation
            </Button>
          </div>
        </Reveal>
      </div>

      {/* RIGHT — IMAGE */}
      <Reveal delay={150}>
        <div className="relative overflow-hidden">
          {/* <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
            alt="Contemporary residential architecture"
            className="h-[420px] w-full object-cover md:h-[500px]"
          /> */}

 <img
            src="/interior/2.webp"
            alt="Contemporary residential interior"
            className="h-[420px] w-full object-cover md:h-[500px]"
          />
          <div className="absolute inset-0 bg-black/10" />

          {/* <div className="absolute bottom-0 left-0 bg-primary/90 px-6 py-4">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              USA · Remote Design
            </p>
          </div> */}
        </div>
      </Reveal>

    </div>
  </div>
</section>


      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section className="bg-primary py-section">
        <div className="container-content">
          <Reveal>
            <Eyebrow>USA Services</Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-3xl font-display text-heading text-secondary">
                Design services built around your project.
              </h2>

              <p className="max-w-md text-sm leading-relaxed text-secondary/50">
                From early consultation to architectural design, interiors,
                custom homes, and visualization, our services can be tailored
                to your project.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px bg-secondary/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 80}>
                <Link
                  href={service.href}
                  className="group block h-full bg-primary p-8 transition-colors duration-300 hover:bg-secondary/[0.04] md:p-9"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-sm text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="text-secondary/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
                      →
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-xl font-bold text-secondary">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-secondary/55">
                    {service.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT TYPES
      ========================================================== */}
      <section className="bg-primary-100 py-section">
        <div className="container-content">
          <Reveal>
            <Eyebrow>Project Types</Eyebrow>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-3xl font-display text-heading text-secondary">
                Spaces designed with purpose.
              </h2>

              <p className="max-w-md text-sm leading-relaxed text-secondary/50">
                Our design approach adapts to the character, scale, and
                requirements of each project.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projectTypes.map((project, index) => (
              <Reveal key={project.title} delay={index * 100}>
                <div className="group overflow-hidden bg-primary">
                  <div className="relative h-64 overflow-hidden md:h-72">
                    <img
                      src={project.image}
                      alt={`${project.title} architecture and interior design`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/25" />

                    <span className="absolute left-7 top-7 font-mono text-sm text-white md:left-9 md:top-9">
                      {project.number}
                    </span>
                  </div>

                  <div className="p-8 md:p-10">
                    <h3 className="font-display text-2xl font-bold text-secondary">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-secondary/55">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="bg-primary py-section">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <Reveal>
                <Eyebrow>USA FAQ</Eyebrow>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-heading text-secondary">
                  Questions, answered.
                </h2>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-5 max-w-md text-base leading-relaxed text-secondary/55">
                  A few common questions about working with DESCORP on
                  architectural and interior design projects across the USA.
                </p>
              </Reveal>
            </div>

            <div className="border-t border-secondary/10">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 70}>
                  <details className="group border-b border-secondary/10">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-lg font-semibold text-secondary">
                      <span>{faq.question}</span>

                      <span className="flex-shrink-0 font-mono text-xl text-accent transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="max-w-2xl pb-7 pr-10 text-sm leading-relaxed text-secondary/55">
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================== */}
      {/* <section
        id="usa-contact"
        className="bg-primary-100 py-section scroll-mt-24"
      >
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <Reveal>
                <Eyebrow>Start a USA Project</Eyebrow>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-heading text-secondary">
                  Tell us about your project.
                </h2>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary/60">
                  Share your project location, scope, and design goals. We
                  will review your brief and help define the right next step.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 border-l border-accent pl-5">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">
                    Remote design support
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-secondary/55">
                    Residential · Commercial · Hospitality · Interiors ·
                    Visualization
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <form
                action="#"
                method="POST"
                className="border border-secondary/10 bg-primary p-7 md:p-10"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-mono text-xs uppercase tracking-widest text-secondary/50"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-3 w-full border-b border-secondary/15 bg-transparent px-0 py-3 text-sm text-secondary outline-none transition-colors placeholder:text-secondary/30 focus:border-accent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-mono text-xs uppercase tracking-widest text-secondary/50"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-3 w-full border-b border-secondary/15 bg-transparent px-0 py-3 text-sm text-secondary outline-none transition-colors placeholder:text-secondary/30 focus:border-accent"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="font-mono text-xs uppercase tracking-widest text-secondary/50"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-3 w-full border-b border-secondary/15 bg-transparent px-0 py-3 text-sm text-secondary outline-none transition-colors placeholder:text-secondary/30 focus:border-accent"
                      placeholder="Phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="font-mono text-xs uppercase tracking-widest text-secondary/50"
                    >
                      Project Location
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      className="mt-3 w-full border-b border-secondary/15 bg-transparent px-0 py-3 text-sm text-secondary outline-none transition-colors placeholder:text-secondary/30 focus:border-accent"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="projectType"
                    className="font-mono text-xs uppercase tracking-widest text-secondary/50"
                  >
                    Project Type
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue=""
                    className="mt-3 w-full border-b border-secondary/15 bg-transparent px-0 py-3 text-sm text-secondary outline-none focus:border-accent"
                  >
                    <option value="" disabled>
                      Select project type
                    </option>

                    <option value="custom-home">Custom Home</option>

                    <option value="interior-design">
                      Interior Design
                    </option>

                    <option value="commercial">Commercial</option>

                    <option value="hospitality">Hospitality</option>

                    <option value="3d-visualization">
                      3D Visualization
                    </option>

                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="font-mono text-xs uppercase tracking-widest text-secondary/50"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-3 w-full resize-none border-b border-secondary/15 bg-transparent px-0 py-3 text-sm text-secondary outline-none transition-colors placeholder:text-secondary/30 focus:border-accent"
                    placeholder="Tell us about your project, scope, size, timeline, and goals."
                  />
                </div>

                <div className="mt-8">
                  <Button variant="primary" type="submit">
                    Send Project Brief
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section> */}
      <ContactSection/>
    </>
  );
}

