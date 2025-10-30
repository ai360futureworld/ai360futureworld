"use client";

import { FaArrowRight } from "react-icons/fa";

const upcomingTools = [
  {
    name: "AI Tool X",
    category: "Productivity",
    launch: "2025-10-15",
    source: "Website",
  },
  {
    name: "AI Tool Y",
    category: "Design",
    launch: "2025-11-01",
    source: "Udemy",
  },
  {
    name: "AI Tool Z",
    category: "Education",
    launch: "2025-12-05",
    source: "Coursera",
  },
];

export default function UpcomingAITools() {
  return (
    <section className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* === Heading === */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-4 font-inter">
            Upcoming Launches
          </div>
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-neutral-900 mb-3">
            Discover the Next Wave of AI Tools
          </h2>
          <p className="font-inter text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            Stay ahead of innovation — explore AI tools launching soon across
            various industries.
          </p>
        </div>

        {/* === Table === */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
          <table className="min-w-full text-center font-inter">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-4 px-4 text-sm md:text-base font-semibold">
                  Tool
                </th>
                <th className="py-4 px-4 text-sm md:text-base font-semibold">
                  Category
                </th>
                <th className="py-4 px-4 text-sm md:text-base font-semibold">
                  Launch Date
                </th>
                <th className="py-4 px-4 text-sm md:text-base font-semibold">
                  Source
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-neutral-700">
              {upcomingTools.map((tool, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-neutral-50 transition-all duration-200"
                >
                  <td className="py-3 px-4 font-medium">{tool.name}</td>
                  <td className="py-3 px-4">{tool.category}</td>
                  <td className="py-3 px-4 text-neutral-600">{tool.launch}</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">
                    {tool.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* === View All Link === */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold font-inter transition"
          >
            View All Upcoming Tools
            <FaArrowRight className="ml-2 text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}
