import React from "react";

interface ProjectMockupProps {
  id: string;
  title: string;
}

export function ProjectMockup({ id, title }: ProjectMockupProps) {
  switch (id) {
    case "project-1": // BookMyEvent Event Booking Platform
      return (
        <div className="w-full h-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px] bg-[var(--bg-card)] flex flex-col justify-between overflow-hidden relative select-none">
          {/* Top header mockup */}
          <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2.5 bg-[#0e0e18]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-[11px] font-mono text-[var(--text-muted)] ml-2">book-my-event-nine.vercel.app</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-glow-subtle)] text-[var(--accent)] border border-[var(--accent)]/30">
              Live Preview
            </span>
          </div>

          {/* 1st Image (BookMyEvent Screenshot) */}
          <div className="relative w-full flex-grow overflow-hidden bg-[#07070D] flex items-center justify-center">
            <img
              src="/projects/bookmyevent.png"
              alt="BookMyEvent Platform Preview"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
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
