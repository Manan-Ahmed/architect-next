'use client';

import { useState, useRef } from 'react'; // 1. useRef ko add kiya
import { Reveal } from './Reveal';
import { Eyebrow } from './Layout';
import { Mail, Phone, MapPin, Send,  } from 'lucide-react';

import { Instagram, Linkedin } from "lucide-react";
import { FaPinterestP, FaFacebookF } from "react-icons/fa";
import emailjs from '@emailjs/browser'; // 2. EmailJS library import ki

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/descorp.official/' },
  { icon: FaPinterestP, label: 'Pinterest', href: 'https://in.pinterest.com/descorp_official/' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/descorpofficial' },
    { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/descorp.official/' },

];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@thedescorp.com' },
  { icon: Phone, label: 'Phone', value: '+92 334 6699001' },
  { icon: MapPin, label: 'Studio', value: 'Office No. 403, Imperial Trade Tower, 68-C, Street 7, Jami Commercial Area, Phase VII, DHA, Karachi South, Karachi, Pakistan 75500' },
];

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null); // 3. Form reference banaya TypeScript ke sath
  const [submitted, setSubmitted] = useState(false);
  const [statusText, setStatusText] = useState(''); // Loading ya error status ke liye
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusText('Sending...');

    // 4. EmailJS bhejny ka tareeqa (process.env se)
    if (formRef.current) {
emailjs.sendForm(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  formRef.current,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
)


      .then((result) => {
          setSubmitted(true);
          setStatusText("Thank you —");
          setForm({ name: '', email: '', message: '' }); // Form states clear ki
          setTimeout(() => setSubmitted(false), 4000);
      }, (error) => {
  console.error("Full Error:", error);
          setStatusText("Something went wrong. Please try again.");
      });
    }
    
  };

  const inputBase =
    'w-full border border-secondary/15 bg-transparent px-4 py-3.5 text-sm text-secondary placeholder:text-secondary/40 transition-all duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

  return (
    <section id="contact" className="bg-primary-200 py-section text-secondary">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <Reveal><Eyebrow>Get in Touch</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-heading">
                Let's build
                <br />
                something
                <span className="text-accent"> enduring.</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-secondary/70 md:text-lg">
                Tell us about your project — a site, a brief, an ambition. We respond within
                two business days.
              </p>
            </Reveal>

            <div className="mt-10 space-y-px bg-secondary/10">
              {contactInfo.map((info, i) => (
                <Reveal key={info.label} delay={200 + i * 80}>
                  <div className="flex items-center gap-4 bg-primary p-5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-secondary/15 text-accent">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-eyebrow uppercase text-secondary/50">{info.label}</div>
                      <div className="mt-1 text-sm text-secondary">{info.value}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={450}>
              <div className="mt-8">
                <div className="text-eyebrow uppercase text-secondary/50">Follow</div>
                <div className="mt-4 flex gap-3">
                  {/* {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center border border-primary/15 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))} */}

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
            <Reveal delay={200}>
              {/* 5. form par ref={formRef} lagaya */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-eyebrow uppercase text-secondary/50">Name</label>
                  {/* 6. name="user_name" attribute add kiya */}
                  <input
                    type="text"
                    name="user_name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-eyebrow uppercase text-secondary/50">Email</label>
                  {/* 7. name="user_email" attribute add kiya */}
                  <input
                    type="email"
                    name="user_email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@studio.com"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-eyebrow uppercase text-secondary/50">Message</label>
                  {/* 8. name="message" attribute add kiya */}
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className={`${inputBase} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="group btn-primary w-full md:w-auto"
                  disabled={statusText === 'Sending...'}
                >
                  {statusText === 'Sending...' ? 'Sending...' : submitted ? 'Message Sent' : 'Send Message'}
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                
                {statusText && (
                  <p className={`text-sm ${statusText.includes('wrong') ? 'text-red-500' : 'text-accent'}`}>
                    {statusText}
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>

        {/* Updated Google Map */}
        <Reveal delay={150}>
          <div className="mt-16 overflow-hidden border border-secondary/10">
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
  );
}
