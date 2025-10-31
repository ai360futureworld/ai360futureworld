"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

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
    <section className="bg-white py-20 border-t border-neutral-200">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* === Heading === */}
        <h2 className="text-3xl md:text-4xl font-extrabold font-montserrat text-neutral-900">
          Stay Updated — Get Latest AI Tools & News Weekly
        </h2>

        <p className="mt-4 text-base md:text-lg text-neutral-600 font-inter">
          Join thousands of AI enthusiasts and never miss an update.
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
            className="w-full sm:w-2/3 px-5 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter text-neutral-800 placeholder:text-neutral-400"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-700 transition font-inter"
          >
            <FaPaperPlane />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
