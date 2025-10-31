"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaEnvelope, FaCogs, FaHandshake, FaBullhorn } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully! (Demo only)");
  };

  return (
    <section className="bg-white text-neutral-700 min-h-screen">
      {/* === Breadcrumb Section === */}
      <div className="bg-neutral-100 py-4 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-500 font-inter">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>{" "}
          / <span className="text-gray-700">Contact</span>
        </div>
      </div>

      {/* === Header Section === */}
      <div className="max-w-4xl mx-auto text-center py-12 px-6">
        <h1 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
          Get in Touch with Our Global AI Team
        </h1>
        <p className="text-lg font-inter text-gray-600 leading-relaxed">
          Collaborate, innovate, and grow with us. <br />
          Reach out for partnerships, media, or technical support.
        </p>
      </div>

      {/* === Contact Section (2 Columns) === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 pb-16">
        {/* === Left: Contact Info === */}
        <div className="space-y-6">
          {[
            {
              title: "General Inquiry",
              email: "info@ai360futureworld.com",
              desc: "Default catch-all mail",
              icon: <FaEnvelope className="text-blue-500 text-xl" />,
            },
            {
              title: "Technical Support",
              email: "support@ai360futureworld.com",
              desc: "User issues, bug reports",
              icon: <FaCogs className="text-blue-500 text-xl" />,
            },
            {
              title: "Partnership / Collaboration",
              email: "partners@ai360futureworld.com",
              desc: "Affiliate or business inquiries",
              icon: <FaHandshake className="text-blue-500 text-xl" />,
            },
            {
              title: "Media / PR Request",
              email: "media@ai360futureworld.com",
              desc: "Press or media requests",
              icon: <FaBullhorn className="text-blue-500 text-xl" />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mr-4 mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 font-montserrat">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-gray-600 font-inter">
                  {item.email}
                </p>
                <p className="text-xs text-neutral-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* === Right: Contact Form === */}
        <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 text-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 text-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Subject Dropdown */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 text-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership / Collaboration</option>
                <option>Media / PR Request</option>
              </select>
            </div>

            {/* Message Box */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 text-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-all font-inter"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
