import Link from 'next/link';
import { collections } from '@/lib/data';
import { CollectionCard, CollectionCardGrid } from '@/components/cards/CollectionCard';

export function Collections() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Curated Collections
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Tools bundled by specific needs and goals
            </p>
          </div>
          <Link
            href="/collections"
            className="
              inline-flex items-center gap-2
              text-lavender-600 dark:text-lavender-400
              font-medium
              hover:gap-3 transition-all
            "
          >
            All collections
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <CollectionCardGrid>
          {collections.slice(0, 6).map((collection, index) => (
            <CollectionCard key={collection.id} collection={collection} index={index} />
          ))}
        </CollectionCardGrid>
      </div>
    </section>
  );
}
