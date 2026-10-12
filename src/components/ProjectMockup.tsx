import React from "react";

interface ProjectMockupProps {
  id: string;
  title: string;
}

export function ProjectMockup({ id, title }: ProjectMockupProps) {
  switch (id) {
    case "project-1": // DevFlow - Kanban & chat
      return (
        <div className="w-full h-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px] bg-[var(--bg)] p-5 flex flex-col justify-between overflow-hidden relative select-none">
          {/* Top header mockup */}
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-[10px] font-mono text-[var(--text-muted)] ml-2">devflow.workspace / sprint-14</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-glow-subtle)] text-[var(--accent)] border border-[var(--accent)]/30">
              Live Sync
            </span>
          </div>
          {/* Kanban columns mockup */}
          <div className="grid grid-cols-3 gap-2.5 my-2 flex-grow">
            <div className="bg-[var(--bg-card)] p-2 rounded border border-[var(--border)]">
              <div className="text-[9px] font-mono text-[var(--text-muted)] mb-1.5 flex justify-between">
                <span>TODO</span>
                <span>2</span>
              </div>
              <div className="p-1.5 bg-[var(--bg)] rounded text-[10px] text-[var(--text-heading)] mb-1 border-l-2 border-[var(--border)]">
                Auth middleware
              </div>
              <div className="p-1.5 bg-[var(--bg)] rounded text-[10px] text-[var(--text-heading)] border-l-2 border-[var(--border)]">
                JWT refresh tokens
              </div>
            </div>
            <div className="bg-[var(--bg-card)] p-2 rounded border border-[var(--border)]">
              <div className="text-[9px] font-mono text-[var(--accent)] mb-1.5 flex justify-between">
                <span>IN PROGRESS</span>
                <span>1</span>
              </div>
              <div className="p-1.5 bg-[var(--bg)] rounded text-[10px] text-[var(--text-heading)] border-l-2 border-[var(--accent)]">
                Socket.io event bus
              </div>
            </div>
            <div className="bg-[var(--bg-card)] p-2 rounded border border-[var(--border)]">
              <div className="text-[9px] font-mono text-emerald-400 mb-1.5 flex justify-between">
                <span>DONE</span>
                <span>4</span>
              </div>
              <div className="p-1.5 bg-[var(--bg)] rounded text-[10px] text-[var(--text-heading)] border-l-2 border-emerald-500">
                MongoDB schema
              </div>
            </div>
          </div>
          <div className="text-[10px] font-mono text-[var(--text-muted)] flex justify-between pt-1 border-t border-[var(--border)]">
            <span>● 5 teammates online</span>
            <span className="text-[var(--accent)]">v2.4.0</span>
          </div>
        </div>
      );

    case "project-2": // PulseAnalytics - SaaS Dashboard
      return (
        <div className="w-full h-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px] bg-[var(--bg)] p-5 flex flex-col justify-between overflow-hidden relative select-none">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[10px] font-mono text-[var(--text-heading)] font-semibold">PulseAnalytics Engine</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">+28.4% ARR</span>
          </div>
          {/* Chart preview */}
          <div className="my-2 flex-grow flex items-end gap-1.5 px-2 pt-4">
            {[40, 65, 55, 80, 70, 95, 85, 110, 100, 130, 125, 145].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t bg-[var(--accent)] opacity-80 hover:opacity-100 transition-opacity"
                  style={{ height: `${val * 0.45}px` }}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[var(--border)] text-[9px] font-mono text-[var(--text-muted)]">
            <div>Visitors: <span className="text-[var(--text-heading)] font-bold">142.8k</span></div>
            <div>Latency: <span className="text-[var(--text-heading)] font-bold">42ms</span></div>
            <div>Health: <span className="text-emerald-400 font-bold">99.98%</span></div>
          </div>
        </div>
      );

    case "project-3": // CineVerse - Streaming & Discovery
      return (
        <div className="w-full h-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px] bg-[var(--bg)] p-5 flex flex-col justify-between overflow-hidden relative select-none">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
            <span className="text-[10px] font-mono font-bold text-[var(--accent)] tracking-wider">CINEVERSE STREAM</span>
            <span className="text-[9px] font-mono text-[var(--text-muted)]">4K UHD • HDR</span>
          </div>
          {/* Movie poster cards row */}
          <div className="grid grid-cols-3 gap-2.5 my-2 flex-grow">
            {[
              { title: "Interstellar OS", rating: "★ 9.4", tag: "Sci-Fi" },
              { title: "Cyber Mirage", rating: "★ 8.9", tag: "Tech" },
              { title: "Silicon Valley", rating: "★ 9.1", tag: "Drama" },
            ].map((movie, idx) => (
              <div key={idx} className="bg-[var(--bg-card)] rounded p-2 border border-[var(--border)] flex flex-col justify-between">
                <div className="w-full h-12 rounded bg-[var(--accent-glow-subtle)] border border-[var(--accent)]/30 flex items-center justify-center text-[10px] font-mono text-[var(--accent)]">
                  ▶ PREVIEW
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[var(--text-heading)] truncate mt-1">{movie.title}</div>
                  <div className="flex justify-between text-[8px] font-mono text-[var(--text-muted)] mt-0.5">
                    <span className="text-amber-400">{movie.rating}</span>
                    <span>{movie.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[9px] font-mono text-[var(--text-muted)] flex justify-between pt-1 border-t border-[var(--border)]">
            <span>Dynamic Recommendations</span>
            <span className="text-[var(--accent)]">Instant Preload</span>
          </div>
        </div>
      );

    case "project-4": // ShopSphere
      return (
        <div className="w-full h-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px] bg-[var(--bg)] p-5 flex flex-col justify-between overflow-hidden relative select-none">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
            <span className="text-[10px] font-mono font-bold text-[var(--text-heading)]">ShopSphere Storefront</span>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Stripe Live</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2 flex-grow">
            <div className="p-2 bg-[var(--bg-card)] rounded border border-[var(--border)] flex flex-col justify-between">
              <span className="text-[10px] font-bold text-[var(--text-heading)]">Smart Earphones Pro</span>
              <div className="flex justify-between items-center text-[10px]">
                <span className="font-mono text-[var(--accent)] font-bold">$149.00</span>
                <span className="text-[8px] font-mono text-[var(--text-muted)]">In Stock</span>
              </div>
            </div>
            <div className="p-2 bg-[var(--bg-card)] rounded border border-[var(--border)] flex flex-col justify-between">
              <span className="text-[10px] font-bold text-[var(--text-heading)]">Mechanical Keyboard</span>
              <div className="flex justify-between items-center text-[10px]">
                <span className="font-mono text-[var(--accent)] font-bold">$189.00</span>
                <span className="text-[8px] font-mono text-[var(--text-muted)]">In Stock</span>
              </div>
            </div>
          </div>
          <div className="text-[9px] font-mono text-[var(--text-muted)] flex justify-between pt-1 border-t border-[var(--border)]">
            <span>Cart: 2 items</span>
            <span className="text-[var(--accent)]">Instant Webhook</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px] bg-[var(--bg)] p-5 flex flex-col justify-between overflow-hidden relative select-none">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
            <span className="text-[10px] font-mono font-bold text-[var(--accent)]">{title}</span>
            <span className="text-[9px] font-mono text-[var(--text-muted)]">REST API</span>
          </div>
          <div className="p-3 my-2 bg-[var(--bg-card)] rounded border border-[var(--border)] flex-grow font-mono text-[10px] text-[var(--text-muted)] space-y-1">
            <div className="text-[var(--accent)]">$ curl -X GET /api/v1/resources</div>
            <div>&gt; HTTP/2 200 OK</div>
            <div className="text-emerald-400">&gt; Status: Service Healthy (18ms)</div>
          </div>
          <div className="text-[9px] font-mono text-[var(--text-muted)] flex justify-between pt-1 border-t border-[var(--border)]">
            <span>Endpoint: Active</span>
            <span className="text-[var(--accent)]">Ready</span>
          </div>
        </div>
      );
  }
}
