"use client";

import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import {
  FaGlobe,
  FaTelegramPlane,
  FaBookOpen,
  FaEnvelope,
  FaBullseye,
  FaGraduationCap,
  FaRegEnvelope,
} from "react-icons/fa";
import { FaLocationDot, FaTelegram } from "react-icons/fa6";
import { HiAcademicCap, HiEye, HiLightBulb, HiUsers } from "react-icons/hi";
import { HiOutlineEye, HiOutlineUsers } from "react-icons/hi2";
import { LuBrain, LuLightbulb } from "react-icons/lu";

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-800 font-inter">
      {/* SECTION 1: HERO HEADER */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 overflow-hidden bg-white">
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-neutral-900 mb-6 animate-fadeIn">
            About AI 360 Future
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-6 font-inter animate-slideUp">
            Building smarter connections between knowledge, technology, and
            opportunity through Al tools, courses, jobs, and the future of
            digital learning.
          </p>

          {/* CTA Button */}
          <div className="mt-10 animate-fadeIn delay-300">
            <a
              href="#tools"
              className="bg-blue-500 text-white font-inter px-8 py-3 rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
            >
              Explore AI Tools
            </a>
          </div>
        </div>
      </section>
      {/* SECTION 2: MISSION & VISION */}
      <section className="py-24 bg-white text-center border-t border-neutral-200">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-16 text-neutral-900 animate-fadeIn">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 animate-slideUp">
            <div className="flex justify-center mb-8 relative">
              <div className="absolute w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-70"></div>
              <div className="text-blue-500 text-6xl relative">
                <FaGlobe />
              </div>
            </div>
            <h3 className="text-2xl font-montserrat font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-neutral-600 leading-relaxed font-inter text-base">
              Simplifying Al for everyone. We make artificial intelligence
              accessible,practical, and actionable. We bridge the gap between
              technology and learning, empowering people with real-world skills
              and the confidence to apply them.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 animate-slideUp delay-200">
            <div className="flex justify-center mb-8 relative">
              <div className="absolute w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-70"></div>
              <div className="text-blue-500 text-6xl relative">
                <FaBullseye />
              </div>
            </div>
            <h3 className="text-2xl font-montserrat font-semibold mb-4">
              Our Vision
            </h3>
            <p className="text-neutral-600 leading-relaxed font-inter text-base">
              Advancing Al for every opportunity. We envision a future where
              intelligent tools and open knowledge create new possibilities .A
              world where every learner can build meaningful skills, create
              value, and lead with confidence.
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 3: MANIFESTO */}
      <section className="py-24 bg-white border-y border-neutral-200 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-neutral-900 mb-8 animate-fadeIn">
            Our Manifesto
          </h2>
          <p className="text-neutral-700 text-lg md:text-xl leading-relaxed font-inter tracking-wide animate-slideUp">
            We believe that artificial intelligence should expand human
            potential — not replace it.
            <br className="hidden md:block" />
            At{" "}
            <span className="font-semibold text-neutral-900">
              AI 360 Future
            </span>
            , we bridge access to tools, education, and career growth for
            everyone willing to learn and lead.
            <br />
            <br />
            Knowledge must be open. Technology must be ethical. Growth must be
            inclusive.
            <br />
            <br />
            Our purpose is to make AI practical, credible, and human-centric —
            empowering every learner and professional to shape their own future.
          </p>
        </div>
      </section>
      {/* SECTION 4: OUR CORE VALUES */}
      <section className="py-24 bg-white border-t border-neutral-200 text-neutral-800">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-neutral-900 animate-fadeIn">
            Our Core Values
          </h2>
          <p className="text-neutral-600 font-inter animate-slideUp max-w-2xl mx-auto">
            The four principles that guide our purpose — making technology
            transparent, accessible, progressive, and human.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <HiUsers />, // filled users
              title: "Collaboration",
              text: "Building together, growing together. We believe the best solutions emerge from partnership.We work side-byside with learners and communities to make Al accessible to all.",
            },
            {
              icon: <HiLightBulb />, // filled bulb
              title: "Innovation",
              text: "Pioneering smarter paths forward. We challenge the status quo to advance Al learning.We embrace creative thinking and novel approaches that push the boundaries of education.",
            },
            {
              icon: <HiEye />, // filled eye
              title: "Transparency",
              text: "Clarity in action, honesty in intent. We operate with unwavering integrity and open communication.We build trust by making every process and principle clear and understandable.",
            },
            {
              icon: <HiAcademicCap />, // filled brain alternative
              title: "Knowledge",
              text: "Turning knowledge into meaningful action. We equip learners with practical, real-world Al skills. We enable real growth and confident use of knowledge.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 text-center animate-slideUp"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="text-blue-500 text-5xl">{value.icon}</div>
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-3 text-neutral-900">
                {value.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-inter">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: GLOBAL PRESENCE */}
      <section className="relative py-28 bg-gradient-to-b from-blue-200 via-blue-100 to-white text-center overflow-hidden">
        {/* Content */}
        <div className="relative z-10 text-neutral-900 max-w-[850px] mx-auto px-6">
          {/* Bigger Globe Animation */}
          <div className="flex justify-center mb-10">
            <img
              src="/globe.gif"
              alt="Global AI Network"
              className="w-60 object-contain animate-fadeIn"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-5 animate-fadeIn">
            Connected with 150+ Countries
          </h2>

          <p className="text-neutral-700 mb-14 font-inter text-lg md:text-xl leading-relaxed animate-slideUp font-medium">
            From the USA to Europe, across Asia to Australia —
            <span className="font-semibold text-neutral-900">
              {" "}
              AI 360 Future
            </span>{" "}
            connects innovators, creators, and learners worldwide.
          </p>

          {/* Map Image + React Icons Pins */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Main Map (No shadow) */}
            <img
              src="/world-map1.png"
              alt="Global Connections"
              className="w-full h-auto object-cover rounded-xl animate-fadeIn z-0"
            />

            {/* ===== Premium Gradient Map Pins (React Icons) ===== */}

            {/* USA */}
            <FaLocationDot
              className="absolute top-[33%] left-[16%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />

            {/* Canada */}
            <FaLocationDot
              className="absolute top-[25%] left-[12%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />

            {/* Brazil */}
            <FaLocationDot
              className="absolute top-[70%] left-[32%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />

            {/* UK */}
            <FaLocationDot
              className="absolute top-[26%] left-[60%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />

            {/* Germany */}
            <FaLocationDot
              className="absolute top-[28%] left-[65%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />

            {/* France */}
            <FaLocationDot
              className="absolute top-[25%] left-[75%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />

            {/* Middle East */}
            <FaLocationDot
              className="absolute top-[35%] left-[55%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />

            {/* India */}
            <FaLocationDot
              className="absolute top-[45%] left-[59%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />

            {/* China */}
            <FaLocationDot
              className="absolute top-[40%] left-[68%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />

            {/* Japan */}
            <FaLocationDot
              className="absolute top-[38%] left-[74%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />

            {/* Australia */}
            <FaLocationDot
              className="absolute top-[75%] left-[85%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />

            {/* South Africa */}
            <FaLocationDot
              className="absolute top-[65%] left-[55%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />

            <FaLocationDot
              className="absolute top-[55%] left-[55%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />
            <FaLocationDot
              className="absolute top-[50%] left-[45%] 
             text-white drop-shadow-[0_0_6px_rgba(56,189,248,0.9)] 
             animate-pulse"
              style={{ fontSize: "26px" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: JOIN OUR COMMUNITY */}
      <section className="py-24 bg-white text-neutral-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 animate-fadeIn">
            Join Our Community
          </h2>
          <p className="text-neutral-600 animate-slideUp font-inter">
            Connect with a global network of AI enthusiasts. Share insights, get
            help, and collaborate on projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <FaTelegramPlane />,
              title: "Join Our Telegram",
              text: "Connect with AI enthusiasts worldwide. Get exclusive insights, expert discussions and early access to AI tools.",
              btn: "Join Our Telegram",
            },
            {
              icon: <FaGraduationCap />,
              title: "Learn & Grow",
              text: "Master AI with structured tutorials, real-world examples and step-by-step learning paths.",
              btn: "View Learning Hub",
            },
            {
              icon: <FaEnvelope className="text-4xl mb-2" />,
              title: "Stay Updated",
              text: "Receive daily AI news, tool alerts and industry trends — stay ahead of every update.",
              btn: "Join Newsletter",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 p-8 rounded-2xl shadow hover:shadow-lg transition-transform hover:-translate-y-2 animate-slideUp text-center flex flex-col h-full"
            >
              <div className="flex justify-center items-center mb-6">
                <div className="text-blue-500 text-5xl">{card.icon}</div>
              </div>

              <h3 className="font-montserrat text-xl font-semibold mb-2">
                {card.title}
              </h3>

              <p className="text-neutral-600 text-sm mb-6 font-inter">
                {card.text}
              </p>

              {/* Button pushed to bottom so all align */}
              <a
                href="#"
                className="inline-flex items-center rounded-lg  self-center justify-center w-56 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-inter font-semibold rounded-full transition duration-300 mt-auto"
              >
                {card.btn}
                <span>
                  <BiChevronRight size={20} className="ml-2" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
