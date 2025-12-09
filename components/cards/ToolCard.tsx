'use client';

import Link from 'next/link';
import { AITool, categories, getWellbeingAverage } from '@/lib/data';
import { Icon } from '@/components/ui/Icon';

interface ToolCardProps {
  tool: AITool;
  index?: number;
}

export function ToolCard({ tool, index = 0 }: ToolCardProps) {
  const category = categories[tool.category];
  const wellbeingScore = getWellbeingAverage(tool.wellbeing);

  return (
    <Link
      href={`/tool/${tool.id}`}
      className="
        group
        relative
        block
        p-5
        bg-white dark:bg-neutral-900
        border border-neutral-200 dark:border-neutral-800
        rounded-2xl
        transition-all duration-300
        hover:border-lavender-300 dark:hover:border-lavender-700
        hover:shadow-lg hover:shadow-lavender-500/10
        hover:-translate-y-1
        animate-fade-in-up
      "
      style={{
        animationDelay: `${index * 50}ms`,
        animationFillMode: 'both',
      }}
    >
      {/* New badge */}
      {tool.isNew && (
        <span className="
          absolute -top-2 -right-2
          px-2 py-0.5
          bg-calm-500 text-white
          text-xs font-medium
          rounded-full
        ">
          New
        </span>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-3">
        {/* Icon */}
        <div
          className="
            w-12 h-12
            flex items-center justify-center
            bg-neutral-100 dark:bg-neutral-800
            rounded-xl
            group-hover:scale-110
            transition-transform duration-300
            text-neutral-600 dark:text-neutral-300
          "
        >
          <Icon name={tool.icon} size="medium" />
        </div>

        {/* Title & Provider */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-neutral-900 dark:text-white truncate">
            {tool.name}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {tool.tagline}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4">
        {tool.description}
      </p>

      {/* Wellbeing Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="text-neutral-500">Wellbeing Score</span>
          <span className="font-medium text-calm-600 dark:text-calm-400">
            {wellbeingScore.toFixed(1)}/5
          </span>
        </div>
        <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-lavender-500 to-calm-500 rounded-full transition-all duration-500"
            style={{ width: `${(wellbeingScore / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Category */}
        <span
          className="
            inline-flex items-center gap-1
            px-2 py-1
            text-xs font-medium
            rounded-full
          "
          style={{
            backgroundColor: `${category.color}15`,
            color: category.color,
          }}
        >
          <Icon name={category.icon} size="small" />
          {category.label}
        </span>

        {/* Arrow */}
        <span className="
          text-neutral-400
          group-hover:text-lavender-500
          group-hover:translate-x-1
          transition-all duration-300
        ">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

// Grid wrapper
interface ToolCardGridProps {
  children: React.ReactNode;
}

export function ToolCardGrid({ children }: ToolCardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
}
