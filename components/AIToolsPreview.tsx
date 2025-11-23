"use client";

export default function AIToolsPreview() {
  const tools = [
    {
      name: "ChatGPT",
      category: "Chatbot / NLP",
      pricing: "Free / Paid",
      rating: 4.9,
      source: "OpenAI",
      url: "https://openai.com",
    },
    {
      name: "Midjourney",
      category: "Image Generation",
      pricing: "Paid",
      rating: 4.8,
      source: "Midjourney",
      url: "https://midjourney.com",
    },
    {
      name: "Notion AI",
      category: "Productivity",
      pricing: "Paid",
      rating: 4.7,
      source: "Notion",
      url: "https://notion.so",
    },
    {
      name: "Claude",
      category: "Chatbot",
      pricing: "Free / Paid",
      rating: 4.8,
      source: "Anthropic",
      url: "https://anthropic.com",
    },
    {
      name: "Runway Gen-2",
      category: "Video AI",
      pricing: "Paid",
      rating: 4.6,
      source: "Runway",
      url: "https://runwayml.com",
    },
    {
      name: "Gamma AI",
      category: "Presentation",
      pricing: "Free / Paid",
      rating: 4.7,
      source: "Gamma",
      url: "https://gamma.app",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white border-t border-neutral-200 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-neutral-900">
          Explore 2,500+ AI Tools Transforming Every Industry Worldwide
        </h2>

        <p className="mt-4 text-base md:text-lg text-gray-600 font-inter">
          Discover tools powering the next digital era across business,
          marketing, coding & automation.
        </p>
      </div>

      {/* Table */}
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="w-full border border-neutral-200 rounded-xl shadow-sm">
          <thead className="bg-neutral-100 border-b border-neutral-200">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-neutral-700">
                Tool
              </th>
              <th className="py-3 px-4 text-left font-semibold text-neutral-700">
                Category
              </th>
              <th className="py-3 px-4 text-left font-semibold text-neutral-700">
                Pricing
              </th>
              <th className="py-3 px-4 text-left font-semibold text-neutral-700">
                Rating
              </th>
              <th className="py-3 px-4 text-left font-semibold text-neutral-700">
                Source
              </th>
              <th className="py-3 px-4 text-left font-semibold text-neutral-700">
                View
              </th>
            </tr>
          </thead>

          <tbody>
            {tools.map((tool, idx) => (
              <tr
                key={idx}
                className="border-b border-neutral-200 hover:bg-blue-50 transition"
              >
                <td className="py-3 px-4 font-semibold text-neutral-900">
                  {tool.name}
                </td>
                <td className="py-3 px-4 text-neutral-700">{tool.category}</td>
                <td className="py-3 px-4 text-neutral-700">{tool.pricing}</td>
                <td className="py-3 px-4 text-neutral-700">⭐ {tool.rating}</td>
                <td className="py-3 px-4 text-neutral-700">{tool.source}</td>
                <td className="py-3 px-4">
                  <a
                    href={tool.url}
                    target="_blank"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <p className="mt-10 text-center text-neutral-500 text-sm font-inter">
        Updated daily via Udemy • Coursera • edX • LinkedIn Learning
      </p>
    </section>
  );
}
