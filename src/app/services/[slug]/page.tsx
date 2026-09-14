import Link from 'next/link';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/Layout';
import { Button } from '@/components/Button';
import { services } from '@/data/content';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} — Services in Pakistan | DESCORP`,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | DESCORP`,
      description: service.metaDescription,
      url: `https://thedescorp.com/services/${service.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | DESCORP`,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const otherServices = services.filter((s) => s.slug !== slug);
  const relatedServices = otherServices.slice(0, 3);
  const nextService = services[(currentIndex + 1) % services.length];

 const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.title,
  name: `${service.title} Services in Pakistan`,
  description: service.metaDescription,
  provider: {
    '@type': 'Organization',
    name: 'DESCORP',
    url: 'https://thedescorp.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Pakistan',
  },
  url: `https://thedescorp.com/services/${service.slug}`,
};
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),

  };

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://thedescorp.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://thedescorp.com/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: `${service.title} Services in Pakistan`,
      item: `https://thedescorp.com/services/${service.slug}`,
    },
  ],
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema),
  }}
/>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid-lines absolute inset-0 opacity-30" />
        <div className="container-content relative">
          <Reveal>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm text-secondary/60 transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              All Services
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>{service.serviceArea ?? 'Service · Pakistan'}</Eyebrow>
          </Reveal>
          <Reveal delay={150}>
           <h1 className="mt-6 font-display text-display-2 text-secondary-100">
  {service.title} Services in Pakistan
</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-secondary/60 md:text-lg">
              {service.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary pb-section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Overview</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 text-lg leading-relaxed text-secondary/80">
                  {service.overview}
                </p>
              </Reveal>

              <Reveal delay={150}>
                <h2 className="mt-14 font-display text-heading text-secondary">
                  What&apos;s Included
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <ul className="mt-6 space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-base text-secondary/70">
                      <span className="h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={100}>
                <div className="border border-secondary/10 bg-primary-100 p-7">
                  <div className="text-eyebrow uppercase text-secondary/50">Scope Note</div>
                  <p className="mt-4 text-sm leading-relaxed text-secondary/70">
                    {service.scopeNote}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="mt-6 flex flex-col gap-3">
                  <Button variant="primary" to="/contact">Start a Project</Button>
                  <Button variant="secondary" to="/contact">Book a Consultation Call</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* How it works remotely */}
      <section className="bg-primary-100 py-section">
        <div className="container-content">
          <div className="max-w-2xl">
            <Reveal>
             <Eyebrow>Our Process · Pakistan</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-heading text-secondary">
                How it works.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              
            <p className="mt-5 text-base leading-relaxed text-secondary/60 md:text-lg">
  A clear, disciplined process from consultation and site analysis
  through design development, documentation, and on-site execution.
</p>
            
            </Reveal>
          </div>

          <div className="mt-14 space-y-px bg-secondary/10">
            {service.howItWorks.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) * 80}>
                <div className="group flex flex-col gap-4 bg-primary p-7 transition-colors duration-500 hover:bg-primary-200 md:flex-row md:items-start md:gap-10 md:p-9">
                  <div className="font-mono text-3xl font-bold text-secondary/20 transition-colors duration-500 group-hover:text-accent md:text-4xl md:flex-shrink-0 md:w-20">
                    {String(i + 1).padStart(2, '0')}
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


      {service.portfolioPreview && service.portfolioPreview.length > 0 && (
        <section className="bg-primary-100 py-section">
          <div className="container-content">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <Reveal>
                  <Eyebrow>Recent Work</Eyebrow>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="mt-5 font-display text-heading text-secondary">
                    A few projects from this service line.
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={150}>
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 text-sm text-secondary/60 transition-colors hover:text-accent"
                >
                  View Full Portfolio
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {service.portfolioPreview.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 80}>
                  <Link href={item.href ?? '/portfolio'} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-secondary transition-colors duration-300 group-hover:text-accent">
                      {item.title}
                    </h3>
                    {item.location && (
                      <p className="mt-1 text-sm text-secondary/50">{item.location}</p>
                    )}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.testimonials && service.testimonials.length > 0 && (
        <section className="bg-primary py-section">
          <div className="container-content">
            <Reveal>
              <Eyebrow>Client Feedback</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-heading text-secondary">
                What clients say.
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-px bg-secondary/10 md:grid-cols-3">
              {service.testimonials.map((t, i) => (
                <Reveal key={t.name} delay={(i % 3) * 80}>
                  <div className="flex h-full flex-col bg-primary p-7">
                    <div className="flex gap-1 text-accent">
                      {Array.from({ length: t.rating ?? 5 }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-secondary/70">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-6 border-t border-secondary/10 pt-4">
                      <div className="text-sm font-bold text-secondary">{t.name}</div>
                      <div className="text-xs text-secondary/50">{t.project}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.packages && service.packages.length > 0 && (
        <section className="bg-primary-100 py-section">
          <div className="container-content">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>Packages</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-5 font-display text-heading text-secondary">
                  Straightforward pricing.
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-5 text-base leading-relaxed text-secondary/60 md:text-lg">
                  Every project is scoped individually — these starting points give you a sense of investment.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px bg-secondary/10 md:grid-cols-3">
              {service.packages.map((pkg, i) => (
                <Reveal key={pkg.name} delay={(i % 3) * 80}>
                  <div className="flex h-full flex-col bg-primary p-8">
                    <h3 className="font-display text-lg font-bold text-secondary">{pkg.name}</h3>
                    <div className="mt-3 font-mono text-2xl font-bold text-accent">
                      {pkg.startingPrice}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-secondary/60">
                      {pkg.description}
                    </p>
                    <ul className="mt-6 flex-1 space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-secondary/70">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button variant="secondary" to="/contact">Get Started</Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-primary py-section">
        <div className="container-content">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-heading text-secondary">
              Common questions.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-px bg-secondary/10">
            {service.faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={(i % 3) * 80}>
                <div className="bg-primary p-7 md:p-8">
                  <h3 className="font-display text-lg font-bold text-secondary">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/60 md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-100 py-section">
        <div className="container-content">
          <Reveal>
            <Eyebrow>Related Services</Eyebrow>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px bg-secondary/10 sm:grid-cols-3">
            {relatedServices.map((rs, i) => (
              <Reveal key={rs.id} delay={(i % 3) * 80}>
                <Link
                  href={`/services/${rs.slug}`}
                  className="group relative block h-full bg-primary p-7 transition-colors duration-500 hover:bg-primary-200"
                >
                  <rs.icon className="h-6 w-6 text-accent transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="mt-4 font-display text-base font-bold text-secondary">
                    {rs.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary/60">
                    {rs.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-200 py-section">
        <div className="container-content">
          <Link href={`/services/${nextService.slug}`} className="group block">
            <Reveal>
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="text-eyebrow uppercase text-secondary/50">Next Service</span>
                  <h2 className="mt-3 font-display text-heading text-secondary-100 transition-colors duration-300 group-hover:text-accent">
                    {nextService.title}
                  </h2>
                </div>
                <span className="flex h-14 w-14 items-center justify-center border border-secondary/20 text-secondary transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </div>
            </Reveal>
          </Link>
        </div>
      </section>
    </>
  );
}
