'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  blur?: number;
  yOffset?: number;
  animateOnce?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

/**
 * BlurText - Inspired by ReactBits
 * Animates text by revealing each word from a blurred state
 * Perfect for hero headlines and section titles
 */
export function BlurText({
  text,
  className = '',
  delay = 0,
  duration = 0.5,
  blur = 10,
  yOffset = 20,
  animateOnce = true,
  as: Component = 'span',
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: animateOnce, margin: '-100px' });
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blur}px)`,
      y: yOffset,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1], // Smooth ease-out
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * BlurTextGradient - BlurText with gradient coloring
 * For highlighted words in headlines
 */
interface BlurTextGradientProps extends Omit<BlurTextProps, 'className'> {
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  className?: string;
}

export function BlurTextGradient({
  text,
  gradientFrom = 'from-lavender-500',
  gradientVia = 'via-calm-500',
  gradientTo = 'to-warmth-500',
  className = '',
  ...props
}: BlurTextGradientProps) {
  return (
    <BlurText
      text={text}
      className={`bg-gradient-to-r ${gradientFrom} ${gradientVia} ${gradientTo} bg-clip-text text-transparent ${className}`}
      {...props}
    />
  );
}
