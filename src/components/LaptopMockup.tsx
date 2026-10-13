"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

// ==========================================
// CONFIGURABLE CONSTANTS (Easy to tweak)
// ==========================================
const DEFAULT_SCREENSHOT_SRC = "/assets/project-screenshot.png";
const DEFAULT_SCREENSHOT_ALT = "BookMyEvent Event Booking Platform Preview";
const BROWSER_URL = "bookmyevent.app";

// Interaction Settings
const MAX_TILT_DESKTOP = 13; // Maximum tilt angle in degrees (Desktop)
const MAX_TILT_MOBILE = 5;   // Maximum tilt angle in degrees (Mobile / Tablet)
const LERP_SPEED = 0.08;      // Smooth interpolation factor (0.05 = slower, 0.15 = faster)
const FLOAT_DURATION = 6;    // Idle floating cycle duration in seconds

// Color & Glow Tokens
const ACCENT_COLOR = "var(--accent, #8B5CF6)";
const ACCENT_GLOW = "rgba(139, 92, 246, 0.35)";

interface LaptopMockupProps {
  screenshotSrc?: string;
  screenshotAlt?: string;
  className?: string;
}

export default function LaptopMockup({
  screenshotSrc = DEFAULT_SCREENSHOT_SRC,
  screenshotAlt = DEFAULT_SCREENSHOT_ALT,
  className = "",
}: LaptopMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Target and current interpolated tilt values
  const targetTilt = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });

  // Render state for CSS transforms
  const [tiltStyle, setTiltStyle] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check user motion preferences & touch capability
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touch);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Smooth lerp loop with requestAnimationFrame
  const updateTilt = useCallback(() => {
    if (reducedMotion) return;

    // Linear interpolation
    currentTilt.current.x += (targetTilt.current.x - currentTilt.current.x) * LERP_SPEED;
    currentTilt.current.y += (targetTilt.current.y - currentTilt.current.y) * LERP_SPEED;

    // Map tilt to glare sheen position (inverted for realistic lighting reflection)
    const glareX = 50 + (currentTilt.current.y / MAX_TILT_DESKTOP) * 35;
    const glareY = 50 - (currentTilt.current.x / MAX_TILT_DESKTOP) * 35;

    setTiltStyle({
      rotateX: Number(currentTilt.current.x.toFixed(2)),
      rotateY: Number(currentTilt.current.y.toFixed(2)),
      glareX: Number(glareX.toFixed(1)),
      glareY: Number(glareY.toFixed(1)),
    });

    // Continue loop if moving or hovered
    animFrameRef.current = requestAnimationFrame(updateTilt);
  }, [reducedMotion]);

  useEffect(() => {
    if (!reducedMotion) {
      animFrameRef.current = requestAnimationFrame(updateTilt);
    }
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [updateTilt, reducedMotion]);

  // Handle mouse move over container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || isTouchDevice || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxTilt = window.innerWidth < 768 ? MAX_TILT_MOBILE : MAX_TILT_DESKTOP;

    // Calculate rotation: mouseY rotates around X-axis (invert so pulling down pitches up)
    const rotateX = -(mouseY / (rect.height / 2)) * maxTilt;
    const rotateY = (mouseX / (rect.width / 2)) * maxTilt;

    targetTilt.current = {
      x: Math.max(-maxTilt, Math.min(maxTilt, rotateX)),
      y: Math.max(-maxTilt, Math.min(maxTilt, rotateY)),
    };
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice && !reducedMotion) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly return back to neutral center
    targetTilt.current = { x: 0, y: 0 };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[420px] sm:max-w-[460px] md:max-w-[500px] aspect-[4/3] flex items-center justify-center select-none py-4 mx-auto lg:mx-0 ${className}`}
      style={{ perspective: "1200px" }}
    >
      {/* Decorative dashed ambient ring (preserved from original design) */}
      <div
        aria-hidden="true"
        className={`absolute w-[290px] h-[290px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] rounded-full border-2 border-dashed border-[var(--accent)] pointer-events-none opacity-25 transition-transform duration-700 ${
          reducedMotion ? "" : "animate-[spin_40s_linear_infinite]"
        }`}
      />

      {/* Ambient background soft glow */}
      <div
        aria-hidden="true"
        className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full bg-[var(--accent)] opacity-20 blur-[80px] pointer-events-none"
      />

      {/* Floating Decorative Tech Chips */}
      {!reducedMotion && (
        <>
          {/* Chip 1: Code brackets top-left */}
          <div
            aria-hidden="true"
            className="absolute -top-1 left-2 sm:left-4 z-20 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[#13131C]/90 text-[var(--accent)] font-mono text-xs font-semibold shadow-lg backdrop-blur-md animate-[bounce_5s_ease-in-out_infinite]"
          >
            &lt;/&gt;
          </div>

          {/* Chip 2: React badge top-right */}
          <div
            aria-hidden="true"
            className="absolute top-4 right-1 sm:right-3 z-20 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[#13131C]/90 text-[var(--text-heading)] font-mono text-xs font-medium shadow-lg backdrop-blur-md animate-[bounce_6s_ease-in-out_infinite_reverse]"
          >
            <span className="text-[var(--accent)] mr-1">⚛</span> React
          </div>

          {/* Chip 3: Curly braces bottom-left */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 -left-2 sm:left-1 z-20 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[#13131C]/90 text-[var(--text-muted)] font-mono text-xs font-bold shadow-lg backdrop-blur-md animate-[bounce_7s_ease-in-out_infinite]"
          >
            &#123; &#125;
          </div>

          {/* Chip 4: Node.js bottom-right */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 right-2 sm:right-6 z-20 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[#13131C]/90 text-[var(--text-heading)] font-mono text-xs font-medium shadow-lg backdrop-blur-md animate-[bounce_5.5s_ease-in-out_infinite_reverse]"
          >
            Node.js
          </div>
        </>
      )}

      {/* 3D Laptop Assembly Container with Idle Float Animation */}
      <div
        className={`relative w-[310px] sm:w-[370px] md:w-[420px] transition-transform ${
          !isHovered && !reducedMotion ? "laptop-idle-float" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: reducedMotion
            ? "none"
            : `rotateX(${tiltStyle.rotateX}deg) rotateY(${tiltStyle.rotateY}deg)`,
          transition: isHovered ? "none" : "transform 0.5s ease-out",
        }}
      >
        {/* ======================================================== */}
        {/* 1. SCREEN LID (Top Display Portion)                      */}
        {/* ======================================================== */}
        <div
          className="relative w-full rounded-t-xl sm:rounded-t-2xl p-[8px] sm:p-[10px] pb-[6px] bg-[#161724] border border-[#2b2c40] shadow-2xl overflow-hidden"
          style={{
            boxShadow: `0 20px 50px -10px rgba(0,0,0,0.7), 0 0 35px ${ACCENT_GLOW}`,
          }}
        >
          {/* Subtle Outer Metal Rim */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

          {/* Web Camera dot at top-center */}
          <div className="flex justify-center mb-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2a2b3d] border border-[#3b3c50] flex items-center justify-center">
              <span className="w-0.5 h-0.5 rounded-full bg-[#11121d]" />
            </div>
          </div>

          {/* Screen Display Bezel */}
          <div className="relative rounded-lg overflow-hidden bg-[#0A0B10] border border-[#222335]">
            {/* Browser Top Bar inside screen */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#12131F] border-b border-[#1E1F30]">
              {/* Three browser dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                <span className="w-2 h-2 rounded-full bg-[#EAB308]" />
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              </div>

              {/* Fake browser URL pill */}
              <div className="px-3 py-0.5 rounded-full bg-[#0B0B14] border border-[#232438] text-[9px] sm:text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-1 shadow-inner">
                <span className="text-[var(--accent)] text-[8px]">🔒</span>
                <span>{BROWSER_URL}</span>
              </div>

              {/* Right empty spacer for visual balance */}
              <div className="w-7" />
            </div>

            {/* Screen Screenshot Image */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#07070D]">
              <img
                src={screenshotSrc}
                alt={screenshotAlt}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />

              {/* Dynamic Screen Sheen / Glare Reflection */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${tiltStyle.glareX}% ${tiltStyle.glareY}%, rgba(255, 255, 255, 0.12) 0%, rgba(139, 92, 246, 0.05) 30%, transparent 65%)`,
                  mixBlendMode: "screen",
                }}
              />
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. LAPTOP HINGE                                         */}
        {/* ======================================================== */}
        <div className="relative mx-auto w-[92%] h-[5px] bg-[#1a1b2b] border-x border-[#2b2c40]" />

        {/* ======================================================== */}
        {/* 3. LAPTOP BASE / KEYBOARD DECK                           */}
        {/* ======================================================== */}
        <div className="relative w-[106%] -left-[3%] h-[16px] sm:h-[18px] bg-gradient-to-b from-[#212235] via-[#181928] to-[#121320] rounded-b-xl border-t border-[#35364e] border-b border-[#0f101a] shadow-2xl flex items-start justify-center">
          {/* Deck top edge aluminum highlight */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent" />

          {/* Front Opening Thumb Notch */}
          <div className="w-14 sm:w-16 h-[4px] bg-[#0c0d16] rounded-b-md border-x border-b border-[#2d2e42]" />
        </div>

        {/* Base Bottom Shadow & Glow on Desk */}
        <div
          aria-hidden="true"
          className="mx-auto w-[90%] h-[10px] rounded-[100%] bg-black/80 blur-[8px] -mt-1 pointer-events-none"
        />
      </div>

      {/* Component-scoped Keyframe for Idle Float */}
      <style jsx>{`
        @keyframes floatIdle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .laptop-idle-float {
          animation: floatIdle ${FLOAT_DURATION}s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .laptop-idle-float {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
