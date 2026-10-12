"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const body = encodeURIComponent(
      `Hi Abhay,\n\n${formData.message.trim()}\n\n---\nSender Details:\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );

    // Open email client with message pre-filled to send directly to personal.email
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-24 w-full"
    >
      {/* Section Pre-heading in Mono */}
      <div className="text-center mb-4">
        <span className="font-mono text-sm sm:text-base text-[var(--accent)] tracking-wider">
          What&apos;s Next?
        </span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] text-center mb-6 tracking-tight">
        Get In Touch
      </h2>

      <p className="text-center text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed mb-12 text-base sm:text-lg">
        I&apos;m currently looking for new opportunities and open to discussing full-time roles,
        internships, or freelance projects. Whether you have an inquiry or just want to connect,
        my inbox is always open!
      </p>

      {/* Contact Form Card */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 sm:p-10 shadow-xl max-w-2xl mx-auto">
        <h3 className="text-lg font-bold text-[var(--text-heading)] mb-2 flex items-center gap-2">
          <Send className="w-4 h-4 text-[var(--accent)]" />
          <span>Send a Direct Message</span>
        </h3>
        <p className="text-xs font-mono text-[var(--text-muted)] mb-6">
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[var(--accent-glow-subtle)] text-[var(--accent)] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[var(--text-heading)]">Message Prepared!</h4>
            <p className="text-sm text-[var(--text-muted)] max-w-sm mx-auto">
              Your email client was opened to send your message directly to{" "}
              <span className="text-[var(--accent)] font-mono">{personal.email}</span>.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Didn&apos;t open?{" "}
              <a
                href={`mailto:${personal.email}`}
                className="text-[var(--accent)] underline font-mono"
              >
                Click here to email directly
              </a>
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs font-mono text-[var(--accent)] hover:underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {formError && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400 font-mono">
                {formError}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono text-[var(--text-heading)] mb-1.5"
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-sm text-[var(--text-heading)] placeholder-[var(--text-muted)]/50 focus:border-[var(--accent)] focus-visible:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono text-[var(--text-heading)] mb-1.5"
                >
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. sarah@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-sm text-[var(--text-heading)] placeholder-[var(--text-muted)]/50 focus:border-[var(--accent)] focus-visible:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-xs font-mono text-[var(--text-heading)] mb-1.5"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry / Opportunity / Say hello"
                className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-sm text-[var(--text-heading)] placeholder-[var(--text-muted)]/50 focus:border-[var(--accent)] focus-visible:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-mono text-[var(--text-heading)] mb-1.5"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Share project details, ideas, or questions..."
                className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-sm text-[var(--text-heading)] placeholder-[var(--text-muted)]/50 focus:border-[var(--accent)] focus-visible:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-accent-glow w-full py-3 rounded-lg text-sm font-mono font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span>Sending message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Say Hello</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
