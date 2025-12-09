import Link from 'next/link';
import { categories, Category } from '@/lib/data';

export function Categories() {
  const categoryList = Object.entries(categories) as [Category, typeof categories[Category]][];

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Browse by Category
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Find AI tools organized by what matters most to you
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categoryList.map(([key, cat], index) => (
            <Link
              key={key}
              href={`/explore?category=${key}`}
              className="
                group
                relative
                p-6
                bg-white dark:bg-neutral-800
                border border-neutral-200 dark:border-neutral-700
                rounded-2xl
                overflow-hidden
                transition-all duration-300
                hover:shadow-lg
                hover:-translate-y-1
                animate-fade-in-up
              "
              style={{
                animationDelay: `${index * 75}ms`,
                animationFillMode: 'both',
              }}
            >
              {/* Background gradient on hover */}
              <div
                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-10
                  transition-opacity duration-300
                "
                style={{ backgroundColor: cat.color }}
              />

              {/* Content */}
              <div className="relative z-10">
                <span className="text-3xl mb-3 block">{cat.icon}</span>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                  {cat.label}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
                  {cat.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="
                absolute bottom-4 right-4
                w-8 h-8
                flex items-center justify-center
                rounded-full
                bg-neutral-100 dark:bg-neutral-700
                text-neutral-400
                group-hover:bg-lavender-500 group-hover:text-white
                transition-all duration-300
                translate-x-2 opacity-0
                group-hover:translate-x-0 group-hover:opacity-100
              ">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
