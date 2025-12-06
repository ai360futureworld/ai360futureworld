/* eslint-disable react/jsx-key */
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTelegramPlane,
  FaSearch,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  "Home",
  "About Us",
  "AI Tools Directory",
  "AI Courses Finder",
  "Ai Jobs Portal",
  "AI Insights",
  "Beginners Guide",
  "AI TopLists Rankings",
  "Contact Us",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(""); // Desktop dropdown
  const [mobileDropdown, setMobileDropdown] = useState(false); // Mobile dropdown

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white border-b border-neutral-200">
      {/* === Top Bar === */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo + Title */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="AI 360 Future"
            width={42}
            height={42}
            className="object-contain"
          />
          <div className="ml-2 flex flex-col">
            <span className="font-montserrat text-blue-500 text-2xl font-semibold">
              AI 360 FUTURE
            </span>
            <span className="text-neutral-600 text-xs mt-0.5">
              Discover the world powered by AI
            </span>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-2 text-neutral-700">
          {[
            { icon: <FaFacebookF size={14} />, color: "bg-blue-600" },
            { icon: <FaInstagram size={14} />, color: "bg-pink-500" },
            { icon: <FaLinkedin size={14} />, color: "bg-blue-500" },
            { icon: <FaYoutube size={14} />, color: "bg-red-600" },
            { icon: <FaXTwitter size={14} />, color: "bg-gray-800" },
            { icon: <FaTelegramPlane size={14} />, color: "bg-blue-400" },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className={`flex items-center justify-center ${item.color} text-white rounded-md w-7 h-7 transition-transform transform hover:scale-110 shadow-sm`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-neutral-700 text-2xl"
        >
          <HiOutlineMenu />
        </button>
      </div>

      {/* === Bottom Nav (Desktop) === */}
      <nav className="hidden md:block bg-blue-500">
        <div className="max-w-6xl mx-auto">
          <ul className="flex justify-between text-white font-montserrat text-base relative">
            {navLinks.map((link) => (
              <li
                key={link}
                className="flex-1 text-center border-r border-blue-400 last:border-none hover:bg-blue-600 transition-colors duration-300 relative"
                onMouseEnter={() =>
                  link === "Beginners Guide" &&
                  setOpenDropdown("Beginners Guide")
                }
                onMouseLeave={() => setOpenDropdown("")}
              >
                {/* NON-CLICKABLE BEGINNERS GUIDE */}
                {link === "Beginners Guide" ? (
                  <button
                    className="w-full block px-4 py-3 cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    Beginners Guide
                  </button>
                ) : (
                  <Link
                    href={
                      link === "Home"
                        ? "/"
                        : `/${link.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className="block px-4 py-3"
                  >
                    {link}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link === "Beginners Guide" &&
                  openDropdown === "Beginners Guide" && (
                    <ul className="absolute left-0 w-full bg-white text-neutral-800 shadow-lg font-normal text-sm z-50">
                      <li className="border-b border-neutral-200">
                        <Link
                          href="/beginners-guide/ai-for-beginners"
                          className="block px-4 py-2 hover:bg-neutral-100"
                        >
                          AI for Beginners
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/beginners-guide/ai-for-students"
                          className="block px-4 py-2 hover:bg-neutral-100"
                        >
                          AI for Students
                        </Link>
                      </li>
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* === Mobile Sidebar === */}
      <div
        className={`fixed inset-0 z-[60] flex transition-all duration-300 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Sidebar */}
        <aside
          className={`relative w-64 bg-white h-full p-6 flex flex-col justify-start shadow-lg transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="self-end text-neutral-700 text-2xl mb-4"
            onClick={() => setMobileOpen(false)}
          >
            <IoClose />
          </button>

          {/* Mobile Search */}
          <div className="relative mb-6">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-2 font-inter">
            {navLinks.map((link) => (
              <div key={link}>
                {link !== "Beginners Guide" ? (
                  <Link
                    href={
                      link === "Home"
                        ? "/"
                        : `/${link.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className="font-montserrat block text-neutral-800 font-medium px-2 py-2 rounded hover:bg-blue-100 transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </Link>
                ) : (
                  <>
                    {/* Mobile Accordion */}
                    <button
                      className="w-full text-left font-montserrat text-neutral-800 font-medium px-2 py-2 rounded hover:bg-blue-100 transition flex justify-between items-center"
                      onClick={() => setMobileDropdown(!mobileDropdown)}
                    >
                      Beginners Guide
                      <span className="text-neutral-600">
                        {mobileDropdown ? "−" : "+"}
                      </span>
                    </button>

                    {mobileDropdown && (
                      <div className="ml-3 mt-1 space-y-1 border-l border-neutral-300 pl-3">
                        <Link
                          href="/beginners-guide/ai-for-beginners"
                          className="block text-neutral-700 font-medium py-1 hover:bg-blue-50 rounded"
                          onClick={() => setMobileOpen(false)}
                        >
                          AI for Beginners
                        </Link>

                        <Link
                          href="/beginners-guide/ai-for-students"
                          className="block text-neutral-700 font-medium py-1 hover:bg-blue-50 rounded"
                          onClick={() => setMobileOpen(false)}
                        >
                          AI for Students
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Social Icons */}
          <div className="flex space-x-2 text-neutral-600 mt-auto pt-6 border-t border-neutral-200">
            {[
              <FaFacebookF size={14} />,
              <FaInstagram size={14} />,
              <FaLinkedin size={14} />,
              <FaYoutube size={14} />,
              <FaXTwitter size={14} />,
              <FaTelegramPlane size={14} />,
            ].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center justify-center bg-blue-500 text-white rounded-md w-7 h-7 transition-transform duration-300 hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
}
