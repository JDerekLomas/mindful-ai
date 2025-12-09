import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { ToolCard, ToolCardGrid } from '@/components/cards/ToolCard';
import { tools, categories, getToolById, getToolsByCategory, getWellbeingAverage } from '@/lib/data';
import { Icon } from '@/components/ui/Icon';
import { Visibility, Waves, SportsEsports, Spa } from '@mui/icons-material';

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return tools.map((tool) => ({ id: tool.id }));
}

export default function ToolPage({ params }: PageProps) {
  const tool = getToolById(params.id);

  if (!tool) {
    notFound();
  }

  const category = categories[tool.category];
  const relatedTools = getToolsByCategory(tool.category)
    .filter(t => t.id !== tool.id)
    .slice(0, 3);

  const wellbeingScore = getWellbeingAverage(tool.wellbeing);

  const wellbeingLabels = {
    attention: { label: 'Attention Respect', Icon: Visibility },
    calm: { label: 'Calmness', Icon: Waves },
    agency: { label: 'User Agency', Icon: SportsEsports },
    growth: { label: 'Growth Support', Icon: Spa },
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/explore" className="hover:text-lavender-500">
              Explore
            </Link>
            <span>/</span>
            <Link href={`/explore?category=${tool.category}`} className="hover:text-lavender-500">
              {category.label}
            </Link>
            <span>/</span>
            <span className="text-neutral-900 dark:text-white">{tool.name}</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            {/* Icon */}
            <div className="
              w-20 h-20
              flex items-center justify-center
              bg-neutral-100 dark:bg-neutral-800
              rounded-2xl
              flex-shrink-0
              text-neutral-600 dark:text-neutral-300
            ">
              <Icon name={tool.icon} size="large" />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h1 className="text-3xl font-bold">{tool.name}</h1>
                {tool.isNew && (
                  <span className="px-3 py-1 bg-calm-500 text-white text-sm font-medium rounded-full">
                    New
                  </span>
                )}
              </div>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
                {tool.tagline}
              </p>

              {/* Category & Tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full"
                  style={{
                    backgroundColor: `${category.color}15`,
                    color: category.color,
                  }}
                >
                  <Icon name={category.icon} size="small" /> {category.label}
                </span>
                {tool.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3
                bg-lavender-500 hover:bg-lavender-600
                text-white font-medium
                rounded-xl
                transition-colors
              "
            >
              Visit {tool.name}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <button className="
              inline-flex items-center justify-center gap-2
              px-6 py-3
              border border-neutral-200 dark:border-neutral-700
              font-medium
              rounded-xl
              hover:bg-neutral-50 dark:hover:bg-neutral-800
              transition-colors
            ">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Save to favorites
            </button>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {tool.description}
            </p>
          </div>

          {/* Wellbeing Score */}
          <div className="
            p-6
            bg-gradient-to-br from-lavender-50 to-calm-50
            dark:from-lavender-950/30 dark:to-calm-950/30
            border border-lavender-100 dark:border-lavender-900
            rounded-2xl
            mb-12
          ">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Wellbeing Score</h2>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-lavender-600 dark:text-lavender-400">
                  {wellbeingScore.toFixed(1)}
                </span>
                <span className="text-neutral-500">/5</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(tool.wellbeing).map(([key, value]) => {
                const info = wellbeingLabels[key as keyof typeof wellbeingLabels];
                const IconComponent = info.Icon;
                return (
                  <div key={key} className="flex items-center gap-3">
                    <IconComponent className="text-xl text-lavender-500" fontSize="inherit" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-neutral-600 dark:text-neutral-400">{info.label}</span>
                        <span className="font-medium">{value}/5</span>
                      </div>
                      <div className="h-2 bg-white dark:bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-lavender-500 to-calm-500 rounded-full"
                          style={{ width: `${(value / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Related Tools</h2>
                <Link
                  href={`/explore?category=${tool.category}`}
                  className="text-lavender-600 dark:text-lavender-400 text-sm font-medium hover:underline"
                >
                  View all in {category.label}
                </Link>
              </div>
              <ToolCardGrid>
                {relatedTools.map((relatedTool, index) => (
                  <ToolCard key={relatedTool.id} tool={relatedTool} index={index} />
                ))}
              </ToolCardGrid>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
