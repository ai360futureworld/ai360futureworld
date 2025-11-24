"use client";

import Link from "next/link";
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
          Explore the Core Fields of Artificial Intelligence
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 font-inter">
          Understand major AI branches including ML, NLP, Robotics, Vision etc.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {techs.map((tech, idx) => {
          const slug = tech.name.toLowerCase().replace(/\s+/g, "-");

          return (
            <Link
              key={idx}
              href={`/technologies/${slug}`}
              className="p-6 bg-neutral-50 border border-gray-100 rounded-2xl shadow-sm 
                         hover:bg-blue-50 hover:shadow-md transition ease-in-out duration-300 
                         flex flex-col items-center text-center cursor-pointer"
            >
              <div className="text-blue-500 text-3xl mb-3">{tech.icon}</div>
              <h3 className="text-lg font-bold font-montserrat text-neutral-800">
                {tech.name}
              </h3>
            </Link>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
          href="/technologies"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white 
                     rounded-full text-sm font-semibold transition"
        >
          Learn More About AI Technologies
        </Link>
      </div>

      {/* Footer */}
      <p className="mt-10 text-center text-neutral-500 text-sm font-inter">
        Content updated regularly to match industry trends.
      </p>
    </section>
  );
}
