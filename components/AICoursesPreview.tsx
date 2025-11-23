"use client";

import { FaStar, FaBook } from "react-icons/fa";

export default function AICoursesPreview() {
  const courses = [
    {
      title: "Machine Learning A-Z™: Hands-On Python & R",
      platform: "Udemy",
      price: "₹449",
      rating: 4.7,
      image: "/courses/ml-az.webp",
    },
    {
      title: "Deep Learning Specialization",
      platform: "Coursera",
      price: "Free + Certificate",
      rating: 4.9,
      image: "/courses/deep-learning.webp",
    },
    {
      title: "AI for Everyone",
      platform: "edX",
      price: "₹6,999",
      rating: 4.8,
      image: "/courses/ai-everyone.webp",
    },
    {
      title: "Generative AI with Python",
      platform: "LinkedIn Learning",
      price: "Free for 1 month",
      rating: 4.6,
      image: "/courses/gen-ai.webp",
    },
    {
      title: "AI Engineer Professional Certificate",
      platform: "Coursera",
      price: "Paid",
      rating: 4.8,
      image: "/courses/ai-engineer.webp",
    },
    {
      title: "ChatGPT Prompt Engineering",
      platform: "Udemy",
      price: "₹349",
      rating: 4.7,
      image: "/courses/prompt-engineering.webp",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white border-t border-neutral-200 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-neutral-900">
          Discover 200,000+ AI & Tech Courses from the World’s Leading Platforms
        </h2>

        <p className="mt-4 text-base md:text-lg text-gray-600 font-inter">
          Learn from top universities, global experts, certified trainers with
          real-time pricing & certificates.
        </p>
      </div>

      {/* Course Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 
                       transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-44 bg-neutral-200 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold font-montserrat text-neutral-900 leading-snug">
                {course.title}
              </h3>

              <div className="flex items-center gap-2 mt-3 text-sm text-gray-600 font-inter">
                <FaBook className="text-blue-600" />
                <span className="font-semibold text-blue-600">
                  {course.platform}
                </span>
              </div>

              <p className="text-sm text-gray-600 mt-2 font-inter">
                Price: <span className="font-semibold">{course.price}</span>
              </p>

              <div className="flex items-center gap-1 mt-2 text-sm font-inter text-gray-700">
                <FaStar className="text-yellow-500" />
                <span className="font-semibold">{course.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Data Source */}
      <p className="mt-14 text-center text-neutral-500 text-sm font-inter">
        Updated daily via Udemy • Coursera • edX • LinkedIn Learning
      </p>
    </section>
  );
}
