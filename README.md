# MindfulAI

**AI Tools Designed for Human Flourishing**

A curated directory of AI tools rated by their impact on human wellbeing - mental health, focus, creativity, and mindful productivity.

## Features

- **Curated Collection**: Hand-picked AI tools that respect your attention and support your wellbeing
- **Wellbeing Score**: Every tool rated on Attention, Calmness, Agency, and Growth
- **Smart Categories**: Mental Health, Focus & Flow, Creative, Physical Wellness, Connection, Mindful Productivity
- **Themed Collections**: Tools bundled by specific needs (anxiety relief, deep work, better sleep, etc.)
- **Dark Mode**: Easy on the eyes, day or night

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
mindful-ai/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── explore/           # Explore all tools
│   ├── collections/       # Browse collections
│   ├── tool/[id]/         # Individual tool pages
│   ├── collection/[id]/   # Collection pages
│   ├── about/             # About page
│   └── submit/            # Submit a tool
├── components/
│   ├── navigation/        # Navbar, Footer
│   ├── cards/             # ToolCard, CollectionCard
│   ├── hero/              # Hero section
│   └── sections/          # Page sections
├── lib/
│   └── data.ts            # Tools, categories, collections data
└── styles/
    └── globals.css        # Global styles
```

## The Wellbeing Score

Every tool is evaluated on four dimensions:

| Dimension | Description |
|-----------|-------------|
| **Attention** | Does it respect your attention or fight for it? |
| **Calm** | Does it create calm or chaos? |
| **Agency** | Are you in control? |
| **Growth** | Does it help you grow? |

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/mindful-ai)

Or deploy manually:

```bash
npm install -g vercel
vercel
```

## Contributing

We welcome contributions! To add a new tool:

1. Edit `lib/data.ts`
2. Add the tool with all required fields
3. Submit a PR

## License

MIT
