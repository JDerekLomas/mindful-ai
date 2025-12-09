'use client';

import {
  Favorite,
  Psychology,
  SelfImprovement,
  Palette,
  FitnessCenter,
  Groups,
  Spa,
  Forum,
  AutoStories,
  MusicNote,
  Headphones,
  Diamond,
  Movie,
  MusicVideo,
  AutoAwesome,
  Watch,
  Bedtime,
  Videocam,
  Home,
  Cake,
  EditNote,
  WbSunny,
  CalendarMonth,
  Waves,
  VolunteerActivism,
  TrackChanges,
  NightsStay,
  Bolt,
  Public,
  FlareRounded,
  EnergySavingsLeaf,
} from '@mui/icons-material';
import { SvgIconProps } from '@mui/material';
import { ComponentType } from 'react';

// Icon mapping from name strings to Material icon components
const iconMap: Record<string, ComponentType<SvgIconProps>> = {
  // Categories
  'heart': Favorite,
  'psychology': Psychology,
  'self-improvement': SelfImprovement,
  'palette': Palette,
  'fitness': FitnessCenter,
  'groups': Groups,
  'spa': Spa,
  'eco': EnergySavingsLeaf,

  // Tools - Mental Health
  'volunteer-activism': VolunteerActivism,
  'forum': Forum,
  'auto-stories': AutoStories,

  // Tools - Focus
  'music-note': MusicNote,
  'headphones': Headphones,
  'diamond': Diamond,

  // Tools - Creative
  'movie': Movie,
  'music-video': MusicVideo,
  'auto-awesome': AutoAwesome,

  // Tools - Physical
  'watch': Watch,
  'bedtime': Bedtime,
  'nights-stay': NightsStay,

  // Tools - Connection
  'videocam': Videocam,
  'home': Home,
  'cake': Cake,

  // Tools - Productivity
  'edit-note': EditNote,
  'wb-sunny': WbSunny,
  'calendar': CalendarMonth,
  'waves': Waves,

  // Collections
  'track-changes': TrackChanges,
  'bolt': Bolt,
  'public': Public,
  'flare': FlareRounded,
};

interface IconProps {
  name: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function Icon({ name, className = '', size = 'medium' }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Fallback for unknown icons
    return <span className={className}>?</span>;
  }

  const sizeClass = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-3xl',
  }[size];

  return (
    <IconComponent
      className={`${sizeClass} ${className}`}
      fontSize="inherit"
    />
  );
}

export default Icon;
