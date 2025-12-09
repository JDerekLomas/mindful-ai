'use client';

import { CustomIcon, IconName, iconNames } from './CustomIcon';

// Map old Material icon names to new custom icon names
const iconNameMap: Record<string, IconName> = {
  // Categories
  'heart': 'heart',
  'psychology': 'mental-health',
  'self-improvement': 'meditate',
  'palette': 'palette',
  'fitness': 'physical',
  'groups': 'community',
  'spa': 'calm',
  'eco': 'productivity',
  'track-changes': 'focus-flow',

  // Tools - Mental Health
  'volunteer-activism': 'heart',
  'forum': 'chat',
  'auto-stories': 'journal',

  // Tools - Focus
  'music-note': 'sound-wave',
  'headphones': 'headphones',
  'diamond': 'shield',

  // Tools - Creative
  'movie': 'video',
  'music-video': 'music',
  'auto-awesome': 'sparkle',

  // Tools - Physical
  'watch': 'watch',
  'bedtime': 'moon',
  'nights-stay': 'moon',

  // Tools - Connection
  'videocam': 'video',
  'home': 'community',
  'cake': 'workshop',

  // Tools - Productivity
  'edit-note': 'notes',
  'wb-sunny': 'sun',
  'calendar': 'calendar',
  'waves': 'flow',

  // Collections
  'bolt': 'sparkle',
  'public': 'connection',
  'flare': 'growth',
};

interface IconProps {
  name: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export function Icon({ name, className = '', size = 'medium' }: IconProps) {
  // Map old name to new name, or use directly if it's a valid custom icon
  const mappedName = iconNameMap[name] || (iconNames.includes(name as IconName) ? name : null);

  if (!mappedName) {
    console.warn(`Icon: Unknown icon name "${name}"`);
    return <span className={className}>•</span>;
  }

  const sizeMap = {
    small: 'sm' as const,
    medium: 'md' as const,
    large: 'lg' as const,
  };

  return (
    <CustomIcon
      name={mappedName as IconName}
      size={sizeMap[size]}
      className={className}
    />
  );
}

export default Icon;
