"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const HeroSection = () => {
  const words = ["Artificial Intelligence"];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // === Typewriter Effect ===
  useEffect(() => {
    const currentWord = words[index];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section className="bg-white py-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE CONTENT */}
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 leading-tight font-montserrat">
            Discover the World Powered by{" "}
            <span className="text-blue-500 border-r-2 border-blue-500 pr-1">
              {displayText}
            </span>
          </h1>

          <p className="text-gray-600 text-base mt-6 font-inter">
            Explore the global ecosystem of AI tools, technologies, courses,
            jobs, and insights empowering learners, professionals, and
            businesses worldwide.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="#tools"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-sm transition duration-200"
            >
              Explore Al Tools
            </Link>

            <Link
              href="#newsletter"
              className="border border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition duration-200"
            >
              Start Learning Al
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/hero/ai-illustration.jpg"
            alt="AI Illustration"
            className="w-full max-w-md object-cover rounded-xl "
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
