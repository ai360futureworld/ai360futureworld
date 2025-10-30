"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

const navLinks = [
  "Home",
  "About",
  "Tools",
  "Courses",
  "Upcoming",
  "Jobs",
  "Blog",
  "Beginners",
  "Top Lists",
  "Contact",
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
            <span className="font-montserrat text-blue-500 text-lg font-semibold">
              AI 360 Future
            </span>
            <span className="text-neutral-600 text-xs font-inter mt-0.5">
              Discover the world powered by AI
            </span>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md px-4 py-2 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4 text-neutral-700">
          <a
            href="#"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#"
            className="hover:text-red-500 transition-colors duration-300"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="#"
            className="hover:text-sky-400 transition-colors duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaTelegramPlane size={20} />
          </a>
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
          <ul className="flex justify-between text-white font-montserrat text-sm">
            {navLinks.map((link) => (
              <li
                key={link}
                className="flex-1 text-center border-r border-blue-400 last:border-none hover:bg-blue-600 transition-colors duration-300"
              >
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-3"
                >
                  {link}
                </a>
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
          <input
            type="text"
            placeholder="Search..."
            className="mb-6 px-4 py-2 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Nav Links */}
          <div className="flex flex-col space-y-2 font-inter">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="block text-neutral-800 font-medium px-2 py-2 rounded hover:bg-blue-100 transition"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-neutral-600 mt-auto pt-6 border-t border-neutral-200">
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-red-500">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTelegramPlane size={20} />
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
