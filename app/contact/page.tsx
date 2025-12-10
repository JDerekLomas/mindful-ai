import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import Link from 'next/link';
import { CustomIcon } from '@/components/ui/CustomIcon';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Have questions about AI for wellbeing? Want to collaborate? I&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 mb-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Photo placeholder */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-lavender-400 to-calm-400 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                JDL
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-1">J. Derek Lomas, PhD</h2>
                <p className="text-lavender-600 dark:text-lavender-400 mb-3">
                  Assistant Professor, Delft University of Technology
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                  I research how design can support human flourishing. AI for Wellbeing is a project
                  of the <a href="https://diopd.org" target="_blank" rel="noopener noreferrer" className="text-lavender-600 dark:text-lavender-400 hover:underline">Delft Institute of Positive Design</a>,
                  where we explore how AI tools can genuinely support mental health, focus, creativity, and connection.
                </p>

                {/* Contact methods */}
                <div className="space-y-2">
                  <a
                    href="mailto:j.d.lomas@tudelft.nl"
                    className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    j.d.lomas@tudelft.nl
                  </a>
                  <a
                    href="https://diopd.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Delft Institute of Positive Design
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/submit"
              className="p-6 bg-lavender-50 dark:bg-lavender-950/30 border border-lavender-100 dark:border-lavender-900 rounded-xl hover:bg-lavender-100 dark:hover:bg-lavender-950/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Submit a Tool</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Know an AI tool that supports wellbeing? Tell us about it.
              </p>
            </Link>

            <a
              href="mailto:j.d.lomas@tudelft.nl?subject=Collaboration%20Inquiry%20-%20AI%20for%20Wellbeing"
              className="p-6 bg-calm-50 dark:bg-calm-950/30 border border-calm-100 dark:border-calm-900 rounded-xl hover:bg-calm-100 dark:hover:bg-calm-950/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">Collaborate</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Interested in research partnerships or collaborations.
              </p>
            </a>
          </div>

          {/* About DIOPD */}
          <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
            <h3 className="font-semibold mb-3">About the Delft Institute of Positive Design</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              The DIOPD initiates and stimulates the development of knowledge that supports designers
              in their attempts to design for human flourishing. We believe that as design researchers,
              we bear responsibility for generating insights that help designers contribute meaningfully
              to people&apos;s happiness.
            </p>
            <a
              href="https://diopd.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lavender-600 dark:text-lavender-400 text-sm font-medium hover:gap-3 transition-all"
            >
              Learn more about DIOPD
              <CustomIcon name="arrow-right" size="sm" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
