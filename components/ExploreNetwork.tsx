"use client";

import {
  FaBookOpen,
  FaBriefcase,
  FaRobot,
  FaUserGraduate,
  FaRankingStar,
  FaKeyboard,
  FaGears,
  FaScrewdriverWrench,
} from "react-icons/fa6"; // updated to fa6 for newest icons

const cards = [
  {
    icon: <FaScrewdriverWrench size={40} className="text-blue-500" />,
    title: "AI Tools Directory",
    description:
      "Explore the largest directory of AI tools across all industries and use-cases.",
  },
  {
    icon: <FaBookOpen size={40} className="text-blue-500" />,
    title: "AI Courses Finder",
    description:
      "Find the best AI courses and learning paths curated from global experts.",
  },
  {
    icon: <FaBriefcase size={40} className="text-blue-500" />,
    title: "Ai Jobs Portal",
    description:
      "Discover AI and tech jobs across remote, hybrid, and global companies.",
  },
  {
    icon: <FaRobot size={40} className="text-blue-500" />,
    title: "AI Technologies",
    description:
      "Dive into the latest innovations shaping the future of machine intelligence.",
  },
  {
    icon: <FaGears size={40} className="text-blue-500" />,
    title: "AI Automation Hub",
    description:
      "Access workflows and automation tools designed to scale productivity.",
  },
  {
    icon: <FaUserGraduate size={40} className="text-blue-500" />,
    title: "Beginner’s Guide",
    description:
      "Start your AI journey with beginner-friendly tutorials, tips, and roadmaps.",
  },
  {
    icon: <FaRankingStar size={40} className="text-blue-500" />,
    title: "AI Toplist Rankings",
    description: "Discover the top trending AI tools updated every week.",
  },
  {
    icon: <FaKeyboard size={40} className="text-blue-500" />,
    title: "AI Prompt Library",
    description:
      "Discover ready AI prompts tailored to boost workflow speed and quality.",
  },
];

export default function ExploreNetwork() {
  return (
    <section className="bg-white py-20 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* === Heading === */}
        <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-neutral-900 mb-4">
          Explore the AI 360 Future Network
        </h2>
        <p className="font-inter text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Experience the world’s most powerful AI ecosystem — where innovation
          meets opportunity.
        </p>

        {/* === Cards Grid (8 Cards, 4×2) === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 text-center hover:bg-blue-50 hover:shadow-md transition ease-in-out"
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="font-montserrat font-semibold text-lg text-neutral-900 mb-2">
                {card.title}
              </h3>
              <p className="font-inter text-gray-600 text-sm md:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
