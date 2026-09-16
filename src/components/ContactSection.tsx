// 'use client';

// import { useState, useRef } from 'react';
// import { Reveal } from './Reveal';
// import { Eyebrow } from './Layout';
// import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';

// import { Instagram, Linkedin } from 'lucide-react';
// import { FaPinterestP, FaFacebookF } from 'react-icons/fa';
// import emailjs from '@emailjs/browser';

// const socials = [
//   {
//     icon: Instagram,
//     label: 'Instagram',
//     href: 'https://www.instagram.com/descorp.official/',
//   },
//   {
//     icon: FaPinterestP,
//     label: 'Pinterest',
//     href: 'https://in.pinterest.com/descorp_official/',
//   },
//   {
//     icon: Linkedin,
//     label: 'LinkedIn',
//     href: 'https://www.linkedin.com/company/descorpofficial',
//   },
//   {
//     icon: FaFacebookF,
//     label: 'Facebook',
//     href: 'https://www.facebook.com/descorp.official/',
//   },
// ];

// const contactInfo = [
//   {
//     icon: Mail,
//     label: 'Email',
//     value: 'info@thedescorp.com',
//   },
//   {
//     icon: Phone,
//     label: 'Phone',
//     value: '+92 334 6699001',
//   },
//   {
//     icon: MapPin,
//     label: 'Studio',
//     value:
//       'Office No. 403, Imperial Trade Tower, 68-C, Street 7, Jami Commercial Area, Phase VII, DHA, Karachi South, Karachi, Pakistan 75500',
//   },
// ];

// export function ContactSection() {
//   const formRef = useRef<HTMLFormElement>(null);

//   const [submitted, setSubmitted] = useState(false);
//   const [statusText, setStatusText] = useState('');

//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     location: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatusText('Sending...');

//     if (formRef.current) {
//       emailjs
//         .sendForm(
//           process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//           process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//           formRef.current,
//           process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//         )
//         .then(
//           () => {
//             setSubmitted(true);
//             setStatusText('Thank you —');

//             setForm({
//               name: '',
//               email: '',
//               location: '',
//               message: '',
//             });

//             setTimeout(() => setSubmitted(false), 4000);
//           },
//           (error) => {
//             console.error('Full Error:', error);
//             setStatusText('Something went wrong. Please try again.');
//           }
//         );
//     }
//   };

//   const inputBase =
//     'w-full border border-secondary/15 bg-transparent px-4 py-3.5 text-sm text-secondary placeholder:text-secondary/40 transition-all duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

//   return (
//     <section id="contact" className="bg-primary-200 py-section text-secondary">
//       <div className="container-content">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

//           {/* Left: info */}
//           <div className="lg:col-span-5">
//             <Reveal>
//               <Eyebrow>Get in Touch</Eyebrow>
//             </Reveal>

//             <Reveal delay={100}>
//               <h2 className="mt-5 font-display text-heading">
//                 Let's build
//                 <br />
//                 something
//                 <span className="text-accent"> enduring.</span>
//               </h2>
//             </Reveal>

//             <Reveal delay={150}>
//               <p className="mt-6 max-w-md text-base leading-relaxed text-secondary/70 md:text-lg">
//                 Tell us about your project — a site, a brief, an ambition. We respond within
//                 two business days.
//               </p>
//             </Reveal>

//             <div className="mt-10 space-y-px bg-secondary/10">
//               {contactInfo.map((info, i) => (
//                 <Reveal key={info.label} delay={200 + i * 80}>
//                   <div className="flex items-center gap-4 bg-primary p-5">
//                     <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-secondary/15 text-accent">
//                       <info.icon className="h-5 w-5" />
//                     </div>

//                     <div>
//                       <div className="text-eyebrow uppercase text-secondary/50">
//                         {info.label}
//                       </div>

//                       <div className="mt-1 text-sm text-secondary">
//                         {info.value}
//                       </div>
//                     </div>
//                   </div>
//                 </Reveal>
//               ))}
//             </div>

//             <Reveal delay={450}>
//               <div className="mt-8">
//                 <div className="text-eyebrow uppercase text-secondary/50">
//                   Follow
//                 </div>

