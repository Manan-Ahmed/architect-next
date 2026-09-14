// 'use client';

// import { useEffect, useState } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';
// import Image from "next/image";

// const navLinks = [
//   { label: 'Home', to: '/' },
//   { label: 'Projects', to: '/projects' },
//   { label: 'About', to: '/about' },
//   { label: 'Blog', to: '/blog' },
//   { label: 'Contact', to: '/contact' },
// ];

// const serviceLinks = [
//   { label: 'All Services', to: '/services' },
//   // { label: 'USA', to: '/usa' },
//   // { label: 'UAE', to: '/uae' },
// ];
// const locationlinks = [
//   { label: 'Pakistan', to: '/' },
//   { label: 'USA', to: '/usa' },
//   // { label: 'UAE', to: '/uae' },
// ];

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     setOpen(false);
//   }, [pathname]);

//   return (
//     <header className={`fixed inset-x-0 top-0 z-20 transition-all duration-300 ${scrolled ? 'glass-nav-scrolled' : 'glass-nav'}`}>
//        <div className="container-content relative flex h-16 items-center justify-between md:h-20">

// <Link href="/" className="flex items-center gap-1">
// <Image
//   src="/DESCORP LOGO.webp"
//   alt="DESCORP Logo"
//   width={88}
//   height={88}
//   quality={70}
//   className="h-[50px] w-auto object-contain"
// />
//   <span className="flex items-center font-display text-xl tracking-wider text-white">
//     DESCORP
//   </span>
// </Link>
//         {/* Desktop nav - Centered */}
//         <nav className="hidden items-center gap-8 md:flex md:justify-center"> {/* Added md:justify-center */}
//           {navLinks.slice(0, 4).map((link) => {
//             const isActive = pathname === link.to;
//             return (
//               <Link key={link.to} href={link.to} className={`group relative text-sm font-medium tracking-wide transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-secondary/60'}`}>
//                 {link.label}
//                 <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
//               </Link>
//             );
//           })}
//           <div className="group relative">
//             <button className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-secondary ${pathname.startsWith('/services') || pathname === '/usa' || pathname === '/uae' ? 'text-secondary' : 'text-secondary/60'}`}>
//               Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
//             </button>
//             <div className="invisible absolute left-1/2 top-full w-44 -translate-x-1/2 translate-y-2 border border-secondary/10 bg-primary opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
//               {serviceLinks.map((link) => (
//                 <Link key={link.to} href={link.to} className="block px-5 py-3 text-sm text-secondary/60 transition-colors hover:bg-primary-200 hover:text-secondary">{link.label}</Link>
//               ))}
//             </div>
//           </div>
//           <div className="group relative">
//             <button className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-secondary ${pathname.startsWith('/services') || pathname === '/usa' || pathname === '/uae' ? 'text-secondary' : 'text-secondary/60'}`}>
//               Locations <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
//             </button>
//             <div className="invisible absolute left-1/2 top-full w-44 -translate-x-1/2 translate-y-2 border border-secondary/10 bg-primary opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
//               {locationlinks.map((link) => (
//                 <Link key={link.to} href={link.to} className="block px-5 py-3 text-sm text-secondary/60 transition-colors hover:bg-primary-200 hover:text-secondary">{link.label}</Link>
//               ))}
//             </div>
//           </div>
//           <Link href="/contact" className={`group relative text-sm font-medium tracking-wide transition-colors hover:text-secondary ${pathname === '/contact' ? 'text-secondary' : 'text-secondary/60'}`}>
//             Contact
//             <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
//           </Link>
//           <button
//             onClick={() => router.push('/contact')}
//             className="btn-primary !py-2.5 !px-5 text-xs"
//           >
//             Start a Project
//           </button>
//         </nav>

//         {/* Mobile toggle */}
//         <button
//           className="md:hidden text-secondary absolute right-4 top-1/2 -translate-y-1/2"
//           onClick={() => setOpen((v) => !v)}
//           aria-label="Toggle menu"
//         >
//           {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`overflow-hidden bg-primary border-b border-secondary/10 md:hidden transition-all duration-300 ${
//           open ? 'max-h-96' : 'max-h-0'
//         }`}
//       >
//         <nav className="container-content flex flex-col gap-1 py-4 items-center">
//           {[...navLinks.slice(0, 4), { label: 'Services', to: '/services' }, navLinks[4]].map((link) => {
//             const isActive = pathname === link.to;
//             return (
//               <Link key={link.to} href={link.to} className={`flex items-center gap-3 py-3 font-display text-base font-semibold tracking-wide transition-colors ${isActive ? 'text-accent' : 'text-secondary hover:text-accent'}`}>
//                 {isActive && <span className="h-1.5 w-1.5 bg-accent" />}
//                 {link.label}
//               </Link>
//             );
//           })}
//           <div className="flex items-center gap-5 border-t border-secondary/10 pt-3">
//             <span className="font-mono text-[10px] uppercase tracking-widest text-secondary/30">International</span>
//             <Link href="/usa" className="text-sm text-secondary hover:text-accent">USA</Link>
//             <Link href="/uae" className="text-sm text-secondary hover:text-accent">UAE</Link>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }




