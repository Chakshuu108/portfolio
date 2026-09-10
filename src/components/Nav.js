'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '@/data/content';
import Logo from './Logo';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <Logo size={34} />
          <span className="font-display font-semibold text-[15px] tracking-tight hidden sm:block">
            Chakshu Gupta
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1 bg-panel/60 border border-line rounded-full px-1.5 py-1.5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-pill text-[13px] font-medium text-dim hover:text-ink px-4 py-1.5 rounded-full hover:bg-panel2"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-dim hover:text-ink transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-[13px] font-semibold bg-ink text-bg px-4 py-2 rounded-full hover:bg-coral transition-colors"
          >
            Let&apos;s talk
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-t border-line px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-dim hover:text-ink py-2.5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-dim py-2.5"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center text-[14px] font-semibold bg-ink text-bg px-4 py-2.5 rounded-full"
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </header>
  );
}
