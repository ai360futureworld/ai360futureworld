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
          Learn how AI 360 FUTURE protects personal data and complies with
          global privacy standards.
        </p>
      </div>

      {/* === Content Section === */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-10">
          {/* Basic Info */}
          <div className="text-neutral-600 font-inter space-y-2">
            <p>
              <strong>GDPR / Data Protection Notice — AI 360 FUTURE</strong>
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
                    At AI 360 FUTURE, we are committed to protecting the privacy
                    and personal data of our visitors and users worldwide.
                  </p>
                  <p>
                    This page outlines how we comply with global data protection
                    standards — including the General Data Protection Regulation
                    (GDPR) and the Indian IT Act 2000.
                  </p>
                  <p>
                    Our goal is simple: to ensure transparency, trust, and full
                    control over your personal data.
                  </p>
                </>
              ),
            },

            {
              title: "2. Current Website Mode",
              content: (
                <>
                  <p>
                    As of now, all sections of our website are available
                    completely free of charge and do not require account
                    creation or payment.
                  </p>
                  <p>
                    We do <strong>not</strong> store, share, or sell any user
                    data for financial purposes.
                  </p>
                  <p>Visitors may browse free content including:</p>
                  <ul className="list-disc list-inside">
                    <li>AI Tools, Courses, and Jobs</li>
                    <li>AI Technologies & Automation Hub</li>
                    <li>Blog & Insights</li>
                    <li>Beginners Guide</li>
                    <li>Prompt Library (Free Access)</li>
                  </ul>
                  <p>
                    No personal or financial information is collected unless a
                    visitor voluntarily subscribes to our email updates.
                  </p>
                </>
              ),
            },

            {
              title: "3. Data We Collect (Voluntary Only)",
              content: (
                <>
                  <p>
                    AI 360 FUTURE collects data only when voluntarily submitted
                    by the user.
                  </p>
                  <p>This includes:</p>
                  <ul className="list-disc list-inside">
                    <li>Email address (for newsletters or updates)</li>
                    <li>
                      Basic analytics data (device type, time spent, pages
                      visited)
                    </li>
                  </ul>
                  <p>
                    We do not collect sensitive information such as financial
                    data, passwords, IDs, or biometrics.
                  </p>
                </>
              ),
            },

            {
              title: "4. Legal Basis for Data Processing (GDPR Requirement)",
              content: (
                <>
                  <p>We process user data under the following lawful bases:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>Consent</strong> — when you subscribe to our
                      emails.
                    </li>
                    <li>
                      <strong>Legitimate Interest</strong> — improving site
                      performance and user experience.
                    </li>
                    <li>
                      <strong>Compliance</strong> — adhering to applicable local
                      and international laws.
                    </li>
                  </ul>
                </>
              ),
            },

            {
              title: "5. How We Protect Your Data",
              content: (
                <>
                  <p>
                    We use industry-standard measures to ensure data safety:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>SSL encryption across the entire website</li>
                    <li>
                      No storage of financial or sensitive user information
                    </li>
                    <li>Secure servers and anti-malware monitoring</li>
                    <li>Regular audits for performance and security</li>
                  </ul>
                  <p>
                    All data is handled according to GDPR and Indian IT Act 2000
                    requirements.
                  </p>
                </>
              ),
            },

            {
              title: "6. Your Rights Under GDPR",
              content: (
                <>
                  <p>
                    All EU and international users have the following rights:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Right to Access — request a copy of your data</li>
                    <li>Right to Rectification — correct incorrect data</li>
                    <li>Right to Deletion — request your data be erased</li>
                    <li>Right to Restrict Processing</li>
                    <li>Right to Data Portability</li>
                    <li>Right to Withdraw Consent at any time</li>
                  </ul>
                  <p>
                    To exercise any of these rights, contact us using the
                    details below.
                  </p>
                </>
              ),
            },

            {
              title: "7. Cookies & Tracking",
              content: (
                <>
                  <p>
                    We use cookies purely for analytics and performance
                    optimization.
                  </p>
                  <p>
                    Cookies do not store personal information and can be
                    disabled through browser settings.
                  </p>
                  <p>
                    For full details, please read our{" "}
                    <strong>Cookie Policy</strong>.
                  </p>
                </>
              ),
            },

            {
              title: "8. Data Sharing & Third Parties",
              content: (
                <>
                  <p>AI 360 FUTURE does not sell or rent any personal data.</p>
                  <p>We may use trusted third-party tools like:</p>
                  <ul className="list-disc list-inside">
                    <li>Google Analytics</li>
                    <li>Email service providers</li>
                  </ul>
                  <p>
                    These services only receive anonymized or limited data and
                    follow their own privacy policies.
                  </p>
                </>
              ),
            },

            {
              title: "9. Future Paid Plans & Data Handling",
              content: (
                <>
                  <p>
                    If AI 360 FUTURE introduces paid subscriptions in the
                    future:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>All data handling details will be updated</li>
                    <li>Users will be informed before any policy change</li>
                    <li>
                      Secure payment gateways will process all transactions
                    </li>
                  </ul>
                  <p>No financial data will ever be stored by us.</p>
                </>
              ),
            },

            {
              title: "10. Contact Information",
              content: (
                <>
                  <p>
                    For GDPR requests, privacy concerns, or data removal, please
                    contact:
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
                    ©2025 AI 360 FUTURE — All Rights Reserved. Data is protected
                    under GDPR, Indian IT Act 2000, and international privacy
                    frameworks.
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
