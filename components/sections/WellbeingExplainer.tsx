import { CustomIcon, IconName } from '@/components/ui/CustomIcon';
import { BlurText } from '@/components/animations/BlurText';
import { AnimatedContent, StaggeredContent, StaggeredItem } from '@/components/animations/AnimatedContent';

export function WellbeingExplainer() {
  const criteria: { icon: IconName; title: string; description: string; color: string }[] = [
    {
      icon: 'attention',
      title: 'Attention',
      description: 'Does it respect your attention or fight for it? Tools that let you focus without dark patterns.',
      color: '#8b5cf6',
    },
    {
      icon: 'calm',
      title: 'Calm',
      description: 'Does it create calm or chaos? Tools that reduce anxiety, not amplify it.',
      color: '#0ea5e9',
    },
    {
      icon: 'agency',
      title: 'Agency',
      description: 'Are you in control? Tools that empower you to make decisions, not make them for you.',
      color: '#14b8a6',
    },
    {
      icon: 'growth',
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
          <AnimatedContent direction="up" blur>
            <span className="
              inline-flex items-center gap-2
              px-4 py-2
              bg-white dark:bg-neutral-800
              border border-neutral-200 dark:border-neutral-700
              rounded-full
              text-sm font-medium
              mb-6
            ">
              <CustomIcon name="star" size="sm" />
              Our Rating System
            </span>
          </AnimatedContent>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <BlurText text="The Wellbeing Score" delay={0.2} />
          </h2>

          <AnimatedContent direction="up" delay={0.4} blur>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
              Every tool is rated on four dimensions that matter for human flourishing.
              We believe AI should enhance your life, not exploit it.
            </p>
          </AnimatedContent>
        </div>

        {/* Criteria Grid */}
        <StaggeredContent staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {criteria.map((item) => (
            <StaggeredItem key={item.title} direction="up" blur>
              <div className="
                relative
                p-6
                bg-white dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                rounded-2xl
                transition-all duration-300
                hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50
                hover:-translate-y-1
              ">
                {/* Icon */}
                <div
                  className="
                    w-12 h-12
                    flex items-center justify-center
                    rounded-xl
                    mb-4
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <CustomIcon name={item.icon} size="lg" />
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
                      className="h-full rounded-full transition-all duration-1000"
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
            </StaggeredItem>
          ))}
        </StaggeredContent>

        {/* Bottom CTA */}
        <AnimatedContent direction="up" delay={0.8} className="text-center mt-12">
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
            <CustomIcon name="arrow-right" size="md" />
          </a>
        </AnimatedContent>
      </div>
    </section>
  );
}
