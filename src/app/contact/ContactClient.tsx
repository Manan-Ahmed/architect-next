'use client';

import { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/Layout';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter } from 'lucide-react';
import { FaPinterestP, FaFacebookF } from "react-icons/fa";

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/descorp.official/' },
    { icon: FaPinterestP, label: 'Pinterest', href: 'https://in.pinterest.com/descorp_official/' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/descorpofficial' },
      { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/descorp.official/' },
  
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@thedescorp.com' },
  { icon: Phone, label: 'Phone', value: '+92 334 6699001' },
  { icon: MapPin, label: 'Address', value: "Office No. 403, Imperial Trade Tower, 68-C, Street 7, Jami Commercial Area, Phase VII, DHA, Karachi South, Karachi, Pakistan 7550"}
];



export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputBase =
    'w-full border border-secondary/15 bg-transparent px-4 py-3.5 text-sm text-secondary placeholder:text-secondary/40 transition-all duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's build something enduring."
        subtitle="Tell us about your project — a site, a brief, an ambition. We respond within two business days."
      />

      {/* Contact form + info */}
      <section className="bg-primary py-section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: info */}
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Direct Contact</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-8 space-y-px bg-secondary/10">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4 bg-primary p-5">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-secondary/15 text-accent">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-eyebrow uppercase text-secondary/50">{info.label}</div>
                        <div className="mt-1 text-sm text-secondary">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8">
                  <div className="text-eyebrow uppercase text-secondary/50">Follow</div>
                  <div className="mt-4 flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="flex h-11 w-11 items-center justify-center border border-secondary/15 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
                      >
                        <s.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={150}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-eyebrow uppercase text-secondary/50">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-eyebrow uppercase text-secondary/50">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@gmail.com"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-eyebrow uppercase text-secondary/50">Message</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className={`${inputBase} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group btn-primary w-full md:w-auto"
                  >
                    {submitted ? 'Message Sent' : 'Send Message'}
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  {submitted && (
                    <p className="text-sm text-accent">
                      Thank you — we'll be in touch within two business days.
                    </p>
                  )}
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      

      {/* Map */}
      <section className="bg-primary pb-section">
        <div className="container-content">
          <Reveal>
            <div className="overflow-hidden border border-secondary/10">
              <div className="aspect-[16/6] w-full bg-primary-300">
       <iframe
  title="DESCORP Office Location"
  src="https://www.google.com/maps?q=4th%20Floor,%2068-C,%20Imperial%20Trade%20Tower,%20Lane%207%20Street%2011,%20DHA%20Phase%207%20Phase%202%20Commercial%20Area,%20Karachi,%20Pakistan&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
/>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
