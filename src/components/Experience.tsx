"use client";

import { useState } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { portfolioData, Experience as ExperienceType } from "@/data/portfolioData";

export default function Experience() {
  const { experiences } = portfolioData;
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeExp = experiences[activeTab] || experiences[0];

  return (
    <section
      id="experience"
      aria-label="Work Experience"
      className="py-24 px-6 sm:px-8 max-w-4xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-[var(--text-heading)]">
          <span className="font-mono text-lg sm:text-xl text-[var(--accent)] mr-3">
            03.
          </span>
          Where I&apos;ve Worked
        </h2>
        <div className="h-[1px] bg-[var(--border)] flex-grow max-w-xs" />
      </div>

      {/* Tabbed Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Company Tab List */}
        <div
          role="tablist"
          aria-label="Companies"
          className="md:col-span-4 flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-[var(--border)] pb-2 md:pb-0 scrollbar-none"
        >
          {experiences.map((exp, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={exp.id}
                role="tab"
                id={`tab-${exp.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${exp.id}`}
                onClick={() => setActiveTab(index)}
                className={`text-left px-5 py-3.5 text-xs sm:text-sm font-mono whitespace-nowrap transition-all duration-200 cursor-pointer relative ${
                  isActive
                    ? "text-[var(--accent)] bg-[var(--accent-glow-subtle)] font-semibold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-card)]"
                }`}
              >
                {/* Active indicator bar */}
                <span
                  aria-hidden="true"
                  className={`hidden md:block absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[var(--accent)] transition-all ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`md:hidden absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[var(--accent)] transition-all ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                {exp.company}
              </button>
            );
          })}
        </div>

        {/* Experience Details Content */}
        <div
          role="tabpanel"
          id={`panel-${activeExp.id}`}
          aria-labelledby={`tab-${activeExp.id}`}
          className="md:col-span-8 p-6 sm:p-8 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] transition-all duration-300"
        >
          {/* Role & Company */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-[var(--text-heading)]">
              {activeExp.role}{" "}
              <span className="text-[var(--accent)]">
                @ {activeExp.company}
              </span>
            </h3>
          </div>

          {/* Meta: Period & Location */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] mb-6">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
              {activeExp.period}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
              {activeExp.location}
            </span>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-3.5 mb-6 text-sm sm:text-base text-[var(--text-muted)]">
            {activeExp.description.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[var(--accent)] text-sm font-mono mt-0.5 shrink-0">
                  ▹
                </span>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Skills used */}
          <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-2">
            {activeExp.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
