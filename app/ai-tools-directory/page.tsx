"use client";

import { useState, useMemo, JSX } from "react";
import {
  FaFont,
  FaCopy,
  FaMagic,
  FaPencilAlt,
  FaFeatherAlt,
  FaCheckCircle,
  FaImage,
  FaCamera,
  FaEraser,
  FaWrench,
  FaVideo,
  FaFilm,
  FaMicrophone,
  FaVolumeUp,
  FaUserAlt,
  FaTasks,
  FaListAlt,
  FaCalendarAlt,
  FaClipboardCheck,
  FaUsers,
  FaLaptopCode,
  FaCode,
  FaTerminal,
  FaBug,
} from "react-icons/fa";

import { FaSearch, FaExternalLinkAlt, FaTags } from "react-icons/fa";
import {
  FaPenNib,
  FaRobot,
  FaGlobe,
  FaWandMagicSparkles,
  FaScissors,
} from "react-icons/fa6";

interface Tool {
  id: string;
  name: string;
  short: string;
  category: string;
  tags: string[];
  icon: JSX.Element;
  website_url: string;
  affiliate_url?: string;
  trendingScore: number;
  popularity: number;
  slug: string;
}

export const RAW_TOOLS: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    short: "AI assistant for writing, research, and conversation.",
    category: "AI Writing",
    tags: ["chat", "assistant"],
    icon: <FaPenNib />,
    website_url: "https://chat.openai.com",
    affiliate_url: "",
    trendingScore: 98,
    popularity: 12000,
    slug: "chatgpt",
  },
  {
    id: "gemini",
    name: "Google Gemini",
    short: "AI model for writing, research, and analysis.",
    category: "AI Writing",
    tags: ["writing", "analysis"],
    icon: <FaPenNib />,
    website_url: "https://ai.google.com",
    affiliate_url: "",
    trendingScore: 92,
    popularity: 9200,
    slug: "google-gemini",
  },
  {
    id: "claude",
    name: "Claude",
    short: "Advanced AI assistant for long documents & reasoning.",
    category: "AI Writing",
    tags: ["assistant", "research"],
    icon: <FaPenNib />,
    website_url: "https://claude.ai",
    affiliate_url: "",
    trendingScore: 95,
    popularity: 11000,
    slug: "claude",
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    short: "AI search engine with citations and deep answers.",
    category: "AI Writing",
    tags: ["search", "assistant"],
    icon: <FaSearch />,
    website_url: "https://perplexity.ai",
    affiliate_url: "",
    trendingScore: 96,
    popularity: 14000,
    slug: "perplexity-ai",
  },
  {
    id: "jasper",
    name: "Jasper AI",
    short: "AI tool for marketing content and ad copy.",
    category: "AI Writing",
    tags: ["marketing", "writing"],
    icon: <FaCopy />,
    website_url: "https://jasper.ai",
    affiliate_url: "",
    trendingScore: 85,
    popularity: 6000,
    slug: "jasper-ai",
  },
  {
    id: "copy",
    name: "Copy.ai",
    short: "AI that creates marketing emails and posts.",
    category: "AI Writing",
    tags: ["emails", "marketing"],
    icon: <FaCopy />,
    website_url: "https://copy.ai",
    affiliate_url: "",
    trendingScore: 80,
    popularity: 5000,
    slug: "copy-ai",
  },
  {
    id: "writesonic",
    name: "Writesonic",
    short: "AI writer for SEO content & blogs.",
    category: "AI Writing",
    tags: ["seo", "blogs"],
    icon: <FaFeatherAlt />,
    website_url: "https://writesonic.com",
    affiliate_url: "",
    trendingScore: 82,
    popularity: 5500,
    slug: "writesonic",
  },
  {
    id: "rytr",
    name: "Rytr",
    short: "Simple AI writing tool for emails & ideas.",
    category: "AI Writing",
    tags: ["writing", "emails"],
    icon: <FaPencilAlt />,
    website_url: "https://rytr.me",
    affiliate_url: "",
    trendingScore: 78,
    popularity: 5000,
    slug: "rytr",
  },
  {
    id: "quillbot",
    name: "QuillBot",
    short: "AI paraphrasing and grammar improvement tool.",
    category: "AI Writing",
    tags: ["paraphrase", "grammar"],
    icon: <FaFont />,
    website_url: "https://quillbot.com",
    affiliate_url: "",
    trendingScore: 90,
    popularity: 10000,
    slug: "quillbot",
  },
  {
    id: "grammarly",
    name: "Grammarly AI",
    short: "AI assistant for grammar and clarity.",
    category: "AI Writing",
    tags: ["grammar", "writing"],
    icon: <FaCheckCircle />,
    website_url: "https://grammarly.com",
    affiliate_url: "",
    trendingScore: 94,
    popularity: 16000,
    slug: "grammarly-ai",
  },
  {
    id: "anyword",
    name: "Anyword",
    short: "AI tool for performance-based marketing copy.",
    category: "AI Writing",
    tags: ["marketing", "ads"],
    icon: <FaMagic />,
    website_url: "https://anyword.com",
    affiliate_url: "",
    trendingScore: 70,
    popularity: 3200,
    slug: "anyword",
  },
  {
    id: "sudowrite",
    name: "Sudowrite",
    short: "AI writing tool for creative ideas.",
    category: "AI Writing",
    tags: ["creative", "writing"],
    icon: <FaPenNib />,
    website_url: "https://sudowrite.com",
    affiliate_url: "",
    trendingScore: 68,
    popularity: 3000,
    slug: "sudowrite",
  },
];
// Continue from above array...

