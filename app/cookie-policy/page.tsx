export const metadata = {
  title: "Cookie Policy — AI 360 FUTURE",
  description: "Cookie Policy for AI 360 FUTURE",
};

export default function CookiePolicy() {
  return (
    <section className="bg-white text-neutral-700 min-h-screen">
      {/* === Breadcrumb === */}
      <div className="bg-neutral-100 py-4 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-500 font-inter">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>{" "}
          /<span className="text-gray-700 ml-1">Cookie Policy</span>
        </div>
      </div>

      {/* === Header === */}
      <div className="max-w-3xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
          Cookie Policy
        </h1>
        <p className="font-inter text-gray-600 md:text-lg leading-relaxed">
          Learn how AI 360 FUTURE uses cookies to improve performance and user
          experience.
        </p>
      </div>

      {/* === Content Section === */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-10">
          {/* Basic Info */}
          <div className="text-neutral-600 font-inter space-y-2">
            <p>
              <strong>Cookie Policy — AI 360 FUTURE</strong>
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
                    This Cookie Policy explains how AI 360 FUTURE uses cookies
                    and similar technologies to enhance user experience, analyze
                    traffic, and improve overall performance.
                  </p>
                  <p>
                    By using our website, you consent to the use of cookies as
                    described here.
                  </p>
                </>
              ),
            },

            {
              title: "2. What Are Cookies?",
              content: (
                <>
                  <p>
                    Cookies are small text files stored on your device when you
                    visit a website. They help recognize your preferences and
                    allow us to provide a faster, customized experience.
                  </p>
                </>
              ),
            },

            {
              title: "3. Types of Cookies We Use",
              content: (
                <>
                  <h3 className="font-semibold text-neutral-800">
                    Essential Cookies
                  </h3>
                  <p>
                    Required for the website to function properly (e.g., loading
                    pages, saving preferences).
                  </p>

                  <h3 className="font-semibold text-neutral-800 mt-4">
                    Analytics & Performance Cookies
                  </h3>
                  <p>
                    Used to measure site traffic, popular pages, and visitor
                    behavior — helping us enhance website quality.
                  </p>

                  <h3 className="font-semibold text-neutral-800 mt-4">
                    Preference Cookies
                  </h3>
                  <p>
                    Remember your language, region, or theme preferences to make
                    your visit smoother.
                  </p>

                  <h3 className="font-semibold text-neutral-800 mt-4">
                    Third-Party Cookies
                  </h3>
                  <p>
                    Some sections of our site may embed content or links from
                    external services (e.g., videos, analytics tools, or partner
                    websites).
                  </p>
                  <p>
                    These services may use their own cookies according to their
                    respective policies.
                  </p>
                </>
              ),
            },

            {
              title: "4. Managing Cookies",
              content: (
                <>
                  <p>
                    You can manage or delete cookies from your browser settings
                    anytime.
                  </p>
                  <p>Most browsers let you:</p>
                  <ul className="list-disc list-inside">
                    <li>Accept or block all cookies</li>
                    <li>Delete existing cookies</li>
                    <li>
                      Receive alerts when a website attempts to use cookies
                    </li>
                  </ul>
                  <p>
                    Note: Some site features may not work correctly if cookies
                    are disabled.
                  </p>
                </>
              ),
            },

            {
              title: "5. Third-Party Services",
              content: (
                <>
                  <p>
                    We may use trusted third-party tools for analytics, email
                    subscriptions, or user engagement.
                  </p>
                  <p>
                    These services use cookies only for functional and
                    analytical purposes — never to collect personal data without
                    consent.
                  </p>
                </>
              ),
            },

            {
              title: "6. Your Consent",
              content: (
                <>
                  <p>
                    By continuing to use AI 360 FUTURE, you agree to our cookie
                    usage policy.
                  </p>
                  <p>
                    If you do not wish to accept cookies, please adjust your
                    browser settings or stop using the website.
                  </p>
                </>
              ),
            },

            {
              title: "7. Policy Updates",
              content: (
                <>
                  <p>
                    We may revise this Cookie Policy occasionally to align with
                    new technologies or legal requirements.
                  </p>
                  <p>
                    Updated versions will always be posted on this page with the
                    latest "Effective Date."
                  </p>
                </>
              ),
            },

            {
              title: "Contact Information",
              content: (
                <>
                  <p>
                    For any questions about this Cookie Policy, please contact:
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
          ].map((section, idx) => (
            <div key={idx} className="font-inter">
              <h2 className="text-2xl font-semibold text-blue-600 font-montserrat mb-3">
                {section.title}
              </h2>
              <div className="space-y-3 text-neutral-700">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
