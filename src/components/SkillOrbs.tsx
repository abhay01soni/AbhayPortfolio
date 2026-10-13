"use client";

import React, { useEffect, useRef, useState, useId } from "react";

// ============================================================================
// 1. CONFIGURATION & TUNING CONSTANTS
// ============================================================================

/**
 * Interaction Mode:
 * - "repel": Orbs push away from the cursor
 * - "attract": Orbs are drawn gently toward the cursor
 */
export const INTERACTION_MODE: "repel" | "attract" = "repel";

/**
 * Interaction Physics Settings
 */
export const REPEL_STRENGTH = 40; // Max displacement in pixels
export const INTERACTION_RADIUS = 135; // Cursor influence radius in pixels
export const LERP_FACTOR = 0.08; // Spring smoothing speed (0.02 = sluggish, 0.15 = snappy)
export const FLOAT_SPEED_BASE = 0.0014; // Base idle drifting speed

/**
 * Theme & Glow Colors
 */
export const ACCENT_GLOW_COLOR = "#8b5cf6"; // Purple accent glow
export const CONTAINER_SIZE = 420; // Reference container width/height in px

// ============================================================================
// 2. SKILL ORB DATA DEFINITION
// Easily add, reorder, or remove skills here.
// ============================================================================

export interface SkillOrb {
  id: string;
  name: string;
  size: number; // Diameter in pixels (56px to 88px)
  homeX: number; // Offset from container center in pixels (-150 to 150)
  homeY: number; // Offset from container center in pixels (-150 to 150)
  color: string; // Brand accent color
  bgGlow: string; // Ambient radial glow color
  floatSpeed: number; // Speed multiplier for idle drift
  floatAmpX: number; // Drift amplitude X (px)
  floatAmpY: number; // Drift amplitude Y (px)
  phase: number; // Phase offset in radians (ensures organic non-sync float)
  icon: React.ReactNode;
}

