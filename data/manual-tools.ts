// data/manual-tools.ts
export interface Tool {
  name: string;
  slug: string;
  category: string;
  description: string;
  icon?: string;
  featured?: boolean;
  pricing?: "Free" | "Freemium" | "Paid" | string;
}

export const featuredTools: Tool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "Writing",
    description: "Conversational AI by OpenAI for text and code generation.",
    icon: "https://logo.clearbit.com/openai.com",
    featured: true,
    pricing: "Freemium",
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    category: "Design",
    description: "AI art generation platform for creative image outputs.",
    icon: "https://logo.clearbit.com/midjourney.com",
    featured: true,
    pricing: "Paid",
  },
  {
    name: "Jasper AI",
    slug: "jasper-ai",
    category: "Writing",
    description: "AI writing assistant for marketers and creators.",
    icon: "https://logo.clearbit.com/jasper.ai",
    featured: true,
    pricing: "Paid",
  },
  {
    name: "Writesonic",
    slug: "writesonic",
    category: "Writing",
    description: "Creates high-converting marketing content instantly.",
    icon: "https://logo.clearbit.com/writesonic.com",
    featured: true,
    pricing: "Paid",
  },
  {
    name: "Notion AI",
    slug: "notion-ai",
    category: "Productivity",
    description:
      "AI assistant inside Notion to organize notes and write faster.",
    icon: "https://logo.clearbit.com/notion.so",
    featured: true,
    pricing: "Freemium",
  },
  {
    name: "Runway ML",
    slug: "runway-ml",
    category: "Video",
    description: "Video editing and creative tools powered by AI.",
    icon: "https://logo.clearbit.com/runwayml.com",
    featured: true,
    pricing: "Paid",
  },
  {
    name: "Synthesia",
    slug: "synthesia",
    category: "Video",
    description: "Text-to-video with realistic avatars and voices.",
    icon: "https://logo.clearbit.com/synthesia.io",
    featured: true,
    pricing: "Paid",
  },
  {
    name: "Pika Labs",
    slug: "pika-labs",
    category: "Video",
    description: "Fast AI video generation and editing tools.",
    icon: "https://logo.clearbit.com/pikalabs.com",
    featured: true,
    pricing: "Paid",
  },
  {
    name: "ElevenLabs",
    slug: "elevenlabs",
    category: "Voice",
    description: "Human-like AI voice generation and cloning.",
    icon: "https://logo.clearbit.com/elevenlabs.io",
    featured: true,
    pricing: "Paid",
  },
  {
    name: "Canva",
    slug: "canva",
    category: "Design",
    description: "Design platform with AI-assisted templates and features.",
    icon: "https://logo.clearbit.com/canva.com",
    featured: true,
    pricing: "Freemium",
  },
  // TODO: Add the remaining entries (up to 70) here.
];
