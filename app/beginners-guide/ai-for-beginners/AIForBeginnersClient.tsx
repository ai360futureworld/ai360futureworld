// app/ai-for-beginners/AIForBeginnersClient.tsx (CLIENT)
"use client";

import { useRef } from "react";
import { FaPlay, FaScroll } from "react-icons/fa";

export default function AIForBeginnersClient() {
  const whatIsRef = useRef<HTMLElement | null>(null);

  function scrollToWhatIs() {
    const el = document.getElementById("what-is-ai");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-inter">
      {/* HERO (White Background) */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white text-neutral-900 border-b">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-montserrat font-extrabold tracking-tight leading-tight">
              AI for Beginners
            </h1>

            <p className="mt-6 text-base md:text-lg text-neutral-700 leading-relaxed">
              Step confidently into the world of Artificial Intelligence. This
              beginner's guide is designed to help you understand how AI really
              works, what it can do, and how you can use it in your daily life —
              whether you're a student, creator, or professional. No technical
              background required — just curiosity and a desire to learn.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={scrollToWhatIs}
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-5 py-3 rounded-full font-medium shadow hover:bg-blue-700 hover:translate-y-[-2px] transition"
                aria-label="Start Learning AI"
              >
                <FaPlay /> Start Learning AI
              </button>

              <a
                href="/beginners-guide/ai-for-students"
                className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-700 border border-neutral-200 px-5 py-3 rounded-full font-medium hover:bg-neutral-200 transition"
              >
                <FaScroll /> Student Resources
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-center shadow-sm">
              <div className="w-36 h-36 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600">
                <svg
                  width="88"
                  height="88"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#6b7280"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 7v5l3 2"
                    stroke="#6b7280"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Floating circles */}
              <div className="absolute -left-6 -top-6 w-10 h-10 rounded-full bg-neutral-100 animate-bounce-slow" />
              <div className="absolute -right-8 bottom-6 w-6 h-6 rounded-full bg-neutral-100 animate-pulse-slower" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: What is AI */}
      <section
        id="what-is-ai"
        ref={whatIsRef}
        className="max-w-7xl mx-auto px-6 py-16 bg-white text-neutral-900 border-b"
      >
        <div>
          <h2 className="text-3xl font-montserrat font-semibold">
            What Exactly is Artificial Intelligence?
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Artificial Intelligence (AI) is the ability of a computer system to
            perform tasks that usually require human intelligence such as
            understanding language, recognizing objects, solving problems, and
            making decisions. At its core, AI is a mix of computer science,
            data, and algorithms designed to make machines "think" and "learn"
            like humans — but much faster and often more accurate.
          </p>

          <p className="mt-4 text-base leading-relaxed">
            AI doesn't just follow fixed commands. It analyzes, understands, and
            adapts based on data. Every time you use voice assistants,
            navigation, or recommendation engines — you're experiencing AI.
          </p>
        </div>
      </section>

      {/* Section: Types of AI */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white text-neutral-900 border-b">
        <div>
          <h3 className="text-2xl font-montserrat font-semibold">
            Types of Artificial Intelligence
          </h3>
          <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
            Based on capability and function, AI is commonly grouped into:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="p-5 border rounded-2xl">
              <h4 className="font-semibold">Reactive Machines</h4>
              <p className="mt-2 text-sm text-neutral-700">
                Basic systems that react to input in the present. Example: IBM
                Deep Blue.
              </p>
            </article>

            <article className="p-5 border rounded-2xl">
              <h4 className="font-semibold">Limited Memory</h4>
              <p className="mt-2 text-sm text-neutral-700">
                Learns from recent data. Example: Self-driving car sensors and
                models.
              </p>
            </article>

            <article className="p-5 border rounded-2xl">
              <h4 className="font-semibold">Theory of Mind</h4>
              <p className="mt-2 text-sm text-neutral-700">
                Future systems that understand human emotions and intentions —
                still under research.
              </p>
            </article>

            <article className="p-5 border rounded-2xl">
              <h4 className="font-semibold">Self-Aware AI</h4>
              <p className="mt-2 text-sm text-neutral-700">
                Hypothetical AI with consciousness — not achieved yet.
              </p>
            </article>
          </div>

          {/* Quick summary table */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Key Ability</th>
                  <th className="p-3 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Reactive Machines</td>
                  <td className="p-3">React to current input</td>
                  <td className="p-3">Deep Blue (chess)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Limited Memory</td>
                  <td className="p-3">Learn from recent data</td>
                  <td className="p-3">Self-driving cars</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Theory of Mind</td>
                  <td className="p-3">Recognize emotions (research)</td>
                  <td className="p-3">Future systems</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Self-Aware AI</td>
                  <td className="p-3">Consciousness (theoretical)</td>
                  <td className="p-3">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section: How AI Works */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white text-neutral-900 border-b">
        <div>
          <h3 className="text-2xl font-montserrat font-semibold">
            How Artificial Intelligence Works (Explained Simply)
          </h3>
          <ol className="mt-4 list-decimal list-inside space-y-3 text-sm text-neutral-700">
            <li>
              <strong>Input:</strong> AI collects data — images, text, voice,
              and more.
            </li>
            <li>
              <strong>Processing:</strong> Algorithms find patterns and
              relationships.
            </li>
            <li>
              <strong>Learning:</strong> Models improve using training data
              (Machine Learning).
            </li>
            <li>
              <strong>Decision:</strong> AI makes predictions or actions based
              on what it learned.
            </li>
            <li>
              <strong>Feedback:</strong> Results feed back to improve future
              decisions.
            </li>
          </ol>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="p-5 border rounded-2xl">
              <h4 className="font-semibold">Voice Assistants</h4>
              <p className="mt-2 text-sm text-neutral-700">
                Siri, Alexa and others understand speech and act on it.
              </p>
            </article>

            <article className="p-5 border rounded-2xl">
              <h4 className="font-semibold">Recommenders</h4>
              <p className="mt-2 text-sm text-neutral-700">
                Netflix and Spotify suggest content using predictions.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section: Why AI Matters */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white text-neutral-900 border-b">
        <div>
          <h3 className="text-2xl font-montserrat font-semibold">
            Why AI Matters Today
          </h3>
          <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
            AI shifts the way we live and work: better healthcare, smarter
            education, faster decisions, and creativity tools that amplify human
            abilities. It's not about replacing people — it's about augmenting
            human potential.
          </p>
        </div>
      </section>

      {/* Section: 10 Key Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white text-neutral-900 border-b">
        <div>
          <h3 className="text-2xl font-montserrat font-semibold">
            10 Key Highlights — Why AI is Powerful
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Learns from Data",
                d: "AI studies many examples to identify patterns.",
              },
              {
                t: "Recognizes Patterns",
                d: "Detects trends humans may miss.",
              },
              {
                t: "Understands Language",
                d: "NLP enables chatbots and assistants.",
              },
              {
                t: "Makes Decisions",
                d: "Predicts outcomes and acts automatically.",
              },
              {
                t: "Improves Over Time",
                d: "Continuous learning increases accuracy.",
              },
              {
                t: "Automates Repetitive Work",
                d: "Frees humans for creative work.",
              },
              {
                t: "Enhances Creativity",
                d: "Generative tools aid design and writing.",
              },
              {
                t: "Powers Smart Devices",
                d: "Runs behind home and device features.",
              },
              {
                t: "Supports Business Decisions",
                d: "Converts data into actionable insights.",
              },
              {
                t: "Transforms Industries",
                d: "Used across healthcare, finance, education and more.",
              },
            ].map((k) => (
              <article key={k.t} className="p-5 border rounded-2xl">
                <h4 className="font-semibold">{k.t}</h4>
                <p className="mt-2 text-sm text-neutral-700">{k.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section: How AI Impacts Everyday Life */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white text-neutral-900 border-b">
        <div>
          <h3 className="text-2xl font-montserrat font-semibold">
            How AI Impacts Everyday Life
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { h: "Education", p: "Personalized learning and smart notes." },
              { h: "Healthcare", p: "Faster scans and early detection." },
              { h: "Business", p: "Smarter forecasting and automation." },
              { h: "Finance", p: "Fraud detection and instant decisions." },
              { h: "Entertainment", p: "Better recommendations." },
              {
                h: "Transportation",
                p: "Improved logistics and self-driving.",
              },
              { h: "Smart Homes", p: "Voice assistants and automation." },
              { h: "Climate", p: "Climate modeling and data analysis." },
            ].map((it) => (
              <div key={it.h} className="p-5 border rounded-2xl">
                <h4 className="font-semibold">{it.h}</h4>
                <p className="mt-2 text-sm text-neutral-700">{it.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing + CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white text-neutral-900">
        <div className="text-center">
          <h3 className="text-2xl font-montserrat font-semibold">
            Start Your AI Journey
          </h3>
          <p className="mt-4 text-sm text-neutral-700">
            AI is the present — learning it now prepares you for the future.
            Explore our student hub, tools, and tutorials to go from curious to
            confident.
          </p>

          <div className="mt-6">
            <a
              href="/ai-for-students"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-5 py-3 rounded-full font-medium hover:bg-blue-500 transition"
            >
              Explore AI Tools for Students
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
