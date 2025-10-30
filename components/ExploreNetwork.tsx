"use client";

import {
  FaTools,
  FaBookOpen,
  FaBriefcase,
  FaRobot,
  FaCogs,
  FaUserGraduate,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaTools size={30} className="text-blue-600" />,
    title: "AI Tools",
    description:
      "Discover the latest AI-powered tools designed to boost productivity and creativity.",
  },
  {
    icon: <FaBookOpen size={30} className="text-blue-600" />,
    title: "AI Courses",
    description:
      "Upskill with structured AI learning paths created by experts worldwide.",
  },
  {
    icon: <FaBriefcase size={30} className="text-blue-600" />,
    title: "AI Jobs",
    description:
      "Explore AI career opportunities across startups, enterprises, and research.",
  },
  {
    icon: <FaRobot size={30} className="text-blue-600" />,
    title: "AI Technologies",
    description:
      "Stay ahead with cutting-edge advancements in machine learning and automation.",
  },
  {
    icon: <FaCogs size={30} className="text-blue-600" />,
    title: "AI Automation Hub",
    description:
      "Connect automation tools that streamline processes and workflows effortlessly.",
  },
  {
    icon: <FaUserGraduate size={30} className="text-blue-600" />,
    title: "Beginner’s Guide",
    description:
      "Start your AI journey with beginner-friendly tutorials and guides.",
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
          meets opportunity.
        </p>

        {/* === Cards Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
