"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const countries = [
  "United States",
  "Canada",
  "Mexico",
  "Brazil",
  "Argentina",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Switzerland",
  "Poland",
  "Australia",
  "New Zealand",
  "India",
  "Singapore",
  "Japan",
];

export default function TrustedPlatforms() {
  return (
    <section className="py-12 bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-8">
          Trusted by learners from{" "}
          <span className="text-black">150+ countries.</span>
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3500}
          breakpoints={{
            480: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
        >
          {countries.map((country, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center w-full">
                <div
                  className="
                    border border-neutral-300 
                    px-4 py-2 
                    rounded-xl 
                    text-neutral-700 
                    text-sm 
                    font-medium 
                    bg-white 
                    shadow-sm 
                    hover:border-black 
                    hover:text-black 
                    transition
                    whitespace-nowrap
                  "
                >
                  {country}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
