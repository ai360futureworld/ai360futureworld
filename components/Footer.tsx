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
      {/* === 4 COLUMN GRID === */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* ================= COLUMN 1 — LOGO + TEXT + SOCIAL ================= */}
        <div className="flex flex-col items-start">
          <Image
            src="/logo.png"
            alt="AI 360 Future"
            width={100}
            height={60}
            className="object-contain mb-4"
          />

          <p className="text-neutral-200 text-sm leading-relaxed mb-5 max-w-xs">
            AI 360 FUTURE – Empowering the world with AI learning, tools and
            opportunities.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap gap-3 mt-2">
            {[
              { icon: FaInstagram, color: "bg-pink-500" },
              { icon: FaFacebookF, color: "bg-blue-600" },
              { icon: FaYoutube, color: "bg-red-600" },
              { icon: FaXTwitter, color: "bg-gray-800" },
              { icon: FaLinkedinIn, color: "bg-blue-500" },
              { icon: FaTelegramPlane, color: "bg-blue-400" },
            ].map(({ icon: Icon, color }, idx) => (
              <a
                key={idx}
                href="#"
                className={`flex items-center justify-center ${color} text-white w-8 h-8 rounded-md transition-transform duration-300 hover:scale-110 shadow-sm`}
              >
                <Icon size={12} />
              </a>
            ))}
          </div>
        </div>

        {/* ================= COLUMN 2 — TRUSTED ================= */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Trusted Platforms
          </h3>

          <ul className="text-neutral-200 text-sm leading-relaxed space-y-1">
            <li>Udemy</li>
            <li>Coursera</li>
            <li>edX</li>
            <li>Jooble</li>
            <li>Talent.com</li>
            <li>Adzuna</li>
            <li>OpenAI</li>
            <li>Hugging Face</li>
          </ul>
        </div>

        {/* ================= COLUMN 3 — CONTACT ================= */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>

          <p className="text-neutral-200 text-sm mb-4">
            <span className="font-semibold text-white">Support & Help:</span>
            <br />
            support@ai360futureworld.com
          </p>

          <p className="text-neutral-200 text-sm">
            <span className="font-semibold text-white">
              Partnerships & Media:
            </span>
            <br />
            partners@ai360futureworld.com
          </p>
        </div>

        {/* ================= COLUMN 4 — NEWSLETTER ================= */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>

          <p className="text-neutral-200 text-sm mb-4">
            Get a weekly email with AI tools, course discounts & job alerts.
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
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold 
                         rounded-lg transition shadow-sm"
            >
              Subscribe
            </button>
          </form>

          <p className="text-neutral-300 text-xs mt-2">
            No spam – unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-blue-800 pt-4 pb-6 text-sm text-neutral-300 text-center">
        ©2025 AI 360 FUTURE – All rights reserved. Developed by{" "}
        <a
          href="https://www.appuncles.com"
          className="text-sky-300 hover:text-sky-200 font-medium"
          target="_blank"
        >
          AppUncles
        </a>
      </div>
    </footer>
  );
}
