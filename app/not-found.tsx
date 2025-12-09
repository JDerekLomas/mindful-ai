import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🌿</div>
          <h1 className="text-4xl font-bold mb-4">Page not found</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Looks like this page took a mindfulness break. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3
                bg-lavender-500 hover:bg-lavender-600
                text-white font-medium
                rounded-full
                transition-colors
              "
            >
              Go Home
            </Link>
            <Link
              href="/explore"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3
                border border-neutral-200 dark:border-neutral-700
                font-medium
                rounded-full
                hover:bg-neutral-50 dark:hover:bg-neutral-800
                transition-colors
              "
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