export const SKILL_ORBS: SkillOrb[] = [
  {
    id: "react",
    name: "React.js",
    size: 86,
    homeX: 105,
    homeY: -75,
    color: "#61DAFB",
    bgGlow: "rgba(97, 218, 251, 0.28)",
    floatSpeed: 1.0,
    floatAmpX: 7,
    floatAmpY: 9,
    phase: 0.2,
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    id: "nodejs",
    name: "Node.js",
    size: 82,
    homeX: -105,
    homeY: -80,
    color: "#68A063",
    bgGlow: "rgba(104, 160, 99, 0.28)",
    floatSpeed: 0.85,
    floatAmpX: 8,
    floatAmpY: 6,
    phase: 1.8,
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="currentColor">
        <path
          fill="#68A063"
          d="M12 2.5a2 2 0 0 0-1 .27l-7 4A2 2 0 0 0 3 8.5v7a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 15.5v-7a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-1-.27zm0 2.3l6.5 3.73-2.6 1.5-3.9-2.24V4.8zm-1 0v2.99l-3.9 2.24-2.6-1.5L11 4.8zm-7 5.23l3.5 2v4.06l-3.5-2V10.03zm16 0v4.06l-3.5 2V12.03l3.5-2zm-8.5 4.3l3.5 2.01-3.5 2.01-3.5-2.01 3.5-2.01z"
        />
      </svg>
    ),
  },
  {
    id: "mongodb",
    name: "MongoDB",
    size: 78,
    homeX: 95,
    homeY: 85,
    color: "#47A248",
    bgGlow: "rgba(71, 162, 72, 0.28)",
    floatSpeed: 1.15,
    floatAmpX: 6,
    floatAmpY: 8,
    phase: 3.4,
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <path
          fill="#47A248"
          d="M12.007 1.5c-.32 0-.64.08-.92.24-1.2 1.4-5.087 6.47-5.087 11.26 0 4.26 3.12 7.74 6.007 9.5 2.887-1.76 6.007-5.24 6.007-9.5 0-4.79-3.887-9.86-5.087-11.26-.28-.16-.6-.24-.92-.24zm-.007 1.8c.28.4 4.5 5.56 4.5 9.7 0 3.25-2.2 6.03-4.5 7.62V3.3z"
        />
      </svg>
    ),
  },
  {
    id: "javascript",
    name: "JavaScript",
    size: 72,
    homeX: -95,
    homeY: 90,
    color: "#F7DF1E",
    bgGlow: "rgba(247, 223, 30, 0.25)",
    floatSpeed: 0.9,
    floatAmpX: 7,
    floatAmpY: 7,
    phase: 4.9,
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <text
          x="12"
          y="16.5"
          fill="#000000"
          fontSize="11.5"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          textAnchor="middle"
          letterSpacing="-0.3px"
        >
          JS
        </text>
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    size: 68,
    homeX: 135,
    homeY: 15,
    color: "#3178C6",
    bgGlow: "rgba(49, 120, 198, 0.28)",
    floatSpeed: 1.05,
    floatAmpX: 6,
    floatAmpY: 6,
    phase: 0.9,
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          fill="#FFFFFF"
          d="M4.5 8.5h6v1.8h-2v7.2h-2V10.3h-2V8.5zm9.5 4.6c.4.3.9.5 1.3.7.6.2.8.4.8.7 0 .3-.3.5-.8.5-.5 0-.9-.2-1.2-.5l-1.1 1.2c.6.6 1.4.9 2.3.9 1.5 0 2.5-1 2.5-2.2 0-.9-.5-1.5-1.4-1.9-.6-.2-1-.4-1.3-.6-.4-.3-.5-.5-.5-.8 0-.4.4-.6.9-.6.6 0 1.1.2 1.4.6l1-1.2c-.6-.6-1.4-.9-2.4-.9-1.6 0-2.6 1-2.6 2.3 0 1.1.5 1.7 1.5 2.1z"
        />
      </svg>
    ),
  },
  {
    id: "express",
    name: "Express.js",
    size: 64,
    homeX: -135,
    homeY: 5,
    color: "#E2E8F0",
    bgGlow: "rgba(226, 232, 240, 0.2)",
    floatSpeed: 0.95,
    floatAmpX: 7,
    floatAmpY: 5,
    phase: 2.7,
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <text
          x="3"
          y="16.5"
          fill="#E2E8F0"
          fontSize="14"
          fontWeight="bold"
          fontFamily="monospace"
        >
          ex
        </text>
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    size: 62,
    homeX: 5,
    homeY: -135,
    color: "#38BDF8",
    bgGlow: "rgba(56, 189, 248, 0.28)",
    floatSpeed: 1.1,
    floatAmpX: 5,
    floatAmpY: 7,
    phase: 5.6,
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git",
    size: 56,
    homeX: -5,
    homeY: 140,
    color: "#F05032",
    bgGlow: "rgba(240, 80, 50, 0.28)",
    floatSpeed: 0.92,
    floatAmpX: 6,
    floatAmpY: 6,
    phase: 4.1,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#F05032">
        <path d="M21.707 10.293l-8-8a.999.999 0 0 0-1.414 0l-1.586 1.586 2.536 2.536c.642-.206 1.385-.062 1.899.452.78.78.78 2.047 0 2.828-.78.78-2.047.78-2.828 0-.514-.514-.658-1.257-.452-1.899L9.32 5.254l-7.027 7.039a.999.999 0 0 0 0 1.414l8 8a.999.999 0 0 0 1.414 0l7.986-8a.999.999 0 0 0 .014-1.414zM12 14.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      </svg>
    ),
  },
];

// Pre-calculated pairs for faint connecting lines
const ORB_PAIRS: [number, number][] = [
  [6, 0], // Tailwind -> React
  [6, 1], // Tailwind -> Node
  [0, 4], // React -> TS
  [4, 2], // TS -> Mongo
  [1, 5], // Node -> Express
  [5, 3], // Express -> JS
  [3, 7], // JS -> Git
  [2, 7], // Mongo -> Git
];

