"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { SocialIcon } from "./SocialIcons";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      role="contentinfo"
      className="py-12 px-6 sm:px-8 border-t border-[var(--border)] text-center text-xs font-mono text-[var(--text-muted)]"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        {/* Mobile/Tablet Socials (visible on smaller screens where sidebars are hidden) */}
        <div className="flex lg:hidden items-center justify-center gap-6">
          {portfolioData.socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              className="text-[var(--text-muted)] hover:text-[var(--accent)] hover:-translate-y-1 transform transition-all duration-200 p-2"
            >
              <SocialIcon name={item.icon} className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Credit Link */}
        <div className="space-y-2">
          <p className="hover:text-[var(--accent)] transition-colors">
            Designed &amp; built by{" "}
            <span className="text-[var(--accent)] font-semibold">
              {portfolioData.personal.name}
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
}
