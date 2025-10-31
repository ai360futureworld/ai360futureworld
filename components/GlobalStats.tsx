"use client";

import { useEffect, useState } from "react";
import {
  FaGlobe,
  FaTools,
  FaBrain,
  FaBriefcase,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    number: 150,
    suffix: "+",
    title: "Countries Reached",
    desc: "Connecting learners and AI professionals worldwide.",
    icon: <FaGlobe size={26} />,
  },
  {
    id: 2,
    number: 1100,
    suffix: "+",
    title: "AI Tools Listed",
    desc: "Curated collection of automation & productivity tools.",
    icon: <FaTools size={26} />,
  },
  {
    id: 3,
    number: 100,
    suffix: "+",
    title: "AI Technologies Featured",
    desc: "The latest trends shaping the future of AI.",
    icon: <FaBrain size={26} />,
  },
  {
    id: 4,
    number: 1000,
    suffix: "+",
    title: "AI Jobs Available",
    desc: "Opportunities from verified global employers.",
    icon: <FaBriefcase size={26} />,
  },
  {
    id: 5,
    number: 500,
    suffix: "+",
    title: "AI Courses & Certifications",
    desc: "Learn AI from top educators and platforms worldwide.",
    icon: <FaGraduationCap size={26} />,
  },
  {
    id: 6,
    number: 25,
    suffix: " k+",
    title: "Users & Growing",
    desc: "Trusted by innovators, students, and creators globally.",
    icon: <FaChartLine size={26} />,
  },
];

export default function GlobalStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;
    const newCounts = stats.map(() => 0);

    const timers = stats.map((stat, i) =>
      setInterval(() => {
        newCounts[i] += stat.number / steps;
        if (newCounts[i] >= stat.number) {
          newCounts[i] = stat.number;
          clearInterval(timers[i]);
        }
        setCounts([...newCounts]);
      }, interval)
    );

    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  return (
    <section className="bg-white py-20 border-t border-neutral-200">
      {/* Heading */}
      <div className="text-center mb-12 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-neutral-900">
          Global Reach & Impact
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 font-inter">
          AI 360 Future brings together the world’s brightest minds — uniting
          technology, talent, and transformation.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center bg-white border border-neutral-200 shadow-sm rounded-2xl p-8 hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="bg-blue-500 text-white p-3 rounded-full mb-4 flex items-center justify-center">
              {stat.icon}
            </div>

            {/* Counter */}
            <h3 className="text-3xl font-bold text-neutral-800 font-montserrat">
              {Math.floor(counts[i])}
              {stat.suffix}
            </h3>

            {/* Title */}
            <p className="mt-2 text-lg font-semibold text-neutral-800 text-center">
              {stat.title}
            </p>

            {/* Description */}
            <p className="mt-1 text-sm text-neutral-500 text-center max-w-[220px]">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
