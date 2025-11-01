"use client";

import {
  FaRobot,
  FaBrain,
  FaBook,
  FaCogs,
  FaBolt,
  FaHandHoldingHeart,
} from "react-icons/fa";

const techs = [
  { name: "Machine Learning", icon: <FaBrain /> },
  { name: "Deep Learning", icon: <FaRobot /> },
  { name: "Natural Language", icon: <FaBook /> },
  { name: "Computer Vision", icon: <FaCogs /> },
  { name: "Reinforcement Learning", icon: <FaBolt /> },
  { name: "Responsible AI", icon: <FaHandHoldingHeart /> },
];

export default function AITechOverview() {
  return (
    <section className="py-20 px-6 bg-white border-t border-neutral-200 overflow-hidden">
      <div className="text-center mb-12 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-neutral-900">
          AI Technologies Overview
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 font-inter">
          Explore the key AI fields driving innovation today.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {techs.map((tech, idx) => (
          <div
            key={idx}
            className="p-6 bg-neutral-50 border border-gray-100 rounded-2xl shadow-sm hover:bg-blue-50 hover:shadow-md transition ease-in-out duration-300 flex flex-col items-center text-center"
          >
            <div className="text-blue-500 text-3xl mb-3">{tech.icon}</div>
            <h3 className="text-lg font-bold font-montserrat text-neutral-800">
              {tech.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
