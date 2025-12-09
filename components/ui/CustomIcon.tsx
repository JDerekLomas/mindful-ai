'use client';

import { SVGProps } from 'react';

export type IconName =
  // Categories
  | 'mental-health'
  | 'focus-flow'
  | 'creative'
  | 'physical'
  | 'connection'
  | 'productivity'
  // Wellbeing dimensions
  | 'attention'
  | 'calm'
  | 'agency'
  | 'growth'
  // Tool icons
  | 'heart'
  | 'journal'
  | 'chat'
  | 'sound-wave'
  | 'headphones'
  | 'shield'
  | 'palette'
  | 'music'
  | 'sparkle'
  | 'watch'
  | 'meditate'
  | 'moon'
  | 'video'
  | 'community'
  | 'workshop'
  | 'notes'
  | 'sun'
  | 'calendar'
  | 'flow'
  // UI icons
  | 'leaf'
  | 'arrow-right'
  | 'chevron-down'
  | 'star'
  | 'check'
  | 'external-link';

interface CustomIconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

// Organic, hand-drawn style SVG icons for wellbeing
const icons: Record<IconName, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
  // === CATEGORY ICONS ===

  'mental-health': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Gentle heart with pulse line */}
      <path
        d="M12 21c-1-1-8-5.5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-8 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8 12h2l1.5-3 2 6 1.5-3h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  'focus-flow': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Concentric circles with center dot - focus */}
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),

  'creative': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Flowing brush stroke with sparkle */}
      <path
        d="M4 17c0-3 3-6 8-6s8 3 8 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8 13c2-4 6-4 8 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="17" cy="7" r="1.5" fill="currentColor" />
      <path d="M17 4v1M20 7h-1M17 10v-1M14 7h1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),

  'physical': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Person in lotus pose */}
      <circle cx="12" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 9v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 19c0-3 2-4 5-4s5 1 5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 14l3 2M19 14l-3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  'connection': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Two overlapping circles forming connection */}
      <circle cx="9" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="15" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M12 9v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />
    </svg>
  ),

  'productivity': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Growing plant/sprout */}
      <path
        d="M12 22v-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 14c-4 0-6-3-6-6 3 0 6 2 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 10c4 0 6-3 6-6-3 0-6 2-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),

  // === WELLBEING DIMENSION ICONS ===

  'attention': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Eye with gentle rays */}
      <ellipse cx="12" cy="12" rx="9" ry="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),

  'calm': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Gentle waves */}
      <path
        d="M3 8c2 2 4 2 6 0s4-2 6 0 4 2 6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 12c2 2 4 2 6 0s4-2 6 0 4 2 6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 16c2 2 4 2 6 0s4-2 6 0 4 2 6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />
    </svg>
  ),

  'agency': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Hand with choice paths */}
      <path
        d="M12 20v-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 12l-4-4M12 12l4-4M12 12v-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" fillOpacity="0.5" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" fillOpacity="0.5" />
      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
    </svg>
  ),

  'growth': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Seedling becoming tree */}
      <path
        d="M12 22v-12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 18l4-4 4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14l6-6 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7l3-3 3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.5"
      />
    </svg>
  ),

  // === TOOL ICONS ===

  'heart': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 21c-1-1-8-5.5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-8 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  'journal': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 7h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  'chat': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21 12c0 4.4-4 8-9 8-1.5 0-3-.3-4.2-.8L3 21l1.5-4.5C3.5 15 3 13.5 3 12c0-4.4 4-8 9-8s9 3.6 9 8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 11h.01M12 11h.01M16 11h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  'sound-wave': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 12h2M6 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  'headphones': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 12a8 8 0 1 1 16 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="3" y="14" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),

  'shield': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  'palette': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .9-1.5 2-1.5h2.5c2.5 0 4.5-2 4.5-4.5 0-5-4-9-10-9z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="7.5" cy="11" r="1.5" fill="currentColor" />
      <circle cx="10.5" cy="7" r="1.5" fill="currentColor" />
      <circle cx="15" cy="7.5" r="1.5" fill="currentColor" />
    </svg>
  ),

  'music': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="7" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 17V6l10-2v11" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),

  'sparkle': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3v3M12 18v3M3 12h3M18 12h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),

  'watch': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 2h6M9 22h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  'meditate': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 10v3M8 21c0-4 2-5 4-5s4 1 4 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 15c1 0 2.5.5 3.5 1.5M19 15c-1 0-2.5.5-3.5 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  'moon': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="6" r="1" fill="currentColor" fillOpacity="0.5" />
      <circle cx="19" cy="10" r="0.5" fill="currentColor" fillOpacity="0.5" />
    </svg>
  ),

  'video': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="6" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 10l5-3v10l-5-3v-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),

  'community': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="18" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <path d="M12 13c-3 0-5 1.5-5 4h10c0-2.5-2-4-5-4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 14c-2 0-3 1-3 2.5h3" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <path d="M18 14c2 0 3 1 3 2.5h-3" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
    </svg>
  ),

  'workshop': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
  ),

  'notes': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14 3v4a1 1 0 0 0 1 1h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9 9h1M9 13h6M9 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  'sun': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  'calendar': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="14" r="1" fill="currentColor" />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
      <circle cx="16" cy="14" r="1" fill="currentColor" fillOpacity="0.5" />
    </svg>
  ),

  'flow': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 12c0-4 3-6 8-6s8 2 8 6-3 6-8 6-8-2-8-6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      <circle cx="8" cy="12" r="1.5" fill="currentColor" />
      <circle cx="16" cy="12" r="1.5" fill="currentColor" fillOpacity="0.5" />
    </svg>
  ),

  // === UI ICONS ===

  'leaf': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 22c-4-4-8-8-8-14C4 4 12 2 12 2s8 2 8 6c0 6-4 10-8 14z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22c0-4-2-8-4-10M12 22c0-4 2-8 4-10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />
    </svg>
  ),

  'arrow-right': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  'chevron-down': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  'star': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3l2.5 6.5H21l-5.5 4.5 2 7L12 17l-5.5 4 2-7L3 9.5h6.5L12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  'check': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 12l5 5L20 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  'external-link': (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export function CustomIcon({ name, size = 'md', className, ...props }: CustomIconProps) {
  const IconComponent = icons[name];
  const pixelSize = sizeMap[size];

  if (!IconComponent) {
    console.warn(`CustomIcon: Unknown icon name "${name}"`);
    return null;
  }

  return (
    <IconComponent
      width={pixelSize}
      height={pixelSize}
      className={className}
      {...props}
    />
  );
}

// Export icon names for type safety
export const iconNames = Object.keys(icons) as IconName[];
