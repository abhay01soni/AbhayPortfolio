"use client";

import { portfolioData } from "@/data/portfolioData";
import SkillOrbs from "./SkillOrbs";

export default function About() {
  const { personal } = portfolioData;

  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-24 w-full"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-heading)]">
          About Me
        </h2>
        <div className="h-[1px] bg-[var(--border)] flex-grow max-w-xs" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bio */}
        <div className="lg:col-span-7 space-y-5 text-[var(--text-muted)] text-base leading-relaxed">
          {personal.aboutBio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Right Column: Interactive Skill Orbs */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <SkillOrbs />
        </div>
      </div>
    </section>
  );
}
