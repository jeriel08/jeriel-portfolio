"use client";

import React from "react";
import { Home, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { BlurFade } from "@/components/ui/blur-fade";
import { Dock, DockIcon } from "@/components/ui/dock";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const GITHUB_URL = "https://github.com/jeriel08";
const LINKEDIN_URL = "https://linkedin.com";

interface PortfolioDockProps {
  onChatClick?: () => void;
}

export function PortfolioDock({ onChatClick }: PortfolioDockProps) {
  const scrollToTop = () => {
    const viewport = document.querySelector<HTMLElement>(
      "[data-slot='scroll-area-viewport']"
    );
    if (viewport) {
      viewport.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleChat = () => {
    if (onChatClick) {
      onChatClick();
    } else {
      console.log("Chat clicked - chatbot modal placeholder ready");
    }
  };

  return (
    <div className="fixed bottom-3 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <BlurFade delay={0.25} className="pointer-events-auto">
        <div className="relative rounded-full bg-background/80 backdrop-blur-xl border border-border/80 dark:border-white/10 px-2 py-1 h-[58px] flex items-center shadow-[0_4px_16px_rgba(0,0,0,0.06),0_0_12px_rgba(59,130,246,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_14px_rgba(59,130,246,0.14)]">
          <Dock
            iconSize={40}
            iconMagnification={54}
            iconDistance={120}
            direction="middle"
            className="border-none m-0 bg-transparent p-0 gap-1.5 h-full items-center"
          >
          {/* Home */}
          <DockIcon
            onClick={scrollToTop}
            className="relative group text-muted-foreground hover:text-foreground hover:bg-muted/70 cursor-pointer"
          >
            <Home className="h-[52%] w-[52%]" />
            <span className="sr-only">Home</span>

            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 ease-out origin-bottom px-2.5 py-1 text-xs font-medium rounded-md bg-foreground text-background shadow-md pointer-events-none whitespace-nowrap">
              Home
            </span>
          </DockIcon>

          {/* Separator */}
          <div className="mx-0.5 h-4 w-px bg-border/60 self-center shrink-0" />

          {/* GitHub */}
          <DockIcon className="relative group text-muted-foreground hover:text-foreground hover:bg-muted/70 cursor-pointer">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="absolute inset-0 flex items-center justify-center rounded-full"
            >
              <GithubIcon className="h-[52%] w-[52%]" />
              <span className="sr-only">GitHub</span>
            </a>

            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 ease-out origin-bottom px-2.5 py-1 text-xs font-medium rounded-md bg-foreground text-background shadow-md pointer-events-none whitespace-nowrap">
              GitHub
            </span>
          </DockIcon>

          {/* LinkedIn */}
          <DockIcon className="relative group text-muted-foreground hover:text-foreground hover:bg-muted/70 cursor-pointer">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="absolute inset-0 flex items-center justify-center rounded-full"
            >
              <LinkedinIcon className="h-[52%] w-[52%]" />
              <span className="sr-only">LinkedIn</span>
            </a>

            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 ease-out origin-bottom px-2.5 py-1 text-xs font-medium rounded-md bg-foreground text-background shadow-md pointer-events-none whitespace-nowrap">
              LinkedIn
            </span>
          </DockIcon>

          {/* Separator */}
          <div className="mx-0.5 h-4 w-px bg-border/60 self-center shrink-0" />

          {/* Chat (Chatbot Trigger) */}
          <DockIcon
            onClick={handleChat}
            className="relative group text-muted-foreground hover:text-foreground hover:bg-muted/70 cursor-pointer"
          >
            <MessageCircle className="h-[52%] w-[52%]" />
            <span className="sr-only">Chat</span>

            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 ease-out origin-bottom px-2.5 py-1 text-xs font-medium rounded-md bg-foreground text-background shadow-md pointer-events-none whitespace-nowrap">
              Chat
            </span>
          </DockIcon>

          {/* Theme Toggler */}
          <DockIcon className="relative group text-muted-foreground hover:text-foreground hover:bg-muted/70 cursor-pointer">
            <AnimatedThemeToggler
              variant="circle"
              className="absolute inset-0 flex items-center justify-center p-0 rounded-full hover:bg-transparent focus-visible:ring-0 [&_svg]:h-[52%] [&_svg]:w-[52%]"
            />

            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 ease-out origin-bottom px-2.5 py-1 text-xs font-medium rounded-md bg-foreground text-background shadow-md pointer-events-none whitespace-nowrap">
              Theme
            </span>
          </DockIcon>
        </Dock>
      </div>
      </BlurFade>
    </div>
  );
}
