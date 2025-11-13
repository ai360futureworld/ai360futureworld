export const metadata = {
  title: "Copyright Notice — AI 360 FUTURE",
  description: "Copyright Notice for AI 360 FUTURE",
};

export default function CopyrightNotice() {
  return (
    <section className="bg-white text-neutral-700 min-h-screen">
      {/* === Breadcrumb === */}
      <div className="bg-neutral-100 py-4 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-500 font-inter">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>{" "}
          /<span className="text-gray-700 ml-1">Copyright Notice</span>
        </div>
      </div>

      {/* === Header === */}
      <div className="max-w-3xl mx-auto text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">
          Copyright Notice
        </h1>
        <p className="font-inter text-gray-600 md:text-lg leading-relaxed">
          Learn how AI 360 FUTURE protects its intellectual property and
          content.
        </p>
      </div>

      {/* === Content Box === */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8 space-y-10">
          {/* Basic Info */}
          <div className="text-neutral-600 font-inter space-y-2">
            <p>
              <strong>Copyright Notice — AI 360 FUTURE</strong>
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
              title: "1. Ownership of Content",
              content: (
                <>
                  <p>
                    All content, design elements, text, graphics, images,
                    videos, and other digital materials published on AI 360
                    FUTURE are the exclusive intellectual property of AI 360
                    FUTURE (Proprietorship, Registered in India), unless
                    otherwise stated.
                  </p>
                  <p>This includes:</p>
                  <ul className="list-disc list-inside">
                    <li>Website layout and design</li>
                    <li>Brand name, logo, and iconography</li>
                    <li>Articles, blogs, and AI tool descriptions</li>
                    <li>Tutorials, course guides, and resources</li>
                    <li>
                      Infographics, visual materials, and downloadable files
                    </li>
                  </ul>
                  <p>
                    Any unauthorized copying, modification, or redistribution of
                    this content is strictly prohibited.
                  </p>
                </>
              ),
            },

            {
              title: "2. Limited Personal Use",
              content: (
                <>
                  <p>
                    You may view, download, or print content from AI 360 FUTURE
                    solely for personal, educational, or non-commercial use.
                  </p>
                  <p>Users must not:</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Reproduce, duplicate, or republish content for commercial
                      gain.
                    </li>
                    <li>Copy website structure, design, or brand assets.</li>
                    <li>
                      Use our content on other platforms without written
                      consent.
                    </li>
                  </ul>
                </>
              ),
            },

            {
              title: "3. Trademarks and Branding",
              content: (
                <>
                  <p>
                    The name "AI 360 FUTURE", its logo, tagline, and other brand
                    identifiers are protected trademarks under Indian and
                    international intellectual property laws.
                  </p>
                  <p>
                    Any misuse of our brand name, visuals, or materials for
                    deceptive or competing purposes is strictly prohibited and
                    may result in legal action.
                  </p>
                </>
              ),
            },

            {
              title: "4. Third-Party Materials",
              content: (
                <>
                  <p>
                    Some visuals, icons, or graphics used on our site may be
                    sourced from open-license or royalty-free resources (such as
                    Unsplash, Pixabay, or Freepik).
                  </p>
                  <p>
                    Such assets remain the property of their respective owners
                    and are used in accordance with their licensing terms.
                  </p>
                  <p>
                    AI 360 FUTURE claims no ownership over third-party logos,
                    brand marks, or company names referenced for informational
                    purposes.
                  </p>
                </>
              ),
            },

            {
              title: "5. Reporting Copyright Violations",
              content: (
                <>
                  <p>
                    If you believe that any material on our website infringes
                    upon your copyright or intellectual property, please contact
                    us immediately with valid details.
                  </p>
                  <p>
                    We will review your claim and, if necessary, remove or
                    modify the content within a reasonable time frame.
                  </p>
                </>
              ),
            },

            {
              title: "6. Future Updates",
              content: (
                <>
                  <p>
                    This Copyright Notice may be updated periodically to reflect
                    changes in legal requirements, website ownership, or content
                    policies.
                  </p>
                  <p>
                    The revised version will always be available on this page
                    with a new "Effective Date."
                  </p>
                </>
              ),
            },

            {
              title: "7. Contact Information",
              content: (
                <>
                  <p>
                    For copyright inquiries, permissions, or IP-related
                    concerns, please contact:
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
                    ©2025 AI 360 FUTURE — All Rights Reserved. All content and
                    intellectual property are protected under applicable Indian
                    and international copyright laws.
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
