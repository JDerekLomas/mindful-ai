import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="text-6xl mb-6 block">🌿</span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              AI for Human{' '}
              <span className="bg-gradient-to-r from-lavender-500 to-calm-500 bg-clip-text text-transparent">
                Flourishing
              </span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              We believe artificial intelligence should enhance human life,
              not exploit our attention or amplify our anxieties.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                The AI landscape is growing rapidly, but not all AI tools are created equal.
                Some are designed to capture your attention and create dependence.
                Others are built to genuinely help you thrive.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                MindfulAI exists to help you find the latter. We curate AI tools that
                respect your time, support your mental health, and empower you to
                grow—not just produce more.
              </p>
            </div>
          </section>

          {/* Wellbeing Score */}
          <section id="wellbeing-score" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">The Wellbeing Score</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              Every tool we feature is evaluated on four dimensions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: '👁️',
                  title: 'Attention Respect',
                  description: 'Does it fight for your attention with notifications and dark patterns, or does it let you focus?',
                },
                {
                  icon: '🌊',
                  title: 'Calmness',
                  description: 'Does it create anxiety and FOMO, or does it promote a sense of calm and clarity?',
                },
                {
                  icon: '🎮',
                  title: 'User Agency',
                  description: 'Are you in control of the AI, or is it making decisions without your input?',
                },
                {
                  icon: '🌱',
                  title: 'Growth Support',
                  description: 'Does it help you learn and improve, or does it create dependence on the tool?',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    p-6
                    bg-white dark:bg-neutral-900
                    border border-neutral-200 dark:border-neutral-800
                    rounded-2xl
                  "
                >
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Criteria */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">What We Look For</h2>
            <div className="
              p-6
              bg-lavender-50 dark:bg-lavender-950/30
              border border-lavender-100 dark:border-lavender-900
              rounded-2xl
            ">
              <ul className="space-y-3">
                {[
                  'No manipulative dark patterns or addictive design',
                  'Transparent about how AI is being used',
                  'Respects user privacy and data',
                  'Designed to be a tool, not a replacement for human connection',
                  'Evidence-based or scientifically informed approach',
                  'Accessible and inclusive design',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-lavender-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Join the Movement</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Know an AI tool that belongs here? We&apos;d love to hear about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/submit"
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-3
                  bg-lavender-500 hover:bg-lavender-600
                  text-white font-medium
                  rounded-full
                  transition-colors
                "
              >
                Submit a Tool
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
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
