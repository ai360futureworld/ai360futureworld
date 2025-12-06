export const metadata = {
  title: "Privacy Policy — AI 360 FUTURE",
  description: "Privacy Policy for AI 360 FUTURE",
};

export default function PrivacyPolicy() {
  return (
    <section className="bg-white text-neutral-700 min-h-screen">
      {/* === Breadcrumb === */}
      <div className="bg-neutral-100 py-4 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-500 font-inter">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>{" "}
          /<span className="text-gray-700 ml-1">Privacy Policy</span>
        </div>
      </div>

      {/* === Header === */}
      <div className="max-w-3xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="font-inter text-gray-600 md:text-lg leading-relaxed">
          Learn how AI 360 FUTURE collects, uses, and protects your information.
        </p>
      </div>

      {/* === Content Section === */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-10">
          {/* Effective Date + Details */}
          <div className="text-neutral-600 font-inter space-y-2">
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

          {/* SECTIONS */}
          {[
            {
              title: "1. Introduction",
              content: (
                <>
                  <p>
                    At AI 360 FUTURE, we value your trust and respect your
                    privacy. This Privacy Policy explains how we collect, use,
                    and protect your personal information when you visit or use
                    our website.
                  </p>
                  <p>
                    By accessing our website, you agree to this policy and
                    consent to the collection and use of information as
                    described below.
                  </p>
                </>
              ),
            },
            {
              title: "2. Information We Collect",
              content: (
                <>
                  <p>
                    We collect limited information to provide better experience
                    and improve our content.
                  </p>
                  <p>This may include:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Basic usage data (pages visited, time on site, device
                      type)
                    </li>
                    <li>
                      Email address (only if voluntarily submitted via forms)
                    </li>
                    <li>Cookies for analytics and performance improvement</li>
                  </ul>
                  <p>
                    We do not collect sensitive personal details such as payment
                    data, passwords, or government IDs.
                  </p>
                </>
              ),
            },
            {
              title: "3. How We Use Your Information",
              content: (
                <>
                  <p>
                    Your data helps us improve user experience and deliver
                    relevant content.
                  </p>
                  <p>We use it to:</p>
                  <ul className="list-disc list-inside">
                    <li>Improve website design, structure, and content</li>
                    <li>Send occasional newsletters (only if you subscribe)</li>
                    <li>Analyze traffic trends for optimization</li>
                  </ul>
                  <p>
                    We never sell, rent, or trade your information to any third
                    party.
                  </p>
                </>
              ),
            },
            {
              title: "4. Cookies",
              content: (
                <>
                  <p>
                    AI 360 FUTURE uses cookies to understand visitor behavior
                    and improve performance.
                  </p>
                  <p>
                    You can choose to disable cookies in your browser settings.
                  </p>
                  <p>
                    Cookies do not collect personal data – they only help
                    analyze website usage anonymously.
                  </p>
                </>
              ),
            },
            {
              title: "5. Data Sharing",
              content: (
                <>
                  <p>
                    We may use trusted third-party tools such as Google
                    Analytics or email automation services.
                  </p>
                  <p>
                    These partners only receive anonymized data as per their own
                    privacy policies.
                  </p>
                  <p>No personal details are shared, sold, or misused.</p>
                </>
              ),
            },
            {
              title: "6. Data Security",
              content: (
                <>
                  <p>
                    We follow industry-standard security measures to safeguard
                    user data.
                  </p>
                  <p>
                    All website communications use HTTPS encryption to ensure
                    secure browsing.
                  </p>
                  <p>
                    However, no method of transmission over the Internet is 100%
                    secure. We continuously update our systems to minimize risk.
                  </p>
                </>
              ),
            },
            {
              title: "7. Children's Privacy",
              content: (
                <>
                  <p>AI 360 FUTURE is designed for users aged 13 and above.</p>
                  <p>We do not knowingly collect data from minors.</p>
                  <p>
                    If any child's data is inadvertently collected, it will be
                    deleted immediately upon request.
                  </p>
                </>
              ),
            },
            {
              title: "8. Links to Other Websites",
              content: (
                <>
                  <p>
                    Our platform may contain links to third-party websites
                    (e.g., affiliate tools or learning resources).
                  </p>
                  <p>
                    Once you leave our site, please review their privacy
                    policies, as we are not responsible for external practices.
                  </p>
                </>
              ),
            },
            {
              title: "9. Your Rights",
              content: (
                <>
                  <p>You have full control over your data. You may:</p>
                  <ul className="list-disc list-inside">
                    <li>Request access to your information</li>
                    <li>Ask for deletion of your data</li>
                    <li>Unsubscribe from emails at any time</li>
                  </ul>
                  <p>
                    To do so, simply contact us at:{" "}
                    <span className="text-blue-600 font-semibold">
                      info@ai360futureworld.com
                    </span>
                  </p>
                </>
              ),
            },
            {
              title: "10. Updates to This Policy",
              content: (
                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with a new "Effective
                  Date".
                </p>
              ),
            },
            {
              title: "Contact Information",
              content: (
                <>
                  <p>
                    For privacy-related questions or requests, please contact:
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
