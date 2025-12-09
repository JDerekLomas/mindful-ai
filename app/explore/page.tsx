'use client';

import { useState, useMemo } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { ToolCard, ToolCardGrid } from '@/components/cards/ToolCard';
import { tools, categories, Category, getWellbeingAverage } from '@/lib/data';

type SortOption = 'name' | 'rating' | 'newest';

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    let result = tools;

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(t => t.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(t =>
        t.name.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sort
    if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) =>
        getWellbeingAverage(b.wellbeing) - getWellbeingAverage(a.wellbeing)
      );
    } else if (sortBy === 'newest') {
      result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [selectedCategory, sortBy, searchQuery]);

  const categoryList = Object.entries(categories) as [Category, typeof categories[Category]][];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Explore Tools</h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              Discover AI tools curated for your wellbeing
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tools, tags, features..."
                  className="
                    w-full
                    pl-12 pr-4 py-3
                    bg-white dark:bg-neutral-900
                    border border-neutral-200 dark:border-neutral-800
                    rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-lavender-500 focus:border-transparent
                  "
                />
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <label className="text-sm text-neutral-500">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="
                  px-4 py-3
                  bg-white dark:bg-neutral-900
                  border border-neutral-200 dark:border-neutral-800
                  rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-lavender-500
                "
              >
                <option value="rating">Wellbeing Score</option>
                <option value="name">Name</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`
                px-4 py-2
                rounded-full
                text-sm font-medium
                transition-all
                ${selectedCategory === 'all'
                  ? 'bg-lavender-500 text-white'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }
              `}
            >
              All Tools
            </button>
            {categoryList.map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`
                  inline-flex items-center gap-2
                  px-4 py-2
                  rounded-full
                  text-sm font-medium
                  transition-all
                  ${selectedCategory === key
                    ? 'text-white'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }
                `}
                style={selectedCategory === key ? { backgroundColor: cat.color } : {}}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-neutral-500 mb-6">
            Showing {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''}
          </p>

          {/* Tools Grid */}
          {filteredTools.length > 0 ? (
            <ToolCardGrid>
              {filteredTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </ToolCardGrid>
          ) : (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No tools found</h3>
              <p className="text-neutral-500">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
