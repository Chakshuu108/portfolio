'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { PROFILE } from '@/data/content';

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-5 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-violet/25 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-32 left-1/3 -translate-x-1/2 w-[380px] h-[220px] bg-coral/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[13px] font-mono text-dim bg-panel border border-line rounded-full px-4 py-1.5 mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-mint badge-dot" />
          Open to internships &amp; AI/ML roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-semibold text-[12vw] leading-[1.04] sm:text-6xl md:text-7xl tracking-tight"
        >
          Machine learning &amp; vision
          <br />
          <span className="text-gradient">you can see, trace &amp; trust.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-5 text-base md:text-lg text-dim max-w-2xl mx-auto leading-relaxed"
        >
          I&apos;m {PROFILE.name}, a Computer Engineering student building machine learning,
          computer vision and generative AI systems — from research notebook to deployed product.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-1.5 bg-coral text-bg font-semibold text-[14px] px-6 py-3 rounded-full glow-coral hover:bg-coral2 transition-colors"
          >
            See my work
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-panel border border-line text-ink font-semibold text-[14px] px-6 py-3 rounded-full hover:bg-panel2 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-1.5 text-[13px] text-dim"
        >
          <MapPin size={13} />
          {PROFILE.location}
        </motion.div>
      </div>
    </section>
  );
}
