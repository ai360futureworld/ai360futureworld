export const metadata = {
  title: "Refund & Cancellation Policy — AI 360 FUTURE",
  description: "Refund & Cancellation Policy for AI 360 FUTURE",
};

export default function RefundPolicy() {
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
            Refund & Cancellation Policy
          </span>
        </div>
      </div>

      {/* === Header === */}
      <div className="max-w-3xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
          Refund & Cancellation Policy
        </h1>
        <p className="font-inter text-gray-600 md:text-lg leading-relaxed">
          Transparency and clarity regarding refunds and cancellations at AI 360
          FUTURE.
        </p>
      </div>

      {/* === Content Section === */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-10">
          {/* Basic Info */}
          <div className="text-neutral-600 font-inter space-y-2">
            <p>
              <strong>Refund & Cancellation Policy - AI 360 FUTURE</strong>
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
                    At AI 360 FUTURE, we value transparency, user satisfaction,
                    and trust.
                  </p>
                  <p>
                    Currently, all features and content available on our website
                    are provided free of charge.
                  </p>
                  <p>
                    Since no monetary transactions or paid subscriptions are
                    active at this stage, refunds or cancellations are not
                    applicable for any user or visitor.
                  </p>
                </>
              ),
            },

            {
              title: "2. Free Access Mode",
              content: (
                <>
                  <p>
                    Our website offers free access to the following sections and
                    features:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>AI Tools Directory</li>
                    <li>AI Courses & Learning Resources</li>
                    <li>AI Jobs Listings</li>
                    <li>AI Prompt Library</li>
                    <li>AI Technologies & Automation Hub</li>
                    <li>Blog & Insights Section</li>
                    <li>Beginners Guide</li>
                    <li>Upcoming AI Projects</li>
                  </ul>
                  <p>
                    Users are not charged for accessing, viewing, or using any
                    content.
                  </p>
                </>
              ),
            },

            {
              title: "3. Future Policy Updates",
              content: (
                <>
                  <p>
                    In the future, AI 360 FUTURE may introduce premium plans or
                    paid access.
                  </p>
                  <p>When that happens:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      All new pricing and refund rules will be clearly displayed
                      before payment.
                    </li>
                    <li>
                      Users will be required to read and agree to updated
                      policies before any transaction.
                    </li>
                    <li>
                      A transparent refund and cancellation process will be
                      shared for paid services.
                    </li>
                  </ul>
                </>
              ),
            },

            {
              title: "4. Third-Party & Affiliate Services",
              content: (
                <>
                  <p>
                    Some pages on AI 360 FUTURE may contain links to external AI
                    tools, courses, or services.
                  </p>
                  <p>
                    These are third-party affiliate links that may generate
                    small commissions at no extra cost to the user.
                  </p>
                  <p>However:</p>
                  <p>
                    All payments, refunds, and cancellations related to
                    affiliate services are handled directly between the user and
                    the respective service provider.
                  </p>
                  <p>
                    AI 360 FUTURE is not responsible for any payment processing,
                    delivery issues, or refund delays that occur on third-party
                    websites.
                  </p>
                  <p>
                    For such concerns, please contact the external company's
                    customer support.
                  </p>
                </>
              ),
            },

            {
              title: "5. Related Policies (Mandatory Reference)",
              content: (
                <>
                  <p>
                    This Refund & Cancellation Policy should be read in
                    conjunction with the following pages available on our
                    website:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Privacy Policy - How we collect and protect your
                      information.
                    </li>
                    <li>
                      Terms of Service - Rules for using our website and
                      content.
                    </li>
                    <li>
                      Affiliate Disclosure - How affiliate partnerships work.
                    </li>
                    <li>
                      Disclaimer - Limitation of responsibility and accuracy of
                      content.
                    </li>
                    <li>
                      Payment & Security Policy - (For future paid features.)
                    </li>
                    <li>
                      Cookie Policy - How cookies are used to improve
                      experience.
                    </li>
                    <li>
                      Community Guidelines - Rules for user behavior and
                      communication.
                    </li>
                    <li>
                      Copyright Notice - Ownership and protection of our
                      content.
                    </li>
                  </ul>
                  <p>
                    Users are advised to review these pages for complete clarity
                    on our website operations and data handling.
                  </p>
                </>
              ),
            },

            {
              title: "6. Contact Information",
              content: (
                <>
                  <p>
                    For any questions about this Refund & Cancellation Policy or
                    related legal matters, please contact:
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
                    ©2025 AI 360 FUTURE - All Rights Reserved. All operations
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
