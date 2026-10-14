"use client";

import React, { useState, useRef, useEffect } from "react";
import { Mail, Copy, Check, ChevronDown, Laptop, ExternalLink } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

// Primary contact email (update with Jeriel's active email)
const CONTACT_EMAIL = "jeriel.sanao@gmail.com";

function GmailIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#EA4335" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenGmail = () => {
    setIsDropdownOpen(false);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const handleOpenDefaultMail = () => {
    setIsDropdownOpen(false);
    window.location.href = `mailto:${CONTACT_EMAIL}`;
  };

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  return (
    <section id="contact" className="scroll-mt-12 pt-6 pb-28 sm:pb-36">
      {/* Contact Card without overflow-hidden so the badge and dropdown float over borders */}
      <div className="relative rounded-3xl border border-border/80 dark:border-white/10 bg-card/80 dark:bg-neutral-950/70 backdrop-blur-md pt-10 sm:pt-12 pb-8 sm:pb-10 px-6 sm:px-10 text-center shadow-xs">
        {/* Background Animated Grid Pattern contained strictly within card bounds */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
          {/* Positioned above the header, fading out smoothly as it reaches the text */}
          <div className="absolute -top-1 inset-x-0 h-44 sm:h-52 overflow-hidden">
            <AnimatedGridPattern
              numSquares={30}
              maxOpacity={0.35}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,white_20%,transparent_100%)]",
                "stroke-border/70 dark:stroke-white/15 fill-blue-600/10 dark:fill-blue-400/20",
                "w-full h-full"
              )}
            />
          </div>
        </div>

        {/* Section Badge perched over the card border */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-flex items-center justify-center rounded-full bg-background dark:bg-[#ededed] px-4 py-1 text-xs font-semibold tracking-tight text-foreground dark:text-neutral-950 shadow-sm border border-border/90 dark:border-white/20 select-none">
            Contact
          </span>
        </div>

        {/* Card Content */}
        <div className="relative z-10 space-y-4 pt-1">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Let&apos;s Connect
          </h2>

          {/* Subtitle / Description */}
          <p className="max-w-lg mx-auto text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            Want to chat about an opportunity, collaborate on a project, or
            just talk software development? Drop me a message and I&apos;ll get
            back to you as soon as I can.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            {/* Copy Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-secondary/80 hover:bg-secondary text-foreground border border-border/80 shadow-xs hover:border-blue-500/50 hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="size-4 text-emerald-500 shrink-0" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="size-4 text-muted-foreground shrink-0" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* Write an Email Dropdown Container */}
            <div className="relative z-30" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-sm hover:shadow-blue-500/25 transition-all duration-200 cursor-pointer active:scale-95"
              >
                <Mail className="size-4 shrink-0" />
                <span>Write an Email</span>
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-200 shrink-0",
                    isDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Menu floating above the card */}
              {isDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 rounded-2xl bg-card dark:bg-[#141416] border border-border/80 dark:border-white/15 p-1.5 shadow-2xl z-50 animate-in fade-in-0 zoom-in-95">
                  <button
                    type="button"
                    onClick={handleOpenGmail}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-muted/80 text-foreground transition-colors cursor-pointer group"
                  >
                    <div className="size-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                      <GmailIcon className="size-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold">Gmail</span>
                        <ExternalLink className="size-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-muted-foreground truncate">
                        Compose in web browser
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenDefaultMail}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-muted/80 text-foreground transition-colors cursor-pointer group"
                  >
                    <div className="size-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Laptop className="size-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold">Default Mail App</span>
                        <ExternalLink className="size-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-muted-foreground truncate">
                        Open device email client
                      </p>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
