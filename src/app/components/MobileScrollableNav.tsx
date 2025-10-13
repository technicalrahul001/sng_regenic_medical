'use client';

import Link from 'next/link';
import { useRef } from 'react';

const NAV_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/products-services', label: 'Product & Services' },
  { href: '/research-developments', label: 'Research & Developments' },
  { href: '/news-events', label: 'News & Events' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function MobileScrollableNav() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div className="md:hidden relative py-2">
      {/* Left arrow */}
      <button
        aria-label="Scroll left"
        onClick={() => scrollBy(-200)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 dark:bg-black/60 border border-black/10 dark:border-white/20 w-8 h-8 flex items-center justify-center shadow-sm"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      {/* Right arrow */}
      <button
        aria-label="Scroll right"
        onClick={() => scrollBy(200)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 dark:bg-black/60 border border-black/10 dark:border-white/20 w-8 h-8 flex items-center justify-center shadow-sm"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      {/* Scroll container */}
      <div
        ref={scrollerRef}
        className="mx-10 overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center px-3 py-2 text-sm font-medium hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}


