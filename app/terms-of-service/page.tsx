export const metadata = {
  title: "Terms of Service — AI 360 FUTURE",
  description: "Terms of Service for AI 360 FUTURE",
};

export default function TermsOfService() {
  return (
    <section className="bg-white text-neutral-700 min-h-screen">
      {/* === Breadcrumb === */}
      <div className="bg-neutral-100 py-4 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-500 font-inter">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>{" "}
          /<span className="text-gray-700 ml-1">Terms of Service</span>
        </div>
      </div>

      {/* === Header === */}
      <div className="max-w-3xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="font-inter text-gray-600 md:text-lg leading-relaxed">
          Please review the terms and conditions for using AI 360 FUTURE's
          services and platform.
        </p>
      </div>

      {/* === Main Content === */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-10">
          {/* Basic Info */}
          <div className="text-neutral-600 font-inter space-y-2">
            <p>
              <strong>Terms of Service - AI 360 FUTURE</strong>
            </p>
            <p>
              <strong>Effective Date:</strong> January 2025
            </p>
            <p>
              <strong>Operated by:</strong> AI 360 FUTURE (Proprietorship,
              Registered in India)
            </p>
            <p>
              <strong>Website:</strong> www.ai360futureworld.com
            </p>
          </div>

          {/* Section List */}
          {[
            {
              title: "1. Introduction",
              content: (
                <>
                  <p>
                    Welcome to AI 360 FUTURE — a digital platform dedicated to
                    providing curated information, tools, and learning resources
                    in the field of Artificial Intelligence.
                  </p>
                  <p>
                    By using our website, you agree to comply with the following
                    Terms of Service.
                  </p>
                  <p>
                    If you do not agree with any part of these terms, please
                    refrain from using the website.
                  </p>
                </>
              ),
            },

            {
              title: "2. Use of Website",
              content: (
                <>
                  <p>
                    You agree to use AI 360 FUTURE only for lawful purposes.
                  </p>
                  <p>Users must not:</p>
                  <ul className="list-disc list-inside">
                    <li>Violate any laws or regulations.</li>
                    <li>
                      Copy, distribute, or modify website content without
                      permission.
                    </li>
                    <li>Attempt to hack, disrupt, or misuse the platform.</li>
                    <li>
                      Engage in harmful, abusive, or malicious activities.
                    </li>
                  </ul>
                </>
              ),
            },

            {
              title: "3. Intellectual Property",
              content: (
                <>
                  <p>
                    All content on the website — including text, graphics,
                    logos, videos, tools, and design — is the intellectual
                    property of AI 360 FUTURE unless stated otherwise.
                  </p>
                  <p>
                    You may not copy, reuse, distribute, or republish any
                    materials without written permission.
                  </p>
                </>
              ),
            },

            {
              title: "4. User-Submitted Content",
              content: (
                <>
                  <p>
                    If you provide feedback, suggestions, or any content to the
                    platform, you grant AI 360 FUTURE a non-exclusive,
                    royalty-free license to use it.
                  </p>
                  <p>
                    We reserve the right to remove inappropriate or harmful
                    submissions.
                  </p>
                </>
              ),
            },

            {
              title: "5. External Links",
              content: (
                <>
                  <p>
                    AI 360 FUTURE may contain external links to third-party
                    websites, tools, or resources.
                  </p>
                  <p>
                    We do not control or endorse the content on external
                    websites and are not responsible for any issues arising from
                    their use.
                  </p>
                </>
              ),
            },

            {
              title: "6. No Guarantees or Warranties",
              content: (
                <>
                  <p>
                    While we aim to provide accurate and reliable information,
                    AI 360 FUTURE makes no warranties regarding the completeness
                    or accuracy of the content.
                  </p>
                  <p>
                    All information is provided for educational and
                    informational purposes only.
                  </p>
                </>
              ),
            },

            {
              title: "7. Limitation of Liability",
              content: (
                <>
                  <p>
                    AI 360 FUTURE is not liable for any damages arising from:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Use or inability to use the website</li>
                    <li>Errors, interruptions, or delays</li>
                    <li>Third-party actions or external links</li>
                    <li>Loss of data, revenue, or business</li>
                  </ul>
                  <p>Users access the platform at their own risk.</p>
                </>
              ),
            },

            {
              title: "8. Changes to the Terms",
              content: (
                <>
                  <p>We may update these Terms of Service at any time.</p>
                  <p>
                    Any changes will be posted on this page with a new
                    "Effective Date."
                  </p>
                </>
              ),
            },

            {
              title: "9. Governing Law",
              content: (
                <>
                  <p>These Terms are governed by the laws of India.</p>
                  <p>
                    Any disputes will be handled exclusively in Indian courts.
                  </p>
                </>
              ),
            },

            {
              title: "Contact Information",
              content: (
                <>
                  <p>
                    For questions related to these Terms of Service, contact us
                    at:
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
