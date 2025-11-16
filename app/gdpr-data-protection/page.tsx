export const metadata = {
  title: "GDPR & Data Protection Notice — AI 360 FUTURE",
  description: "GDPR and Data Protection Notice for AI 360 FUTURE",
};

export default function GDPRNotice() {
  return (
    <section className="bg-white text-neutral-700 min-h-screen">
      {/* === Breadcrumb === */}
      <div className="bg-neutral-100 py-4 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-500 font-inter">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>{" "}
          /
          <span className="text-gray-700 ml-1">
            GDPR / Data Protection Notice
          </span>
        </div>
      </div>

      {/* === Header === */}
      <div className="max-w-3xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
          GDPR / Data Protection Notice
        </h1>
        <p className="font-inter text-gray-600 md:text-lg leading-relaxed">
          How AI 360 FUTURE protects your personal data and complies with GDPR.
        </p>
      </div>

      {/* === Content === */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-10 font-inter text-neutral-700">
          {/* Basic Info */}
          <div className="space-y-2">
            <p>
              <strong>GDPR / Data Protection Notice — AI 360 FUTURE</strong>
            </p>
            <p>
              <strong>Effective Date:</strong> November 2025
            </p>
            <p>
              <strong>Operated by:</strong> AI 360 FUTURE (Proprietorship,
              Registered in India)
            </p>
            <p>
              <strong>Official Website:</strong> www.ai360futureworld.com
            </p>
          </div>

          {/* === Sections === */}
          {[
            {
              title: "1. Information We Collect",
              content: (
                <>
                  <p>
                    <strong>A) Data You Provide</strong>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Name (optional)</li>
                    <li>Email (newsletter or contact forms)</li>
                    <li>
                      Messages or inquiries submitted through contact forms
                    </li>
                  </ul>

                  <p className="mt-3">
                    <strong>B) Data Collected Automatically</strong>
                  </p>
                  <p>(via Google Analytics / Plausible / similar tools)</p>
                  <ul className="list-disc list-inside">
                    <li>Browser & device information</li>
                    <li>IP address (anonymized where possible)</li>
                    <li>Pages visited</li>
                    <li>Time spent on website</li>
                    <li>Click interactions</li>
                  </ul>

                  <p className="mt-3">
                    <strong>C) Affiliate Interaction Data</strong>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Click count</li>
                    <li>Redirect events</li>
                    <li>Outbound link activity</li>
                  </ul>

                  <p className="mt-3 text-red-600 font-semibold">
                    We do NOT collect payment or financial data.
                  </p>
                </>
              ),
            },

            {
              title: "2. Legal Basis for Processing",
              content: (
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Consent</strong> → newsletters, cookies
                  </li>
                  <li>
                    <strong>Legitimate Interest</strong> → analytics,
                    performance improvement
                  </li>
                  <li>
                    <strong>Contractual Need</strong> → when you contact us for
                    support
                  </li>
                </ul>
              ),
            },

            {
              title: "3. How We Use Your Data",
              content: (
                <>
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside">
                    <li>Provide AI-related resources and content</li>
                    <li>Improve website performance</li>
                    <li>Analyse traffic and user behaviour</li>
                    <li>Send monthly newsletters (only if subscribed)</li>
                    <li>Respond to support or partnership requests</li>
                    <li>Maintain affiliate tracking</li>
                  </ul>
                  <p className="text-red-600 font-semibold mt-3">
                    We never sell your personal information.
                  </p>
                </>
              ),
            },

            {
              title: "4. Public Sections of AI 360 FUTURE",
              content: (
                <>
                  <p>All visitors may freely access:</p>
                  <ul className="list-disc list-inside">
                    <li>AI Tools Directory</li>
                    <li>AI Courses Finder</li>
                    <li>AI Job Portal</li>
                    <li>AI Technologies</li>
                    <li>AI Automation Hub</li>
                    <li>AI Beginners Guide</li>
                    <li>AI News & Insights</li>
                    <li>AI TopList Rankings</li>
                    <li>AI Prompt Library (Free Access)</li>
                    <li>About Us, Contact, Sitemap, All Legal Pages</li>
                  </ul>
                  <p>No registration or payment required.</p>
                </>
              ),
            },

            {
              title: "5. Cookies & Tracking",
              content: (
                <>
                  <p>We use:</p>
                  <ul className="list-disc list-inside">
                    <li>Essential cookies (site functioning)</li>
                    <li>Optional analytics cookies</li>
                  </ul>
                  <p>Users may decline optional cookies anytime.</p>
                </>
              ),
            },

            {
              title: "6. Data Sharing",
              content: (
                <>
                  <p>We may share anonymous / non-identifiable data with:</p>
                  <ul className="list-disc list-inside">
                    <li>Analytics providers</li>
                    <li>Hosting platform (Vercel)</li>
                    <li>Email services (Brevo / Zoho / equivalent)</li>
                    <li>
                      Verified affiliate networks (Impact, CJ, ShareASale, etc.)
                    </li>
                  </ul>
                  <p className="text-red-600 font-semibold">
                    We do NOT share personal data with advertisers.
                  </p>
                </>
              ),
            },

            {
              title: "7. Data Retention",
              content: (
                <ul className="list-disc list-inside">
                  <li>Newsletter emails → until you unsubscribe</li>
                  <li>Contact form messages → 12 months</li>
                  <li>Analytics data → anonymized & temporary</li>
                </ul>
              ),
            },

            {
              title: "8. Your GDPR Rights",
              content: (
                <>
                  <p>You may request:</p>
                  <ul className="list-disc list-inside">
                    <li>Access to your data</li>
                    <li>Correction of your data</li>
                    <li>Deletion of your data</li>
                    <li>Restriction of processing</li>
                    <li>Withdrawal of consent</li>
                    <li>Export of your information</li>
                  </ul>
                  <p>
                    Send requests to: <strong>info@ai360futureworld.com</strong>
                  </p>
                </>
              ),
            },

            {
              title: "9. Email Communication Policy",
              content: (
                <>
                  <p>We send:</p>
                  <ul className="list-disc list-inside">
                    <li>Monthly newsletter</li>
                    <li>Important updates</li>
                    <li>Optional alerts (only if subscribed)</li>
                  </ul>
                  <p>You may unsubscribe anytime.</p>
                </>
              ),
            },

            {
              title: "10. Children's Privacy",
              content: (
                <>
                  <p>This website is not for users under 13.</p>
                  <p>We do not knowingly collect children's data.</p>
                </>
              ),
            },

            {
              title: "11. International Data Transfer",
              content: (
                <>
                  <p>Your data may be processed in:</p>
                  <ul className="list-disc list-inside">
                    <li>India</li>
                    <li>US</li>
                    <li>Singapore</li>
                  </ul>
                  <p>All services follow secure data standards.</p>
                </>
              ),
            },

            {
              title: "12. Updates to This Notice",
              content: (
                <p>
                  We may update this notice periodically. Updated versions will
                  have a new “Last Updated” date.
                </p>
              ),
            },

            {
              title: "13. Contact Information",
              content: (
                <>
                  <p>For GDPR, privacy, or data deletion requests:</p>
                  <p>info@ai360futureworld.com</p>

                  <p className="mt-3">
                    For technical support:
                    <br />
                    support@ai360futureworld.com
                  </p>
                  <p>
                    For partnerships:
                    <br />
                    partners@ai360futureworld.com
                  </p>
                  <p>
                    For media queries:
                    <br />
                    media@ai360futureworld.com
                  </p>
                </>
              ),
            },

            {
              title: "14. Data Controller Details",
              content: (
                <>
                  <p>
                    <strong>AI 360 FUTURE</strong>
                  </p>
                  <p>Proprietorship Registered in India</p>
                  <p>Website: www.ai360futureworld.com</p>
                  <p>Email: info@ai360futureworld.com</p>
                </>
              ),
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold text-blue-600 font-montserrat mb-3">
                {section.title}
              </h2>
              <div className="space-y-3">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
