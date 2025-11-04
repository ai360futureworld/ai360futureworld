"use client";

import {
  FaEye,
  FaGlobe,
  FaArrowUp,
  FaHeart,
  FaTelegramPlane,
  FaBookOpen,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBullseye,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-800 font-inter">
      {/* SECTION 1: HERO HEADER */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 overflow-hidden bg-gradient-to-b from-[#F9FAFB] to-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/world-map.svg')] bg-cover bg-center opacity-10 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-neutral-900 mb-6 animate-fadeIn">
            About AI 360 Future
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-6 font-inter animate-slideUp">
            Building smarter connections between knowledge, technology, and
            opportunity.
          </p>
          <p className="text-neutral-600 leading-relaxed font-inter text-base md:text-lg animate-slideUp delay-200">
            AI 360 Future is a global platform designed to simplify the way the
            world learns AI. From intelligent tools to learning resources and
            real-world insights, we connect people to what truly matters —
            growth, capability, and the future of digital learning.
          </p>

          {/* CTA Button */}
          <div className="mt-10 animate-fadeIn delay-300">
            <a
              href="#tools"
              className="bg-blue-600 text-white font-inter px-8 py-3 rounded-xl shadow-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300"
            >
              Explore AI Tools
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: MISSION & VISION */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-16 text-neutral-900 animate-fadeIn">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 animate-slideUp">
            <div className="flex justify-center mb-8 relative">
              <div className="absolute w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-70"></div>
              <div className="text-blue-600 text-6xl relative animate-float-slow">
                <FaBullseye />
              </div>
            </div>
            <h3 className="text-2xl font-montserrat font-semibold mb-4">
              Simplifying the way the world learns AI.
            </h3>
            <p className="text-neutral-600 leading-relaxed font-inter text-base">
              Our mission is to make artificial intelligence accessible,
              practical, and meaningful for everyone. We aim to bridge the gap
              between technology and learning — helping people acquire real
              skills, apply intelligent tools, and grow with confidence in the
              digital age.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 animate-slideUp delay-200">
            <div className="flex justify-center mb-8 relative">
              <div className="absolute w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-70"></div>
              <div className="text-blue-600 text-6xl relative animate-float-slow">
                <FaGlobe />
              </div>
            </div>
            <h3 className="text-2xl font-montserrat font-semibold mb-4">
              Shaping a world where intelligence and opportunity move together.
            </h3>
            <p className="text-neutral-600 leading-relaxed font-inter text-base">
              We envision a future where knowledge is open, technology is
              responsible, and every learner — from any corner of the world —
              can develop real skills, create value, and lead confidently in the
              era of AI.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: MANIFESTO */}
      <section className="py-24 bg-white border-y border-neutral-200 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-8 animate-fadeIn">
            Our Manifesto
          </h2>
          <p className="text-neutral-700 text-lg md:text-xl leading-relaxed font-serif tracking-wide animate-slideUp">
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
      <section className="py-24 bg-[#F8FAFC] text-neutral-800">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-neutral-900 animate-fadeIn">
            Our Core Values
          </h2>
          <p className="text-neutral-600 font-inter animate-slideUp max-w-2xl mx-auto">
            The four principles that guide our purpose — making technology
            transparent, accessible, progressive, and human.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <FaEye />,
              title: "Transparency",
              text: "Clarity in every step. Integrity in every action. We operate with complete honesty ensuring AI education and technology remain trustworthy, accountable, and responsible for everyone.",
            },
            {
              icon: <FaGlobe />,
              title: "Accessibility",
              text: "Bridging knowledge across the world. We believe access to knowledge and technology is a universal right. Our aim is to make AI learning inclusive, adaptive, and available to every learner.",
            },
            {
              icon: <FaArrowUp />,
              title: "Progress",
              text: "Advancing minds, shaping futures. We help individuals and organizations grow through learning and real-world application of AI.",
            },
            {
              icon: <FaHeart />,
              title: "Empathy",
              text: "Human at the heart of intelligence. We design AI that listens, learns, and leads with understanding — because true intelligence begins with empathy.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 text-center animate-slideUp"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="text-blue-600 text-5xl animate-float">
                  {value.icon}
                </div>
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
      <section className="relative py-24 bg-white text-center overflow-hidden">
        {/* World Map */}
        <div className="absolute inset-0">
          <img
            src="/world-map.png"
            alt="World Map"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-neutral-900">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 animate-fadeIn">
            A Global Platform — Trusted in 150+ Countries
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600 mb-12 font-inter animate-slideUp">
            Connecting learners, creators, and professionals across borders
            through AI education and opportunity.
          </p>

          {/* Map with Pins */}
          <div className="relative w-full max-w-6xl mx-auto h-[450px]">
            <img
              src="/world-map.png"
              alt="World Map"
              className="w-full h-full object-contain"
            />
            {/* Floating Blue Pins */}
            {[
              "top-[20%] left-[28%]",
              "top-[30%] right-[30%]",
              "top-[40%] right-[40%]",
              "top-[35%] right-[35%]",
              "top-[28%] right-[45%]",
              "top-[29%] right-[39%]",
              "top-[35%] left-[30%]",
              "top-[20%] right-[35%]",
              "bottom-[25%] left-[38%]",
              "bottom-[25%] left-[52%]",
              "bottom-[40%] left-[50%]",
              "bottom-[18%] right-[26%]",
            ].map((pos, i) => (
              <FaMapMarkerAlt
                key={i}
                className={`absolute ${pos} text-neutral-100 text-3xl drop-shadow-[0_0_6px_rgba(59,130,246,0.5)] animate-float`}
              />
            ))}
          </div>

          <p className="text-sm text-neutral-500 mt-10 animate-fadeIn delay-200">
            Serving learners in{" "}
            <span className="font-semibold text-neutral-800">150+ nations</span>{" "}
            and growing.
          </p>
        </div>
      </section>

      {/* SECTION 6: JOIN OUR COMMUNITY */}
      <section className="py-24 bg-white text-neutral-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 animate-fadeIn">
            Join Our Community
          </h2>
          <p className="text-neutral-600 animate-slideUp font-inter">
            Connect with a global network of AI learners, professionals, and
            creators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <FaTelegramPlane />,
              title: "Join Our Telegram",
              text: "Real-time conversations & updates. Engage in AI discussions, share ideas, and stay current with the latest insights.",
              btn: "Join Telegram",
            },
            {
              icon: <FaBookOpen />,
              title: "Learn & Grow",
              text: "Curated learning paths. Access tutorials, guides, and AI learning materials to strengthen your skills.",
              btn: "View Learning Hub",
            },
            {
              icon: <FaEnvelope />,
              title: "Stay Updated",
              text: "Weekly insights & news. Subscribe for curated AI updates, tools, and community highlights.",
              btn: "Join Newsletter",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 p-8 rounded-2xl shadow hover:shadow-lg transition-transform hover:-translate-y-2 animate-slideUp text-center"
            >
              <div className="flex justify-center items-center mb-6">
                <div className="text-blue-600 text-5xl animate-float">
                  {card.icon}
                </div>
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-neutral-600 text-sm mb-6 font-inter">
                {card.text}
              </p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition font-inter"
              >
                {card.btn}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
