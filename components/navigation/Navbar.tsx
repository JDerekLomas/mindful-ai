'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { EnergySavingsLeaf } from '@mui/icons-material';

const navLinks = [
  { label: 'Explore', href: '/explore' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('mindfulai-theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled
          ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <EnergySavingsLeaf className="text-2xl text-lavender-500 transition-transform group-hover:scale-110" fontSize="inherit" />
            <span className="font-semibold text-lg">
              Mindful<span className="text-lavender-500">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-sm font-medium
                  text-neutral-600 dark:text-neutral-300
                  hover:text-lavender-600 dark:hover:text-lavender-400
                  transition-colors
                "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="
                p-2 rounded-full
                hover:bg-neutral-100 dark:hover:bg-neutral-800
                transition-colors
              "
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Submit tool button */}
            <Link
              href="/submit"
              className="
                hidden sm:inline-flex
                px-4 py-2
                bg-lavender-500 hover:bg-lavender-600
                text-white text-sm font-medium
                rounded-full
                transition-colors
              "
            >
              Submit a Tool
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-t dark:border-neutral-800">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="
                  block py-2 px-4
                  text-neutral-600 dark:text-neutral-300
                  hover:bg-neutral-100 dark:hover:bg-neutral-800
                  rounded-lg
                "
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/submit"
              onClick={() => setIsMenuOpen(false)}
              className="
                block py-2 px-4
                bg-lavender-500 text-white text-center
                rounded-lg
              "
            >
              Submit a Tool
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