//                 <div className="mt-4 flex gap-3">
//                   {socials.map((s) => (
//                     <a
//                       key={s.label}
//                       href={s.href}
//                       aria-label={s.label}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex h-11 w-11 items-center justify-center border border-secondary/15 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
//                     >
//                       <s.icon className="h-4 w-4" />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </Reveal>
//           </div>

//           {/* Right: form */}
//           <div className="lg:col-span-6 lg:col-start-7">
//             <Reveal delay={200}>

//               <form
//                 ref={formRef}
//                 onSubmit={handleSubmit}
//                 className="space-y-6"
//               >

//                 {/* Name */}
//                 <div>
//                   <label className="mb-2 block text-eyebrow uppercase text-secondary/50">
//                     Name
//                   </label>

//                   <input
//                     type="text"
//                     name="user_name"
//                     required
//                     value={form.name}
//                     onChange={(e) =>
//                       setForm({ ...form, name: e.target.value })
//                     }
//                     placeholder="Your full name"
//                     className={inputBase}
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="mb-2 block text-eyebrow uppercase text-secondary/50">
//                     Email
//                   </label>

//                   <input
//                     type="email"
//                     name="user_email"
//                     required
//                     value={form.email}
//                     onChange={(e) =>
//                       setForm({ ...form, email: e.target.value })
//                     }
//                     placeholder="you@studio.com"
//                     className={inputBase}
//                   />
//                 </div>

//                 {/* Location Dropdown */}
//                 <div>
//                   <label className="mb-2 block text-eyebrow uppercase text-secondary/50">
//                     Location
//                   </label>

//                   <div className="relative">
//                     <select
//                       name="location"
//                       required
//                       value={form.location}
//                       onChange={(e) =>
//                         setForm({ ...form, location: e.target.value })
//                       }
//                       className={`${inputBase} appearance-none cursor-pointer pr-12`}
//                     >
//                       <option value="" disabled>
//                         Select your location
//                       </option>

//                       <option value="Pakistan">
//                         Pakistan
//                       </option>

//                       <option value="USA">
//                         USA
//                       </option>
//                     </select>

//                     <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary/50" />
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="mb-2 block text-eyebrow uppercase text-secondary/50">
//                     Message
//                   </label>

//                   <textarea
//                     name="message"
//                     required
//                     rows={5}
//                     value={form.message}
//                     onChange={(e) =>
//                       setForm({ ...form, message: e.target.value })
//                     }
//                     placeholder="Tell us about your project..."
//                     className={`${inputBase} resize-none`}
//                   />
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   className="group btn-primary w-full md:w-auto"
//                   disabled={statusText === 'Sending...'}
//                 >
//                   {statusText === 'Sending...'
//                     ? 'Sending...'
//                     : submitted
//                     ? 'Message Sent'
//                     : 'Send Message'}

//                   <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//                 </button>

//                 {statusText && (
//                   <p
//                     className={`text-sm ${
//                       statusText.includes('wrong')
//                         ? 'text-red-500'
//                         : 'text-accent'
//                     }`}
//                   >
//                     {statusText}
//                   </p>
//                 )}

//               </form>
//             </Reveal>
//           </div>
//         </div>

//         {/* Google Map */}
//         <Reveal delay={150}>
//           <div className="mt-16 overflow-hidden border border-secondary/10">
//             <div className="aspect-[16/6] w-full bg-primary-300">
//               <iframe
//                 title="DESCORP Office Location"
//                 src="https://www.google.com/maps?q=4th%20Floor,%2068-C,%20Imperial%20Trade%20Tower,%20Lane%207%20Street%2011,%20DHA%20Phase%207%20Phase%202%20Commercial%20Area,%20Karachi,%20Pakistan&output=embed"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         </Reveal>

//       </div>
//     </section>
//   );
// }







'use client';

import { useState, useRef } from 'react';
import { Reveal } from './Reveal';
import { Eyebrow } from './Layout';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';

import { Instagram, Linkedin } from 'lucide-react';
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
    label: 'Studio',
    value:
      'Office No. 403, Imperial Trade Tower, 68-C, Street 7, Jami Commercial Area, Phase VII, DHA, Karachi South, Karachi, Pakistan 75500',
  },
];

const projectTypes = [
  'Custom Home',
  'Residential Architecture',
  'Interior Design',
  'Renovation',
  'Commercial',
  'Hospitality',
  '3D Visualization',
  'Other',
];

