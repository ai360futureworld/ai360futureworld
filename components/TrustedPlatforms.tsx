"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const logos = [
  { name: "udemy", src: "/brand/udemy.png" },
  { name: "coursera", src: "/brand/coursera.png" },
  { name: "edx", src: "/brand/edx.png" },
  { name: "linkedin", src: "/brand/linkedin.png" },
  { name: "jooble", src: "/brand/jooble.png" },
  { name: "talent", src: "/brand/talent.png" },
  { name: "adzuna", src: "/brand/adzuna.png" },
  { name: "openai", src: "/brand/openai.png" },
  { name: "huggingface", src: "/brand/huggingface.png" },
];

export default function TrustedPlatforms() {
  return (
    <section className="py-10 bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3500} // continuous smooth scroll
          breakpoints={{
            480: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.name}>
              <div className="flex items-center justify-center w-full h-20">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-20 h-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-200"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
