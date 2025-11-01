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
          <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-neutral-900 mb-3">
            The Cutting Edge of AI — Tools Redefining Innovation
          </h2>
          <p className="font-inter text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            Stay ahead of innovation — explore AI tools launching soon across
            various industries.
          </p>
        </div>

        {/* === Table === */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-x-auto">
          <table className="min-w-full text-center font-inter text-sm md:text-base">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-2 md:py-4 md:px-4 font-semibold whitespace-nowrap">
                  Tool
                </th>
                <th className="py-2 px-2 md:py-4 md:px-4 font-semibold whitespace-nowrap">
                  Category
                </th>
                <th className="py-2 px-2 md:py-4 md:px-4 font-semibold whitespace-nowrap">
                  Launch Date
                </th>
                <th className="py-2 px-2 md:py-4 md:px-4 font-semibold whitespace-nowrap">
                  Source
                </th>
              </tr>
            </thead>
            <tbody className="border border-neutral-300 text-neutral-700 text-sm md:text-base">
              {upcomingTools.map((tool, idx) => (
                <tr
                  key={idx}
                  className="border-b border-neutral-300 hover:bg-neutral-50 transition-all duration-200"
                >
                  <td className="py-2 px-2 md:py-3 md:px-4 font-medium border-r border-neutral-300">
                    {tool.name}
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4 border-r border-neutral-300">
                    {tool.category}
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-neutral-600 border-r border-neutral-300">
                    {tool.launch}
                  </td>
                  <td className="py-2 px-2 md:py-3 md:px-4 text-blue-600 font-semibold">
                    {tool.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* === View All Link === */}
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center w-56 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-inter font-semibold rounded-full transition duration-300"
          >
            View More
            <FaArrowRight className="ml-2 text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}
