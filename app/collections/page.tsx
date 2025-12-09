import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CollectionCard, CollectionCardGrid } from '@/components/cards/CollectionCard';
import { collections } from '@/lib/data';

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Collections</h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl">
              Curated bundles of AI tools organized by specific needs, goals, and moments
              in your day.
            </p>
          </div>

          {/* Collections Grid */}
          <CollectionCardGrid>
            {collections.map((collection, index) => (
              <CollectionCard key={collection.id} collection={collection} index={index} />
            ))}
          </CollectionCardGrid>
        </div>
      </main>
      <Footer />
    </>
  );
}
