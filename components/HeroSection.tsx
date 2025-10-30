"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const HeroSection = () => {
  const words = [
    "Artificial Intelligence",
    "Automation",
    "Machine Learning",
    "Neural Networks",
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentWord = words[index];
    const speed = isDeleting ? 50 : 120;

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
    <section className="bg-white py-28 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 leading-tight mb-6 font-[Montserrat]">
          Discover the World Powered by{" "}
          <span className="text-blue-500 border-r-2 border-blue-500 pr-1 animate-pulse">
            {displayText}
          </span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-10 font-[Inter]">
          Together We Built The Future with AI tools, technologies, and
          knowledge that shape the future of innovation.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="#tools"
            className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-full shadow-sm transition duration-200"
          >
            Explore AI Tools
          </Link>
          <Link
            href="#newsletter"
            className="border border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition duration-200"
          >
            Join Newsletter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
