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
          AI 360 FUTURE
        </h2>
        <p className="text-neutral-200 text-sm mt-0.5">
          Discover the world powered by AI
        </p>
      </div>

      {/* === Navigation Links === */}
      <nav className="flex flex-wrap justify-center gap-5 sm:gap-8 max-w-7xl mx-auto mb-10">
        {[
          "Contact Us",
          "FAQ – Help & Support",
          "Refund & Cancellation Policy",
          "Privacy Policy",
          "Terms & Conditions",
          "Affiliate Disclosure",
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
      <div className="flex justify-center space-x-3 mb-8">
        {[
          { icon: FaFacebookF, color: "bg-blue-600" },
          { icon: FaInstagram, color: "bg-pink-500" },
          { icon: FaLinkedinIn, color: "bg-blue-500" },
          { icon: FaYoutube, color: "bg-red-600" },
          { icon: FaTwitter, color: "bg-sky-400" },
          { icon: FaTelegramPlane, color: "bg-blue-400" },
        ].map(({ icon: Icon, color }, idx) => (
          <a
            key={idx}
            href="#"
            className={`flex items-center justify-center ${color} text-white w-8 h-8 rounded-md transition-transform duration-300 hover:scale-110 shadow-sm`}
          >
            <Icon size={14} />
          </a>
        ))}
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
