'use client';

import { useRef, ReactNode } from 'react';
import { motion, useInView, Variants, MotionProps } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface AnimatedContentProps {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
  blur?: boolean;
  blurAmount?: number;
  scale?: boolean;
  scaleFrom?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
}

/**
 * AnimatedContent - Inspired by ReactBits
 * Scroll-triggered reveal animations with multiple direction options
 * Perfect for sections, cards, and any content blocks
 */
export function AnimatedContent({
  children,
  direction = 'up',
  distance = 40,
  duration = 0.6,
  delay = 0,
  blur = false,
  blurAmount = 10,
  scale = false,
  scaleFrom = 0.95,
  once = true,
  className = '',
  threshold = 0.2,
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const getDirectionOffset = (): { x: number; y: number } => {
    switch (direction) {
      case 'up':
        return { x: 0, y: distance };
      case 'down':
        return { x: 0, y: -distance };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
    }
  };

  const offset = getDirectionOffset();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      filter: blur ? `blur(${blurAmount}px)` : 'blur(0px)',
      scale: scale ? scaleFrom : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggeredContent - Staggered reveal for lists of items
 * Wrap multiple AnimatedContent items for sequential animations
 */
interface StaggeredContentProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggeredContent({
  children,
  staggerDelay = 0.1,
  className = '',
}: StaggeredContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggeredItem - Individual items within StaggeredContent
 */
interface StaggeredItemProps {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  duration?: number;
  blur?: boolean;
  className?: string;
}

export function StaggeredItem({
  children,
  direction = 'up',
  distance = 30,
  duration = 0.5,
  blur = false,
  className = '',
}: StaggeredItemProps) {
  const getDirectionOffset = (): { x: number; y: number } => {
    switch (direction) {
      case 'up':
        return { x: 0, y: distance };
      case 'down':
        return { x: 0, y: -distance };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
    }
  };

  const offset = getDirectionOffset();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      filter: blur ? 'blur(8px)' : 'blur(0px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * FadeContent - Simple fade with optional blur
 * For subtle content reveals
 */
interface FadeContentProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  blur?: boolean;
  once?: boolean;
  className?: string;
}

export function FadeContent({
  children,
  duration = 0.6,
  delay = 0,
  blur = false,
  once = true,
  className = '',
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: blur ? 'blur(10px)' : 'blur(0px)',
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              filter: 'blur(0px)',
              transition: { duration, delay, ease: 'easeOut' },
            }
          : {}
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
