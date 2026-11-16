import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/Layout';
import { Button } from '@/components/Button';
import { Stats } from '@/components/Stats';

const SITE = 'https://thedescorp.com';
const LAST_UPDATED = '2026-11-17'; // jab bhi page ka content badlein, yeh date update karein

export const metadata: Metadata = {
  title: {
    absolute: 'About DESCORP | Architects & Interior Designers in Karachi',
  },
  description:
    'DESCORP is a Karachi architecture and interior design studio founded in 2020 by Nehal H. Mansoori. Learn about our story and human-centered design approach.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    title: 'About DESCORP | Architects & Interior Designers in Karachi',
    description:
      'Karachi architecture and interior design studio founded in 2020.',
    url: `${SITE}/about`,
    siteName: 'DESCORP',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About DESCORP | Architects & Interior Designers in Karachi',
    description:
      'Karachi architecture and interior design studio founded in 2020.',
    images: ['/og-image.jpg'],
  },
};

/* ---------- Data (page aur schema dono isi se bante hain, taake match karein) ---------- */

const ADDRESS = {
  street:
    '4th Floor, 68-C, Imperial Trade Tower, Street 11, Lane 7, Seher Commercial Area, DHA Phase 7',
  city: 'Karachi',
  region: 'Sindh',
  postalCode: '75500',
  country: 'PK',
};

const PHONE = '+92 334 6699001';
const PHONE_TEL = '+923346699001';
const EMAIL = 'info@thedescorp.com';

const faqs = [
  {
    q: 'What is DESCORP?',
    a: 'DESCORP is an architecture, interior design and project execution studio based in DHA Phase 7, Karachi, Pakistan. Founded in 2020, it designs and delivers residential, commercial and hospitality projects.',
  },
  {
    q: 'Where is DESCORP located?',
    a: 'DESCORP is located at 4th Floor, 68-C, Imperial Trade Tower, Street 11, Lane 7, Seher Commercial Area, DHA Phase 7, Karachi 75500, Pakistan.',
  },
  {
    q: 'Who founded DESCORP and when?',
    a: 'Nehal H. Mansoori, an architect with a BS in Architecture and more than six years of experience, founded DESCORP in Karachi in 2020.',
  },
  {
    q: 'What services does DESCORP offer?',
    a: 'DESCORP offers architectural design, interior design, building and renovation, and project management in Karachi. For clients in the USA, it also offers remote architecture consultation, remote interior design consultation and 3D visualization.',
  },
  {
    q: 'What types of projects does DESCORP design?',
    a: 'DESCORP works on residential projects such as custom homes and farmhouses, commercial buildings, hospitality projects such as hotels, and interior design for apartments and homes. Featured projects include The Palm Haus farmhouse, a G+5 hotel in Saddar, Karachi, and a three-bedroom apartment interior in Karachi.',
  },
  {
    q: 'Does DESCORP work with clients outside Pakistan?',
    a: 'Yes. DESCORP offers remote architecture consultation, remote interior design consultation and 3D visualization for clients in the USA, with the process coordinated online through video calls.',
  },
  {
    q: 'How does the DESCORP design process work?',
    a: 'Every project follows five stages: consultation and brief, concept and design, detailed drawings, construction and project management, and final handover.',
  },
  {
    q: 'How can I contact DESCORP?',
    a: `You can call ${PHONE}, email ${EMAIL}, or send a project inquiry through the contact form on thedescorp.com.`,
  },
];

const steps = [
  {
    step: '01',
    title: 'Consultation & Brief',
    text: 'We start by listening: your lifestyle, plot, budget and timeline.',
  },
  {
    step: '02',
    title: 'Concept & Design',
    text: 'Layouts, elevations and 3D visuals, so you can see the space before it is built.',
  },
  {
    step: '03',
    title: 'Detailed Drawings',
    text: 'Working drawings and specifications that your contractor can build from.',
  },
  {
    step: '04',
    title: 'Construction & Project Management',
    text: 'On-site coordination of schedule, budget and labour.',
  },
  {
    step: '05',
    title: 'Handover',
    text: 'Final quality checks and a smooth handover of your finished space.',
  },
];

