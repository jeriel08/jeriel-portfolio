"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ChevronDown, Laptop, ExternalLink } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "jerelliansanao@gmail.com";

function GmailIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#EA4335" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const handleOpenDefaultMail = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}`;
  };

  return (
    <section id="contact" className="scroll-mt-12 pt-4 pb-0">
      {/* Contact Card with same theme and border as the Projects card */}
      <div className="relative rounded-3xl bg-card border border-border/80 shadow-sm pt-10 sm:pt-12 pb-8 sm:pb-10 px-6 sm:px-10 text-center">
        {/* Background Animated Grid Pattern contained strictly within card bounds */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl z-0">
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

        {/* Section Badge perched over the card border - matching exact size and styles of projects/skills badge */}
        <div className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-flex items-center justify-center rounded-full bg-white dark:bg-[#ededed] px-4 py-1 sm:px-5 sm:py-1.5 text-xs sm:text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-950 shadow-xs border border-neutral-200/80 dark:border-white/10 select-none">
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
            {/* Copy Email Button using ShadCN Button with generous padding */}
            <Button
              type="button"
              variant="outline"
              onClick={handleCopyEmail}
              className="h-10 sm:h-11 px-5 sm:px-6 gap-2 rounded-xl text-xs sm:text-sm font-semibold border-border/80 hover:border-blue-500/50 hover:bg-secondary cursor-pointer shadow-xs active:scale-95 transition-all"
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
            </Button>

            {/* Write an Email Dropdown using ShadCN DropdownMenu with generous button padding */}
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button className="h-10 sm:h-11 px-5 sm:px-6 gap-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-sm hover:shadow-blue-500/25 cursor-pointer active:scale-95 transition-all group">
                    <Mail className="size-4 shrink-0" />
                    <span>Write an Email</span>
                    <ChevronDown className="size-3.5 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                }
              />
              <DropdownMenuContent
                side="top"
                align="center"
                sideOffset={10}
                className="w-60 min-w-56 p-1.5 rounded-2xl bg-popover/95 backdrop-blur-md border border-border/80 shadow-2xl z-50"
              >
                <DropdownMenuItem
                  onClick={handleOpenGmail}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-muted/80 text-foreground transition-colors cursor-pointer group"
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
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={handleOpenDefaultMail}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-muted/80 text-foreground transition-colors cursor-pointer group"
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
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
}
