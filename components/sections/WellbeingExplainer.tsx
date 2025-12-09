export function WellbeingExplainer() {
  const criteria = [
    {
      icon: '👁️',
      title: 'Attention',
      description: 'Does it respect your attention or fight for it? Tools that let you focus without dark patterns.',
      color: '#8b5cf6',
    },
    {
      icon: '🌊',
      title: 'Calm',
      description: 'Does it create calm or chaos? Tools that reduce anxiety, not amplify it.',
      color: '#0ea5e9',
    },
    {
      icon: '🎮',
      title: 'Agency',
      description: 'Are you in control? Tools that empower you to make decisions, not make them for you.',
      color: '#14b8a6',
    },
    {
      icon: '🌱',
      title: 'Growth',
      description: 'Does it help you grow? Tools that build skills and understanding, not dependence.',
      color: '#22c55e',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-lavender-50/50 to-transparent dark:via-lavender-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="
            inline-flex items-center gap-2
            px-4 py-2
            bg-white dark:bg-neutral-800
            border border-neutral-200 dark:border-neutral-700
            rounded-full
            text-sm font-medium
            mb-6
          ">
            <span>📊</span>
            Our Rating System
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The Wellbeing Score
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Every tool is rated on four dimensions that matter for human flourishing.
            We believe AI should enhance your life, not exploit it.
          </p>
        </div>

        {/* Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {criteria.map((item, index) => (
            <div
              key={item.title}
              className="
                relative
                p-6
                bg-white dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                rounded-2xl
                animate-fade-in-up
              "
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both',
              }}
            >
              {/* Icon */}
              <div
                className="
                  w-12 h-12
                  flex items-center justify-center
                  text-2xl
                  rounded-xl
                  mb-4
                "
                style={{ backgroundColor: `${item.color}15` }}
              >
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {item.description}
              </p>

              {/* Score bar example */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: '80%',
                      backgroundColor: item.color,
                    }}
                  />
                </div>
                <span className="text-xs font-medium" style={{ color: item.color }}>
                  4/5
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Want to know how a specific tool scores?
          </p>
          <a
            href="/explore"
            className="
              inline-flex items-center gap-2
              text-lavender-600 dark:text-lavender-400
              font-medium
              hover:gap-3 transition-all
            "
          >
            Explore all tools
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
