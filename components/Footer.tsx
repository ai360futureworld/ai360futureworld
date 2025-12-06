"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#002b6f] text-neutral-300 pt-16 px-6">
      {/* ========== 5 COLUMN LAYOUT ========== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14 mb-16">
        {/* COLUMN 1 – LOGO + DESCRIPTION + SOCIAL */}
        <div>
          <Image
            src="/logo.png"
            alt="AI 360 Future"
            width={110}
            height={60}
            className="object-contain mb-4"
          />

          <p className="text-neutral-200 text-sm leading-relaxed mb-6">
            AI 360 FUTURE — A complete ecosystem of AI tools, courses, job
            alerts and automation resources to help you stay ahead.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-3">
            {[
              FaInstagram,
              FaFacebookF,
              FaYoutube,
              FaXTwitter,
              FaLinkedinIn,
              FaTelegramPlane,
            ].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 
                             hover:bg-blue-500 transition-transform duration-300 hover:scale-110"
              >
                <Icon size={14} className="text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 2 – PRODUCTS */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm text-neutral-200">
            <li>AI Tools Directory</li>
            <li>AI Courses Finder</li>
            <li>Ai Jobs Portal</li>
            <li>Automation Hub</li>
            <li>Playground</li>
            <li>Prompt Library</li>
            <li>Marketplace</li>
          </ul>
        </div>

        {/* COLUMN 3 – RESOURCES */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-neutral-200">
            <li>Beginners Guide</li>
            <li>AI Insights</li>
            <li>Toplists & Rankings</li>
          </ul>
        </div>

        {/* COLUMN 4 – LEGAL */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-neutral-200">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation Policy</li>
            <li>Affiliate Disclosure</li>
            <li>Cookie Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* COLUMN 5 – CONTACT + NEWSLETTER */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>

          <p className="text-sm text-neutral-200 mb-4">
            <span className="font-semibold text-white">Support:</span> <br />
            support@ai360futureworld.com
          </p>

          <p className="text-sm text-neutral-200 mb-6">
            <span className="font-semibold text-white">Partnerships:</span>{" "}
            <br />
            partners@ai360futureworld.com
          </p>

          {/* NEWSLETTER */}
          <h4 className="text-white text-lg font-semibold mb-3">Newsletter</h4>

          <p className="text-neutral-200 text-sm mb-3">
            Get weekly updates on AI tools, courses & job alerts.
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#01409a] border border-blue-700 
                         placeholder:text-neutral-300 text-white focus:outline-none 
                         focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold 
                         rounded-lg transition"
            >
              Subscribe
            </button>
          </form>

          <p className="text-neutral-400 text-xs mt-2">
            No spam — unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* DATA ATTRIBUTION */}
      <div className="text-center text-neutral-300 text-xs max-w-4xl mx-auto pb-4 leading-relaxed">
        Data & Integrations From: Udemy, Coursera, edX, LinkedIn Learning,
        Jooble, Talent.com, Adzuna, OpenAI and others.
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-blue-800 pt-4 pb-6 text-sm text-neutral-300 text-center">
        © 2025 AI 360 FUTURE — All rights reserved.
      </div>
    </footer>
  );
}
