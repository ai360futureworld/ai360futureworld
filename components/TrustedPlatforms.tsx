"use client";

import { motion } from "motion/react";
import ReactCountryFlag from "react-country-flag";
import { useRef, useEffect, useState } from "react";

const countries = [
  { name: "United States", code: "US" },
  { name: "Canada", code: "CA" },
  { name: "Mexico", code: "MX" },
  { name: "Brazil", code: "BR" },
  { name: "Argentina", code: "AR" },
  { name: "United Kingdom", code: "GB" },
  { name: "Germany", code: "DE" },
  { name: "France", code: "FR" },
  { name: "Italy", code: "IT" },
  { name: "Spain", code: "ES" },
  { name: "Netherlands", code: "NL" },
  { name: "Sweden", code: "SE" },
  { name: "Norway", code: "NO" },
  { name: "Denmark", code: "DK" },
  { name: "Switzerland", code: "CH" },
  { name: "Poland", code: "PL" },
  { name: "Australia", code: "AU" },
  { name: "New Zealand", code: "NZ" },
  { name: "India", code: "IN" },
  { name: "Singapore", code: "SG" },
  { name: "Japan", code: "JP" },
];

export default function TrustedPlatforms() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  // Calculate track width
  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-12 fade">
          Trusted by learners from{" "}
          <span className="text-blue-600 font-bold">
            150+ countries worldwide.
          </span>
        </h2>

        {/* OUTER WRAPPER */}
        <div className="relative overflow-hidden py-4">
          {/* Infinite Marquee (Back and Forth) */}
          <motion.div
            ref={trackRef}
            className="flex gap-6"
            animate={{ x: [0, -trackWidth] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {/* Duplicate countries list for continuous scrolling */}
            {[...countries, ...countries].map((c, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-3
                  px-6 py-3 
                  rounded-xl 
                  bg-blue-50 
                  border border-blue-200/40 
                  text-blue-700 
                  text-lg 
                  font-semibold
                  shadow-sm
                  whitespace-nowrap
                  hover:bg-blue-100 
                  transition
                  pulseGlow
                "
              >
                {/* Flag */}
                <div className="w-6 h-6 flex-shrink-0 rounded-md overflow-hidden">
                  <ReactCountryFlag
                    countryCode={c.code}
                    svg
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {c.name}
              </div>
            ))}
          </motion.div>

          {/* Fade LEFT */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

          {/* Fade RIGHT */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .pulseGlow {
          animation: pulseGlow 2.5s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0px rgba(37,99,235,0.0); }
          50% { box-shadow: 0 0 12px rgba(37,99,235,0.35); }
          100% { box-shadow: 0 0 0px rgba(37,99,235,0.0); }
        }

        .fade {
          animation: fadeIn 2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
