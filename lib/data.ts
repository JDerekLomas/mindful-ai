// AI Tool Categories
export type Category =
  | 'mental-health'
  | 'focus-flow'
  | 'creative'
  | 'physical'
  | 'connection'
  | 'productivity';

export interface WellbeingScore {
  attention: number; // How much it respects your attention (1-5)
  calm: number; // How calming/non-stressful (1-5)
  agency: number; // How much control you have (1-5)
  growth: number; // How much it supports growth (1-5)
}

export interface AITool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  tags: string[];
  wellbeing: WellbeingScore;
  url: string;
  icon: string;
  featured?: boolean;
  isNew?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  emoji: string;
  tools: string[]; // Tool IDs
}

export const categories: Record<Category, { label: string; color: string; description: string; icon: string }> = {
  'mental-health': {
    label: 'Mental Health',
    color: '#8b5cf6',
    description: 'AI companions for therapy, journaling, and emotional support',
    icon: 'heart',
  },
  'focus-flow': {
    label: 'Focus & Flow',
    color: '#0ea5e9',
    description: 'Tools that help you enter deep work without distractions',
    icon: 'track-changes',
  },
  'creative': {
    label: 'Creative Expression',
    color: '#f19340',
    description: 'AI that augments your creativity without replacing it',
    icon: 'palette',
  },
  'physical': {
    label: 'Physical Wellness',
    color: '#14b8a6',
    description: 'Sleep, movement, and body-aware AI tools',
    icon: 'self-improvement',
  },
  'connection': {
    label: 'Connection',
    color: '#ec4899',
    description: 'AI that brings people together, not apart',
    icon: 'groups',
  },
  'productivity': {
    label: 'Mindful Productivity',
    color: '#22c55e',
    description: 'Do less, better. AI for intentional work.',
    icon: 'eco',
  },
};

