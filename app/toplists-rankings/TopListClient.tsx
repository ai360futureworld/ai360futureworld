"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  FaSearch,
  FaStar,
  FaFire,
  FaArrowRight,
  FaGlobeAsia,
  FaCrown,
  FaTools,
  FaBook,
  FaLaptopCode,
  FaBolt,
  FaNetworkWired,
  FaChartLine,
} from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// ============================================================
// TYPES
// ============================================================

type RankItem = {
  rank: number;
  category: string;
  name: string;
  description: string;
  type: string;
  link: string;
  logo: string;
  editor_choice?: boolean;
  tags?: string[];
};

// ============================================================
// MOCK API (Replace later with real)
// ============================================================

async function fetchCategory(category: string): Promise<RankItem[]> {
  return [
    {
      rank: 1,
      category,
      name: "ChatGPT",
      description: "Conversational AI for writing & coding",
      type: "Free",
      link: "/r/chatgpt",
      logo: "https://logo.clearbit.com/openai.com",
      editor_choice: true,
      tags: ["Trending"],
    },
    {
      rank: 2,
      category,
      name: "Claude 3",
      description: "Advanced reasoning & general intelligence",
      type: "Paid",
      link: "/r/claude",
      logo: "https://logo.clearbit.com/anthropic.com",
      tags: ["Editor's Pick"],
    },
    {
      rank: 3,
      category,
      name: "Gemini",
      description: "Google's multimodal AI for text, vision & reasoning",
      type: "Hybrid",
      link: "/r/gemini",
      logo: "https://logo.clearbit.com/google.com",
      tags: ["Trending"],
    },
  ];
}

async function fetchRegional(region: string) {
  return [
    { rank: 1, name: "ChatGPT", logo: "https://logo.clearbit.com/openai.com" },
    {
      rank: 2,
      name: "Perplexity",
      logo: "https://logo.clearbit.com/perplexity.ai",
    },
    { rank: 3, name: "Runway", logo: "https://logo.clearbit.com/runwayml.com" },
  ];
}

async function fetchTrends() {
  return [
    {
      title: "AI Agents Transforming Global Industries",
      summary: "Autonomous AI systems are becoming standard across sectors.",
      source: "NewsData.io",
      date: "2025-10-11",
      link: "#",
    },
  ];
}

async function fetchComparison() {
  return [
    {
      rank: 1,
      name: "ChatGPT",
      type: "Free",
      features: "NLP, Browsing",
      pricing: "Free / Paid",
      visit: "/r/chatgpt",
    },
    {
      rank: 2,
      name: "Claude 3",
      type: "Paid",
      features: "Reasoning, Long context",
      pricing: "$20/mo",
      visit: "/r/claude",
    },
    {
      rank: 3,
      name: "Gemini",
      type: "Hybrid",
      features: "Multimodal",
      pricing: "$20/mo",
      visit: "/r/gemini",
    },
  ];
}

// ============================================================
// MAIN CLIENT COMPONENT
// ============================================================

