import Link from 'next/link';
import Image from 'next/image';
import { Collection, getCollectionTools } from '@/lib/data';

const collectionImages: Record<string, string> = {
  'anxiety-relief': '/images/collections/anxiety-relief.png',
  'deep-work': '/images/collections/deep-work.png',
  'better-sleep': '/images/collections/better-sleep.png',
  'creative-spark': '/images/collections/creative-spark.png',
  'remote-teams': '/images/collections/remote-teams.png',
  'self-discovery': '/images/collections/self-discovery.png',
};

interface CollectionCardProps {
  collection: Collection;
  index?: number;
}

export function CollectionCard({ collection, index = 0 }: CollectionCardProps) {
  const tools = getCollectionTools(collection);
  const imageUrl = collectionImages[collection.id];

  return (
    <Link
      href={`/collection/${collection.id}`}
      className="
        group
        block
        overflow-hidden
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
      {/* Cover Image */}
      {imageUrl && (
        <div className="relative h-32 overflow-hidden">
          <Image
            src={imageUrl}
            alt={collection.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent" />
        </div>
      )}

      <div className="p-6 pt-2">
        {/* Emoji badge */}
        <div className="
          w-12 h-12
          -mt-8
          relative
          flex items-center justify-center
          text-2xl
          bg-white dark:bg-neutral-800
          border-2 border-white dark:border-neutral-700
          rounded-xl
          shadow-lg
          mb-3
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