'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  {
    label: 'All Services',
    to: '/services',
  },
  {
    label: 'Architectural Design',
    to: '/services/architectural-design',
  },
  {
    label: 'Interior Design',
    to: '/services/interior-design',
  },
  
  {
    label: 'Building & Renovation',
    to: '/services/building-renovation',
  },
  {
    label: 'Project Management',
    to: '/services/project-management',
  },
  {
    label: 'Remote Architecture Consultation',
     to: '/usa/remote-architecture-consultation',
   },
    {
    label: 'Remote Interior Design Consultation',
    to: '/usa/remote-interior-design-consultation',
  },
  {
    label: '3D Visualization',
    to: '/usa/remote-3d-visualization',
  },
];

// const usaServiceLinks = [
//   {
//     label: 'Remote Architecture Consultation',
//     to: '/usa/remote-architecture-consultation',
//   },
//   {
//     label: 'Remote Interior Design Consultation',
//     to: '/usa/remote-interior-design-consultation',
//   },
//   {
//     label: '3D Visualization',
//     to: '/usa/remote-3d-visualization',
//   },
// ];

const locationLinks = [
  { label: 'Pakistan', to: '/' },
  { label: 'USA', to: '/usa' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobileUSAServicesOpen, setMobileUSAServicesOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
    setMobileLocationsOpen(false);
    setMobileUSAServicesOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith('/services');

  const isUSAServicesActive = pathname.startsWith('/usa/');

  const isLocationsActive =
    pathname === '/usa' || pathname.startsWith('/usa/');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition-all duration-300 ${
        scrolled ? 'glass-nav-scrolled' : 'glass-nav'
      }`}
    >
      <div className="container-content relative flex h-16 items-center justify-between md:h-20">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/DESCORP LOGO.webp"
            alt="DESCORP Logo"
            width={88}
            height={88}
            quality={70}
            className="h-[50px] w-auto object-contain"
          />

          <span className="flex items-center font-display text-xl tracking-wider text-white">
            DESCORP
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex md:justify-center">

          {/* HOME / PROJECTS / ABOUT / BLOG */}
          {navLinks.slice(0, 4).map((link) => {
            const isActive = pathname === link.to;

            return (
              <Link
                key={link.to}
                href={link.to}
                className={`group relative text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                  isActive
                    ? 'text-secondary'
                    : 'text-secondary/60'
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}

          {/* SERVICES DROPDOWN */}
          <div className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                isServicesActive
                  ? 'text-secondary'
                  : 'text-secondary/60'
              }`}
            >
              Services

              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 border border-secondary/10 bg-primary opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              {serviceLinks.map((link) => {
                const isActive =
                  pathname === link.to ||
                  (link.to !== '/services' &&
                    pathname.startsWith(link.to));

                return (
                  <Link
                    key={link.to}
                    href={link.to}
                    className={`block border-b border-secondary/5 px-5 py-3 text-sm transition-colors last:border-b-0 ${
                      isActive
                        ? 'bg-primary-200 text-accent'
                        : 'text-secondary/60 hover:bg-primary-200 hover:text-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

            </div>
          </div>

          {/* USA SERVICES DROPDOWN */}
          {/* <div className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                isUSAServicesActive
                  ? 'text-secondary'
                  : 'text-secondary/60'
              }`}
            >
              USA Services

              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 border border-secondary/10 bg-primary opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              {usaServiceLinks.map((link) => {
                const isActive = pathname === link.to;

                return (
                  <Link
                    key={link.to}
                    href={link.to}
                    className={`block border-b border-secondary/5 px-5 py-3 text-sm transition-colors last:border-b-0 ${
                      isActive
                        ? 'bg-primary-200 text-accent'
                        : 'text-secondary/60 hover:bg-primary-200 hover:text-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

            </div>
          </div> */}

          {/* LOCATIONS DROPDOWN */}
          <div className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                isLocationsActive
                  ? 'text-secondary'
                  : 'text-secondary/60'
              }`}
            >
              Locations

              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-full w-44 -translate-x-1/2 translate-y-2 border border-secondary/10 bg-primary opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              {locationLinks.map((link) => {
                const isActive = pathname === link.to;

                return (
                  <Link
                    key={link.to}
                    href={link.to}
                    className={`block border-b border-secondary/5 px-5 py-3 text-sm transition-colors last:border-b-0 ${
                      isActive
                        ? 'bg-primary-200 text-accent'
                        : 'text-secondary/60 hover:bg-primary-200 hover:text-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

            </div>
          </div>

          {/* CONTACT */}
          <Link
            href="/contact"
            className={`group relative text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
              pathname === '/contact'
                ? 'text-secondary'
                : 'text-secondary/60'
            }`}
          >
            Contact

            <span
              className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                pathname === '/contact'
                  ? 'w-full'
                  : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>

          {/* START A PROJECT */}
          <button
            onClick={() => router.push('/contact')}
            className="btn-primary !px-5 !py-2.5 text-xs"
          >
            Start a Project
          </button>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-b border-secondary/10 bg-primary transition-all duration-300 md:hidden ${
          open ? 'max-h-[90vh]' : 'max-h-0'
        }`}
      >
        <nav className="container-content flex flex-col py-4">

          {/* HOME / PROJECTS / ABOUT / BLOG */}
          {navLinks.slice(0, 4).map((link) => {
            const isActive = pathname === link.to;

            return (
              <Link
                key={link.to}
                href={link.to}
                className={`flex items-center justify-center gap-3 py-3 font-display text-base font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'text-accent'
                    : 'text-secondary hover:text-accent'
                }`}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 bg-accent" />
                )}

                {link.label}
              </Link>
            );
          })}

          {/* MOBILE SERVICES */}
          <div className="border-t border-secondary/10 pt-2">

            <button
              type="button"
              onClick={() =>
                setMobileServicesOpen((v) => !v)
              }
              className={`flex w-full items-center justify-center gap-2 py-3 font-display text-base font-semibold tracking-wide transition-colors ${
                isServicesActive
                  ? 'text-accent'
                  : 'text-secondary hover:text-accent'
              }`}
            >
              Services

              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  mobileServicesOpen
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen
                  ? 'max-h-[600px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="mx-auto flex max-w-sm flex-col pb-3">

                {serviceLinks.map((link) => {
                  const isActive =
                    pathname === link.to ||
                    (link.to !== '/services' &&
                      pathname.startsWith(link.to));

                  return (
                    <Link
                      key={link.to}
                      href={link.to}
                      className={`border-l-2 px-4 py-2.5 text-center text-sm transition-colors ${
                        isActive
                          ? 'border-accent bg-primary-200 text-accent'
                          : 'border-secondary/10 text-secondary/60 hover:border-accent hover:text-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

              </div>
            </div>
          </div>

          {/* MOBILE USA SERVICES */}
          {/* <div className="border-t border-secondary/10 pt-2">

            <button
              type="button"
              onClick={() =>
                setMobileUSAServicesOpen((v) => !v)
              }
              className={`flex w-full items-center justify-center gap-2 py-3 font-display text-base font-semibold tracking-wide transition-colors ${
                isUSAServicesActive
                  ? 'text-accent'
                  : 'text-secondary hover:text-accent'
              }`}
            >
              USA Services

              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  mobileUSAServicesOpen
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileUSAServicesOpen
                  ? 'max-h-60 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="mx-auto flex max-w-sm flex-col pb-3">

                {usaServiceLinks.map((link) => {
                  const isActive = pathname === link.to;

                  return (
                    <Link
                      key={link.to}
                      href={link.to}
                      className={`border-l-2 px-4 py-2.5 text-center text-sm transition-colors ${
                        isActive
                          ? 'border-accent bg-primary-200 text-accent'
                          : 'border-secondary/10 text-secondary/60 hover:border-accent hover:text-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

              </div>
            </div>
          </div> */}

          {/* MOBILE LOCATIONS */}
          <div className="border-t border-secondary/10 pt-2">

            <button
              type="button"
              onClick={() =>
                setMobileLocationsOpen((v) => !v)
              }
              className={`flex w-full items-center justify-center gap-2 py-3 font-display text-base font-semibold tracking-wide transition-colors ${
                isLocationsActive
                  ? 'text-accent'
                  : 'text-secondary hover:text-accent'
              }`}
            >
              Locations

              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  mobileLocationsOpen
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileLocationsOpen
                  ? 'max-h-40 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="mx-auto flex max-w-sm flex-col pb-3">

                {locationLinks.map((link) => {
                  const isActive = pathname === link.to;

                  return (
                    <Link
                      key={link.to}
                      href={link.to}
                      className={`border-l-2 px-4 py-2.5 text-center text-sm transition-colors ${
                        isActive
                          ? 'border-accent bg-primary-200 text-accent'
                          : 'border-secondary/10 text-secondary/60 hover:border-accent hover:text-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

              </div>
            </div>
          </div>

          {/* CONTACT */}
          <Link
            href="/contact"
            className={`flex items-center justify-center gap-3 py-3 font-display text-base font-semibold tracking-wide transition-colors ${
              pathname === '/contact'
                ? 'text-accent'
                : 'text-secondary hover:text-accent'
            }`}
          >
            {pathname === '/contact' && (
              <span className="h-1.5 w-1.5 bg-accent" />
            )}

            Contact
          </Link>

          {/* MOBILE CTA */}
          <div className="flex justify-center border-t border-secondary/10 pt-4">
            <button
              onClick={() => {
                setOpen(false);
                router.push('/contact');
              }}
              className="btn-primary px-6 py-3 text-xs"
            >
              Start a Project
            </button>
          </div>

        </nav>
      </div>
    </header>
  );
}

