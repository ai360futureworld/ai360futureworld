// app/ai-for-students/AIForStudentsClient.tsx (CLIENT)
"use client";

import { useState } from "react";
import { FaSearch, FaExternalLinkAlt } from "react-icons/fa";
import type { ReactNode } from "react";

type Tool = {
  name: string;
  desc: string;
  logo?: string;
  pretty?: string; // /go/ slug
};

const studentTools: Tool[] = [
  {
    name: "Notion AI",
    desc: "Notes, summaries, and organization.",
    logo: "https://logo.clearbit.com/notion.so",
    pretty: "/go/notion-ai",
  },
  {
    name: "ChatGPT",
    desc: "Brainstorming, writing & explanations.",
    logo: "https://logo.clearbit.com/openai.com",
    pretty: "/go/chatgpt",
  },
  {
    name: "Mem.ai",
    desc: "Smart workspace and recall.",
    logo: "https://logo.clearbit.com/mem.ai",
    pretty: "/go/mem-ai",
  },
  {
    name: "Otter.ai",
    desc: "Lecture transcription & summaries.",
    logo: "https://logo.clearbit.com/otter.ai",
    pretty: "/go/otter",
  },
  {
    name: "Gamma App",
    desc: "Slides from notes automatically.",
    logo: "https://logo.clearbit.com/gamma.app",
    pretty: "/go/gamma",
  },
];

export default function AIForStudentsClient() {
  const [q, setQ] = useState("");

  const filtered = studentTools.filter(
    (t) =>
      t.name.toLowerCase().includes(q.toLowerCase()) ||
      t.desc.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <main className="bg-white text-neutral-900 min-h-screen font-inter">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-b">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold">
            AI for Students: Learn Smarter, Not Harder
          </h1>
          <p className="mt-4 text-neutral-700">
            Explore tools, workflows and study techniques powered by AI —
            designed for students.
          </p>

          <div className="mt-6 max-w-xl mx-auto relative">
            <FaSearch className="absolute left-4 top-3 text-neutral-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search tools, summaries or exam prep..."
              className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-full shadow-sm focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-b">
        <h2 className="text-3xl font-montserrat font-semibold">
          Top Tools for Students
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Click "Try Now" to go to a masked affiliate (pretty) link.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <div key={t.name} className="p-6 border rounded-2xl bg-neutral-50">
              <div className="flex items-start gap-4">
                <img
                  src={t.logo}
                  alt={t.name}
                  className="h-10 w-10 rounded-md object-contain"
                />
                <div>
                  <div className="font-montserrat font-semibold">{t.name}</div>
                  <div className="text-sm text-neutral-600 mt-1">{t.desc}</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <a
                  href={t.pretty ?? "#"}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg  text-sm font-medium"
                >
                  Try Now <FaExternalLinkAlt className="text-xs" />
                </a>

                <span className="text-xs text-neutral-500">Affiliate</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Study Workflows */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-b">
        <h2 className="text-3xl font-montserrat font-semibold">
          Study Workflows
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <article className="p-6 border rounded-2xl">
            <h4 className="font-semibold">Notes to Summary</h4>
            <p className="mt-2 text-sm text-neutral-600">
              Upload lecture notes or PDFs and generate concise summaries for
              quick revision.
            </p>
          </article>

          <article className="p-6 border rounded-2xl">
            <h4 className="font-semibold">Auto Quiz Generator</h4>
            <p className="mt-2 text-sm text-neutral-600">
              Turn summaries into practice quizzes and flashcards for active
              recall.
            </p>
          </article>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-b text-center">
        <h3 className="text-2xl font-montserrat font-semibold">
          Get Weekly Student Tools
        </h3>
        <p className="mt-2 text-sm text-neutral-600">
          Subscribe for curated student tools, exam tips, and discounts.
        </p>
        <form
          className="mt-6 inline-flex gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            placeholder="Your email"
            className="px-4 py-2 border border-neutral-200 rounded-full"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
