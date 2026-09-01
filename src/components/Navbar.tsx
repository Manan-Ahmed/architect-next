'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
      { label: 'Blog', to: '/blog' },
 { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
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
  }, [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-20 transition-all duration-300 ${scrolled ? 'glass-nav-scrolled' : 'glass-nav'}`}>
       <div className="container-content relative flex h-16 items-center justify-between md:h-20">

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
        {/* Desktop nav - Centered */}
        <nav className="hidden items-center gap-8 md:flex md:justify-center"> {/* Added md:justify-center */}
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                href={link.to}
                className={`group relative text-sm font-medium tracking-wide transition-colors hover:text-secondary ${
                  isActive ? 'text-secondary' : 'text-secondary/60'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
          <button
            onClick={() => router.push('/contact')}
            className="btn-primary !py-2.5 !px-5 text-xs"
          >
            Start a Project
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-secondary absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-primary border-b border-secondary/10 md:hidden transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="container-content flex flex-col gap-1 py-4 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                href={link.to}
                className={`flex items-center gap-3 py-3 font-display text-base font-semibold tracking-wide transition-colors ${
                  isActive ? 'text-accent' : 'text-secondary hover:text-accent'
                }`}
              >
                {isActive && <span className="h-1.5 w-1.5 bg-accent" />}
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
