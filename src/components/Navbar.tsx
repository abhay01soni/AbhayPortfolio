"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 nav-blur-bg border-b border-[var(--border)] shadow-lg shadow-black/10"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo - Initials in a circle */}
          <a
            href="#hero"
            aria-label="Abhay Soni - Home"
            className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded-full"
          >
            <div className="w-10 h-10 rounded-full border-2 border-[var(--accent)] flex items-center justify-center font-mono font-bold text-sm text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[#F1EEFF] transition-all duration-300 group-hover:shadow-[0_0_15px_var(--accent-glow)]">
              {portfolioData.personal.initials}
            </div>
            <span className="font-semibold text-[var(--text-heading)] hidden sm:inline-block tracking-tight text-sm group-hover:text-[var(--accent)] transition-colors">
              {portfolioData.personal.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
          >
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 py-1 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              >
                {link.name}
              </a>
            ))}

            {/* Resume Button */}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent-glow px-4 py-2 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Theme Toggle Button */}
            <ThemeToggle />
          </nav>

          {/* Mobile Actions: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="w-10 h-10 rounded-lg flex items-center justify-center border border-[var(--border)] text-[var(--accent)] hover:bg-[var(--accent-glow-subtle)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          role="presentation"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden transition-opacity"
        />
      )}

      {/* Mobile Slide-in Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-[var(--bg-card)] border-l border-[var(--border)] z-50 p-6 flex flex-col justify-between transition-transform duration-300 md:hidden shadow-2xl ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[var(--border)]">
            <div className="w-9 h-9 rounded-full border border-[var(--accent)] flex items-center justify-center font-mono font-bold text-xs text-[var(--accent)]">
              {portfolioData.personal.initials}
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 mt-8">
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center text-base font-medium text-[var(--text-heading)] hover:text-[var(--accent)] p-2 rounded-lg hover:bg-[var(--accent-glow-subtle)] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Resume Action & Socials */}
        <div className="pt-6 border-t border-[var(--border)] space-y-4">
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-accent-glow w-full py-2.5 rounded-lg text-sm font-mono font-semibold flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume</span>
          </a>

          <div className="flex items-center justify-center gap-4 pt-2">
            {portfolioData.socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors p-1"
              >
                <span className="sr-only">{item.name}</span>
                <span className="font-mono text-xs uppercase">{item.name.slice(0, 2)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
