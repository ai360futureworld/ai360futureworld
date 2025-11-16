// components/ToolsGridClient.tsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import type { Tool } from "../data/manual-tools";

export interface ToolsGridClientProps {
  tools: Tool[];
  initialCategories?: string[];
  pageSize?: number;
}

export default function ToolsGridClient({
  tools,
  initialCategories = [],
  pageSize = 12,
}: ToolsGridClientProps) {
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("All");
  const [page, setPage] = useState<number>(1);

  const categories = useMemo(() => {
    const fromTools = Array.from(new Set(tools.map((t) => t.category))).filter(
      Boolean
    );
    const merged = Array.from(
      new Set(["All", ...initialCategories, ...fromTools])
    );
    return merged;
  }, [tools, initialCategories]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((t) => {
      if (category !== "All" && t.category !== category) return false;
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        (t.description && t.description.toLowerCase().includes(q)) ||
        (t.category && t.category.toLowerCase().includes(q))
      );
    });
  }, [tools, category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
        <div className="flex-1">
          <input
            aria-label="Search AI tools"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search AI tools, category, or feature..."
            className="w-full border border-neutral-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-3 items-center mt-3 md:mt-0">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
            className="border border-neutral-200 px-3 py-2 rounded-lg"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <div className="text-sm text-neutral-500">
            {filtered.length} results
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginated.map((t) => (
          <article
            key={t.slug}
            className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              <img
                src={t.icon ?? `https://logo.clearbit.com/${t.slug}.com`}
                alt={`${t.name} logo`}
                className="w-14 h-14 rounded-lg object-contain bg-neutral-50 p-2"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/images/tool-placeholder.svg";
                }}
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {t.name}
                </h3>
                <p className="text-xs text-neutral-500 mt-1">{t.category}</p>
                <p className="text-sm text-neutral-600 mt-3 line-clamp-3">
                  {t.description}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <Link
                href={`/tools/${t.slug}`}
                className="text-sm text-neutral-700 hover:underline"
              >
                Explore Tool →
              </Link>

              <a
                href={`/go/${t.slug}`}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-lg"
                aria-label={`Try ${t.name} (Affiliate)`}
              >
                Try Now
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-between">
        <div className="text-sm text-neutral-500">
          Page {page} of {totalPages}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-2 border rounded-lg disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-2 border rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
