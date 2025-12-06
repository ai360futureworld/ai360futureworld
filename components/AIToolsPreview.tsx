"use client";

import {
  FaRobot,
  FaMagic,
  FaPenFancy,
  FaBrain,
  FaFilm,
  FaChartLine,
} from "react-icons/fa";

export default function AIToolsPreview() {
  const tools = [
    {
      name: "ChatGPT",
      category: "Chatbot / NLP",
      description: "Smart AI chatbot for writing, coding & conversations.",
      icon: <FaRobot className="text-blue-600 text-3xl" />,
      url: "https://openai.com",
    },
    {
      name: "Midjourney",
      category: "Image Generation",
      description: "Create stunning visuals & artwork using AI prompts.",
      icon: <FaMagic className="text-blue-600 text-3xl" />,
      url: "https://midjourney.com",
    },
    {
      name: "Notion AI",
      category: "Productivity",
      description: "AI-powered notes, documents & task automation.",
      icon: <FaPenFancy className="text-blue-600 text-3xl" />,
      url: "https://notion.so",
    },
    {
      name: "Claude",
      category: "Chatbot",
      description: "Advanced AI assistant built for reasoning & writing.",
      icon: <FaBrain className="text-blue-600 text-3xl" />,
      url: "https://anthropic.com",
    },
    {
      name: "Runway Gen-2",
      category: "Video AI",
      description: "Create and edit videos using next-gen AI tools.",
      icon: <FaFilm className="text-blue-600 text-3xl" />,
      url: "https://runwayml.com",
    },
    {
      name: "Gamma AI",
      category: "Presentation",
      description: "Instantly design presentations using AI.",
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
      url: "https://gamma.app",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white border-t border-neutral-200 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-neutral-900">
          Explore 2,500+ AI Tools Transforming Every Industry Worldwide
        </h2>

        <p className="mt-4 text-base md:text-lg text-gray-600 font-inter">
          Discover powerful tools for business, marketing, coding & automation.
        </p>
      </div>

      {/* Tool Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tools.slice(0, 6).map((tool, idx) => (
          <div
            key={idx}
            className="bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1
                       transition-all duration-300 p-6 flex flex-col"
          >
            {/* Icon */}
            <div className="mb-4">{tool.icon}</div>

            {/* Tool Name */}
            <h3 className="text-lg font-bold font-montserrat text-neutral-900">
              {tool.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 font-inter">
              {tool.description}
            </p>

            {/* Category */}
            <span className="mt-3 inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
              {tool.category}
            </span>

            {/* CTA Button */}
            <a
              href={tool.url}
              target="_blank"
              className="mt-auto bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold 
                         py-2 rounded-lg text-center transition"
            >
              Explore Tool
            </a>
          </div>
        ))}
      </div>

      {/* View All Tools Button */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition">
          View All AI Tools
        </button>
      </div>

      {/* Footer */}
      <p className="mt-10 text-center text-neutral-500 text-sm font-inter">
        Updated daily with global AI platforms & research data
      </p>
    </section>
  );
}
