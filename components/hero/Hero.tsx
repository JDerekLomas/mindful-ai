'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EnergySavingsLeaf } from '@mui/icons-material';

export function Hero() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-30 dark:opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white dark:from-neutral-950/50 dark:to-neutral-950" />
      </div>
      {/* Background effects */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="
            inline-flex items-center gap-2
            px-4 py-2
            bg-lavender-100 dark:bg-lavender-900/30
            text-lavender-700 dark:text-lavender-300
            rounded-full
            text-sm font-medium
            mb-6
            animate-fade-in
          ">
            <EnergySavingsLeaf className="animate-breathe text-lg" fontSize="inherit" />
            Curating AI for human flourishing
          </div>

          {/* Headline */}
          <h1 className="
            text-4xl sm:text-5xl lg:text-6xl
            font-bold
            leading-tight
            mb-6
            animate-fade-in-up
          ">
            AI tools designed for{' '}
            <span className="
              bg-gradient-to-r from-lavender-500 via-calm-500 to-warmth-500
              bg-clip-text text-transparent
            ">
              your wellbeing
            </span>
          </h1>

          {/* Subtitle */}
          <p className="
            text-lg sm:text-xl
            text-neutral-600 dark:text-neutral-300
            mb-8
            animate-fade-in-up
          "
            style={{ animationDelay: '100ms' }}
          >
            Discover AI that respects your attention, supports your mental health,
            and helps you thrive—not just produce more.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <Link
              href="/explore"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3
                bg-lavender-500 hover:bg-lavender-600
                text-white font-medium
                rounded-full
                transition-all duration-300
                hover:shadow-lg hover:shadow-lavender-500/30
              "
            >
              Explore Tools
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/collections"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3
                bg-white dark:bg-neutral-800
                border border-neutral-200 dark:border-neutral-700
                font-medium
                rounded-full
                transition-all duration-300
                hover:bg-neutral-50 dark:hover:bg-neutral-700
              "
            >
              View Collections
            </Link>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <div>
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">20+</div>
              <div className="text-sm text-neutral-500">Curated tools</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">6</div>
              <div className="text-sm text-neutral-500">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">4.5+</div>
              <div className="text-sm text-neutral-500">Avg wellbeing score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="
        absolute bottom-8 left-1/2 -translate-x-1/2
        animate-bounce
        text-neutral-400
      ">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
