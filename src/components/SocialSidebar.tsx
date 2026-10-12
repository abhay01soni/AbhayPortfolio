"use client";

import { portfolioData } from "@/data/portfolioData";
import { SocialIcon } from "./SocialIcons";

export default function SocialSidebar() {
  return (
    <aside
      aria-label="Social media links"
      className="hidden lg:flex fixed bottom-0 left-8 xl:left-10 z-30 flex-col items-center"
    >
      <ul className="flex flex-col items-center space-y-6 mb-6">
        {portfolioData.socialLinks.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              className="text-[var(--text-muted)] hover:text-[var(--accent)] hover:-translate-y-1 transform transition-all duration-200 p-1.5 block focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <SocialIcon name={item.icon} className="w-6 h-6" />
            </a>
          </li>
        ))}
      </ul>
      {/* Thin vertical line below socials */}
      <div className="w-[1px] h-24 bg-[var(--border)]" />
    </aside>
  );
}
