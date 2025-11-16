import Link from "next/link";

export const metadata = {
  title: "AI for Beginners — AI 360 FUTURE",
  description:
    "Beginner's guide to Artificial Intelligence — What is AI, how it works, examples and tools for students.",
};

export default function AIBeginnersPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-800">
      {/* Small floating animation keyframes */}
      <style>{`
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .floaty { animation: floaty 6s ease-in-out infinite; }
      `}</style>

      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="relative overflow-hidden py-20 md:py-28"
        aria-label="AI for Beginners hero"
      >
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(59,130,246,0.95) 0%, rgba(37,99,235,0.95) 100%)",
          }}
        />

        {/* subtle decorative floating circles */}
        <div
          className="absolute -left-8 -top-8 w-40 h-40 rounded-full bg-white/5 blur-3xl floaty"
          style={{ mixBlendMode: "overlay" }}
        />
        <div
          className="absolute right-8 top-20 w-28 h-28 rounded-full bg-white/6 blur-2xl floaty"
          style={{ animationDelay: "1.2s" }}
        />

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h1
              className="font-montserrat font-extrabold text-4xl md:text-6xl leading-tight"
              style={{ color: "white" }}
            >
              AI for Beginners
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-relaxed font-inter text-white/90">
              Step confidently into the world of Artificial Intelligence. This
              beginner's guide is designed to help you understand how AI really
              works, what it can do, and how you can use it in your daily life —
              whether you're a student, creator, or professional.
              <br />
              <strong>No technical background required</strong> — just curiosity
              and a desire to learn.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#what-is-ai"
                className="inline-block bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition"
              >
                Start Learning AI
              </a>

              <a
                href="#ai-for-students"
                className="inline-block border border-white/30 text-white/95 px-5 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Students → Learn Smarter
              </a>
            </div>
          </div>

          {/* illustration placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm">
              <img
                src="/images/ai-robot-hero.png"
                alt="Friendly robot illustration"
                className="w-full h-auto drop-shadow-lg"
              />
              {/* if image not available, fallback block */}
              <noscript>
                <div className="w-full h-48 bg-white/5 rounded-lg" />
              </noscript>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS AI ===== */}
      <section id="what-is-ai" className="pt-12 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-blue-500 mb-4">
              What Exactly is Artificial Intelligence?
            </h2>

            <p className="text-neutral-700 leading-relaxed">
              Artificial Intelligence (AI) is the ability of a computer system
              to perform tasks that usually require human intelligence — such as
              understanding language, recognizing objects, solving problems, and
              making decisions. At its core, AI is a combination of computer
              science, data, and algorithms designed to make machines "think"
              and "learn" like humans — but at a much faster and more efficient
              scale.
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              AI doesn't just follow fixed commands. It analyzes, understands,
              and adapts based on the data it receives. Every time you use your
              phone's voice assistant, Google Maps, or Netflix recommendations —
              you're already using AI in action.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TYPES OF AI ===== */}
      <section id="types-of-ai" className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-blue-500">
              Types of Artificial Intelligence
            </h2>

            <p className="text-neutral-700">
              AI isn't a single thing — it has different levels of intelligence
              and capability. Based on functionality and capability, AI is
              usually divided into four main types:
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <article className="p-4 border border-neutral-100 rounded-lg">
                <h3 className="font-semibold text-lg">Reactive Machines</h3>
                <p className="text-sm text-neutral-600 mt-2">
                  The most basic form of AI — these systems don't store past
                  experiences or memories. They simply react to present data.
                  Example: IBM's Deep Blue chess program.
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  Use: Games, basic automation
                </p>
              </article>

              <article className="p-4 border border-neutral-100 rounded-lg">
                <h3 className="font-semibold text-lg">Limited Memory</h3>
                <p className="text-sm text-neutral-600 mt-2">
                  This is the AI we mostly use today. It can learn from past
                  data and make better decisions over time — like short-term
                  memory. Example: Self-driving cars.
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  Use: Autonomous vehicles, chatbots
                </p>
              </article>

              <article className="p-4 border border-neutral-100 rounded-lg">
                <h3 className="font-semibold text-lg">Theory of Mind</h3>
                <p className="text-sm text-neutral-600 mt-2">
                  Advanced, still under research. Machines would understand
                  human emotions, beliefs, and intentions — enabling
                  emotionally-aware systems.
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  Use: Emotional-support bots (future)
                </p>
              </article>

              <article className="p-4 border border-neutral-100 rounded-lg">
                <h3 className="font-semibold text-lg">Self-Aware AI</h3>
                <p className="text-sm text-neutral-600 mt-2">
                  Theoretical stage — a machine with consciousness and
                  self-awareness. Not yet achieved.
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  Use: Future concept
                </p>
              </article>
            </div>

            {/* summary table */}
            <div className="mt-6 overflow-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-2 px-3 text-sm font-semibold text-neutral-600">
                      Type
                    </th>
                    <th className="py-2 px-3 text-sm font-semibold text-neutral-600">
                      Key Ability
                    </th>
                    <th className="py-2 px-3 text-sm font-semibold text-neutral-600">
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2 px-3 text-sm">Reactive Machines</td>
                    <td className="py-2 px-3 text-sm">
                      Only react to current input
                    </td>
                    <td className="py-2 px-3 text-sm">Deep Blue (Chess)</td>
                  </tr>
                  <tr className="border-t bg-white">
                    <td className="py-2 px-3 text-sm">Limited Memory</td>
                    <td className="py-2 px-3 text-sm">
                      Learn from recent data
                    </td>
                    <td className="py-2 px-3 text-sm">Self-driving cars</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-3 text-sm">Theory of Mind</td>
                    <td className="py-2 px-3 text-sm">
                      Understand emotions & intentions
                    </td>
                    <td className="py-2 px-3 text-sm">Under research</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 px-3 text-sm">Self-Aware</td>
                    <td className="py-2 px-3 text-sm">
                      Conscious, self-thinking
                    </td>
                    <td className="py-2 px-3 text-sm">Future concept</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW AI WORKS ===== */}
      <section id="how-ai-works" className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-blue-500 mb-4">
              How Artificial Intelligence Works (Explained Simply)
            </h2>

            <p className="text-neutral-700">
              Artificial Intelligence works in a few key steps:
            </p>

            <ol className="list-decimal list-inside mt-4 text-neutral-700 space-y-3">
              <li>
                <strong>Input:</strong> AI collects data — images, text, voice,
                and numbers.
              </li>
              <li>
                <strong>Processing:</strong> Algorithms find patterns and
                relationships.
              </li>
              <li>
                <strong>Learning:</strong> AI improves over time via Machine
                Learning (ML).
              </li>
              <li>
                <strong>Decision Making:</strong> Trained AI makes predictions
                or decisions.
              </li>
              <li>
                <strong>Feedback:</strong> Results are evaluated and used to
                improve the model.
              </li>
            </ol>

            <h3 className="mt-6 font-semibold text-neutral-800">
              Real-World Examples
            </h3>
            <ul className="list-disc list-inside mt-3 text-neutral-700 space-y-2">
              <li>Voice Assistants: Siri, Alexa, Google Assistant.</li>
              <li>Streaming Recommendations: Netflix, YouTube.</li>
              <li>
                Chatbots & AI Tools: ChatGPT and similar conversational systems.
              </li>
              <li>Self-Driving Cars: Real-time sensor-based decisions.</li>
              <li>
                Finance & Trading Bots: Fast data-driven trading decisions.
              </li>
              <li>Healthcare AI: Assist doctors, detect disease earlier.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== WHY AI MATTERS ===== */}
      <section id="why-ai-matters" className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-blue-500 mb-4">
              Why Artificial Intelligence Matters — and How AI is Transforming
              the Way We Live and Work
            </h2>

            <p className="text-neutral-700 leading-relaxed">
              AI isn't just technology — it's transforming how we live, work,
              and think. From face unlock on phones to medical diagnostics, AI
              quietly revolutionizes every industry. It helps humans make faster
              decisions, handle complex problems, and unlock creativity.
            </p>

            <p className="mt-4 text-neutral-700">
              AI doesn't replace people — it empowers them. The real power of AI
              is in augmenting human potential.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 10 KEY HIGHLIGHTS ===== */}
      <section id="key-highlights" className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-blue-500">
              10 Key Highlights — What Makes Artificial Intelligence Powerful
            </h2>

            <ol className="list-decimal list-inside space-y-3 text-neutral-700 mt-4">
              <li>
                <strong>AI Learns from Data:</strong> Machine learning from
                examples.
              </li>
              <li>
                <strong>AI Recognizes Patterns:</strong> Detects trends humans
                may miss.
              </li>
              <li>
                <strong>AI Understands Language:</strong> Natural Language
                Processing (NLP).
              </li>
              <li>
                <strong>AI Makes Smart Decisions:</strong> Predicts and acts
                automatically.
              </li>
              <li>
                <strong>AI Adapts:</strong> Improves over time with more data.
              </li>
              <li>
                <strong>AI Automates Repetitive Work:</strong> Frees humans for
                creativity.
              </li>
              <li>
                <strong>AI Enhances Creativity:</strong> Tools that co-create
                with humans.
              </li>
              <li>
                <strong>AI Powers Smart Devices:</strong> IoT & smart home
                experiences.
              </li>
              <li>
                <strong>AI Supports Business Decisions:</strong> Data-driven
                insights.
              </li>
              <li>
                <strong>AI Transforms Industries:</strong> Healthcare, finance,
                education, agriculture, and more.
              </li>
            </ol>

            <p className="mt-4 text-neutral-700 italic">
              This is why AI is called the "electricity of the future" — it
              powers everything.
            </p>

            <p className="mt-6 text-lg font-semibold text-neutral-800">
              &ldquo;Artificial Intelligence isn't just about machines — it's
              about humans using smart technology to make life better, faster,
              and more meaningful.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ===== AI IN EVERYDAY LIFE ===== */}
      <section id="ai-everyday" className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-blue-500 mb-4">
              How AI Impacts Everyday Life
            </h2>

            <ul className="grid md:grid-cols-2 gap-4 text-neutral-700">
              <li>
                <strong>Education:</strong> Personalized learning at each
                student's pace.
              </li>
              <li>
                <strong>Healthcare:</strong> Early detection, faster
                diagnostics.
              </li>
              <li>
                <strong>Business & Marketing:</strong> Predict consumer behavior
                and automate marketing.
              </li>
              <li>
                <strong>Finance:</strong> Fraud detection, credit scoring,
                trading bots.
              </li>
              <li>
                <strong>Entertainment:</strong> Recommendations on Netflix,
                Spotify, YouTube.
              </li>
              <li>
                <strong>Transportation:</strong> Traffic prediction &
                self-driving systems.
              </li>
              <li>
                <strong>Smart Homes:</strong> Automated energy & comfort
                management.
              </li>
              <li>
                <strong>Climate:</strong> Weather prediction and environmental
                protection tools.
              </li>
            </ul>

            <p className="mt-4 text-neutral-700">
              <strong>Why learning AI now is smart:</strong> AI skills are in
              huge demand; those who understand AI will lead the future.
            </p>

            <p className="mt-4 font-semibold text-blue-500">
              ― Those who understand AI will lead the future.
            </p>

            <p className="mt-6 text-center text-neutral-700 font-semibold">
              <em>
                &quot;Artificial Intelligence is not the future - it's the
                present shaping our tomorrow.&quot;
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* ===== AI FOR STUDENTS ===== */}
      <section id="ai-for-students" className="py-12 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-6">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-blue-500">
              AI for Students: Learn Smarter, Not Harder
            </h2>

            <p className="text-neutral-700">
              Artificial Intelligence is changing how students study, create,
              and build their future. This section helps learners understand how
              AI can become a powerful study partner.
            </p>

            <h3 className="font-semibold text-neutral-800 mt-4">
              How AI Helps Students
            </h3>
            <p className="text-neutral-700">
              AI removes repetitive work so you can focus on learning and
              creativity.
            </p>

            <ol className="list-decimal list-inside mt-3 space-y-2 text-neutral-700">
              <li>
                <strong>Smarter Research:</strong> Find accurate summaries fast.
              </li>
              <li>
                <strong>Instant Notes & Summaries:</strong> Upload lectures or
                PDFs to get concise notes.
              </li>
              <li>
                <strong>Brainstorming Partner:</strong> Generate ideas for
                assignments and projects.
              </li>
              <li>
                <strong>Language & Grammar Help:</strong> Improve writing and
                clarity.
              </li>
              <li>
                <strong>Presentation Builder:</strong> Turn text into visual
                slides.
              </li>
              <li>
                <strong>Career Exploration:</strong> Get AI-based career
                guidance.
              </li>
              <li>
                <strong>Coding Assistance:</strong> Tools like Copilot help
                learn by example.
              </li>
              <li>
                <strong>Exam Prep:</strong> AI quizzes and flashcards for
                interactive practice.
              </li>
              <li>
                <strong>Time Management:</strong> Schedule sessions and set
                reminders.
              </li>
              <li>
                <strong>Scholarships & Opportunities:</strong> AI recommends
                relevant programs.
              </li>
            </ol>

            <h3 className="mt-4 font-semibold text-neutral-800">
              Top AI Tools for Students
            </h3>
            <ul className="list-disc list-inside mt-3 text-neutral-700 space-y-1">
              <li>Notion AI</li>
              <li>ChatGPT</li>
              <li>Mem.ai</li>
              <li>Evernote AI</li>
              <li>Tana</li>
              <li>Otter.ai</li>
              <li>Upword AI</li>
              <li>Reflect Notes</li>
              <li>Gamma App</li>
              <li>Aomni (Aithor.ai)</li>
            </ul>

            <h3 className="mt-4 font-semibold text-neutral-800">
              Research & Writing Assistance
            </h3>
            <p className="text-neutral-700">
              Use AI for brainstorming, outlining essays, and polishing your own
              voice.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-4 text-neutral-700">
              <div>
                <h4 className="font-semibold">
                  Tools for Research & Idea Generation
                </h4>
                <ul className="list-disc list-inside mt-2">
                  <li>ChatGPT</li>
                  <li>Perplexity AI</li>
                  <li>Elicit.org</li>
                  <li>Consensus</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Tools for Writing & Drafting</h4>
                <ul className="list-disc list-inside mt-2">
                  <li>GrammarlyGO</li>
                  <li>Jasper AI</li>
                  <li>Writesonic</li>
                  <li>Rytr</li>
                </ul>
              </div>
            </div>

            <h3 className="mt-4 font-semibold text-neutral-800">
              Creative Projects & Presentations
            </h3>
            <p className="text-neutral-700">
              Tools like Canva Magic Studio, Adobe Express, Gamma App and others
              help create visuals fast.
            </p>

            <h3 className="mt-4 font-semibold text-neutral-800">
              Exam Prep & Practice
            </h3>
            <p className="text-neutral-700">
              Quizgecko, Questgen AI, ClassPoint AI, and Formative AI help build
              quizzes and study aids.
            </p>

            <div className="mt-6">
              <a
                href="/tools?category=students"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Explore AI Tools for Students →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER CTA SECTION ===== */}
      <section className="bg-neutral-50 border-t mt-8">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p className="text-neutral-700 mb-4">
            Ready to learn more? Start with the tools and practice exercises on
            our AI Tools page.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/tools"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-md font-semibold"
            >
              AI Tools
            </a>

            <a
              href="/courses"
              className="border border-neutral-300 px-5 py-3 rounded-md text-neutral-700 hover:bg-neutral-100"
            >
              Courses
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
