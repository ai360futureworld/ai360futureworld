// app/ai-for-students/page.jsx
import Link from "next/link";

export const metadata = {
  title: "AI Tools for Students | Study Smarter with AI 360 FUTURE",
  description:
    "Explore the best AI-powered tools for students: research, writing, projects, presentations, and exam preparation. Learn smarter with AI 360 FUTURE.",
  keywords:
    "AI for students, AI study tools, AI note maker, AI exam prep, AI learning assistants",
  alternates: {
    canonical: "https://www.ai360futureworld.com/ai-for-students",
  },
};

export default function StudentsPage() {
  return (
    <main className="bg-white text-neutral-700 font-inter">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
            AI for Students: Learn Smarter with Artificial Intelligence
          </h1>
          <p className="md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6">
            Discover how AI can help you study faster, write better, brainstorm
            ideas, and prepare for exams — all using smart, student-friendly
            tools.
          </p>
          <a
            href="#main-content"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Discover Tools
          </a>
        </div>
      </section>

      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <div
        id="main-content"
        className="max-w-6xl mx-auto py-16 px-6 space-y-20"
      >
        {/* ================= SECTION 1: Note-Making Tools ================= */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-4">
              AI-Powered Note Making
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Turn your lectures, PDFs, and study material into clean and
              structured notes instantly. Save hours every week with powerful AI
              summarization.
            </p>

            <ul className="space-y-3 text-neutral-700">
              <li>• Create summaries from long lectures</li>
              <li>• Organize notes automatically</li>
              <li>• Convert PDFs into readable bullets</li>
            </ul>

            <div className="mt-6 space-y-3">
              {[
                { name: "Notion AI", url: "/go/notion-ai" },
                { name: "ChatGPT", url: "/go/chatgpt" },
                { name: "Mem AI", url: "/go/mem-ai" },
              ].map((t, i) => (
                <a
                  key={i}
                  href={t.url}
                  className="flex items-center justify-between border p-3 rounded-xl hover:border-blue-500 transition"
                >
                  <span>{t.name}</span>
                  <span className="text-blue-500 font-semibold">Try →</span>
                </a>
              ))}
            </div>
          </div>

          <img
            src="https://logo.clearbit.com/notion.so"
            alt="AI note-making app interface"
            className="w-full rounded-2xl shadow"
          />
        </section>

        {/* ================= SECTION 2: Research & Writing ================= */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://logo.clearbit.com/perplexity.ai"
            alt="AI research and writing tool"
            className="w-full rounded-2xl shadow"
          />

          <div>
            <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-4">
              AI for Research & Writing
            </h2>
            <p className="text-neutral-600 mb-4">
              Generate ideas, outline essays, and write high-quality academic
              content using verified AI tools.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { name: "Perplexity AI", url: "/go/perplexity-ai" },
                { name: "Elicit Research AI", url: "/go/elicit" },
                { name: "GrammarlyGO", url: "/go/grammarly" },
              ].map((t, i) => (
                <a
                  key={i}
                  href={t.url}
                  className="flex items-center justify-between border p-3 rounded-xl hover:border-blue-500 transition"
                >
                  <span>{t.name}</span>
                  <span className="text-blue-500 font-semibold">Try →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: Design & Presentations ================= */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-4">
              Creative Projects & Presentations
            </h2>
            <p className="text-neutral-600 mb-4">
              Build stunning posters, project covers, and presentations
              effortlessly using AI design tools.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { name: "Canva Magic Studio", url: "/go/canva" },
                { name: "Gamma App", url: "/go/gamma" },
                { name: "Leonardo AI", url: "/go/leonardo" },
              ].map((t, i) => (
                <a
                  key={i}
                  href={t.url}
                  className="flex items-center justify-between border p-3 rounded-xl hover:border-blue-500 transition"
                >
                  <span>{t.name}</span>
                  <span className="text-blue-500 font-semibold">Try →</span>
                </a>
              ))}
            </div>
          </div>

          <img
            src="https://logo.clearbit.com/canva.com"
            alt="AI design tool for students"
            className="w-full rounded-2xl shadow"
          />
        </section>

        {/* ================= SECTION 4: Exam Preparation ================= */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://logo.clearbit.com/quizgecko.com"
            alt="AI quiz app for exam practice"
            className="w-full rounded-2xl shadow"
          />

          <div>
            <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-4">
              Smarter Exam Preparation
            </h2>
            <p className="text-neutral-600 mb-4">
              Prepare for exams with automated quizzes, flashcards, and
              interactive AI tutors.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { name: "Quizgecko", url: "/go/quizgecko" },
                { name: "Quizlet AI", url: "/go/quizlet" },
                { name: "StudySmarter", url: "/go/studysmarter" },
              ].map((t, i) => (
                <a
                  key={i}
                  href={t.url}
                  className="flex items-center justify-between border p-3 rounded-xl hover:border-blue-500 transition"
                >
                  <span>{t.name}</span>
                  <span className="text-blue-500 font-semibold">Try →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: AI for Productivity ================= */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-4">
              AI for Productivity & Time Management
            </h2>
            <p className="text-neutral-600 mb-4">
              AI tools help students stay organized, track deadlines, and manage
              study schedules effortlessly.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { name: "Motion AI Planner", url: "/go/motion" },
                { name: "Notion Task AI", url: "/go/notion-ai" },
                { name: "Todoist AI", url: "/go/todoist" },
              ].map((t, i) => (
                <a
                  key={i}
                  href={t.url}
                  className="flex items-center justify-between border p-3 rounded-xl hover:border-blue-500 transition"
                >
                  <span>{t.name}</span>
                  <span className="text-blue-500 font-semibold">Try →</span>
                </a>
              ))}
            </div>
          </div>

          <img
            src="https://logo.clearbit.com/todoist.com"
            alt="AI time management for students"
            className="w-full rounded-2xl shadow"
          />
        </section>
      </div>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-neutral-100 py-16 px-6 text-center">
        <h3 className="text-2xl font-bold text-gray-800 font-montserrat mb-3">
          Subscribe for New AI Tools & Study Tips
        </h3>
        <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
          Get weekly updates on AI tools, student resources, and productivity
          hacks.
        </p>

        <form
          action="#"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-neutral-300 px-4 py-3 rounded-lg"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
            Subscribe
          </button>
        </form>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="bg-neutral-50 border-t mt-8">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p className="text-neutral-700 mb-4">
            Continue your AI learning journey with our full Tools & Courses
            directory.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/tools"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-md font-semibold"
            >
              AI Tools
            </Link>
            <Link
              href="/courses"
              className="border border-neutral-300 px-5 py-3 rounded-md text-neutral-700 hover:bg-neutral-100"
            >
              Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
