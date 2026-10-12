"use client";

import { portfolioData } from "@/data/portfolioData";

export default function EmailSidebar() {
  return (
    <aside
      aria-label="Direct email link"
      className="hidden lg:flex fixed bottom-0 right-8 xl:right-12 z-30 flex-col items-center"
    >
      <div className="mb-6">
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] hover:-translate-y-1 transform transition-all duration-200 tracking-widest block focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          style={{
            writingMode: "vertical-rl",
            letterSpacing: "0.15em",
          }}
        >
          {portfolioData.personal.email}
        </a>
      </div>
      {/* Thin vertical line below email */}
      <div className="w-[1px] h-24 bg-[var(--border)]" />
    </aside>
  );
}
