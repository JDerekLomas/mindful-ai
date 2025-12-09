'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AuroraProps {
  /** Array of color stops for the aurora gradient */
  colorStops?: string[];
  /** Animation speed multiplier (default 1) */
  speed?: number;
  /** Blur amount for the aurora effect */
  blur?: number;
  /** Opacity of the aurora */
  opacity?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Aurora - Inspired by ReactBits
 * A beautiful, animated aurora borealis background effect
 * Perfect for hero sections and full-page backgrounds
 *
 * Uses CSS animations for performance (no WebGL required)
 */
export function Aurora({
  colorStops = ['#8b5cf6', '#14b8a6', '#0ea5e9', '#8b5cf6'],
  speed = 1,
  blur = 80,
  opacity = 0.4,
  className = '',
}: AuroraProps) {
  const duration = 20 / speed;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Aurora layer 1 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${colorStops[0]}40, transparent 70%)`,
          filter: `blur(${blur}px)`,
          opacity,
        }}
        animate={{
          x: ['0%', '30%', '-20%', '0%'],
          y: ['0%', '-20%', '30%', '0%'],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Aurora layer 2 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 70% at 70% 30%, ${colorStops[1]}40, transparent 60%)`,
          filter: `blur(${blur}px)`,
          opacity,
        }}
        animate={{
          x: ['0%', '-40%', '20%', '0%'],
          y: ['0%', '30%', '-10%', '0%'],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: duration * 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Aurora layer 3 */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 30% 70%, ${colorStops[2]}40, transparent 65%)`,
          filter: `blur(${blur}px)`,
          opacity,
        }}
        animate={{
          x: ['0%', '20%', '-30%', '0%'],
          y: ['0%', '-10%', '20%', '0%'],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: duration * 0.9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

/**
 * AuroraCard - A card with subtle aurora effect in the background
 * Perfect for feature cards and highlighted sections
 */
interface AuroraCardProps {
  children: React.ReactNode;
  colorStops?: string[];
  className?: string;
}

export function AuroraCard({
  children,
  colorStops = ['#8b5cf6', '#14b8a6'],
  className = '',
}: AuroraCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Aurora
        colorStops={colorStops}
        blur={60}
        opacity={0.15}
        speed={0.5}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * Waves - Animated wave background
 * Calming effect perfect for wellbeing-focused sections
 */
interface WavesProps {
  color?: string;
  opacity?: number;
  speed?: number;
  className?: string;
}

export function Waves({
  color = '#8b5cf6',
  opacity = 0.1,
  speed = 1,
  className = '',
}: WavesProps) {
  const duration = 15 / speed;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Wave 1 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')} 100%)`,
          borderRadius: '100% 100% 0 0',
        }}
        animate={{
          scaleY: [1, 1.1, 0.9, 1],
          y: ['0%', '-5%', '5%', '0%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Wave 2 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/5"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${color}${Math.round(opacity * 0.7 * 255).toString(16).padStart(2, '0')} 100%)`,
          borderRadius: '100% 100% 0 0',
        }}
        animate={{
          scaleY: [1, 0.95, 1.05, 1],
          y: ['0%', '3%', '-3%', '0%'],
        }}
        transition={{
          duration: duration * 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Wave 3 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${color}${Math.round(opacity * 0.5 * 255).toString(16).padStart(2, '0')} 100%)`,
          borderRadius: '100% 100% 0 0',
        }}
        animate={{
          scaleY: [1, 1.05, 0.95, 1],
          y: ['0%', '-2%', '2%', '0%'],
        }}
        transition={{
          duration: duration * 0.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
