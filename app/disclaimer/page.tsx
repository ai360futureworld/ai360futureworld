export const metadata = {
  title: "Disclaimer — AI 360 FUTURE",
  description: "Disclaimer for AI 360 FUTURE",
};

export default function Disclaimer() {
  return (
    <section className="bg-white text-neutral-700 min-h-screen">
      {/* === Breadcrumb === */}
      <div className="bg-neutral-100 py-4 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-500 font-inter">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>{" "}
          /<span className="text-gray-700 ml-1">Disclaimer</span>
        </div>
      </div>

      {/* === Header === */}
      <div className="max-w-3xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
          Disclaimer
        </h1>
        <p className="font-inter text-gray-600 md:text-lg leading-relaxed">
          Important limitations and disclaimers regarding the information shared
          on AI 360 FUTURE.
        </p>
      </div>

      {/* === Main Content === */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-10">
          {/* Basic Info */}
          <div className="text-neutral-600 font-inter space-y-2">
            <p>
              <strong>Disclaimer — AI 360 FUTURE</strong>
            </p>
            <p>
              <strong>Effective Date:</strong> January 2025
            </p>
            <p>
              <strong>Operated by:</strong> AI 360 FUTURE (Proprietorship,
              Registered in India)
            </p>
            <p>
              <strong>Official Website:</strong> www.ai360futureworld.com
            </p>
          </div>

          {/* Sections */}
          {[
            {
              title: "1. Introduction",
              content: (
                <>
                  <p>
                    The information provided on AI 360 FUTURE is for educational
                    and informational purposes only.
                  </p>
                  <p>
                    While we strive to ensure accuracy, we do not guarantee that
                    all data, third-party links, or external information are
                    always current or error-free.
                  </p>
                  <p>
                    By using our website, you agree that AI 360 FUTURE will not
                    be held liable for any decisions, actions, or outcomes
                    resulting from the use of our content or resources.
                  </p>
                </>
              ),
            },

            {
              title: "2. No Financial, Legal, or Professional Advice",
              content: (
                <>
                  <p>
                    All content available on this website — including AI tools,
                    tutorials, courses, and market insights — is intended solely
                    for informational use.
                  </p>
                  <p>We do not provide:</p>
                  <ul className="list-disc list-inside">
                    <li>Financial or investment advice</li>
                    <li>Legal or tax guidance</li>
                    <li>Professional consulting services</li>
                  </ul>
                  <p>
                    Users are advised to “Do Your Own Research (DYOR)” and seek
                    advice from qualified professionals before making any
                    financial or business decisions.
                  </p>
                </>
              ),
            },

            {
              title: "3. Third-Party Tools & Links",
              content: (
                <>
                  <p>
                    AI 360 FUTURE often lists or reviews external tools,
                    software, jobs and courses. However, we:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Do not own or control these third-party platforms.</li>
                    <li>
                      Are not responsible for their accuracy, updates, or
                      performance.
                    </li>
                    <li>
                      Do not guarantee results, uptime, or user satisfaction for
                      any external service.
                    </li>
                  </ul>
                  <p>
                    By using affiliate or external links, users understand that
                    all interactions, payments, and refunds are handled directly
                    by those third-party companies.
                  </p>
                </>
              ),
            },

            {
              title: "4. No Guarantee of Results",
              content: (
                <>
                  <p>
                    While AI 360 FUTURE provides resources, guides, and
                    templates to assist users, we do not guarantee specific
                    results, performance improvements, or outcomes.
                  </p>
                  <p>
                    AI performance and outputs vary depending on each user's
                    input, data, and usage context.
                  </p>
                </>
              ),
            },

            {
              title: "5. Limitation of Liability",
              content: (
                <>
                  <p>
                    AI 360 FUTURE and its team shall not be held liable for any
                    direct, indirect, incidental, or consequential damages
                    arising from:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Use or misuse of any tool, prompt, or information on the
                      website
                    </li>
                    <li>Technical issues, downtime, or data loss</li>
                    <li>
                      Reliance on third-party products or external websites
                      linked from AI 360 FUTURE
                    </li>
                  </ul>
                  <p>
                    Users access and use all site resources at their own risk.
                  </p>
                </>
              ),
            },

            {
              title: "6. Continuous Updates",
              content: (
                <>
                  <p>AI technology evolves rapidly.</p>
                  <p>
                    We regularly review and update our website to maintain
                    accuracy and relevance.
                  </p>
                  <p>
                    However, we make no promise of real-time accuracy or
                    uninterrupted availability.
                  </p>
                </>
              ),
            },

            {
              title: "7. Related Legal Policies",
              content: (
                <>
                  <p>
                    This Disclaimer should be read alongside the following legal
                    documents:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Privacy Policy — How user data is handled.</li>
                    <li>
                      Terms of Service — Conditions for using our platform.
                    </li>
                    <li>
                      Affiliate Disclosure — Details on partnerships and
                      affiliate links.
                    </li>
                    <li>
                      Refund & Cancellation Policy — Refund responsibilities for
                      users and third parties.
                    </li>
                  </ul>
                  <p>
                    Together, these policies form the complete legal framework
                    governing the use of AI 360 FUTURE.
                  </p>
                </>
              ),
            },

            {
              title: "Contact Information",
              content: (
                <>
                  <p>
                    For questions about this Disclaimer or related policies,
                    please contact:
                  </p>
                  <p>
                    AI 360 FUTURE
                    <br />
                    Proprietorship Registered in India
                    <br />
                    Email: info@ai360futureworld.com
                    <br />
                    Website: www.ai360futureworld.com
                  </p>
                  <p>
                    ©2025 AI 360 FUTURE — All Rights Reserved. All operations
                    are managed independently under Indian business and data
                    protection laws.
                  </p>
                </>
              ),
            },
          ].map((item, idx) => (
            <div key={idx} className="font-inter">
              <h2 className="text-2xl font-semibold text-blue-600 font-montserrat mb-3">
                {item.title}
              </h2>
              <div className="space-y-3 text-neutral-700">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
