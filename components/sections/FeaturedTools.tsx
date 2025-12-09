import { getFeaturedTools } from '@/lib/data';
import { ToolCard, ToolCardGrid } from '@/components/cards/ToolCard';
import Link from 'next/link';

export function FeaturedTools() {
  const tools = getFeaturedTools();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Featured Tools
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Hand-picked AI tools with the highest wellbeing scores
            </p>
          </div>
          <Link
            href="/explore"
            className="
              inline-flex items-center gap-2
              text-lavender-600 dark:text-lavender-400
              font-medium
              hover:gap-3 transition-all
            "
          >
            View all tools
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <ToolCardGrid>
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </ToolCardGrid>
      </div>
    </section>
  );
}
