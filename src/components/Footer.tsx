import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { FaFacebookF,FaPinterestP} from 'react-icons/fa';
import Link from 'next/link';

const footerLinks = {
  Studio: [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ],
  Services: [
    { label: 'Architectural Design', to: '/services' },
    { label: 'Interior Design', to: '/services' },
    { label: 'Renovation', to: '/services' },
    { label: 'Master Planning', to: '/services' },
  ],
  Contact: [
    { label: 'info@thedescorp.com', to: '/contact' },
    { label: '+92 334 6699001', to: '/contact' },
    { label: 'Office No. 403, Imperial Trade Tower, 68-C, Street 7, Jami Commercial Area, Phase VII, DHA, Karachi South, Karachi, Pakistan 75500', to: '/contact' },
  ],
};

const socials = [
 { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/descorp.official/' },
     { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/descorp.official/' },
  { icon: FaPinterestP , label: 'Pinterest', href: 'https://in.pinterest.com/descorp_official/' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/descorpofficial' },


];

export function Footer() {
  return (
    <footer className="bg-secondary text-primary">
      <div className="container-content py-section">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
          
               <Link href="/" className="flex items-center gap-1 p-0">
          <img
            src="/DESCORP LOGO PNG.png"
            alt="Descorp"
            className="h-[60px] w-auto object-contain"
          />
          <span className='font-display text-xl text-primary/60 tracking-wider flex justify-center items-center mt-2'>DESCORP</span>
        </Link>
            {/* </Link> */}
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary/60">
              An architecture & interior design studio shaping the future of built environments with precision and intent.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-primary/15 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-eyebrow uppercase text-primary/60">{title}</h4>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.to}
                      className="group inline-flex items-center gap-1 text-sm text-primary/60 transition-colors hover:text-accent"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-primary/10 pt-8 text-xs text-primary/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} DESCORP Architecture & Interior Design. All rights reserved.</p>
          <p className="font-mono tracking-tight">Designing Spaces That Define Luxury</p>
        </div>
      </div>
    </footer>
  );
}
