// app/ai-tools/page.tsx
import dynamic from "next/dynamic";
import Script from "next/script";
import { featuredTools } from "../../data/manual-tools";
import type { Tool } from "../../data/manual-tools";
import { JSX } from "react";

const ToolsGridClient = dynamic(
  () => import("../../components/ToolsGridClient"),
  { ssr: false }
);

export const metadata = {
  title: "AI Tools Directory — AI 360 FUTURE",
  description:
    "Discover 1100+ AI tools. Featured tools, categories, affiliate links, and free tools directory.",
  keywords: ["AI tools", "AI directory", "AI software", "AI tools list"],
  alternates: { canonical: "https://www.ai360futureworld.com/ai-tools" },
};

const categories = Array.from(
  new Set(featuredTools.map((t) => t.category))
).slice(0, 12);

const faq: { q: string; a: string }[] = [
  {
    q: "What is the AI Tools Library?",
    a: "AI 360 Future's AI Tools Library is a curated collection of the most reliable and innovative AI tools designed to boost creativity, productivity, and automation across industries.",
  },
  {
    q: "How often are AI tools updated on the platform?",
    a: "New tools are added and existing ones are reviewed every week to ensure the library stays current with the latest trends and technologies.",
  },
  {
    q: "Can I use these tools for free?",
    a: "Many tools offer free plans or trials, while some have premium versions. You can explore all options directly from their official websites.",
  },
  {
    q: "Are these tools verified?",
    a: "Yes, every tool listed on AI 360 Future is verified for credibility, functionality, and user safety before being featured.",
  },
  {
    q: "How can I find a specific AI tool?",
    a: "Use the built-in search bar or category filters to quickly find tools by name, function, or industry use case.",
  },
  {
    q: "Do I need to sign up to explore the tools?",
    a: "No registration is required to browse the tools library. You can freely explore, search, and access any tool directly.",
  },
  {
    q: "Can I suggest a new AI tool to be added?",
    a: "Absolutely! You can suggest tools through the Submit a Tool form. Our team reviews every submission for quality before publishing.",
  },
  {
    q: "How are tools categorized?",
    a: "Each tool is grouped into clear categories such as Content Creation, Automation, Data, Business, and Development - making it simple to navigate.",
  },
  {
    q: "Can I compare multiple AI tools?",
    a: "Yes, you can view key details like purpose, pricing, and features side by side to help you make informed decisions.",
  },
  {
    q: "Is this platform safe to use?",
    a: "All external links and listed tools are reviewed for security and legitimacy before being published on AI 360 Future.",
  },
];

export default function AIToolsPage(): JSX.Element {
  const sampleSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI Tools Directory",
    itemListElement: featuredTools.slice(0, 10).map((t, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://www.ai360futureworld.com/tools/${t.slug}`,
      name: t.name,
    })),
  };

  return (
    <main className="min-h-screen bg-white text-neutral-700 font-inter">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            The Cutting Edge of AI — Tools Redefining the Future
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto mb-6">
            Explore 1100+ AI tools that simplify creation, automate workflows,
            and power global transformation.
          </p>

          <div className="max-w-2xl mx-auto flex gap-3">
            <a
              href="#featured"
              className="bg-white text-blue-600 px-5 py-3 rounded-lg font-semibold"
            >
              Featured
            </a>
            <a
              href="#categories"
              className="border border-white/30 px-5 py-3 rounded-lg text-white"
            >
              Categories
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-900">
            Featured AI Tools (Curated 70+)
          </h2>
          <p className="text-sm text-neutral-500">
            Verified picks — shown first
          </p>
        </div>

        {/* dynamic client grid */}
        <ToolsGridClient
          tools={featuredTools as Tool[]}
          initialCategories={categories}
          pageSize={12}
        />
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((c) => (
            <a
              key={c}
              href={`/tools/category/${encodeURIComponent(c.toLowerCase())}`}
              className="bg-white border rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition"
            >
              <div>
                <div className="text-sm text-neutral-500">Category</div>
                <div className="font-semibold text-gray-900">{c}</div>
              </div>
              <div className="text-blue-500 font-semibold">→</div>
            </a>
          ))}
        </div>
      </section>

      {/* AFFILIATE TOOLS - placeholder UI */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
          Top AI Tools Across the Web
        </h3>
        <p className="text-neutral-600 mb-6">
          Auto-imported affiliate tools — paginated (24 per page). Backend
          import will fill these cards.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {new Array(6).fill(null).map((_, i) => (
            <article
              key={i}
              className="bg-white border rounded-2xl p-6 shadow-sm"
            >
              <div className="h-12 w-12 bg-neutral-100 rounded-lg mb-4" />
              <h4 className="font-semibold text-lg mb-2">
                Tool name placeholder
              </h4>
              <p className="text-sm text-neutral-600">
                Affiliate tool description will appear here after import.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <a href="#" className="text-sm text-neutral-700">
                  Explore →
                </a>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg"
                >
                  Try Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FREE TOOLS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
          Free & Open Source AI Tools
        </h3>
        <p className="text-neutral-600 mb-6">
          Top tools fetched from public APIs and GitHub trending — indexed for
          SEO.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["OpenAI API List", "GitHub Trending", "ProductHunt AI"].map((t) => (
            <div key={t} className="bg-white border rounded-2xl p-6">
              <h4 className="font-semibold">{t}</h4>
              <p className="text-sm text-neutral-600 mt-2">
                Auto-synced via public API. Replace with dynamic import data.
              </p>
              <a
                href={`/tools/${t.toLowerCase().replace(/\s+/g, "-")}`}
                className="mt-4 inline-block text-blue-500"
              >
                View →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-montserrat font-bold mb-6">
          Frequently Asked Questions
        </h3>
        <div className="space-y-3">
          {faq.map((f, idx) => (
            <details key={idx} className="bg-white border rounded-2xl p-4">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <p className="mt-3 text-neutral-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-neutral-100 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-xl font-semibold mb-2">
            Stay Updated on New AI Tools Weekly
          </h4>
          <p className="text-neutral-600 mb-4">
            Subscribe to our newsletter — we share top tool picks and tutorials.
          </p>

          <form
            action="#"
            method="post"
            className="max-w-md mx-auto flex gap-3"
          >
            <input
              name="email"
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <section className="bg-white border-t mt-8">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h5 className="font-semibold text-lg">AI 360 FUTURE</h5>
              <p className="text-sm text-neutral-500">
                Explore, compare, and use AI tools responsibly.
              </p>
            </div>

            <nav className="flex gap-4">
              <a href="/" className="text-sm text-neutral-700">
                Home
              </a>
              <a href="/courses" className="text-sm text-neutral-700">
                Courses
              </a>
              <a href="/jobs" className="text-sm text-neutral-700">
                Jobs
              </a>
              <a href="/contact" className="text-sm text-neutral-700">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* JSON-LD schema */}
      <Script
        id="tools-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sampleSchema),
        }}
      />
    </main>
  );
}
