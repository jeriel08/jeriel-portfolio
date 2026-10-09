"use client";

import React, { useState } from "react";
import { Mail, MapPin, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "jeriel.sanao@example.com"; // Placeholder ready for Jeriel's actual email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-border/40 scroll-mt-12 pb-36">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <Mail className="h-3.5 w-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Contact
          </h2>
          <p className="text-muted-foreground max-w-xl text-base">
            I am currently open to software engineering internships, junior developer positions, and collaborative academic opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Information & Channels */}
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-2xl bg-card border border-border/80 p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-foreground">
                Connect Directly
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Whether you have an internship opportunity, a project to collaborate on, or just want to connect, feel free to send a message.
              </p>

              <div className="pt-2 space-y-3">
                {/* Email Box */}
                <div className="p-3.5 rounded-xl bg-secondary/60 border border-border/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="text-xs font-medium text-foreground truncate">
                      {email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-background text-muted-foreground hover:text-foreground transition-colors shrink-0 cursor-pointer"
                    title="Copy email"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-secondary/60 border border-border/60 flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-xs font-medium text-foreground">
                    Davao City, Philippines
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-border/60 flex items-center gap-2.5">
                <a
                  href="https://github.com/jeriel08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-accent border border-border/60 transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-accent border border-border/60 transition-colors"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Box */}
          <div className="md:col-span-3">
            <div className="rounded-2xl bg-card border border-border/80 p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Send a Message
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
                  const msg = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
                  window.location.href = `mailto:${email}?subject=Portfolio Contact from ${encodeURIComponent(
                    name
                  )}&body=${encodeURIComponent(msg)}`;
                }}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all placeholder:text-muted-foreground/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    required
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all placeholder:text-muted-foreground/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all placeholder:text-muted-foreground/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border/40 text-center text-xs text-muted-foreground space-y-1">
          <p>© 2026-2027 Jeriel Sanao. All rights reserved.</p>
          <p>
            BS Information Technology • University of Mindanao • Designed with Next.js &amp; Magic UI
          </p>
        </footer>
      </div>
    </section>
  );
}
