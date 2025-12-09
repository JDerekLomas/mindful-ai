import Link from 'next/link';
import { EnergySavingsLeaf, Favorite } from '@mui/icons-material';

const footerLinks = {
  discover: [
    { label: 'All Tools', href: '/explore' },
    { label: 'Collections', href: '/collections' },
    { label: 'New Arrivals', href: '/explore?filter=new' },
    { label: 'Top Rated', href: '/explore?sort=rating' },
  ],
  categories: [
    { label: 'Mental Health', href: '/explore?category=mental-health' },
    { label: 'Focus & Flow', href: '/explore?category=focus-flow' },
    { label: 'Creative', href: '/explore?category=creative' },
    { label: 'Physical Wellness', href: '/explore?category=physical' },
  ],
  about: [
    { label: 'Our Mission', href: '/about' },
    { label: 'Submit a Tool', href: '/submit' },
    { label: 'Wellbeing Score', href: '/about#wellbeing-score' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <EnergySavingsLeaf className="text-2xl text-lavender-500" fontSize="inherit" />
              <span className="font-semibold text-lg">
                Mindful<span className="text-lavender-500">AI</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Discovering AI tools designed for human flourishing.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/mindfulai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-lavender-500 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://github.com/mindfulai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-lavender-500 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Discover */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Discover</h3>
            <ul className="space-y-2">
              {footerLinks.discover.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-lavender-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Categories</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-lavender-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-sm mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-lavender-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500 flex items-center gap-1">
            &copy; {new Date().getFullYear()} MindfulAI. Made with <Favorite className="text-lavender-500 text-sm" fontSize="inherit" /> for human flourishing.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-neutral-500 hover:text-lavender-500">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-neutral-500 hover:text-lavender-500">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
