'use client';

import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
};

export function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const router = useRouter();
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (to) {
    return (
      <button
        type={type}
        onClick={() => {
          router.push(to);
          onClick?.();
        }}
        className={`group ${baseClass} ${className}`}
      >
        {content}
      </button>
    );
  }

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`group ${baseClass} ${className}`}
      >
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`group ${baseClass} ${className}`}>
      {content}
    </button>
  );
}