const budgetRanges = [
  'Under $25,000',
  '$25,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000 – $250,000',
  '$250,000+',
  'Not sure yet',
];

const timelines = [
  'As soon as possible',
  'Within 1–3 months',
  '3–6 months',
  '6–12 months',
  'Just exploring',
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

export function ContactSectionUsa() {
  const formRef = useRef<HTMLFormElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [statusText, setStatusText] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    location: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setStatusText('Sending...');

    if (formRef.current) {
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
            setStatusText('Thank you —');

            setForm({
              name: '',
              email: '',
              country: '',
              location: '',
              projectType: '',
              budget: '',
              timeline: '',
              message: '',
            });

            setTimeout(() => {
              setSubmitted(false);
              setStatusText('');
            }, 4000);
          },
          (error) => {
            console.error('Full Error:', error);
            setStatusText('Something went wrong. Please try again.');
          }
        );
    }
  };

  const inputBase =
    'w-full border border-secondary/15 bg-transparent px-4 py-3.5 text-sm text-secondary placeholder:text-secondary/40 transition-all duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

  return (
    <section
      id="contact"
      className="bg-primary-200 py-section text-secondary"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Start a Project</Eyebrow>

              <h2 className="mt-6 text-display-3">
                Let&apos;s create something
                <span className="block text-accent">exceptional.</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-relaxed text-secondary/60">
                Tell us about your project, and our team will get back to you
                to discuss how we can help bring your vision to life.
              </p>
            </Reveal>

            <div className="mt-12 space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-secondary/10">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-secondary/40">
                        {item.label}
                      </p>

                      <p className="mt-1 max-w-sm text-sm leading-relaxed text-secondary/80">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex items-center gap-5">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-secondary/50 transition-colors hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-7">
            <Reveal>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* NAME */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-secondary/50">
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
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-secondary/50">
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
                    placeholder="you@example.com"
                    className={inputBase}
                  />
                </div>

                {/* PROJECT TYPE */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-secondary/50">
                    Project Type
                  </label>

                  <div className="relative">
                    <select
                      name="project_type"
                      required
                      value={form.projectType}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          projectType: e.target.value,
                        })
                      }
                      className={`${inputBase} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        Select project type
                      </option>

                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40"
                    />
                  </div>
                </div>

                {/* BUDGET */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-secondary/50">
                    Budget Range
                  </label>

                  <div className="relative">
                    <select
                      name="budget_range"
                      required
                      value={form.budget}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          budget: e.target.value,
                        })
                      }
                      className={`${inputBase} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        Select budget range
                      </option>

                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40"
                    />
                  </div>
                </div>

                {/* COUNTRY */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-secondary/50">
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

                {/* LOCATION */}
                {form.country === 'United States' && (
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-secondary/50">
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

                {form.country === 'Pakistan' && (
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-secondary/50">
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

                {form.country === 'Other' && (
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-secondary/50">
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

                {/* TIMELINE */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-secondary/50">
                    Timeline
                  </label>

                  <div className="relative">
                    <select
                      name="timeline"
                      required
                      value={form.timeline}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          timeline: e.target.value,
                        })
                      }
                      className={`${inputBase} appearance-none pr-10`}
                    >
                      <option value="" disabled>
                        Select timeline
                      </option>

                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-secondary/50">
                    Project Details
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
                  className="group inline-flex items-center gap-3 bg-secondary px-7 py-4 text-xs uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {statusText === 'Sending...'
                    ? 'Sending...'
                    : submitted
                    ? 'Message Sent'
                    : 'Send Inquiry'}

                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                {/* STATUS */}
                {statusText && (
                  <p
                    className={`text-sm ${
                      submitted
                        ? 'text-accent'
                        : statusText === 'Sending...'
                        ? 'text-secondary/50'
                        : 'text-red-400'
                    }`}
                  >
                    {statusText}
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-20 overflow-hidden border border-secondary/10">
          <iframe
            title="DESCORP Office Location"
            src="https://www.google.com/maps?q=4th%20Floor,%2068-C,%20Imperial%20Trade%20Tower,%20Lane%207%20Street%2011,%20DHA%20Phase%207%20Phase%202%20Commercial%20Area,%20Karachi,%20Pakistan&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
