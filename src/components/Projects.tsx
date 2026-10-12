"use client";

import { ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { ProjectMockup } from "./ProjectMockup";
import { SocialIcon } from "./SocialIcons";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      aria-label="Things I've worked on"
      className="py-24 w-full"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--accent)] tracking-tight">
          Things I&apos;ve worked on
        </h2>
        <div className="h-[1px] bg-[var(--border)] flex-grow max-w-xs" />
      </div>

      {/* Projects List (Horizontal 2-Column Cards) */}
      <div className="space-y-20 sm:space-y-28">
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center group"
          >
            {/* Left Column: Project Image / Mockup Preview */}
            <div className="md:col-span-6 w-full">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live preview`}
                className="block rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] shadow-xl transition-all duration-300 hover:shadow-[0_0_25px_var(--accent-glow-subtle)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              >
                <ProjectMockup id={project.id} title={project.title} />
              </a>
            </div>

            {/* Right Column: Project Details */}
            <div className="md:col-span-6 flex flex-col justify-center">
              {/* Title & External Link */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--accent)] tracking-tight hover:text-[var(--accent-hover)] transition-colors">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                  >
                    {project.title}
                  </a>
                </h3>

                {/* External & GitHub Links */}
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors p-1"
                  >
                    <SocialIcon name="github" className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live demo for ${project.title}`}
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors p-1"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Description Card with Bullet Point */}
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 sm:p-6 shadow-lg mb-5 group-hover:border-[var(--border)] transition-colors">
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed flex items-start gap-3">
                  <span className="text-[var(--accent)] text-lg leading-none mt-0.5 shrink-0">
                    •
                  </span>
                  <span>
                    {project.longDescription || project.description}
                  </span>
                </p>
              </div>

              {/* Tech Tags in Mono Font */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono text-[var(--text-muted)] pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="hover:text-[var(--accent)] transition-colors select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