export const tools: AITool[] = [
  // Mental Health
  {
    id: 'woebot',
    name: 'Woebot',
    tagline: 'Your AI mental health ally',
    description: 'CBT-based chatbot that helps you understand and manage your emotions through evidence-based techniques. No judgment, available 24/7.',
    category: 'mental-health',
    tags: ['CBT', 'Anxiety', 'Depression', 'Free'],
    wellbeing: { attention: 5, calm: 5, agency: 4, growth: 5 },
    url: 'https://woebothealth.com',
    icon: 'volunteer-activism',
    featured: true,
  },
  {
    id: 'replika',
    name: 'Replika',
    tagline: 'An AI companion who cares',
    description: 'Personal AI friend that learns from you. Great for loneliness, practicing conversations, or just having someone to talk to.',
    category: 'mental-health',
    tags: ['Companionship', 'Conversation', 'Emotional Support'],
    wellbeing: { attention: 4, calm: 4, agency: 4, growth: 3 },
    url: 'https://replika.ai',
    icon: 'forum',
  },
  {
    id: 'rosebud',
    name: 'Rosebud',
    tagline: 'AI-powered journaling for self-discovery',
    description: 'Transform your thoughts into insights. Rosebud asks thoughtful questions and helps you understand patterns in your life.',
    category: 'mental-health',
    tags: ['Journaling', 'Self-reflection', 'Insights'],
    wellbeing: { attention: 5, calm: 5, agency: 5, growth: 5 },
    url: 'https://rosebud.app',
    icon: 'auto-stories',
    featured: true,
    isNew: true,
  },

  // Focus & Flow
  {
    id: 'endel',
    name: 'Endel',
    tagline: 'Personalized soundscapes for focus',
    description: 'AI-generated soundscapes that adapt to your time, weather, and heart rate. Scientifically proven to improve focus.',
    category: 'focus-flow',
    tags: ['Sound', 'Focus', 'Science-backed'],
    wellbeing: { attention: 5, calm: 5, agency: 3, growth: 3 },
    url: 'https://endel.io',
    icon: 'music-note',
    featured: true,
  },
  {
    id: 'brain-fm',
    name: 'Brain.fm',
    tagline: 'Music designed for the brain',
    description: 'Functional music using AI and neuroscience to help you focus, relax, or sleep. Not just ambient—engineered.',
    category: 'focus-flow',
    tags: ['Music', 'Neuroscience', 'Focus', 'Sleep'],
    wellbeing: { attention: 5, calm: 5, agency: 4, growth: 3 },
    url: 'https://brain.fm',
    icon: 'headphones',
  },
  {
    id: 'opal',
    name: 'Opal',
    tagline: 'Screen time that respects you',
    description: 'AI-powered app blocker that learns your habits and helps you build healthier relationships with your devices.',
    category: 'focus-flow',
    tags: ['Digital Wellness', 'Screen Time', 'Habits'],
    wellbeing: { attention: 5, calm: 4, agency: 5, growth: 4 },
    url: 'https://opal.so',
    icon: 'diamond',
    isNew: true,
  },

  // Creative
  {
    id: 'runway',
    name: 'Runway',
    tagline: 'AI magic tools for creators',
    description: 'Creative suite with AI video, image, and audio tools. Designed for artists, not to replace them.',
    category: 'creative',
    tags: ['Video', 'Image', 'Professional'],
    wellbeing: { attention: 3, calm: 3, agency: 5, growth: 5 },
    url: 'https://runwayml.com',
    icon: 'movie',
    featured: true,
  },
  {
    id: 'udio',
    name: 'Udio',
    tagline: 'Create music with AI',
    description: 'Generate original music from text prompts. Perfect for exploring musical ideas without years of training.',
    category: 'creative',
    tags: ['Music', 'Generation', 'Exploration'],
    wellbeing: { attention: 3, calm: 4, agency: 5, growth: 4 },
    url: 'https://udio.com',
    icon: 'music-video',
    isNew: true,
  },
  {
    id: 'krea',
    name: 'Krea',
    tagline: 'Real-time creative AI',
    description: 'Generate and edit images in real-time. Great for brainstorming visual ideas quickly and intuitively.',
    category: 'creative',
    tags: ['Image', 'Real-time', 'Brainstorming'],
    wellbeing: { attention: 4, calm: 4, agency: 5, growth: 4 },
    url: 'https://krea.ai',
    icon: 'auto-awesome',
  },

  // Physical Wellness
  {
    id: 'whoop',
    name: 'Whoop',
    tagline: 'Know your body with AI',
    description: 'Wearable that uses AI to analyze your sleep, strain, and recovery. Actionable insights, not just data.',
    category: 'physical',
    tags: ['Wearable', 'Sleep', 'Recovery', 'Fitness'],
    wellbeing: { attention: 4, calm: 4, agency: 5, growth: 5 },
    url: 'https://whoop.com',
    icon: 'watch',
  },
  {
    id: 'headspace',
    name: 'Headspace',
    tagline: 'Meditation made simple',
    description: 'AI-personalized meditation and sleep content. Meet yourself where you are, grow at your pace.',
    category: 'physical',
    tags: ['Meditation', 'Sleep', 'Stress'],
    wellbeing: { attention: 5, calm: 5, agency: 4, growth: 5 },
    url: 'https://headspace.com',
    icon: 'self-improvement',
    featured: true,
  },
  {
    id: 'rise',
    name: 'Rise',
    tagline: 'Sleep science in your pocket',
    description: 'AI sleep coach based on your circadian rhythm. Understand your energy peaks and debt.',
    category: 'physical',
    tags: ['Sleep', 'Energy', 'Circadian'],
    wellbeing: { attention: 5, calm: 5, agency: 5, growth: 4 },
    url: 'https://risescience.com',
    icon: 'nights-stay',
  },

  // Connection
  {
    id: 'loom',
    name: 'Loom',
    tagline: 'Async video done right',
    description: 'Record quick videos instead of meetings. AI summaries mean watchers get value even at 2x speed.',
    category: 'connection',
    tags: ['Video', 'Async', 'Teams'],
    wellbeing: { attention: 5, calm: 4, agency: 5, growth: 3 },
    url: 'https://loom.com',
    icon: 'videocam',
  },
  {
    id: 'gather',
    name: 'Gather',
    tagline: 'Virtual spaces that feel real',
    description: 'Proximity-based video chat in customizable 2D spaces. Makes remote feel more human.',
    category: 'connection',
    tags: ['Remote Work', 'Community', 'Spatial'],
    wellbeing: { attention: 4, calm: 4, agency: 5, growth: 4 },
    url: 'https://gather.town',
    icon: 'home',
  },
  {
    id: 'butter',
    name: 'Butter',
    tagline: 'Workshops people love',
    description: 'AI-assisted workshop facilitation. Keeps engagement high without the facilitator burning out.',
    category: 'connection',
    tags: ['Workshops', 'Facilitation', 'Engagement'],
    wellbeing: { attention: 4, calm: 3, agency: 4, growth: 4 },
    url: 'https://butter.us',
    icon: 'cake',
    isNew: true,
  },

  // Mindful Productivity
  {
    id: 'notion-ai',
    name: 'Notion AI',
    tagline: 'AI that lives in your workspace',
    description: 'Write, summarize, and organize with AI assistance. Integrated where you already work.',
    category: 'productivity',
    tags: ['Writing', 'Organization', 'Workspace'],
    wellbeing: { attention: 4, calm: 4, agency: 5, growth: 4 },
    url: 'https://notion.so/ai',
    icon: 'edit-note',
  },
  {
    id: 'sunsama',
    name: 'Sunsama',
    tagline: 'Calm daily planning',
    description: 'Intentional daily planner that helps you plan a realistic day. Time-boxing without the stress.',
    category: 'productivity',
    tags: ['Planning', 'Time-boxing', 'Calm'],
    wellbeing: { attention: 5, calm: 5, agency: 5, growth: 4 },
    url: 'https://sunsama.com',
    icon: 'wb-sunny',
    featured: true,
  },
  {
    id: 'reclaim',
    name: 'Reclaim.ai',
    tagline: 'Smart calendar assistant',
    description: 'AI that protects your focus time, schedules habits, and defends your calendar from meeting overload.',
    category: 'productivity',
    tags: ['Calendar', 'Habits', 'Focus Time'],
    wellbeing: { attention: 5, calm: 4, agency: 4, growth: 4 },
    url: 'https://reclaim.ai',
    icon: 'calendar',
  },
  {
    id: 'akiflow',
    name: 'Akiflow',
    tagline: 'One place for all your tasks',
    description: 'Unified inbox for tasks from everywhere. AI helps prioritize what matters today.',
    category: 'productivity',
    tags: ['Tasks', 'Inbox Zero', 'Prioritization'],
    wellbeing: { attention: 4, calm: 4, agency: 5, growth: 3 },
    url: 'https://akiflow.com',
    icon: 'waves',
  },
];

