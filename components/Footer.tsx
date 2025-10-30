"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#002b6f] text-neutral-300 py-14 px-6 text-center">
      {/* === Logo + Brand Name === */}
      <div className="flex flex-col items-center mb-10">
        <Image
          src="/logo.png"
          alt="AI 360 Future"
          width={100}
          height={60}
          className="object-contain mb-3"
        />
        <h2 className="text-white text-2xl font-semibold tracking-wide">
          AI 360 Future
        </h2>
      </div>

      {/* === Navigation Links === */}
      <nav className="flex flex-wrap justify-center gap-5 sm:gap-8 max-w-5xl mx-auto mb-10">
        {[
          "Home",
          "About",
          "Tools",
          "Courses",
          "Upcoming",
          "Jobs",
          "Insights",
          "Beginners Guide",
          "Top List",
          "Contact",
          "Privacy",
          "Terms",
        ].map((link, idx) => (
          <a
            key={idx}
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-neutral-100 font-medium text-sm sm:text-base hover:underline hover:decoration-7 hover:decoration-sky-400 hover:underline-offset-4 transition-all"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* === Social Icons === */}
      <div className="flex justify-center space-x-5 mb-8">
        <a href="#" className="hover:text-sky-400 transition-all">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="hover:text-sky-400 transition-all">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="hover:text-sky-400 transition-all">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="hover:text-sky-400 transition-all">
          <FaLinkedinIn size={20} />
        </a>
        <a href="#" className="hover:text-sky-400 transition-all">
          <FaYoutube size={20} />
        </a>
        <a href="#" className="hover:text-sky-400 transition-all">
          <FaTelegramPlane size={20} />
        </a>
      </div>

      {/* === Copyright === */}
      <div className="border-t border-blue-800 pt-4 text-sm text-neutral-400">
        © 2025 AI 360 Future | Developed by{" "}
        <a
          href="https://www.appuncles.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:text-sky-300 transition font-medium"
        >
          AppUncles
        </a>
      </div>
    </footer>
  );
}