RAW_TOOLS.push(
  {
    id: "midjourney",
    name: "Midjourney",
    short: "AI image generation with artistic control.",
    category: "Image AI",
    tags: ["image", "art"],
    icon: <FaWandMagicSparkles />,
    website_url: "https://midjourney.com",
    affiliate_url: "",
    trendingScore: 98,
    popularity: 20000,
    slug: "midjourney",
  },
  {
    id: "dalle",
    name: "DALL·E 3",
    short: "Text-to-image generator with detailed outputs.",
    category: "Image AI",
    tags: ["image", "illustration"],
    icon: <FaImage />,
    website_url: "https://openai.com/dall-e-3",
    affiliate_url: "",
    trendingScore: 92,
    popularity: 18000,
    slug: "dalle-3",
  },
  {
    id: "firefly",
    name: "Adobe Firefly",
    short: "AI tools for creative images & design.",
    category: "Image AI",
    tags: ["art", "design"],
    icon: <FaMagic />,
    website_url: "https://adobe.com/firefly",
    affiliate_url: "",
    trendingScore: 90,
    popularity: 13000,
    slug: "adobe-firefly",
  },
  {
    id: "canva",
    name: "Canva AI",
    short: "AI design assistant for graphics and presentations.",
    category: "Image AI",
    tags: ["design", "templates"],
    icon: <FaImage />,
    website_url: "https://canva.com",
    affiliate_url: "",
    trendingScore: 88,
    popularity: 15000,
    slug: "canva-ai",
  },
  {
    id: "fotor",
    name: "Fotor AI",
    short: "AI photo editor for filters & portraits.",
    category: "Image AI",
    tags: ["photo", "enhance"],
    icon: <FaCamera />,
    website_url: "https://fotor.com",
    affiliate_url: "",
    trendingScore: 76,
    popularity: 5300,
    slug: "fotor-ai",
  },
  {
    id: "remini",
    name: "Remini AI",
    short: "AI enhancer to improve portrait clarity.",
    category: "Image AI",
    tags: ["enhance", "portrait"],
    icon: <FaCamera />,
    website_url: "https://remini.ai",
    affiliate_url: "",
    trendingScore: 90,
    popularity: 14000,
    slug: "remini-ai",
  },
  {
    id: "cleanup",
    name: "Cleanup.pictures",
    short: "Remove objects & text from images instantly.",
    category: "Image AI",
    tags: ["remove", "cleanup"],
    icon: <FaEraser />,
    website_url: "https://cleanup.pictures",
    affiliate_url: "",
    trendingScore: 75,
    popularity: 7400,
    slug: "cleanup-pictures",
  },
  {
    id: "removebg",
    name: "Remove.bg",
    short: "AI background remover with clean output.",
    category: "Image AI",
    tags: ["background", "remove"],
    icon: <FaScissors />,
    website_url: "https://remove.bg",
    affiliate_url: "",
    trendingScore: 85,
    popularity: 12000,
    slug: "removebg",
  },
  {
    id: "clipdrop",
    name: "Clipdrop",
    short: "AI toolkit for cleanup, relighting, and upscale.",
    category: "Image AI",
    tags: ["cleanup", "lighting"],
    icon: <FaWrench />,
    website_url: "https://clipdrop.co",
    affiliate_url: "",
    trendingScore: 82,
    popularity: 9500,
    slug: "clipdrop",
  },
  {
    id: "leonardo",
    name: "Leonardo AI",
    short: "Fast, high-quality AI image generation suite.",
    category: "Image AI",
    tags: ["image", "creative"],
    icon: <FaRobot />,
    website_url: "https://leonardo.ai",
    affiliate_url: "",
    trendingScore: 92,
    popularity: 16000,
    slug: "leonardo-ai",
  }
);
RAW_TOOLS.push(
  {
    id: "runway",
    name: "Runway ML",
    short: "AI video editing and text-to-video tools.",
    category: "Video AI",
    tags: ["video", "editing"],
    icon: <FaVideo />,
    website_url: "https://runwayml.com",
    slug: "runway-ml",
    affiliate_url: "",
    trendingScore: 95,
    popularity: 15000,
  },
  {
    id: "capcut",
    name: "CapCut AI",
    short: "AI video editing with templates and effects.",
    category: "Video AI",
    tags: ["editing", "templates"],
    icon: <FaFilm />,
    website_url: "https://capcut.com",
    slug: "capcut-ai",
    affiliate_url: "",
    trendingScore: 80,
    popularity: 12000,
  },
  {
    id: "pika",
    name: "Pika Labs",
    short: "AI videos and animations from text prompts.",
    category: "Video AI",
    tags: ["video", "animation"],
    icon: <FaVideo />,
    website_url: "https://pika.art",
    slug: "pika-labs",
    affiliate_url: "",
    trendingScore: 88,
    popularity: 9000,
  },
  {
    id: "descript",
    name: "Descript",
    short: "AI audio/video editor for podcasts.",
    category: "Video AI",
    tags: ["audio", "video"],
    icon: <FaMicrophone />,
    website_url: "https://descript.com",
    slug: "descript",
    affiliate_url: "",
    trendingScore: 85,
    popularity: 11000,
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    short: "AI voice generator for narration & dubbing.",
    category: "Video AI",
    tags: ["voice", "narration"],
    icon: <FaVolumeUp />,
    website_url: "https://elevenlabs.io",
    slug: "elevenlabs",
    affiliate_url: "",
    trendingScore: 90,
    popularity: 14000,
  },
  {
    id: "murf",
    name: "Murf AI",
    short: "AI voiceover studio for presentations.",
    category: "Video AI",
    tags: ["voiceover"],
    icon: <FaMicrophone />,
    website_url: "https://murf.ai",
    slug: "murf-ai",
    affiliate_url: "",
    trendingScore: 78,
    popularity: 7000,
  },
  {
    id: "synthesia",
    name: "Synthesia",
    short: "AI avatars for video tutorials.",
    category: "Video AI",
    tags: ["avatar", "video"],
    icon: <FaUserAlt />,
    website_url: "https://synthesia.io",
    slug: "synthesia",
    affiliate_url: "",
    trendingScore: 85,
    popularity: 13000,
  },
  {
    id: "heygen",
    name: "HeyGen",
    short: "AI avatars, translations, lip-sync.",
    category: "Video AI",
    tags: ["avatar", "translate"],
    icon: <FaUserAlt />,
    website_url: "https://heygen.com",
    slug: "heygen",
    affiliate_url: "",
    trendingScore: 90,
    popularity: 15000,
  },
  {
    id: "vidyo",
    name: "Vidyo.ai",
    short: "AI viral short-clips generator.",
    category: "Video AI",
    tags: ["shorts", "social"],
    icon: <FaVideo />,
    website_url: "https://vidyo.ai",
    slug: "vidyo-ai",
    affiliate_url: "",
    trendingScore: 70,
    popularity: 6000,
  },
  {
    id: "opusclip",
    name: "OpusClip",
    short: "AI tool for smart highlights and captions.",
    category: "Video AI",
    tags: ["clips", "captions"],
    icon: <FaFilm />,
    website_url: "https://opus.pro",
    slug: "opusclip",
    affiliate_url: "",
    trendingScore: 78,
    popularity: 8000,
  }
);
RAW_TOOLS.push(
  {
    id: "notion",
    name: "Notion AI",
    short: "AI assistant for notes & tasks.",
    category: "Productivity",
    tags: ["notes", "tasks"],
    icon: <FaGlobe />,
    website_url: "https://notion.so",
    slug: "notion-ai",
    trendingScore: 90,
    popularity: 25000,
    affiliate_url: "",
  },
  {
    id: "clickup",
    name: "ClickUp AI",
    short: "AI tool for task automation & writing.",
    category: "Productivity",
    tags: ["tasks", "writing"],
    icon: <FaTasks />,
    website_url: "https://clickup.com",
    slug: "clickup-ai",
    trendingScore: 82,
    popularity: 11000,
    affiliate_url: "",
  },
  {
    id: "motion",
    name: "Motion AI",
    short: "AI scheduler for daily planning.",
    category: "Productivity",
    tags: ["planning", "calendar"],
    icon: <FaCalendarAlt />,
    website_url: "https://usemotion.com",
    slug: "motion-ai",
    trendingScore: 85,
    popularity: 14000,
    affiliate_url: "",
  },
  {
    id: "tability",
    name: "Tability AI",
    short: "AI OKR tool for progress tracking.",
    category: "Productivity",
    tags: ["okr", "tracking"],
    icon: <FaClipboardCheck />,
    website_url: "https://tability.io",
    slug: "tability-ai",
    trendingScore: 75,
    popularity: 5000,
    affiliate_url: "",
  },
  {
    id: "fireflies",
    name: "Fireflies.ai",
    short: "AI meeting notes & transcription.",
    category: "Productivity",
    tags: ["meetings", "transcription"],
    icon: <FaMicrophone />,
    website_url: "https://fireflies.ai",
    slug: "fireflies-ai",
    trendingScore: 92,
    popularity: 18000,
    affiliate_url: "",
  },
  {
    id: "otter",
    name: "Otter.ai",
    short: "AI meeting notes with live transcription.",
    category: "Productivity",
    tags: ["transcription", "meetings"],
    icon: <FaMicrophone />,
    website_url: "https://otter.ai",
    slug: "otter-ai",
    trendingScore: 85,
    popularity: 15000,
    affiliate_url: "",
  },
  {
    id: "gamma",
    name: "Gamma.app",
    short: "AI presentation & webpage creator.",
    category: "Productivity",
    tags: ["slides", "presentations"],
    icon: <FaListAlt />,
    website_url: "https://gamma.app",
    slug: "gamma-app",
    trendingScore: 80,
    popularity: 9000,
    affiliate_url: "",
  },
  {
    id: "beautiful",
    name: "Beautiful.ai",
    short: "AI presentation maker with templates.",
    category: "Productivity",
    tags: ["slides", "design"],
    icon: <FaListAlt />,
    website_url: "https://beautiful.ai",
    slug: "beautiful-ai",
    trendingScore: 76,
    popularity: 8500,
    affiliate_url: "",
  },
  {
    id: "tome",
    name: "Tome.app",
    short: "AI storytelling presentation builder.",
    category: "Productivity",
    tags: ["slides", "story"],
    icon: <FaListAlt />,
    website_url: "https://tome.app",
    slug: "tome-app",
    trendingScore: 70,
    popularity: 7000,
    affiliate_url: "",
  },
  {
    id: "tldv",
    name: "TL;DV",
    short: "AI meeting recorder & summary tool.",
    category: "Productivity",
    tags: ["meetings", "summary"],
    icon: <FaUsers />,
    website_url: "https://tldv.io",
    slug: "tldv",
    trendingScore: 88,
    popularity: 12000,
    affiliate_url: "",
  }
);
RAW_TOOLS.push(
  {
    id: "copilot",
    name: "GitHub Copilot",
    short: "AI coding assistant for developers.",
    category: "Developer AI",
    tags: ["coding", "assistant"],
    icon: <FaLaptopCode />,
    website_url: "https://github.com/features/copilot",
    slug: "github-copilot",
    trendingScore: 98,
    popularity: 30000,
    affiliate_url: "",
  },
  {
    id: "codeium",
    name: "Codeium",
    short: "Free AI code assistant for automations.",
    category: "Developer AI",
    tags: ["autocomplete"],
    icon: <FaCode />,
    website_url: "https://codeium.com",
    slug: "codeium",
    trendingScore: 85,
    popularity: 20000,
    affiliate_url: "",
  },
  {
    id: "tabnine",
    name: "Tabnine",
    short: "AI code completion tool.",
    category: "Developer AI",
    tags: ["coding", "completion"],
    icon: <FaTerminal />,
    website_url: "https://tabnine.com",
    slug: "tabnine",
    trendingScore: 82,
    popularity: 17000,
    affiliate_url: "",
  },
  {
    id: "replit",
    name: "Replit Ghostwriter",
    short: "AI assistant for debugging and code.",
    category: "Developer AI",
    tags: ["debug", "code"],
    icon: <FaTerminal />,
    website_url: "https://replit.com",
    slug: "replit-ghostwriter",
    trendingScore: 76,
    popularity: 14000,
    affiliate_url: "",
  },
  {
    id: "cody",
    name: "Sourcegraph Cody",
    short: "AI dev tool for codebase understanding.",
    category: "Developer AI",
    tags: ["codebase", "analysis"],
    icon: <FaLaptopCode />,
    website_url: "https://sourcegraph.com/cody",
    slug: "sourcegraph-cody",
    trendingScore: 74,
    popularity: 9000,
    affiliate_url: "",
  },
  {
    id: "mistral",
    name: "Mistral AI",
    short: "Fast, open-source LLMs for coding.",
    category: "Developer AI",
    tags: ["models", "open-source"],
    icon: <FaLaptopCode />,
    website_url: "https://mistral.ai",
    slug: "mistral-ai",
    trendingScore: 90,
    popularity: 12000,
    affiliate_url: "",
  },
  {
    id: "huggingface",
    name: "HuggingFace",
    short: "Large library of open-source AI models.",
    category: "Developer AI",
    tags: ["nlp", "vision"],
    icon: <FaRobot />,
    website_url: "https://huggingface.co",
    slug: "huggingface",
    trendingScore: 88,
    popularity: 18000,
    affiliate_url: "",
  },
  {
    id: "groq",
    name: "Groq AI",
    short: "Ultra-fast inference hardware for AI models.",
    category: "Developer AI",
    tags: ["inference"],
    icon: <FaLaptopCode />,
    website_url: "https://groq.com",
    slug: "groq-ai",
    trendingScore: 83,
    popularity: 10000,
    affiliate_url: "",
  },
  {
    id: "openrouter",
    name: "OpenRouter",
    short: "Gateway to multiple LLMs via one API.",
    category: "Developer AI",
    tags: ["api", "models"],
    icon: <FaCode />,
    website_url: "https://openrouter.ai",
    slug: "openrouter",
    trendingScore: 84,
    popularity: 12000,
    affiliate_url: "",
  },
  {
    id: "replicate",
    name: "Replicate",
    short: "AI model hosting & deployment platform.",
    category: "Developer AI",
    tags: ["deployment"],
    icon: <FaBug />,
    website_url: "https://replicate.com",
    slug: "replicate",
    trendingScore: 80,
    popularity: 9000,
    affiliate_url: "",
  }
);

