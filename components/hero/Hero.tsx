'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomIcon } from '@/components/ui/CustomIcon';

export function Hero() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background video - performant loop */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-25"
        >
          <source src="/images/hero/hero-loop.webm" type="video/webm" />
          <source src="/images/hero/hero-loop.mp4" type="video/mp4" />
          {/* Fallback to static image */}
          <Image
            src="/images/hero/hero-bg.png"
            alt=""
            fill
            className="object-cover"
          />
        </video>
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
            <span className="animate-breathe">
              <CustomIcon name="leaf" size="sm" />
            </span>
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
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(to right, #8b5cf6, #14b8a6, #f19340)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
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
              <CustomIcon name="arrow-right" size="md" />
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
        <CustomIcon name="chevron-down" size="lg" />
      </div>
    </section>
  );
}
