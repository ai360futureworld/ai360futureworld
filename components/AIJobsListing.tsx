"use client";

import { FaBriefcase, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const jobs = [
  { title: "AI Engineer", company: "TechCorp" },
  { title: "ML Researcher", company: "DeepAI" },
  { title: "Data Scientist", company: "DataLab" },
  { title: "AI Product", company: "InnovateX" },
  { title: "Computer Vision", company: "VisionTech" },
  { title: "AI Analyst", company: "InsightAI" },
];

export default function AIJobsListing() {
  return (
    <section className="py-20 px-6 bg-white border-t border-neutral-200 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-neutral-900">
          AI Jobs Listing
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 font-inter">
          Explore exciting opportunities in Artificial Intelligence.
        </p>
      </div>

      {/* Jobs Swiper */}
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
              <div className="bg-neutral-50 border border-gray-100 rounded-2xl shadow-sm hover:bg-blue-50 hover:shadow-md transition ease-in-out duration-300 p-5 flex flex-col">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-500 text-white p-3 rounded-full">
                    <FaBriefcase size={18} />
                  </div>
                  <div className="flex flex-col text-left">
                    <h3 className="text-lg font-bold font-montserrat text-neutral-800">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-inter">
                      {job.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-6 mt-8">
          <button className="prev-btn bg-neutral-50 border border-gray-200 p-3 rounded-full shadow-sm hover:bg-blue-50 hover:shadow-md transition">
            &#8592;
          </button>
          <button className="next-btn bg-neutral-50 border border-gray-200 p-3 rounded-full shadow-sm hover:bg-blue-50 hover:shadow-md transition">
            &#8594;
          </button>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="inline-flex items-center justify-center w-56 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-inter font-semibold rounded-full transition duration-300"
        >
          View More
          <FaArrowRight className="ml-2 text-sm" />
        </a>
      </div>
    </section>
  );
}
