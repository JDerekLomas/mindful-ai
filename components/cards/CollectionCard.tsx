import Link from 'next/link';
import { Collection, getCollectionTools } from '@/lib/data';

interface CollectionCardProps {
  collection: Collection;
  index?: number;
}

export function CollectionCard({ collection, index = 0 }: CollectionCardProps) {
  const tools = getCollectionTools(collection);

  return (
    <Link
      href={`/collection/${collection.id}`}
      className="
        group
        block
        p-6
        bg-gradient-to-br from-white to-neutral-50
        dark:from-neutral-900 dark:to-neutral-800
        border border-neutral-200 dark:border-neutral-700
        rounded-2xl
        transition-all duration-300
        hover:shadow-xl hover:shadow-lavender-500/10
        hover:-translate-y-1
        hover:border-lavender-300 dark:hover:border-lavender-600
        animate-fade-in-up
      "
      style={{
        animationDelay: `${index * 75}ms`,
        animationFillMode: 'both',
      }}
    >
      {/* Emoji */}
      <div className="
        w-14 h-14
        flex items-center justify-center
        text-3xl
        bg-lavender-100 dark:bg-lavender-900/30
        rounded-2xl
        mb-4
        group-hover:scale-110 group-hover:rotate-3
        transition-transform duration-300
      ">
        {collection.emoji}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
        {collection.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        {collection.description}
      </p>

      {/* Tool preview */}
      <div className="flex items-center gap-2">
        {/* Tool icons */}
        <div className="flex -space-x-2">
          {tools.slice(0, 4).map((tool, i) => (
            <div
              key={tool.id}
              className="
                w-8 h-8
                flex items-center justify-center
                text-sm
                bg-white dark:bg-neutral-800
                border-2 border-white dark:border-neutral-700
                rounded-full
              "
              style={{ zIndex: 4 - i }}
            >
              {tool.icon}
            </div>
          ))}
        </div>
        <span className="text-sm text-neutral-500">
          {tools.length} tool{tools.length !== 1 ? 's' : ''}
        </span>
      </div>
    </Link>
  );
}

// Grid wrapper
interface CollectionCardGridProps {
  children: React.ReactNode;
}

export function CollectionCardGrid({ children }: CollectionCardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
}
