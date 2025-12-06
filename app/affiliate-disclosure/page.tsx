export const metadata = {
  title: "Affiliate Disclosure — AI 360 FUTURE",
  description: "Affiliate Disclosure for AI 360 FUTURE",
};

export default function AffiliateDisclosure() {
  return (
    <section className="bg-white text-neutral-700 min-h-screen">
      {/* === Breadcrumb === */}
      <div className="bg-neutral-100 py-4 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-500 font-inter">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>{" "}
          /<span className="text-gray-700 ml-1">Affiliate Disclosure</span>
        </div>
      </div>

      {/* === Header === */}
      <div className="max-w-3xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
          Affiliate Disclosure
        </h1>
        <p className="font-inter text-gray-600 md:text-lg leading-relaxed">
          Transparency regarding affiliate partnerships and commissions on AI
          360 FUTURE.
        </p>
      </div>

      {/* === Content Section === */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-10">
          {/* Basic Info */}
          <div className="text-neutral-600 font-inter space-y-2">
            <p>
              <strong>Affiliate Disclosure - AI 360 FUTURE</strong>
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

          {/* Section List */}
          {[
            {
              title: "1. Introduction",
              content: (
                <>
                  <p>
                    At AI 360 FUTURE, transparency and honesty are at the core
                    of our platform. To maintain fairness and integrity, we
                    disclose that some of the links to AI tools, online courses,
                    or digital services listed on our website are affiliate
                    links.
                  </p>
                  <p>
                    This means that if you click a link and make a purchase, we
                    may earn a small commission — at no extra cost to you.
                  </p>
                </>
              ),
            },

            {
              title: "2. How Affiliate Links Work",
              content: (
                <>
                  <p>
                    Affiliate programs allow us to recommend high-quality tools
                    and services while earning a minor referral fee when users
                    choose to purchase through our links.
                  </p>
                  <p>
                    These earnings help us maintain and improve our free
                    resources, research, and updates.
                  </p>
                  <p>However:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Clicking an affiliate link does not change the product's
                      original price.
                    </li>
                    <li>
                      All purchases, billing, and support are handled directly
                      by the service provider.
                    </li>
                    <li>
                      AI 360 FUTURE never collects or stores your payment
                      information.
                    </li>
                  </ul>
                </>
              ),
            },

            {
              title: "3. Our Commitment to Users",
              content: (
                <>
                  <p>
                    We only recommend platforms and services that we have
                    personally reviewed, tested, or verified for quality and
                    reliability.
                  </p>
                  <p>
                    Every product or course featured on our website is chosen
                    based on relevance, performance, and credibility — not on
                    commission rates.
                  </p>
                  <p>We always prioritize user value over earnings.</p>
                </>
              ),
            },

            {
              title: "4. Responsibility Disclaimer",
              content: (
                <>
                  <p>
                    AI 360 FUTURE is not responsible for any payment errors,
                    refund issues, delays, or disputes between users and
                    third-party companies.
                  </p>
                  <p>
                    All transactions occur directly between the user and the
                    external service provider.
                  </p>
                  <p>
                    For billing or refund-related issues, users must contact the
                    respective company's customer support team.
                  </p>
                </>
              ),
            },

            {
              title: "5. Affiliate Partners (Examples)",
              content: (
                <>
                  <p>We participate in affiliate programs with:</p>
                  <ul className="list-disc list-inside">
                    <li>Impact</li>
                    <li>PartnerStack</li>
                    <li>CJ (Commission Junction)</li>
                    <li>ShareASale</li>
                    <li>Individual AI companies and course providers</li>
                  </ul>
                  <p>
                    These partnerships do not influence our editorial
                    independence or content accuracy.
                  </p>
                </>
              ),
            },

            {
              title: "6. Transparency Promise",
              content: (
                <>
                  <p>
                    We are fully committed to providing clear, unbiased, and
                    trustworthy information.
                  </p>
                  <p>
                    If any sponsored or paid placement appears on our website,
                    it will always be clearly marked as "Sponsored" or
                    "Advertisement."
                  </p>
                </>
              ),
            },

            {
              title: "7. Related Policies",
              content: (
                <>
                  <p>This Affiliate Disclosure should be read together with:</p>
                  <ul className="list-disc list-inside">
                    <li>Privacy Policy — How user data is handled.</li>
                    <li>Terms of Service — Rules for website usage.</li>
                    <li>
                      Refund & Cancellation Policy — How affiliate refunds are
                      managed.
                    </li>
                    <li>
                      Disclaimer — Accuracy and responsibility of information
                      shared.
                    </li>
                  </ul>
                </>
              ),
            },

            {
              title: "Contact Information",
              content: (
                <>
                  <p>
                    For questions about our affiliate partnerships or disclosure
                    policy, please contact:
                  </p>
                  <p>
                    AI 360 FUTURE
                    <br />
                    Proprietorship Registered in India
                    <br />
                    Email: partners@ai360futureworld.com
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
