"use client";

import {
  FaBrain,
  FaRobot,
  FaLaptopCode,
  FaBook,
  FaCogs,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

const jobCourses = [
  { title: "AI for Everyone", icon: <FaBrain />, circleBg: "bg-blue-700" },
  {
    title: "Deep Learning Specialization",
    icon: <FaRobot />,
    circleBg: "bg-green-700",
  },
  {
    title: "Fast AI Deep Learning",
    icon: <FaLaptopCode />,
    circleBg: "bg-purple-700",
  },
  {
    title: "Google AI Essentials",
    icon: <FaBook />,
    circleBg: "bg-yellow-700",
  },
  {
    title: "AI Product Management",
    icon: <FaCogs />,
    circleBg: "bg-indigo-700",
  },
];

export default function JobsPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-montserrat font-bold text-neutral-800 mb-4">
          Find AI Job Opportunities Anywhere in the World
        </h1>
        <p className="text-neutral-400 font-inter mb-12 text-lg">
          Search the latest AI jobs by title, keyword, or location, and explore
          courses to enhance your skills.
        </p>

        {/* Search Bar Row */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          {/* Job Title / Keyword */}
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-neutral-400 text-lg" />
            </div>
            <input
              type="text"
              placeholder="Search job title or keyword"
              className="w-full border border-neutral-300 rounded-full py-3 pl-10 pr-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter"
            />
          </div>

          {/* Location */}
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="text-neutral-400 text-lg" />
            </div>
            <input
              type="text"
              placeholder="Location"
              className="w-full border border-neutral-300 rounded-full py-3 pl-10 pr-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-inter"
            />
          </div>
        </div>

        {/* AI Courses / Job Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {jobCourses.map((course, i) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