export default function TopListClient() {
  const [activeCategory, setActiveCategory] = useState("AI Tools");
  const [activeRegion, setActiveRegion] = useState("USA");

  const [data, setData] = useState<RankItem[]>([]);
  const [regionalData, setRegionalData] = useState<any[]>([]);
  const [trends, setTrends] = useState<any[]>([]);
  const [comparison, setComparison] = useState<any[]>([]);

  const month = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  // FETCH DATA
  useEffect(() => {
    fetchCategory(activeCategory).then(setData);
    fetchComparison().then(setComparison);
  }, [activeCategory]);

  useEffect(() => {
    fetchRegional(activeRegion).then(setRegionalData);
    fetchTrends().then(setTrends);
  }, [activeRegion]);

  // COLORS FOR RANK BADGES
  const rankColor = (rank: number) => {
    if (rank === 1) return "bg-[#FFD700] text-black";
    if (rank === 2) return "bg-[#C0C0C0] text-black";
    if (rank === 3) return "bg-[#CD7F32] text-white";
    return "bg-neutral-700 text-white";
  };

  const categoryIcons: Record<string, ReactNode> = {
    "AI Tools": <FaTools />,
    "AI Courses": <FaBook />,
    "AI Jobs": <FaLaptopCode />,
    "AI Technologies": <FaBolt />,
    "AI Startups": <FaNetworkWired />,
    "AI Trends": <FaChartLine />,
  };

  const categoryList = Object.keys(categoryIcons);

  // ANIMATIONS (inline keyframes)
  return (
    <section className="min-h-screen bg-neutral-50 text-neutral-700 font-inter">
      <style jsx>{`
        .fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hover-card {
          transition: all 0.25s ease;
        }
        .hover-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
        }
        .spin {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* ======================================================
         HERO SECTION (clean, border-bottom only)
      ====================================================== */}
      <div className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-neutral-900 fade-up">
            Top AI Tools & Platforms of the Month
          </h1>

          <p className="mt-4 text-neutral-600 fade-up">
            Ranked & updated weekly based on global performance indicators.
          </p>

          <p className="text-sm text-neutral-500 mt-2 fade-up">
            Updated: {month}
          </p>

          {/* SEARCH BAR */}
          <div className="relative max-w-xl mx-auto mt-6 fade-up">
            <FaSearch className="absolute left-4 top-3 text-neutral-400" />
            <input
              placeholder="Search for a tool, course or trend..."
              className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-100 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* ======================================================
         CATEGORY FILTERS
      ====================================================== */}
      <div className="border-b border-neutral-200 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categoryList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full flex items-center gap-2 border text-sm font-medium transition
                ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600 shadow"
                    : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400"
                }
              `}
            >
              <span className="text-blue-600">{categoryIcons[cat]}</span>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ======================================================
         TOPLIST GRID
      ====================================================== */}
      <div className="border-b border-neutral-200 py-16">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.rank}
              className="bg-white border border-neutral-200 p-6 rounded-2xl hover-card fade-up"
            >
              {/* TOP ROW (logo + title + rank) */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 text-white p-3 rounded-full spin">
                    <img src={item.logo} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-neutral-900">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      {item.type} • {item.category}
                    </p>
                  </div>
                </div>

                <div
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${rankColor(
                    item.rank
                  )}`}
                >
                  {item.rank === 1 ? (
                    <FaCrown className="spin" />
                  ) : (
                    <>#{item.rank}</>
                  )}
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm text-neutral-700">
                {item.description}
              </p>

              {/* TAGS */}
              <div className="flex gap-2 mt-4 flex-wrap">
                {item.tags?.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-neutral-100 text-xs rounded-full flex items-center gap-1"
                  >
                    {t === "Trending" && <FaFire className="text-red-500" />}{" "}
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={item.link}
                className="mt-5 inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-500 transition"
              >
                Visit <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* ======================================================
         PERFORMANCE CHART
      ====================================================== */}
      <div className="border-b border-neutral-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-montserrat font-bold text-neutral-900 mb-6 fade-up">
            Weekly Performance Chart
          </h2>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6 fade-up">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { week: "W1", score: 90 },
                    { week: "W2", score: 120 },
                    { week: "W3", score: 150 },
                    { week: "W4", score: 135 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#2563EB"
                    strokeWidth={3}
                    dot
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
         EDITOR'S PICKS
      ====================================================== */}
      <div className="border-b border-neutral-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-montserrat font-bold text-neutral-900 mb-6 fade-up">
            Editor's Picks
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-4">
            {data
              .filter((d) => d.editor_choice)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[260px] bg-white border border-neutral-200 rounded-2xl p-6 hover-card fade-up"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 p-3 rounded-full text-white spin">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="h-4 w-4 object-contain"
                      />
                    </div>

                    <div>
                      <div className="font-montserrat font-semibold text-neutral-900">
                        {item.name}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {item.type}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-600 mt-3">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    className="mt-4 inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-500 transition"
                  >
                    View
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* ======================================================
         COMPARISON MATRIX
      ====================================================== */}
      <div className="border-b border-neutral-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-montserrat font-bold text-neutral-900 mb-6 fade-up">
            Top 3 Comparison Matrix
          </h2>

          <div className="bg-white border border-neutral-200 rounded-2xl overflow-x-auto fade-up">
            <table className="w-full text-sm">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="p-4">Rank</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Features</th>
                  <th className="p-4">Pricing</th>
                  <th className="p-4">Visit</th>
                </tr>
              </thead>

              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-4">{row.rank}</td>
                    <td className="p-4 font-semibold text-neutral-900">
                      {row.name}
                    </td>
                    <td className="p-4">{row.type}</td>
                    <td className="p-4">{row.features}</td>
                    <td className="p-4">{row.pricing}</td>
                    <td className="p-4">
                      <a
                        href={row.visit}
                        className="text-blue-600 hover:underline"
                      >
                        Visit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ======================================================
         REGION TRENDS
      ====================================================== */}
      <div className="border-b border-neutral-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-montserrat font-bold text-neutral-900 mb-6 fade-up">
            Global Region Trends
          </h2>

          {/* Region Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "USA",
              "UK",
              "India",
              "Canada",
              "Australia",
              "Germany",
              "France",
              "Philippines",
              "Brazil",
              "Indonesia",
            ].map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition
                  ${
                    activeRegion === region
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400"
                  }
                `}
              >
                <FaGlobeAsia className="inline mr-2 text-blue-600" /> {region}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionalData.map((r, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-2xl p-6 hover-card fade-up"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={r.logo}
                      className="h-10 w-10 rounded-md"
                      alt={r.name}
                    />
                    <div>
                      <div className="font-montserrat font-semibold">
                        {r.name}
                      </div>
                      <div className="text-xs text-neutral-500">
                        Rank #{r.rank}
                      </div>
                    </div>
                  </div>

                  <a href="#" className="text-blue-600 text-sm">
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================
         AI TRENDS / NEWS
      ====================================================== */}
      <div className="border-b border-neutral-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-montserrat font-bold text-neutral-900 mb-6 fade-up">
            AI Trends & Innovations
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {trends.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200 rounded-2xl p-6 hover-card fade-up"
              >
                <h4 className="font-montserrat font-semibold text-neutral-900">
                  {t.title}
                </h4>
                <p className="text-sm text-neutral-600 mt-2">{t.summary}</p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-neutral-400">
                    {t.source} • {t.date}
                  </span>

                  <a
                    href={t.link}
                    className="text-blue-600 inline-flex items-center gap-2"
                  >
                    Read More <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
