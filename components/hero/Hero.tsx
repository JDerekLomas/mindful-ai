'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CustomIcon } from '@/components/ui/CustomIcon';
import { BlurText, BlurTextGradient } from '@/components/animations/BlurText';
import { AnimatedContent, FadeContent } from '@/components/animations/AnimatedContent';
import { Aurora } from '@/components/animations/Aurora';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Aurora background - inspired by ReactBits */}
      <Aurora
        colorStops={['#8b5cf6', '#14b8a6', '#f19340', '#8b5cf6']}
        speed={0.5}
        blur={100}
        opacity={0.3}
        className="dark:opacity-20"
      />

      {/* Background video - performant loop */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-15"
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white dark:from-neutral-950/60 dark:to-neutral-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <FadeContent delay={0.2} blur>
            <div className="
              inline-flex items-center gap-2
              px-4 py-2
              bg-lavender-100/80 dark:bg-lavender-900/40
              text-lavender-700 dark:text-lavender-300
              rounded-full
              text-sm font-medium
              mb-6
              backdrop-blur-sm
            ">
              <span className="animate-breathe">
                <CustomIcon name="leaf" size="sm" />
              </span>
              Curating AI for human flourishing
            </div>
          </FadeContent>

          {/* Headline - BlurText animation inspired by ReactBits */}
          <h1 className="
            text-4xl sm:text-5xl lg:text-6xl
            font-bold
            leading-tight
            mb-6
          ">
            <BlurText
              text="AI tools designed for"
              delay={0.3}
              duration={0.6}
              blur={12}
            />{' '}
            <BlurTextGradient
              text="your wellbeing"
              delay={0.6}
              duration={0.6}
              blur={12}
            />
          </h1>

          {/* Subtitle */}
          <AnimatedContent direction="up" delay={0.8} blur>
            <p className="
              text-lg sm:text-xl
              text-neutral-600 dark:text-neutral-300
              mb-8
              leading-relaxed
            ">
              Discover AI that respects your attention, supports your mental health,
              and helps you thrive—not just produce more.
            </p>
          </AnimatedContent>

          {/* CTA Buttons */}
          <AnimatedContent direction="up" delay={1} blur>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
                  hover:scale-105
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
                  bg-white/80 dark:bg-neutral-800/80
                  backdrop-blur-sm
                  border border-neutral-200 dark:border-neutral-700
                  font-medium
                  rounded-full
                  transition-all duration-300
                  hover:bg-white dark:hover:bg-neutral-700
                  hover:scale-105
                "
              >
                View Collections
              </Link>
            </div>
          </AnimatedContent>

          {/* Stats */}
          <AnimatedContent direction="up" delay={1.2}>
            <div className="flex flex-wrap gap-8">
              {[
                { value: '20+', label: 'Curated tools' },
                { value: '6', label: 'Categories' },
                { value: '4.5+', label: 'Avg wellbeing score' },
              ].map((stat, i) => (
                <div key={stat.label} style={{ animationDelay: `${1.2 + i * 0.1}s` }}>
                  <div className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </div>

      {/* Scroll indicator */}
      <FadeContent delay={1.5} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce text-neutral-400">
          <CustomIcon name="chevron-down" size="lg" />
        </div>
      </FadeContent>
    </section>
  );
}