export default function AIToolsDirectory() {
  const [query, setQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All Tools");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("trending");
  const [page, setPage] = useState<number>(1);

  const PAGE_SIZE = 6;

  const categories = useMemo<string[]>(() => {
    const cats = new Set(RAW_TOOLS.map((t) => t.category));
    return ["All Tools", ...Array.from(cats)];
  }, []);

  const allTags = useMemo<string[]>(() => {
    const s = new Set<string>();
    RAW_TOOLS.forEach((t) => t.tags.forEach((tag) => s.add(tag)));
    return Array.from(s);
  }, []);

  const filtered = useMemo<Tool[]>(() => {
    let list = [...RAW_TOOLS];

    if (activeCategory !== "All Tools") {
      list = list.filter((t) => t.category === activeCategory);
    }

    if (activeTags.length > 0) {
      list = list.filter((t) =>
        activeTags.every((tag) => t.tags.includes(tag))
      );
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.short.toLowerCase().includes(q) ||
          t.tags.join(" ").toLowerCase().includes(q)
      );
    }

    if (sortBy === "trending") {
      list.sort((a, b) => b.trendingScore - a.trendingScore);
    } else if (sortBy === "popular") {
      list.sort((a, b) => b.popularity - a.popularity);
    } else {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [query, activeCategory, activeTags, sortBy]);

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function toggleTag(tag: string) {
    setPage(1);
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  function openTool(tool: Tool) {
    const url = tool.affiliate_url?.trim()
      ? tool.affiliate_url
      : tool.website_url;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="bg-white text-neutral-800 font-inter">
      {/* HEADER */}
      <section className="py-16 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-neutral-800">
            AI Tools Directory
          </h1>
          <p className="text-neutral-600 text-lg mt-4">
            Search, filter, sort & explore the best AI tools.
          </p>
        </div>
      </section>

      {/* SEARCH & FILTERS */}
      <section className="py-10 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          {/* TOP ROW — SEARCH + SORT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* SEARCH BAR */}
            <div className="w-full">
              <div className="flex items-center gap-3 bg-neutral-100/80 border border-neutral-200 rounded-2xl px-4 py-3 shadow-lg focus-within:ring-2 focus-within:ring-blue-400 transition">
                <FaSearch className="text-blue-500 text-lg" />
                <input
                  className="w-full bg-transparent outline-none text-neutral-800 font-inter"
                  placeholder="Search AI tools..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                />
              </div>
            </div>

            {/* SORT */}
            <div className="flex w-full md:justify-center">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setPage(1);
                }}
                className="w-full md:w-52 px-4 py-3 rounded-xl border border-neutral-300 bg-white shadow-sm text-neutral-800 font-inter focus:ring-2 focus:ring-blue-400 transition"
              >
                <option value="trending">Trending</option>
                <option value="popular">Popular</option>
                <option value="alpha">A → Z</option>
              </select>
            </div>

            {/* CATEGORIES */}
            <div className="flex flex-wrap md:justify-end gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-inter border transition-all shadow-sm
              ${
                activeCategory === cat
                  ? "bg-blue-500 text-white border-blue-500 shadow-md"
                  : "bg-white border-neutral-300 text-neutral-700 hover:bg-blue-400 hover:text-white hover:border-blue-400"
              }
            `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* TAGS */}
          <div className="mt-6 flex gap-2 flex-wrap">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm border flex items-center gap-1 transition-all shadow-sm
            ${
              activeTags.includes(tag)
                ? "bg-blue-500 text-white border-blue-500 shadow-md"
                : "bg-white text-neutral-700 border-neutral-200 hover:bg-blue-100"
            }
          `}
              >
                <FaTags className="text-xs" /> {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {paged.map((tool) => (
            <div
              key={tool.id}
              className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="text-blue-500 text-5xl flex justify-center mb-5">
                {tool.icon}
              </div>

              <h3 className="font-montserrat text-xl font-semibold text-center">
                {tool.name}
              </h3>

              <p className="text-sm text-neutral-600 text-center mt-2 grow">
                {tool.short}
              </p>

              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {tool.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border border-neutral-200 text-neutral-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => openTool(tool)}
                className="mt-6 mx-auto w-44 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 transition"
              >
                Visit Tool <FaExternalLinkAlt className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PAGINATION */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6 flex justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-full border border-neutral-200"
          >
            Prev
          </button>

          {Array.from({ length: pageCount }).map((_, i) => {
            const p = i + 1;
            return (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-4 py-2 rounded-full border ${
                  p === page
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white border-neutral-200"
                }`}
              >
                {p}
              </button>
            );
          })}

          <button
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
            className="px-4 py-2 rounded-full border border-neutral-200"
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}
