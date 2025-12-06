"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const courses = [
  {
    title: "Machine Learning A-Z™",
    provider: "Coursera",
    price: 0,
    img: "/placeholder-ml.png",
  },
  {
    title: "Neural Networks and Deep Learning",
    provider: "Udemy",
    price: 1999,
    img: "/placeholder-nn.png",
  },
  {
    title: "AI For Everyone",
    provider: "Coursera",
    price: 0,
    img: "/placeholder-ai.png",
  },
  {
    title: "ChatGPT Complete Guide",
    provider: "Udemy",
    price: 2999,
    img: "/placeholder-gpt.png",
  },
  {
    title: "Generative AI & Prompting",
    provider: "edX",
    price: 0,
    img: "/placeholder-genai.png",
  },
  {
    title: "Deep Learning Specialization",
    provider: "Coursera",
    price: 2999,
    img: "/placeholder-dl.png",
  },
];

export default function TopAICourses() {
  return (
    <section className="bg-white py-20 border-t border-neutral-200 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* === Section Heading === */}
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-neutral-900 mb-3">
            Discover Globally Recognized Al Courses Designed By Industry Leaders
          </h2>
          <p className="font-inter text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            Where human potential and artificial intelligence grow together.
          </p>
        </div>

        {/* === Swiper Navigation Buttons === */}
        <div className="swiper-button-prev absolute left-4 top-1/4 -translate-y-1/4 bg-white border border-neutral-200 p-3 rounded-full shadow-sm text-neutral-700 hover:text-blue-600 hover:shadow-md transition z-10">
          <FaChevronLeft size={18} />
        </div>

        <div className="swiper-button-next absolute right-4 top-1/4 -translate-y-1/4 bg-white border border-neutral-200 p-3 rounded-full shadow-sm text-neutral-700 hover:text-blue-600 hover:shadow-md transition z-10">
          <FaChevronRight size={18} />
        </div>

        {/* === Swiper Slider === */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          spaceBetween={24}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {courses.map((course, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 mb-4 bg-neutral-50 rounded-full flex items-center justify-center border border-neutral-100">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-neutral-900 h-12 flex items-center justify-center">
                    {course.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1 font-inter">
                    {course.provider}
                  </p>
                  <div className="mt-2 mb-4">
                    <span className="text-sm font-semibold text-blue-500 font-inter">
                      {course.price === 0 ? "Free" : `₹${course.price}`}
                    </span>
                  </div>
                  <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition font-inter">
                    Enroll Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* === View All Button === */}
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
