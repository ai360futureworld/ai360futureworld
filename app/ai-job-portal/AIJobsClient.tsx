"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FaBriefcase,
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaFilter,
} from "react-icons/fa";

// ----------------- TYPES -----------------
type Job = {
  job_title: string;
  company: string;
  location: string;
  job_type: string;
  category: string;
  tags?: string[];
  salary?: string;
  apply_link: string;
  source_name?: string;
  posted_at?: string;
  logo?: string;
};

// ------------- CATEGORIES ----------------
const MANUAL_CATEGORIES = [
  "AI & Machine Learning Jobs",
  "Data Science Jobs",
  "Prompt Engineering Jobs",
  "AI Research Jobs",
  "NLP & Deep Learning Jobs",
  "Computer Vision Jobs",
  "AI Product Manager Jobs",
  "AI Software Engineering Jobs",
  "AI Internships for Students",
  "Trending AI Jobs (Latest)",
];

// ------------- MANUAL JOBS (DEMO) ----------------
const MANUAL_JOBS: Job[] = [
  {
    job_title: "Senior Machine Learning Engineer",
    company: "Nexa Labs",
    location: "Remote",
    job_type: "Full-time",
    category: "AI & Machine Learning Jobs",
    tags: ["Remote", "Full-Time"],
    salary: "₹18,00,000 - ₹30,00,000",
    apply_link: "/go/nexa-senior-ml",
    source_name: "Manual",
    posted_at: new Date().toISOString(),
    logo: "",
  },
  {
    job_title: "ML Researcher — Vision",
    company: "Visionary AI",
    location: "Hybrid — San Francisco, USA",
    job_type: "Full-time",
    category: "Computer Vision Jobs",
    tags: ["Hybrid", "Full-Time"],
    salary: "$140k - $180k",
    apply_link: "/go/visionary-ml",
    source_name: "Manual",
    posted_at: new Date().toISOString(),
    logo: "",
  },
];

export default function AIJobsClient() {
  const [q, setQ] = useState("");
  const [location, setLocation] = useState<string>("");
  const [jobType, setJobType] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(25);

  const [jobs, setJobs] = useState<Job[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  // ---------------- FETCH JOBS ----------------
  async function fetchJobs() {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("per_page", String(perPage));
      if (q) params.set("q", q);
      if (location) params.set("location", location);
      if (jobType) params.set("job_type", jobType);
      if (category) params.set("category", category);
      if (experience) params.set("experience", experience);

      const res = await fetch(`/api/ai-jobs?${params.toString()}`);
      const json = await res.json();

      const merged = [...MANUAL_JOBS, ...(json.jobs as Job[])].slice(0, 2000);
      setJobs(merged);
      setTotal(json.total + MANUAL_JOBS.length);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, [q, location, jobType, category, experience, page]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil((total || 0) / perPage)),
    [total, perPage]
  );

  return (
    <main className="bg-white min-h-screen text-neutral-900 font-inter">
      {/* ---------------------------------- HEADER ---------------------------------- */}
      <header className="max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-neutral-100 flex items-center justify-center mb-6 border">
          <FaBriefcase className="text-neutral-700 text-2xl" />
        </div>

        <h1 className="text-4xl font-montserrat font-bold text-neutral-800">
          AI Job Portal
        </h1>

        <p className="text-neutral-500 text-lg mt-3">
          Find 1000+ AI & tech jobs — updated daily from global companies.
        </p>
      </header>

      {/* ---------------------------------- CATEGORY FILTER CHIPS ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {MANUAL_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory((prev) => (prev === c ? "" : c));
                setPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition border
                ${
                  category === c
                    ? "bg-blue-600 text-white"
                    : "bg-neutral-50 border-neutral-200 text-neutral-700"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* ---------------------------------- SEARCH + FILTERS ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Bar */}
          <div className="md:col-span-2">
            <div className="relative">
              <FaSearch className="absolute left-4 top-3 text-neutral-400" />
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setPage(1);
                }}
                placeholder="Search jobs — title, company, skills..."
                className="w-full pl-12 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Location + Type */}
          <div className="flex gap-3">
            <select
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setPage(1);
              }}
              className="px-4 py-2 border rounded-full w-full"
            >
              <option value="">All Locations</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-Site">On-Site</option>
            </select>

            <select
              value={jobType}
              onChange={(e) => {
                setJobType(e.target.value);
                setPage(1);
              }}
              className="px-4 py-2 border rounded-full w-full"
            >
              <option value="">All Types</option>
              <option value="Full-time">Full-Time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>
      </section>

      {/* ---------------------------------- FEATURED JOBS ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-montserrat font-bold mb-6 text-neutral-800">
          Featured AI Jobs
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MANUAL_JOBS.map((job, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-neutral-900 text-lg">
                    {job.job_title}
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    {job.company} • {job.location}
                  </p>
                </div>

                <span className="text-xs text-neutral-400">
                  {job.posted_at
                    ? new Date(job.posted_at).toLocaleDateString()
                    : ""}
                </span>
              </div>

              <p className="mt-3 text-neutral-600 text-sm line-clamp-2">
                {job.tags?.join(" • ") ?? ""}
              </p>

              <div className="mt-4 flex justify-between items-center">
                <a
                  href={job.apply_link}
                  target="_blank"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
                >
                  View Job
                </a>
                <span className="text-xs text-neutral-500">{job.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------- CSV JOBS ---------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-montserrat font-bold mb-6 text-neutral-800">
          All Jobs
        </h2>

        {loading ? (
          <div className="text-center py-20 text-neutral-500">Loading...</div>
        ) : (
          <>
            <div className="grid gap-4">
              {jobs
                .slice((page - 1) * perPage, page * perPage)
                .map((job, idx) => (
                  <div
                    key={idx}
                    className="border bg-white rounded-2xl p-4 flex justify-between items-center hover:shadow-sm transition"
                  >
                    <div className="flex gap-4">
                      {job.logo ? (
                        <img
                          src={job.logo}
                          className="h-12 w-12 rounded-lg object-contain"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-400">
                          <FaBriefcase />
                        </div>
                      )}

                      <div>
                        <a
                          href={job.apply_link}
                          target="_blank"
                          className="font-semibold text-neutral-900 text-sm hover:underline"
                        >
                          {job.job_title}
                        </a>
                        <p className="text-xs text-neutral-500">
                          {job.company} • {job.location}
                        </p>
                        <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
                          {job.tags?.join(", ") ?? job.category}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <p className="text-xs text-neutral-500">{job.job_type}</p>

                      <a
                        href={job.apply_link}
                        target="_blank"
                        className="mt-2 text-sm bg-blue-600 text-white px-3 py-1 rounded-full"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-between items-center mt-8">
              <p className="text-sm text-neutral-500">
                Page {page} of {totalPages}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1 border rounded-full"
                >
                  Prev
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="px-3 py-1 border rounded-full"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
