"use client";

import {
  FaBrain,
  FaCogs,
  FaBolt,
  FaGraduationCap,
  FaRobot,
  FaLaptopCode,
  FaCertificate,
  FaChartLine,
  FaBook,
  FaFire,
  FaSearch,
} from "react-icons/fa";

const categories = [
  {
    title: "AI for Beginners",
    description: "Start your AI journey with the simplest foundation courses.",
    icon: <FaBrain />,
    circleBg: "bg-blue-700",
  },
  {
    title: "Machine Learning",
    description: "Learn ML models, algorithms, and hands-on projects.",
    icon: <FaCogs />,
    circleBg: "bg-green-700",
  },
  {
    title: "Data Science",
    description: "Master data analysis, visualisation & AI-driven insights.",
    icon: <FaChartLine />,
    circleBg: "bg-purple-700",
  },
  {
    title: "Prompt Engineering",
    description: "Learn how to talk to AI models like ChatGPT effectively.",
    icon: <FaFire />,
    circleBg: "bg-orange-700",
  },
  {
    title: "Generative AI",
    description: "Build with ChatGPT, Midjourney, Claude, DALL·E and more.",
    icon: <FaBolt />,
    circleBg: "bg-red-700",
  },
  {
    title: "AI for Students",
    description: "Study smarter with AI note-making, research & writing tools.",
    icon: <FaGraduationCap />,
    circleBg: "bg-indigo-700",
  },
  {
    title: "AI + Coding",
    description: "Learn Python, TensorFlow, PyTorch and AI dev workflows.",
    icon: <FaLaptopCode />,
    circleBg: "bg-teal-700",
  },
  {
    title: "AI for Business",
    description: "Use AI for automation, marketing, operations & growth.",
    icon: <FaRobot />,
    circleBg: "bg-rose-700",
  },
  {
    title: "Certification Programs",
    description: "Verified AI certifications from Google, IBM and top portals.",
    icon: <FaCertificate />,
    circleBg: "bg-yellow-700",
  },
  {
    title: "Trending AI Courses",
    description: "Most popular & latest AI courses updated weekly.",
    icon: <FaBook />,
    circleBg: "bg-neutral-800",
  },
];

export default function AICoursesClient() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-montserrat font-bold text-neutral-800 mb-4">
          AI Courses Finder
        </h1>

        <p className="text-neutral-500 font-inter mb-12 text-lg">
          Explore curated categories to find the best AI courses for your skill
          level.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FaSearch className="text-neutral-400 text-lg" />
            </div>
            <input
              type="text"
              placeholder="Search AI courses..."
              className="w-full border border-neutral-300 rounded-full py-3 pl-10 pr-5 
              focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter text-neutral-900"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md 
                         transition-all duration-300 text-center cursor-pointer"
            >
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center 
                            rounded-full mb-4 ${cat.circleBg}`}
              >
                <div className="text-white text-2xl">{cat.icon}</div>
              </div>

              <h3 className="font-montserrat text-lg font-semibold text-neutral-800 mb-2">
                {cat.title}
              </h3>

              <p className="text-neutral-500 text-sm font-inter leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