export const collections: Collection[] = [
  {
    id: 'anxiety-relief',
    title: 'For Anxiety Relief',
    description: 'AI tools that help calm your mind and manage anxious thoughts',
    emoji: 'spa',
    tools: ['woebot', 'headspace', 'endel', 'brain-fm'],
  },
  {
    id: 'deep-work',
    title: 'For Deep Work',
    description: 'Enter flow state and protect your focus',
    emoji: 'track-changes',
    tools: ['endel', 'brain-fm', 'opal', 'sunsama', 'reclaim'],
  },
  {
    id: 'better-sleep',
    title: 'For Better Sleep',
    description: 'Wind down and wake up refreshed',
    emoji: 'bedtime',
    tools: ['rise', 'headspace', 'brain-fm', 'whoop'],
  },
  {
    id: 'creative-spark',
    title: 'For Creative Sparks',
    description: 'AI that inspires without overwhelming',
    emoji: 'bolt',
    tools: ['runway', 'udio', 'krea', 'rosebud'],
  },
  {
    id: 'remote-teams',
    title: 'For Remote Teams',
    description: 'Stay connected without Zoom fatigue',
    emoji: 'public',
    tools: ['loom', 'gather', 'butter', 'notion-ai'],
  },
  {
    id: 'self-discovery',
    title: 'For Self-Discovery',
    description: 'Understand yourself better with AI reflection',
    emoji: 'flare',
    tools: ['rosebud', 'replika', 'woebot', 'whoop'],
  },
];

// Helper functions
export function getToolById(id: string): AITool | undefined {
  return tools.find(t => t.id === id);
}

export function getToolsByCategory(category: Category): AITool[] {
  return tools.filter(t => t.category === category);
}

export function getFeaturedTools(): AITool[] {
  return tools.filter(t => t.featured);
}

export function getNewTools(): AITool[] {
  return tools.filter(t => t.isNew);
}

export function getWellbeingAverage(score: WellbeingScore): number {
  return (score.attention + score.calm + score.agency + score.growth) / 4;
}

export function getCollectionTools(collection: Collection): AITool[] {
  return collection.tools
    .map(id => getToolById(id))
    .filter((t): t is AITool => t !== undefined);
}
