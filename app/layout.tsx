import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MindfulAI - AI Tools Designed for Human Flourishing',
  description: 'Discover AI tools that respect your attention, support your wellbeing, and help you thrive. Curated for mental health, focus, creativity, and mindful productivity.',
  keywords: ['AI', 'wellbeing', 'mental health', 'mindfulness', 'productivity', 'creativity', 'AI tools'],
  authors: [{ name: 'MindfulAI' }],
  openGraph: {
    title: 'MindfulAI - AI Tools Designed for Human Flourishing',
    description: 'Discover AI tools that respect your attention and support your wellbeing.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('mindfulai-theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