const services = [
  { name: 'Architectural Design', href: '/services/architectural-design' },
  { name: 'Interior Design', href: '/services/interior-design' },
  { name: 'Building & Renovation', href: '/services/building-renovation' },
  { name: 'Project Management', href: '/services/project-management' },
  {
    name: 'Remote Architecture Consultation (USA)',
    href: '/usa/remote-architecture-consultation',
  },
  { name: 'Remote Interior Design (USA)', href: '/usa/remote-interior-design' },
  { name: '3D Visualization (USA)', href: '/usa/remote-3d-visualization' },
];

/* ---------- Structured data ---------- */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${SITE}/about#webpage`,
      url: `${SITE}/about`,
      name: 'About DESCORP | Architects & Interior Designers in Karachi',
      description:
        'DESCORP is a Karachi architecture and interior design studio founded in 2020 by Nehal H. Mansoori.',
      inLanguage: 'en',
      dateModified: LAST_UPDATED,
      about: { '@id': `${SITE}/#organization` },
      mainEntity: { '@id': `${SITE}/#organization` },
      breadcrumb: { '@id': `${SITE}/about#breadcrumb` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}/#organization`,
      name: 'DESCORP',
      url: SITE,
      logo: `${SITE}/DESCORP%20LOGO%20PNG.png`,
      image: `${SITE}/og-image.jpg`,
      description:
        'Architecture, interior design and project execution studio in DHA Phase 7, Karachi, delivering residential, commercial and hospitality projects.',
      foundingDate: '2020',
      founder: { '@id': `${SITE}/about#founder` },
      telephone: PHONE,
      email: EMAIL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.country,
      },
      areaServed: [
        { '@type': 'City', name: 'Karachi' },
        { '@type': 'Country', name: 'Pakistan' },
        { '@type': 'Country', name: 'United States' },
      ],
      knowsAbout: [
        'Architectural design',
        'Interior design',
        'Residential architecture',
        'Commercial architecture',
        'Hospitality design',
        'Building and renovation',
        'Project management',
        '3D visualization',
      ],
      sameAs: [
        'https://www.instagram.com/descorp.official/',
        'https://www.linkedin.com/company/descorpofficial',
        'https://www.facebook.com/descorp.official/',
        'https://www.pinterest.com/descorp_official/',
      ],
    },
    {
      '@type': 'Person',
      '@id': `${SITE}/about#founder`,
      name: 'Nehal H. Mansoori',
      jobTitle: 'Founder and Architect',
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Bachelor of Science in Architecture',
      },
      worksFor: { '@id': `${SITE}/#organization` },
      url: `${SITE}/about`,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE}/about#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About',
          item: `${SITE}/about`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE}/about#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

