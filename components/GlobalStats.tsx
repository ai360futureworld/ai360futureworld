"use client";

import { useEffect, useState } from "react";

const stats = [
  { label: "AI Tools Across All Industries", value: 2500, suffix: "+" },
  {
    label: "AI & Tech Courses from Global Platforms",
    value: 25000000,
    suffix: "+",
  },
  {
    label: "Remote & Global Tech Jobs Updated Daily",
    value: 1000000,
    suffix: "+",
  },

  // 🔥 NEW CARD 1
  {
    label: "2,000+ Ready-to-Use AI Prompts (expanding to 5,000+ soon)",
    value: 2000,
    suffix: "+",
  },

  // 🔥 NEW CARD 2
  {
    label: "1,500+ AI Automation Tools & Workflows",
    value: 1500,
    suffix: "+",
  },
];

export default function GlobalStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const interval = 20;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / (duration / interval);

      const timer = setInterval(() => {
        current += increment;

        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, interval);
    });
  }, []);

  return (
    <section className="py-20 px-6 bg-white border-t border-neutral-200 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-neutral-900">
          Global Statistics
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 font-inter">
          Updated daily across AI tools, courses and global job markets.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 bg-neutral-50 border border-gray-100 rounded-2xl shadow-sm 
                       hover:bg-blue-50 hover:shadow-md transition ease-in-out duration-300
                       flex flex-col items-center text-center"
          >
            {/* Number Counter */}
            <p className="text-4xl md:text-5xl font-extrabold text-blue-600 font-montserrat">
              {counts[idx].toLocaleString()}
              {stat.suffix}
            </p>

            {/* Label */}
            <h3 className="text-lg font-bold font-montserrat text-neutral-800 mt-3">
              {stat.label}
            </h3>
          </div>
        ))}
      </div>

      {/* Data Source */}
      <p className="mt-10 text-center text-neutral-500 text-sm font-inter">
        Data sourced daily from Udemy, Coursera, edX, Jooble, Talent.com and
        Adzuna.
      </p>
    </section>
  );
}
