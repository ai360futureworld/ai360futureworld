"use client";

import {
  FaCopy,
  FaPenNib,
  FaMagic,
  FaCommentDots,
  FaImage,
  FaSearch,
} from "react-icons/fa";

const tools = [
  {
    name: "Copy AI",
    icon: <FaCopy />,
    circleBg: "bg-blue-700",
    description:
      "Generate high-quality copy for blogs, ads, and social media in seconds.",
  },
  {
    name: "MidJourney",
    icon: <FaMagic />,
    circleBg: "bg-purple-700",
    description:
      "Create stunning AI-generated images and art with advanced tools.",
  },
  {
    name: "ChatGPT",
    icon: <FaCommentDots />,
    circleBg: "bg-green-700",
    description:
      "Engage in intelligent conversations and get answers instantly.",
  },
  {
    name: "AI Writer",
    icon: <FaPenNib />,
    circleBg: "bg-yellow-700",
    description:
      "Craft articles, blogs, and content efficiently using AI assistance.",
  },
  {
    name: "DALL·E",
    icon: <FaImage />,
    circleBg: "bg-pink-700",
    description:
      "Generate creative images from text prompts using advanced AI.",
  },
];

export default function ToolsPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-montserrat font-bold text-neutral-800 mb-4">
          Experience the Next Generation of AI Technology
        </h1>
        <p className="text-neutral-400 font-inter mb-12 text-lg">
          Explore the top AI tools that empower creativity, productivity, and
          learning.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-neutral-400 text-lg" />
            </div>
            <input
              type="text"
              placeholder="Search AI tools..."
              className="w-full border border-neutral-300 rounded-full py-3 pl-10 pr-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter"
            />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              <div
                className={`w-20 h-20 mx-auto flex items-center justify-center rounded-full mb-4 ${tool.circleBg}`}
              >
                <div className="text-white text-3xl">{tool.icon}</div>
              </div>
              <h3 className="font-montserrat text-lg font-semibold text-neutral-800 mb-2">
                {tool.name}
              </h3>
              <p className="text-neutral-400 text-sm font-inter leading-relaxed mb-4">
                {tool.description}
              </p>
              <button className="bg-blue-100 text-blue-600 font-inter px-6 py-2 rounded-full hover:bg-blue-300 transition-all duration-300">
                Free
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
