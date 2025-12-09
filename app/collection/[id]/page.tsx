import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { ToolCard, ToolCardGrid } from '@/components/cards/ToolCard';
import { collections, getCollectionTools } from '@/lib/data';

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return collections.map((collection) => ({ id: collection.id }));
}

export default function CollectionPage({ params }: PageProps) {
  const collection = collections.find(c => c.id === params.id);

  if (!collection) {
    notFound();
  }

  const tools = getCollectionTools(collection);
  const otherCollections = collections.filter(c => c.id !== collection.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/collections" className="hover:text-lavender-500">
              Collections
            </Link>
            <span>/</span>
            <span className="text-neutral-900 dark:text-white">{collection.title}</span>
          </nav>

          {/* Header */}
          <div className="
            relative
            overflow-hidden
            bg-gradient-to-br from-lavender-50 to-calm-50
            dark:from-lavender-950/30 dark:to-calm-950/30
            rounded-3xl
            p-8 sm:p-12
            mb-12
          ">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lavender-200 dark:bg-lavender-800 rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10">
              <div className="
                w-20 h-20
                flex items-center justify-center
                text-5xl
                bg-white dark:bg-neutral-800
                rounded-2xl
                shadow-lg
                mb-6
              ">
                {collection.emoji}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{collection.title}</h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                {collection.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-neutral-500">
                <span>{tools.length} tools</span>
                <span>•</span>
                <span>Curated collection</span>
              </div>
            </div>
          </div>

          {/* Tools in this collection */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Tools in this collection</h2>
            <ToolCardGrid>
              {tools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </ToolCardGrid>
          </div>

          {/* Other collections */}
          {otherCollections.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Other Collections</h2>
                <Link
                  href="/collections"
                  className="text-lavender-600 dark:text-lavender-400 text-sm font-medium hover:underline"
                >
                  View all
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {otherCollections.map((other, index) => (
                  <Link
                    key={other.id}
                    href={`/collection/${other.id}`}
                    className="
                      group
                      p-6
                      bg-white dark:bg-neutral-900
                      border border-neutral-200 dark:border-neutral-800
                      rounded-2xl
                      transition-all duration-300
                      hover:shadow-lg hover:-translate-y-1
                      animate-fade-in-up
                    "
                    style={{
                      animationDelay: `${index * 75}ms`,
                      animationFillMode: 'both',
                    }}
                  >
                    <span className="text-3xl mb-3 block">{other.emoji}</span>
                    <h3 className="font-semibold mb-1 group-hover:text-lavender-500 transition-colors">
                      {other.title}
                    </h3>
                    <p className="text-sm text-neutral-500">{other.tools.length} tools</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
