"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, CornerDownLeft } from "lucide-react";
import { searchIndex, type SearchEntry } from "./searchIndex";

function rank(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return searchIndex
    .map((entry) => {
      const title = entry.title.toLowerCase();
      const haystack = `${title} ${entry.group} ${entry.description} ${entry.keywords.join(" ")}`.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (!haystack.includes(term)) return null;
        score += title.includes(term) ? 3 : 1;
      }
      return { entry, score };
    })
    .filter((r): r is { entry: SearchEntry; score: number } => r !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((r) => r.entry);
}

export function DocSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useMemo(() => rank(query), [query]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = results[active];
      if (target) {
        router.push(target.href);
        setQuery("");
        setOpen(false);
      }
    }
  }

  const showPanel = open && query.trim().length > 0;

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2 focus-within:border-[#05ADEE] focus-within:ring-1 focus-within:ring-[#05ADEE] transition-colors">
        <Search className="w-4 h-4 text-gray-400 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Search documentation..."
          aria-label="Search documentation"
          className="w-full text-sm text-gray-900 placeholder-gray-400 bg-transparent outline-none"
        />
      </div>

      {showPanel && (
        <div className="absolute z-30 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          {results.length === 0 ? (
            <p className="px-4 py-6 text-sm text-gray-500 text-center">No results for &ldquo;{query}&rdquo;</p>
          ) : (
            <ul className="max-h-96 overflow-y-auto py-1">
              {results.map((r, i) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    onClick={() => {
                      setQuery("");
                      setOpen(false);
                    }}
                    onMouseEnter={() => setActive(i)}
                    className={`flex items-start gap-3 px-4 py-2.5 ${active === i ? "bg-[#05ADEE]/10" : "hover:bg-gray-50"}`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900 truncate">{r.title}</span>
                        <span className="text-[10px] uppercase tracking-wide text-gray-400 shrink-0">{r.group}</span>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{r.description}</p>
                    </div>
                    {active === i && <CornerDownLeft className="w-3.5 h-3.5 text-[#05ADEE] mt-1 shrink-0" />}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
