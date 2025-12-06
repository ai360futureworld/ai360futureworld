"use client";

import { useState } from "react";
import { FaEnvelope, FaMailBulk, FaPaperPlane } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim()) {
      alert(`Subscribed with ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="bg-white py-20 border-t border-neutral-200 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* === Heading === */}
        <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat text-neutral-900">
          Stay ahead with the latest Al tools, courses, and global job alerts -
          every week.
        </h2>

        <p className="mt-4 text-base md:text-lg text-neutral-600 font-inter">
          Join 10,000+ learners - one email per week. No spam ever.
        </p>

        {/* === Form === */}
        <form
          onSubmit={handleSubscribe}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 px-5 py-3 rounded-xl border border-neutral-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 
                       font-inter text-neutral-800 placeholder:text-neutral-400"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 
                       bg-blue-500 hover:bg-blue-600 text-white font-semibold 
                       rounded-xl transition font-inter"
          >
            <FaEnvelope className="text-sm" />
            Get Updates
          </button>
        </form>
      </div>
    </section>
  );
}
