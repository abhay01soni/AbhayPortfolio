"use client";

import { useState } from "react";
import { Calendar, Clock, ArrowRight, X, BookOpen } from "lucide-react";
import { portfolioData, BlogPost } from "@/data/portfolioData";

export default function Blog() {
  const { blogPosts } = portfolioData;
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section
      id="blog"
      aria-label="Blog and Articles"
      className="py-24 px-6 sm:px-8 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="flex items-center text-2xl sm:text-3xl font-bold text-[var(--text-heading)]">
          <span className="font-mono text-lg sm:text-xl text-[var(--accent)] mr-3">
            05.
          </span>
          Articles &amp; Insights
        </h2>
        <div className="h-[1px] bg-[var(--border)] flex-grow max-w-xs" />
      </div>

      {/* 3 Post Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="portfolio-card p-6 flex flex-col justify-between cursor-pointer group focus-within:border-[var(--accent)]"
            tabIndex={0}
            role="button"
            aria-label={`Read article: ${post.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedPost(post);
              }
            }}
          >
            <div>
              {/* Meta: Date & Read Time in Mono */}
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[var(--text-heading)] mb-3 leading-snug group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>

            <div>
              {/* Tags in Mono Font */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Read More Trigger */}
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[var(--accent)] group-hover:gap-3 transition-all">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPost.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPost(null)}
              aria-label="Close article modal"
              className="absolute top-6 right-6 p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow-subtle)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)] mb-3">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                {selectedPost.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                {selectedPost.readTime}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-heading)] mb-4 leading-tight">
              {selectedPost.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--accent)]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Content Body */}
            <div className="border-t border-[var(--border)] pt-6 text-[var(--text-muted)] text-base leading-relaxed space-y-4">
              <p className="font-medium text-[var(--text-heading)]">
                {selectedPost.excerpt}
              </p>
              <p>
                {selectedPost.content}
              </p>
              <p>
                In production, always ensure that security policies, CORS headers, and rate limiting safeguards are configured prior to scaling instances. Continually profile component re-render boundaries to maintain silky 60fps UX.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-[var(--border)] flex justify-between items-center text-xs font-mono text-[var(--text-muted)]">
              <span>Author: Abhay Soni</span>
              <button
                onClick={() => setSelectedPost(null)}
                className="btn-accent-glow px-4 py-2 rounded-lg font-mono text-xs cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
