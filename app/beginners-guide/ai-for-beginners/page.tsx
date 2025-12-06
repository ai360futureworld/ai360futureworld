import AIForBeginnersClient from "./AIForBeginnersClient";

export const metadata = {
  title: "AI for Beginners — Learn AI Basics | AI 360 FUTURE",
  description:
    "AI for Beginners — simple, friendly guide to Artificial Intelligence. No technical background required. Start learning AI today.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Artificial Intelligence (AI)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Artificial Intelligence is the ability of machines or software to perform tasks that normally require human intelligence such as learning, reasoning, and problem-solving.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI work in simple terms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI works by processing large amounts of data, identifying patterns, and making predictions or decisions. It learns and improves over time using algorithms.",
      },
    },
    {
      "@type": "Question",
      name: "Can a beginner learn AI without coding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — many modern tools let beginners explore AI concepts without coding. Start with guided tutorials and visual tools.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* JSON-LD for FAQ (SEO) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Client component contains the interactive UI */}
      <AIForBeginnersClient />
    </>
  );
}
