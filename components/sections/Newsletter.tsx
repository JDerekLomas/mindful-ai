'use client';

import { useState } from 'react';
import { CustomIcon } from '@/components/ui/CustomIcon';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setStatus('success');
    setEmail('');
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="
          relative
          overflow-hidden
          bg-gradient-to-br from-lavender-500 to-calm-500
          rounded-3xl
          p-8 sm:p-12
        ">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="
              w-16 h-16
              mx-auto mb-6
              flex items-center justify-center
              bg-white/20
              rounded-2xl
              backdrop-blur-sm
              text-white
            ">
              <CustomIcon name="leaf" size="lg" className="w-8 h-8" />
            </div>

            {/* Content */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Stay Mindfully Updated
            </h2>
            <p className="text-lavender-100 mb-8">
              Get weekly discoveries of AI tools that respect your wellbeing.
              No spam, just thoughtful curation.
            </p>

            {/* Form */}
            {status === 'success' ? (
              <div className="
                inline-flex items-center gap-2
                px-6 py-3
                bg-white/20 backdrop-blur-sm
                rounded-full
                text-white font-medium
              ">
                <CustomIcon name="check" size="md" />
                You&apos;re subscribed! Welcome aboard.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="
                    flex-1
                    px-5 py-3
                    bg-white/20 backdrop-blur-sm
                    border border-white/30
                    rounded-full
                    text-white placeholder:text-white/60
                    focus:outline-none focus:ring-2 focus:ring-white/50
                  "
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="
                    px-6 py-3
                    bg-white
                    text-lavender-600 font-medium
                    rounded-full
                    hover:bg-lavender-50
                    transition-colors
                    disabled:opacity-50
                  "
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}

            <p className="mt-4 text-xs text-lavender-200">
              Join 2,000+ mindful humans. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
