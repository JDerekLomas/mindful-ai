'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { categories, Category } from '@/lib/data';

export default function SubmitPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const url = (form.elements.namedItem('url') as HTMLInputElement).value;
    const category = (form.elements.namedItem('category') as HTMLSelectElement).value;
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const affiliated = (form.elements.namedItem('affiliated') as HTMLInputElement).checked;

    const subject = encodeURIComponent(`Tool Submission: ${name}`);
    const body = encodeURIComponent(
      `Tool Name: ${name}\n` +
      `URL: ${url}\n` +
      `Category: ${category}\n` +
      `Submitter Email: ${email || 'Not provided'}\n` +
      `Affiliated: ${affiliated ? 'Yes' : 'No'}\n\n` +
      `Why it supports wellbeing:\n${description}`
    );

    window.location.href = `mailto:j.d.lomas@tudelft.nl?subject=${subject}&body=${body}`;

    // Show success after a short delay
    setTimeout(() => setFormState('success'), 500);
  };

  const categoryList = Object.entries(categories) as [Category, typeof categories[Category]][];

  if (formState === 'success') {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="
              w-20 h-20
              mx-auto mb-6
              flex items-center justify-center
              text-5xl
              bg-calm-100 dark:bg-calm-900/30
              rounded-full
            ">
              🎉
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              We&apos;ve received your submission. Our team will review it and get back to you
              if we decide to feature the tool.
            </p>
            <a
              href="/explore"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3
                bg-lavender-500 hover:bg-lavender-600
                text-white font-medium
                rounded-full
                transition-colors
              "
            >
              Explore Tools
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Submit a Tool</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Know an AI tool that supports human wellbeing? We&apos;d love to hear about it.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tool Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Tool Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="
                  w-full px-4 py-3
                  bg-white dark:bg-neutral-900
                  border border-neutral-200 dark:border-neutral-800
                  rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-lavender-500
                "
                placeholder="e.g., Headspace"
              />
            </div>

            {/* URL */}
            <div>
              <label htmlFor="url" className="block text-sm font-medium mb-2">
                Website URL *
              </label>
              <input
                type="url"
                id="url"
                name="url"
                required
                className="
                  w-full px-4 py-3
                  bg-white dark:bg-neutral-900
                  border border-neutral-200 dark:border-neutral-800
                  rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-lavender-500
                "
                placeholder="https://"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-2">
                Category *
              </label>
              <select
                id="category"
                name="category"
                required
                className="
                  w-full px-4 py-3
                  bg-white dark:bg-neutral-900
                  border border-neutral-200 dark:border-neutral-800
                  rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-lavender-500
                "
              >
                <option value="">Select a category</option>
                {categoryList.map(([key, cat]) => (
                  <option key={key} value={key}>
                    {cat.icon} {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Why does this tool support wellbeing? *
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                className="
                  w-full px-4 py-3
                  bg-white dark:bg-neutral-900
                  border border-neutral-200 dark:border-neutral-800
                  rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-lavender-500
                  resize-none
                "
                placeholder="Tell us how this tool helps users while respecting their attention, mental health, and agency..."
              />
            </div>

            {/* Your Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="
                  w-full px-4 py-3
                  bg-white dark:bg-neutral-900
                  border border-neutral-200 dark:border-neutral-800
                  rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-lavender-500
                "
                placeholder="We'll notify you if we feature the tool"
              />
            </div>

            {/* Affiliation */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="affiliated"
                  className="
                    mt-1 w-4 h-4
                    rounded
                    border-neutral-300 dark:border-neutral-600
                    text-lavender-500
                    focus:ring-lavender-500
                  "
                />
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  I am affiliated with this tool (work for the company, investor, etc.)
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="
                w-full
                px-6 py-3
                bg-lavender-500 hover:bg-lavender-600
                disabled:bg-lavender-400
                text-white font-medium
                rounded-xl
                transition-colors
              "
            >
              {formState === 'submitting' ? 'Submitting...' : 'Submit Tool'}
            </button>
          </form>

          {/* Guidelines */}
          <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
            <h3 className="font-semibold mb-3">Submission Guidelines</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-lavender-500">•</span>
                Tools should be AI-powered or AI-assisted
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lavender-500">•</span>
                Must have a clear benefit to user wellbeing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lavender-500">•</span>
                No tools with manipulative or addictive design patterns
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lavender-500">•</span>
                We review all submissions manually (usually within 1 week)
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
