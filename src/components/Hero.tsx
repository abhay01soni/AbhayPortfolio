"use client";

import { Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="min-h-screen flex items-center pt-24 pb-16 relative"
    >
      {/* Subtle background ambient glow (single violet accent) */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[var(--accent)] opacity-[0.07] rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-4xl xl:max-w-5xl w-full flex flex-col items-start z-10">
        {/* Status Badge with Pulsing Dot */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] shadow-sm mb-6 transition-colors hover:border-[var(--accent)]">
          <span className="w-2 rounded-full h-2 bg-[var(--accent)] pulse-dot inline-block" />
          <span className="text-xs font-mono font-medium text-[var(--text-muted)]">
            {personal.statusBadge}
          </span>
        </div>

        {/* Intro Greeting in Mono font */}
        <p className="font-mono text-[var(--accent)] text-sm mb-3 tracking-normal">
          Hi, my name is
        </p>

        {/* Name - Stronger, bolder sizing like reference */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[var(--text-heading)] tracking-tight leading-tight mb-2 sm:mb-3">
          {personal.name}
        </h1>

        {/* Tagline in muted color - Single line on desktop */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[var(--text-muted)] tracking-tight leading-tight mb-6 md:whitespace-nowrap">
          {personal.headline}
        </h2>

        {/* Short intro paragraph */}
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed mb-8">
          {personal.shortIntro}
        </p>

        {/* CTA Button */}
        <div className="flex items-center gap-4 pt-1">
          <a
            href="#contact"
            className="btn-accent-outline px-6 py-3 rounded-lg text-xs sm:text-sm font-mono font-semibold inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
