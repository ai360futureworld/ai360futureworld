"use client";

import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const jobs = [
  { title: "AI Engineer", company: "TechCorp", location: "Remote" },
  { title: "ML Expert", company: "DeepAI", location: "USA • Hybrid" },
  { title: "Data Lead", company: "DataLab", location: "UK • Remote" },
  { title: "AI Manager", company: "InnovateX", location: "Canada" },
  { title: "Vision Eng.", company: "VisionTech", location: "Germany" },
  { title: "AI Analyst", company: "InsightAI", location: "India • Remote" },
];

export default function AIJobsListing() {
  return (
    <section className="py-20 px-6 bg-white border-t border-neutral-200 overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-neutral-900">
          Trending AI & Tech Jobs Hiring Worldwide
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 font-inter">
          Updated every 12 hours from top job networks.
        </p>
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {jobs.map((job, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="h-full bg-white border border-neutral-200 rounded-2xl shadow-sm 
                           hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 
                           flex flex-col justify-between"
              >
                {/* Icon + Text */}
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 text-white p-3 rounded-full shadow-md">
                    <FaBriefcase size={18} />
                  </div>

                  <div className="flex flex-col text-left">
                    <h3 className="text-lg font-bold font-montserrat text-neutral-900 leading-tight">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-inter">
                      {job.company}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm font-inter text-gray-700 mt-4">
                  <FaMapMarkerAlt className="text-blue-400" />
                  {job.location}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            className="prev-btn bg-blue-100 border border-neutral-300 p-3 rounded-full shadow-sm 
                       hover:bg-blue-200 transition"
          >
            ←
          </button>
          <button
            className="next-btn bg-blue-100 border border-neutral-300 p-3 rounded-full shadow-sm 
                       hover:bg-blue-200 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
          href="/technologies"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white 
                     rounded-full text-sm font-semibold transition"
        >
          View Job Details
        </Link>
      </div>

      {/* Footer */}
      <p className="mt-10 text-center text-neutral-500 text-sm font-inter">
        Job listings aggregated from Jooble, Talent.com, Adzuna, Remotive and
        FlexJobs.
      </p>
    </section>
  );
}