interface SkillOrbsProps {
  className?: string;
}

export default function SkillOrbs({ className = "" }: SkillOrbsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);
  const componentId = useId();

  // State to handle client-side capabilities
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [hoveredOrbId, setHoveredOrbId] = useState<string | null>(null);
  const [activePulseId, setActivePulseId] = useState<string | null>(null);

  // Mutable animation state references to avoid React render lags in 60fps loop
  const mousePos = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  const orbPositions = useRef<
    {
      currX: number;
      currY: number;
      targetX: number;
      targetY: number;
    }[]
  >(
    SKILL_ORBS.map((orb) => ({
      currX: orb.homeX,
      currY: orb.homeY,
      targetX: orb.homeX,
      targetY: orb.homeY,
    }))
  );

  // References to DOM elements for direct transform updates (zero React overhead)
  const orbElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineElementsRef = useRef<(SVGLineElement | null)[]>([]);

  // ============================================================================
  // Accessibility & Environment Detection
  // ============================================================================
  useEffect(() => {
    // 1. Reduced Motion Preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    // 2. Touch Device Detection
    const touchQuery = window.matchMedia("(hover: none)");
    setIsTouch(touchQuery.matches || "ontouchstart" in window || navigator.maxTouchPoints > 0);

    // 3. Intersection Observer (Pause rAF when offscreen)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      observer.disconnect();
    };
  }, []);

  // ============================================================================
  // Single requestAnimationFrame Loop with Lerp Smoothing
  // ============================================================================
  useEffect(() => {
    if (reducedMotion) return;

    let startTime = performance.now();

    const renderLoop = (currentTime: number) => {
      // Only compute and update when visible in viewport
      if (isVisibleRef.current) {
        const elapsed = currentTime - startTime;

        SKILL_ORBS.forEach((orb, i) => {
          // 1. Idle organic drift computation
          const t = elapsed * FLOAT_SPEED_BASE * orb.floatSpeed + orb.phase;
          const idleX = Math.sin(t) * orb.floatAmpX;
          const idleY = Math.cos(t * 0.85) * orb.floatAmpY;

          const currentHomeX = orb.homeX + idleX;
          const currentHomeY = orb.homeY + idleY;

          // 2. Cursor reaction (repel or attract)
          let offsetX = 0;
          let offsetY = 0;

          if (mousePos.current.active && !isTouch) {
            const dx = currentHomeX - mousePos.current.x;
            const dy = currentHomeY - mousePos.current.y;
            const distance = Math.hypot(dx, dy);

            if (distance < INTERACTION_RADIUS && distance > 0) {
              const falloff = 1 - distance / INTERACTION_RADIUS;
              const force = falloff * falloff * REPEL_STRENGTH;

              if (INTERACTION_MODE === "repel") {
                offsetX = (dx / distance) * force;
                offsetY = (dy / distance) * force;
              } else {
                offsetX = -(dx / distance) * force;
                offsetY = -(dy / distance) * force;
              }
            }
          }

          // Target position
          const targetX = currentHomeX + offsetX;
          const targetY = currentHomeY + offsetY;

          // 3. Lerp interpolation
          const state = orbPositions.current[i];
          state.currX += (targetX - state.currX) * LERP_FACTOR;
          state.currY += (targetY - state.currY) * LERP_FACTOR;

          // 4. Direct DOM transform application (efficient 60-120fps)
          const el = orbElementsRef.current[i];
          if (el) {
            const isHovered = hoveredOrbId === orb.id;
            const scale = isHovered ? 1.15 : 1.0;
            el.style.transform = `translate3d(${state.currX}px, ${state.currY}px, 0) scale(${scale})`;
          }
        });

        // 5. Update SVG connecting lines
        ORB_PAIRS.forEach(([iA, iB], lineIdx) => {
          const lineEl = lineElementsRef.current[lineIdx];
          if (lineEl && orbPositions.current[iA] && orbPositions.current[iB]) {
            const posA = orbPositions.current[iA];
            const posB = orbPositions.current[iB];
            const centerOffset = CONTAINER_SIZE / 2;

            lineEl.setAttribute("x1", `${posA.currX + centerOffset}`);
            lineEl.setAttribute("y1", `${posA.currY + centerOffset}`);
            lineEl.setAttribute("x2", `${posB.currX + centerOffset}`);
            lineEl.setAttribute("y2", `${posB.currY + centerOffset}`);
          }
        });
      }

      animFrameRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [reducedMotion, isTouch, hoveredOrbId]);

  // ============================================================================
  // Mouse Movement Handlers
  // ============================================================================
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || isTouch || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalizing mouse coordinates relative to container center
    // Scale factor accounts for responsive scaling (e.g. mobile/tablet)
    const scaleFactor = CONTAINER_SIZE / rect.width;
    mousePos.current.x = (e.clientX - centerX) * scaleFactor;
    mousePos.current.y = (e.clientY - centerY) * scaleFactor;
    mousePos.current.active = true;
  };

  const handleMouseLeave = () => {
    mousePos.current.active = false;
    setHoveredOrbId(null);
  };

  const handleOrbClick = (id: string) => {
    setActivePulseId(id);
    setTimeout(() => {
      setActivePulseId(null);
    }, 600);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Interactive Skill Orbs visualization"
      className={`relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[420px] aspect-square flex items-center justify-center select-none mx-auto lg:mx-0 ${className}`}
    >
      {/* Dynamic Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full opacity-25 blur-[75px] pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${ACCENT_GLOW_COLOR} 0%, rgba(139, 92, 246, 0.08) 55%, transparent 75%)`,
        }}
      />

      {/* Decorative dashed ambient purple ring */}
      <div
        aria-hidden="true"
        className={`absolute w-[290px] h-[290px] sm:w-[340px] sm:h-[340px] rounded-full border border-dashed border-[#8b5cf6]/25 pointer-events-none ${
          reducedMotion ? "" : "animate-[spin_55s_linear_infinite]"
        }`}
      />

      {/* Subtle secondary inner dashed ring */}
      <div
        aria-hidden="true"
        className={`absolute w-[180px] h-[180px] sm:w-[210px] sm:h-[210px] rounded-full border border-dashed border-[#8b5cf6]/15 pointer-events-none ${
          reducedMotion ? "" : "animate-[spin_40s_linear_infinite_reverse]"
        }`}
      />

      {/* Scaled coordinate container matching CONTAINER_SIZE (420x420) */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-visible"
        style={{ maxWidth: `${CONTAINER_SIZE}px`, maxHeight: `${CONTAINER_SIZE}px` }}
      >
        {/* SVG layer for faint connecting lines */}
        <svg
          aria-hidden="true"
          viewBox={`0 0 ${CONTAINER_SIZE} ${CONTAINER_SIZE}`}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        >
          {ORB_PAIRS.map(([iA, iB], idx) => {
            const orbA = SKILL_ORBS[iA];
            const orbB = SKILL_ORBS[iB];
            const isNearActive =
              hoveredOrbId === orbA.id || hoveredOrbId === orbB.id;

            return (
              <line
                key={`${orbA.id}-${orbB.id}`}
                ref={(el) => {
                  lineElementsRef.current[idx] = el;
                }}
                x1={orbA.homeX + CONTAINER_SIZE / 2}
                y1={orbA.homeY + CONTAINER_SIZE / 2}
                x2={orbB.homeX + CONTAINER_SIZE / 2}
                y2={orbB.homeY + CONTAINER_SIZE / 2}
                stroke={isNearActive ? "rgba(139, 92, 246, 0.45)" : "rgba(139, 92, 246, 0.12)"}
                strokeWidth={isNearActive ? "1.5" : "1"}
                strokeDasharray="3 3"
                className="transition-colors duration-300"
              />
            );
          })}
        </svg>

        {/* Central Glowing </> Core */}
        <div
          aria-label="Core Developer Symbol"
          className="absolute z-10 w-14 h-14 rounded-full flex items-center justify-center bg-[#12131F]/90 border border-[#8b5cf6]/40 backdrop-blur-md shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all duration-300 group hover:scale-110"
          style={{
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_0%,transparent_70%)] animate-pulse" />
          <span className="font-mono text-sm sm:text-base font-bold text-[#A78BFA] tracking-tighter drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">
            &lt;/&gt;
          </span>
        </div>

        {/* Interactive Floating Skill Orbs */}
        {SKILL_ORBS.map((orb, index) => {
          const isHovered = hoveredOrbId === orb.id;
          const isPulsing = activePulseId === orb.id;

          return (
            <div
              key={orb.id}
              ref={(el) => {
                orbElementsRef.current[index] = el;
              }}
              style={{
                width: `${orb.size}px`,
                height: `${orb.size}px`,
                transform: `translate3d(${orb.homeX}px, ${orb.homeY}px, 0)`,
                willChange: "transform",
              }}
              className="absolute z-20 flex flex-col items-center justify-center transition-all duration-200"
            >
              {/* Click Ripple / Pulse Effect */}
              {isPulsing && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full animate-ping pointer-events-none opacity-75"
                  style={{ backgroundColor: orb.color }}
                />
              )}

              {/* Orb Glass Circle */}
              <button
                type="button"
                aria-label={`Skill: ${orb.name}`}
                title={orb.name}
                onClick={() => handleOrbClick(orb.id)}
                onMouseEnter={() => setHoveredOrbId(orb.id)}
                onMouseLeave={() => setHoveredOrbId(null)}
                onFocus={() => setHoveredOrbId(orb.id)}
                onBlur={() => setHoveredOrbId(null)}
                style={{
                  boxShadow: isHovered
                    ? `0 0 24px ${orb.bgGlow}, 0 0 12px ${ACCENT_GLOW_COLOR}, inset 0 1px 1px rgba(255,255,255,0.2)`
                    : `0 4px 18px -2px rgba(10, 11, 16, 0.7), 0 0 14px ${orb.bgGlow}, inset 0 1px 1px rgba(255,255,255,0.08)`,
                  borderColor: isHovered ? orb.color : "rgba(139, 92, 246, 0.3)",
                }}
                className={`relative w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-[#191929]/95 via-[#131320]/95 to-[#0E0F17]/95 border backdrop-blur-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] transition-all duration-300 ${
                  isHovered ? "border-opacity-100" : ""
                }`}
              >
                {/* Subtle Inner Sheen */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.12)_0%,transparent_60%)] pointer-events-none"
                />

                {/* Tech Icon */}
                <div
                  className="relative z-10 transition-transform duration-300"
                  style={{
                    transform: isHovered ? "scale(1.12)" : "scale(1.0)",
                    filter: isHovered ? `drop-shadow(0 0 6px ${orb.color})` : "none",
                  }}
                >
                  {orb.icon}
                </div>
              </button>

              {/* Floating Skill Label (fades in smoothly below orb on hover/focus) */}
              <div
                aria-hidden={!isHovered}
                style={{
                  borderColor: `${orb.color}40`,
                }}
                className={`absolute -bottom-7 z-30 px-2 py-0.5 rounded-md bg-[#0F0F1A]/95 border text-[11px] font-medium tracking-wide whitespace-nowrap shadow-xl backdrop-blur-md pointer-events-none transition-all duration-200 ${
                  isHovered
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-1.5 scale-95"
                }`}
              >
                <span style={{ color: orb.color }}>{orb.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
