'use client';

import { ArrowUpRight, Mail, Github, Linkedin, Phone } from 'lucide-react';
import { PROFILE } from '@/data/content';

const LINKS = [
  { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}`, showLabel: false },
  { icon: Github, label: PROFILE.githubHandle, href: PROFILE.github, showLabel: false },
  { icon: Linkedin, label: 'LinkedIn', href: PROFILE.linkedin, showLabel: false },
  { icon: Phone, label: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, '')}`, showLabel: false },
];

export default function CTAContact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[260px] bg-violet/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight leading-[1.1]">
          Simple enough to read.
          <br />
          <span className="text-gradient">Rigorous enough to ship.</span>
        </h2>
        <p className="text-dim mt-5 text-[15px] md:text-base max-w-lg mx-auto leading-relaxed">
          Looking for an AI/ML intern who can take a project from raw data to a working demo? Let&apos;s talk.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="group inline-flex items-center gap-1.5 bg-coral text-bg font-semibold text-[14px] px-6 py-3 rounded-full glow-coral hover:bg-coral2 transition-colors"
          >
            Email me
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-panel border border-line text-ink font-semibold text-[14px] px-6 py-3 rounded-full hover:bg-panel2 transition-colors"
          >
            Download resume
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative flex flex-col items-center justify-center gap-2 panel-border bg-panel rounded-xl px-3 py-5 hover:bg-panel2 hover:-translate-y-0.5 transition-all"
            >
              <l.icon size={19} className="text-coral" />
              {l.showLabel ? (
                <span className="text-[11.5px] text-dim break-all">{l.label}</span>
              ) : (
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-mono text-ink bg-panel2 border border-line rounded-md px-2 py-1 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 z-20 shadow-lg">
                  {l.label}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