/* ---------- Page ---------- */

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <PageHero
        eyebrow="The Studio · DHA Phase 7, Karachi"
        title="Architects & Interior Designers in Karachi, since 2020."
        subtitle="Residential, commercial and hospitality architecture and interiors, designed and delivered from our studio in DHA Phase 7."
      />

      {/* Answer-first summary (AI aur search engines is hisse ko seedha quote kar sakte hain) */}
      <section className="bg-primary pt-section" aria-labelledby="at-a-glance">
        <div className="container-content">
          <Reveal>
            <h2
              id="at-a-glance"
              className="font-display text-heading text-secondary"
            >
              DESCORP at a glance
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-secondary/70 md:text-lg">
              DESCORP is an architecture, interior design and project execution
              studio in DHA Phase 7, Karachi, Pakistan, founded in 2020 by Nehal
              H. Mansoori. The studio designs and delivers residential,
              commercial and hospitality projects in Karachi, and offers remote
              architecture consultation, interior design and 3D visualization to
              clients in the USA.
            </p>

            <dl className="mt-10 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-5 text-secondary/70 sm:grid-cols-[180px_1fr]">
              <dt className="text-secondary">Studio</dt>
              <dd>DESCORP, architecture &amp; interior design studio</dd>

              <dt className="text-secondary">Founded</dt>
              <dd>2020</dd>

              <dt className="text-secondary">Founder</dt>
              <dd>Nehal H. Mansoori</dd>

              <dt className="text-secondary">Location</dt>
              <dd>
                <address className="not-italic">
                  4th Floor, 68-C, Imperial Trade Tower, Street 11, Lane 7,
                  Seher Commercial Area, DHA Phase 7, Karachi 75500, Pakistan
                </address>
              </dd>

              <dt className="text-secondary">Project types</dt>
              <dd>Residential, commercial, hospitality, interiors</dd>

              <dt className="text-secondary">Remote services</dt>
              <dd>
                Architecture and interior design consultation for USA clients
              </dd>

              <dt className="text-secondary">Contact</dt>
              <dd>
                <a className="underline" href={`tel:${PHONE_TEL}`}>
                  {PHONE}
                </a>
                {' · '}
                <a className="underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </dd>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Studio story */}
      <section className="bg-primary py-section" aria-labelledby="our-story">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Our Story</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  id="our-story"
                  className="mt-6 font-display text-heading text-secondary"
                >
                  A practice built on precision and restraint.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={150}>
                <p className="text-base leading-relaxed text-secondary/70 md:text-lg">
                  DESCORP began in 2020 as a small studio built on a simple
                  belief: <b>design should make life better.</b> What started as
                  one designer&apos;s vision has grown into a multidisciplinary
                  team delivering homes, farmhouses, hotels and interiors in
                  Karachi, and design services for clients abroad.
                </p>
                <p className="mt-6 text-base leading-relaxed text-secondary/70 md:text-lg">
                  Our work is rooted in a human-centered approach. Every project
                  begins with understanding how people live, what they need, and
                  the challenges their spaces present. By simplifying the design
                  process, we create an environment where clients can express
                  their stories, needs and aspirations, and become part of the
                  design journey.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-base leading-relaxed text-secondary/70 md:text-lg">
                  Today, DESCORP continues to build on that original vision:
                  creating architecture and interiors that are{' '}
                  <b>
                    purposeful, intuitive, and deeply connected to the people who
                    inhabit them.
                  </b>{' '}
                  See our{' '}
                  <Link className="underline" href="/projects">
                    recent projects in Karachi
                  </Link>
                  , including the{' '}
                  <Link className="underline" href="/projects/the-palm-haus">
                    Palm Haus farmhouse
                  </Link>{' '}
                  and a{' '}
                  <Link
                    className="underline"
                    href="/projects/hotel-saddar-karachi"
                  >
                    hotel in Saddar
                  </Link>
                  .
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-primary py-section" aria-labelledby="founder">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Meet the Founder</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  id="founder"
                  className="mt-6 font-display text-heading text-secondary"
                >
                  Nehal H. Mansoori
                </h2>
              </Reveal>
              <Reveal delay={150}>
                {/* TODO: yeh temporary photo hai (homepage wali interior image).
                    Founder ki asli photo /public/founder/nehal-mansoori.webp mein rakhein
                    aur src="/founder/nehal-mansoori.webp" kar dein. */}
                <div className="relative mt-8 aspect-[4/5] w-full max-w-sm overflow-hidden">
                  <Image
                    src="/interior/2.webp"
                    alt="Nehal H. Mansoori, founder of DESCORP architecture studio in Karachi"
                    fill
                    sizes="(max-width: 1024px) 100vw, 384px"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={150}>
                <p className="text-base leading-relaxed text-secondary/70 md:text-lg">
                  Nehal H. Mansoori founded DESCORP in 2020 and leads the
                  studio&apos;s design direction across architecture and
                  interiors. Nehal holds a BS in Architecture and has more than
                  six years of experience designing homes, hotels and interiors.
                </p>
                {/* Optional: agar professional registration (jaise PCATP/PEC) hai
                    to yahan ek line add karein. */}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Services */}
      <section className="bg-primary py-section" aria-labelledby="what-we-do">
        <div className="container-content">
          <Reveal>
            <Eyebrow>What We Do</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="what-we-do"
              className="mt-6 font-display text-heading text-secondary"
            >
              Architecture, interior design and construction services in Karachi.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s.href} className="border-t border-secondary/10 pt-4">
                  <Link
                    className="text-secondary underline-offset-4 hover:underline"
                    href={s.href}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-primary py-section" aria-labelledby="how-we-work">
        <div className="container-content">
          <Reveal>
            <Eyebrow>How We Work</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="how-we-work"
              className="mt-6 font-display text-heading text-secondary"
            >
              From first conversation to final handover.
            </h2>
          </Reveal>
          <ol className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((p, i) => (
              <li key={p.step} className="border-t border-secondary/10 pt-6">
                <Reveal delay={100 + i * 50}>
                  <span className="text-accent">{p.step}</span>
                  <h3 className="mt-3 font-display text-xl text-secondary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary/60">
                    {p.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ (yahi text schema mein bhi hai) */}
      <section className="bg-primary py-section" aria-labelledby="faq">
        <div className="container-content">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2
              id="faq"
              className="mt-6 font-display text-heading text-secondary"
            >
              Frequently asked questions about DESCORP.
            </h2>
          </Reveal>
          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-10">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-xl text-secondary">{f.q}</h3>
                <p className="mt-3 text-base leading-relaxed text-secondary/70">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-secondary/40">
            Last updated: <time dateTime={LAST_UPDATED}>November 2026</time>
          </p>
        </div>
      </section>

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
                  We&apos;d love to hear about it. Every great building starts
                  with a conversation.
                </p>
              </div>
              <Button variant="primary" to="/contact">
                Start a Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

// import { PageHero } from '@/components/PageHero';
// import { Reveal } from '@/components/Reveal';
// import { Eyebrow } from '@/components/Layout';
// import { Button } from '@/components/Button';
// import { Stats, PhilosophyTeaser } from '@/components/Stats';

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About DESCORP | Architecture & Interior Design Studio",

//   description:
//     "Learn about DESCORP, our design philosophy, expertise, and commitment to creating timeless architecture.",

//   alternates: {
//     canonical: "/about",
//   },
// };

// export default function AboutPage() {
//   return (
//     <>
//       <PageHero
//         eyebrow="The Studio"
//         title="Building with intent since 2020."
//         subtitle="DESCORP is an architecture, interior design and project execution studio working across residential, commercial, and cultural sectors across the globe."
//       />

//       {/* Studio story */}
//       <section className="bg-primary py-section">
//         <div className="container-content">
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
//             <div className="lg:col-span-5">
//               <Reveal>
//                 <Eyebrow>Our Story</Eyebrow>
//               </Reveal>
//               <Reveal delay={100}>
//                 <h2 className="mt-6 font-display text-heading text-secondary">
//                   A practice built on precision and restraint.
//                 </h2>
//               </Reveal>
//             </div>
//             <div className="lg:col-span-6 lg:col-start-7">
//               <Reveal delay={150}>
//                 <p className="text-base leading-relaxed text-secondary/70 md:text-lg">
//                  Founded in 2020 by Nehal H. Mansoori, DESCORP began as a small studio built on a simple belief: <b>design should make life better.</b> What started as one designer’s vision has evolved into a growing multidisciplinary team delivering projects across multiple regions and around the globe.

// Our work is rooted in a human-centered approach to architecture and design. We believe every project begins with understanding how people live, what they need, and the challenges their spaces present. By simplifying the design process, we create an environment where clients can actively express their stories, needs, and aspirations—and become part of the design journey.

//                 </p>
//               </Reveal>
//               <Reveal delay={200}>
//                 <p className="mt-6 text-base leading-relaxed text-secondary/70 md:text-lg">
//                  Today, DESCORP continues to build on that original vision: creating architecture and interiors that are <b>purposeful, intuitive, and deeply connected to the people who inhabit them.</b>

//                 </p>
//               </Reveal>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <Stats />

//       {/* Philosophy */}
//       <PhilosophyTeaser />

//       {/* CTA */}
//       <section className="bg-primary py-section">
//         <div className="container-content">
//           <Reveal>
//             <div className="flex flex-col items-start gap-6 border border-secondary/10 p-10 md:flex-row md:items-center md:justify-between md:p-14">
//               <div>
//                 <h2 className="font-display text-heading text-secondary">
//                   Have a project in mind?
//                 </h2>
//                 <p className="mt-3 text-base text-secondary/60">
//                   We'd love to hear about it. Every great building starts with a conversation.
//                 </p>
//               </div>
//               <Button variant="primary" to="/contact">Start a Project</Button>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }
