// 'use client';

// import { useState } from 'react';
// import { PageHero } from '@/components/PageHero';
// import { Reveal } from '@/components/Reveal';
// import { Eyebrow } from '@/components/Layout';
// import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter } from 'lucide-react';
// import { FaPinterestP, FaFacebookF } from "react-icons/fa";

// const socials = [
//   { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/descorp.official/' },
//     { icon: FaPinterestP, label: 'Pinterest', href: 'https://in.pinterest.com/descorp_official/' },
//     { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/descorpofficial' },
//       { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/descorp.official/' },
  
// ];

// const contactInfo = [
//   { icon: Mail, label: 'Email', value: 'info@thedescorp.com' },
//   { icon: Phone, label: 'Phone', value: '+92 334 6699001' },
//   { icon: MapPin, label: 'Address', value: "Office No. 403, Imperial Trade Tower, 68-C, Street 7, Jami Commercial Area, Phase VII, DHA, Karachi South, Karachi, Pakistan 7550"}
// ];



// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);
//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setForm({ name: '', email: '', message: '' });
//     setTimeout(() => setSubmitted(false), 4000);
//   };

//   const inputBase =
//     'w-full border border-secondary/15 bg-transparent px-4 py-3.5 text-sm text-secondary placeholder:text-secondary/40 transition-all duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

//   return (
//     <>
//       <PageHero
//         eyebrow="Get in Touch"
//         title="Let's build something enduring."
//         subtitle="Tell us about your project — a site, a brief, an ambition. We respond within two business days."
//       />

//       {/* Contact form + info */}
//       <section className="bg-primary py-section">
//         <div className="container-content">
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
//             {/* Left: info */}
//             <div className="lg:col-span-5">
//               <Reveal>
//                 <Eyebrow>Direct Contact</Eyebrow>
//               </Reveal>
//               <Reveal delay={100}>
//                 <div className="mt-8 space-y-px bg-secondary/10">
//                   {contactInfo.map((info) => (
//                     <div key={info.label} className="flex items-center gap-4 bg-primary p-5">
//                       <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-secondary/15 text-accent">
//                         <info.icon className="h-5 w-5" />
//                       </div>
//                       <div>
//                         <div className="text-eyebrow uppercase text-secondary/50">{info.label}</div>
//                         <div className="mt-1 text-sm text-secondary">{info.value}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </Reveal>

//               <Reveal delay={200}>
//                 <div className="mt-8">
//                   <div className="text-eyebrow uppercase text-secondary/50">Follow</div>
//                   <div className="mt-4 flex gap-3">
//                     {socials.map((s) => (
//                       <a
//                         key={s.label}
//                         href={s.href}
//                         aria-label={s.label}
//                         className="flex h-11 w-11 items-center justify-center border border-secondary/15 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
//                       >
//                         <s.icon className="h-4 w-4" />
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </Reveal>
//             </div>

//             {/* Right: form */}
//             <div className="lg:col-span-6 lg:col-start-7">
//               <Reveal delay={150}>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label className="mb-2 block text-eyebrow uppercase text-secondary/50">Name</label>
//                     <input
//                       type="text"
//                       required
//                       value={form.name}
//                       onChange={(e) => setForm({ ...form, name: e.target.value })}
//                       placeholder="Your name"
//                       className={inputBase}
//                     />
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-eyebrow uppercase text-secondary/50">Email</label>
//                     <input
//                       type="email"
//                       required
//                       value={form.email}
//                       onChange={(e) => setForm({ ...form, email: e.target.value })}
//                       placeholder="you@gmail.com"
//                       className={inputBase}
//                     />
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-eyebrow uppercase text-secondary/50">Message</label>
//                     <textarea
//                       required
//                       rows={6}
//                       value={form.message}
//                       onChange={(e) => setForm({ ...form, message: e.target.value })}
//                       placeholder="Tell us about your project..."
//                       className={`${inputBase} resize-none`}
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="group btn-primary w-full md:w-auto"
//                   >
//                     {submitted ? 'Message Sent' : 'Send Message'}
//                     <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                   </button>
//                   {submitted && (
//                     <p className="text-sm text-accent">
//                       Thank you — we'll be in touch within two business days.
//                     </p>
//                   )}
//                 </form>
//               </Reveal>
//             </div>
//           </div>
//         </div>
//       </section>

      

//       {/* Map */}
//       <section className="bg-primary pb-section">
//         <div className="container-content">
//           <Reveal>
//             <div className="overflow-hidden border border-secondary/10">
//               <div className="aspect-[16/6] w-full bg-primary-300">
//        <iframe
//   title="DESCORP Office Location"
//   src="https://www.google.com/maps?q=4th%20Floor,%2068-C,%20Imperial%20Trade%20Tower,%20Lane%207%20Street%2011,%20DHA%20Phase%207%20Phase%202%20Commercial%20Area,%20Karachi,%20Pakistan&output=embed"
//   width="100%"
//   height="100%"
//   style={{ border: 0 }}
//   loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade"
//   allowFullScreen
// />
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }





'use client';

import { useState, useRef } from 'react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { Eyebrow } from '@/components/Layout';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  ChevronDown,
} from 'lucide-react';
import { FaPinterestP, FaFacebookF } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const socials = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/descorp.official/',
  },
  {
    icon: FaPinterestP,
    label: 'Pinterest',
    href: 'https://in.pinterest.com/descorp_official/',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/descorpofficial',
  },
  {
    icon: FaFacebookF,
    label: 'Facebook',
    href: 'https://www.facebook.com/descorp.official/',
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@thedescorp.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 334 6699001',
  },
  {
    icon: MapPin,
    label: 'Address',
    value:
      'Office No. 403, Imperial Trade Tower, 68-C, Street 7, Jami Commercial Area, Phase VII, DHA, Karachi South, Karachi, Pakistan 75500',
  },
];

const usaStates = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

const pakistanCities = [
  'Karachi',
  'Lahore',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Quetta',
  'Hyderabad',
  'Sialkot',
  'Gujranwala',
  'Other',
];

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [statusText, setStatusText] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setStatusText('Sending...');

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSubmitted(true);
          setStatusText('');

          setForm({
            name: '',
            email: '',
            country: '',
            location: '',
            message: '',
          });

          setTimeout(() => {
            setSubmitted(false);
          }, 4000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatusText(
            'Something went wrong. Please try again.'
          );
        }
      );
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
                    <div
                      key={info.label}
                      className="flex items-center gap-4 bg-primary p-5"
                    >
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-secondary/15 text-accent">
                        <info.icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="text-eyebrow uppercase text-secondary/50">
                          {info.label}
                        </div>

                        <div className="mt-1 text-sm text-secondary">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8">
                  <div className="text-eyebrow uppercase text-secondary/50">
                    Follow
                  </div>

                  <div className="mt-4 flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
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
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* NAME */}
                  <div>
                    <label className="mb-2 block text-eyebrow uppercase text-secondary/50">
                      Name
                    </label>

                    <input
                      type="text"
                      name="user_name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      placeholder="Your name"
                      className={inputBase}
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 block text-eyebrow uppercase text-secondary/50">
                      Email
                    </label>

                    <input
                      type="email"
                      name="user_email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      placeholder="you@gmail.com"
                      className={inputBase}
                    />
                  </div>

                  {/* COUNTRY */}
                  <div>
                    <label className="mb-2 block text-eyebrow uppercase text-secondary/50">
                      Country
                    </label>

                    <div className="relative">
                      <select
                        name="country"
                        required
                        value={form.country}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            country: e.target.value,
                            location: '',
                          })
                        }
                        className={`${inputBase} appearance-none pr-10`}
                      >
                        <option value="" disabled>
                          Select country
                        </option>

                        <option value="United States">
                          United States
                        </option>

                        <option value="Pakistan">
                          Pakistan
                        </option>

                        <option value="Other">
                          Other
                        </option>
                      </select>

                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40"
                      />
                    </div>
                  </div>

                  {/* USA STATE */}
                  {form.country === 'United States' && (
                    <div>
                      <label className="mb-2 block text-eyebrow uppercase text-secondary/50">
                        State
                      </label>

                      <div className="relative">
                        <select
                          name="location"
                          required
                          value={form.location}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              location: e.target.value,
                            })
                          }
                          className={`${inputBase} appearance-none pr-10`}
                        >
                          <option value="" disabled>
                            Select state
                          </option>

                          {usaStates.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40"
                        />
                      </div>
                    </div>
                  )}

                  {/* PAKISTAN CITY */}
                  {form.country === 'Pakistan' && (
                    <div>
                      <label className="mb-2 block text-eyebrow uppercase text-secondary/50">
                        City
                      </label>

                      <div className="relative">
                        <select
                          name="location"
                          required
                          value={form.location}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              location: e.target.value,
                            })
                          }
                          className={`${inputBase} appearance-none pr-10`}
                        >
                          <option value="" disabled>
                            Select city
                          </option>

                          {pakistanCities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40"
                        />
                      </div>
                    </div>
                  )}

                  {/* OTHER LOCATION */}
                  {form.country === 'Other' && (
                    <div>
                      <label className="mb-2 block text-eyebrow uppercase text-secondary/50">
                        City / State / Region
                      </label>

                      <input
                        type="text"
                        name="location"
                        required
                        value={form.location}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            location: e.target.value,
                          })
                        }
                        placeholder="Enter your city, state or region"
                        className={inputBase}
                      />
                    </div>
                  )}

                  {/* MESSAGE */}
                  <div>
                    <label className="mb-2 block text-eyebrow uppercase text-secondary/50">
                      Message
                    </label>

                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          message: e.target.value,
                        })
                      }
                      placeholder="Tell us about your project..."
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={statusText === 'Sending...'}
                    className="group btn-primary w-full md:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {statusText === 'Sending...'
                      ? 'Sending...'
                      : submitted
                      ? 'Message Sent'
                      : 'Send Message'}

                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  {/* SUCCESS / ERROR */}
                  {submitted && (
                    <p className="text-sm text-accent">
                      Thank you — we&apos;ll be in touch within two
                      business days.
                    </p>
                  )}

                  {statusText &&
                    statusText !== 'Sending...' &&
                    !submitted && (
                      <p className="text-sm text-red-400">
                        {statusText}
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
