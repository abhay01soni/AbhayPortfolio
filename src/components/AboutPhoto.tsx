"use client";

import React from "react";

export default function AboutPhoto() {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto lg:mx-0 group">
      {/* Outer offset accent border */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-xl border-2 border-[var(--accent)] transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5"
      />

      {/* Main image container */}
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 shadow-lg">
        {/* Modern Vector Developer Portrait */}
        <svg
          viewBox="0 0 320 320"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Abhay Soni Portrait Illustration"
          role="img"
        >
          {/* Subtle gradient backdrop */}
          <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--bg-card)" />
              <stop offset="100%" stopColor="#1a1a28" />
            </linearGradient>
            <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#252538" />
              <stop offset="100%" stopColor="#151522" />
            </linearGradient>
            <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Background */}
          <rect width="320" height="320" fill="url(#bgGrad)" />

          {/* Subtle tech grid lines in background */}
          <path
            d="M0 80 H320 M0 160 H320 M0 240 H320 M80 0 V320 M160 0 V320 M240 0 V320"
            stroke="var(--border)"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            opacity="0.3"
          />

          {/* Ambient rim light circle */}
          <circle cx="160" cy="140" r="110" fill="none" stroke="url(#accentGlow)" strokeWidth="1.5" strokeDasharray="6 6" />

          {/* Developer shoulders / hoodie */}
          <path
            d="M70 320 C70 240, 110 220, 160 220 C210 220, 250 240, 250 320 Z"
            fill="url(#hoodieGrad)"
          />

          {/* Hoodie collar line with accent trim */}
          <path
            d="M130 225 L160 255 L190 225"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Neck */}
          <path d="M140 185 L140 225 L180 225 L180 185 Z" fill="#D39E82" />

          {/* Head & face */}
          <path
            d="M120 135 C120 90, 200 90, 200 135 C200 175, 120 175, 120 135 Z"
            fill="#E0AC8D"
          />

          {/* Hair */}
          <path
            d="M115 125 C115 80, 140 65, 165 65 C190 65, 205 80, 205 120 C195 105, 185 100, 160 100 C135 100, 125 110, 115 125 Z"
            fill="#1A1824"
          />

          {/* Minimalist Glasses with violet accent frame */}
          <rect x="127" y="125" width="28" height="18" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2" />
          <rect x="165" y="125" width="28" height="18" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2" />
          <line x1="155" y1="134" x2="165" y2="134" stroke="var(--accent)" strokeWidth="2" />

          {/* Eyes */}
          <circle cx="141" cy="134" r="2.5" fill="#1A1824" />
          <circle cx="179" cy="134" r="2.5" fill="#1A1824" />

          {/* Smile */}
          <path d="M148 160 Q160 167 172 160" fill="none" stroke="#9E6B52" strokeWidth="2" strokeLinecap="round" />

          {/* Developer Headphones */}
          <path
            d="M106 130 C106 85, 214 85, 214 130"
            fill="none"
            stroke="var(--border)"
            strokeWidth="6"
          />
          <rect x="100" y="120" width="12" height="32" rx="6" fill="var(--bg-card)" stroke="var(--accent)" strokeWidth="2" />
          <rect x="208" y="120" width="12" height="32" rx="6" fill="var(--bg-card)" stroke="var(--accent)" strokeWidth="2" />

          {/* Terminal / Code symbol badge on chest */}
          <g transform="translate(142, 275)">
            <rect width="36" height="22" rx="4" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1" />
            <text x="7" y="15" fill="var(--accent)" fontSize="11" fontFamily="monospace" fontWeight="bold">
              &lt;/&gt;
            </text>
          </g>
        </svg>

        {/* Subtle violet overlay on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
        />
      </div>
    </div>
  );
}
