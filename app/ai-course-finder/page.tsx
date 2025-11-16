"use client";

import {
  FaBrain,
  FaRobot,
  FaLaptopCode,
  FaBook,
  FaCogs,
  FaChartLine,
  FaLanguage,
  FaLightbulb,
  FaSearch,
} from "react-icons/fa";

const courses = [
  {
    title: "AI for Everyone",
    description:
      "Understand AI fundamentals and their impact on business and society.",
    icon: <FaBrain />,
    circleBg: "bg-blue-700",
  },
  {
    title: "Deep Learning Specialization",
    description: "Master neural networks and deep learning techniques.",
    icon: <FaRobot />,
    circleBg: "bg-green-700",
  },
  {
    title: "Fast AI Deep Learning",
    description: "Practical deep learning with the FastAI library.",
    icon: <FaLaptopCode />,
    circleBg: "bg-purple-700",
  },
  {
    title: "Google AI Essentials",
    description: "Learn Google's AI tools and best practices.",
    icon: <FaBook />,
    circleBg: "bg-yellow-700",
  },
  {
    title: "Natural Language Processing",
    description: "Analyze and generate human language with AI.",
    icon: <FaLanguage />,
    circleBg: "bg-pink-700",
  },
  {
    title: "AI Product Management",
    description: "Learn to manage AI-driven products efficiently.",
    icon: <FaCogs />,
    circleBg: "bg-indigo-700",
  },
  {
    title: "AI for Data Science",
    description: "Use AI to extract insights from data effectively.",
    icon: <FaChartLine />,
    circleBg: "bg-teal-700",
  },
  {
    title: "AI Innovation & Strategy",
    description: "Develop AI strategies for business and technology growth.",
    icon: <FaLightbulb />,
    circleBg: "bg-orange-700",
  },
];

export default function CoursesPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-montserrat font-bold text-neutral-800 mb-4">
          Learn the Best AI Skills for Your Career
        </h1>
        <p className="text-neutral-400 font-inter mb-12 text-lg">
          Explore curated courses to upgrade your AI knowledge and career
          prospects.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-neutral-400 text-lg" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full border border-neutral-300 rounded-full py-3 pl-10 pr-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter"
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 ${course.circleBg}`}
              >
                <div className="text-white text-2xl">{course.icon}</div>
              </div>
              <h3 className="font-montserrat text-lg font-semibold text-neutral-800 mb-2">
                {course.title}
              </h3>
              <p className="text-neutral-400 text-sm font-inter leading-relaxed">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
