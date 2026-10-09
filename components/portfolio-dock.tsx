"use client";

import React, { useEffect, useState } from "react";
import { Home } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Dock, DockIcon } from "@/components/ui/dock";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const GITHUB_URL = "https://github.com/jeriel08";
const LINKEDIN_URL = "https://linkedin.com";

export function PortfolioDock() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const getScrollTop = () => {
      const viewport = document.querySelector<HTMLElement>(
        "[data-slot='scroll-area-viewport']"
      );
      return viewport ? viewport.scrollTop : window.scrollY;
    };

    const handleScroll = () => {
      // Considered at "Home" when scrolled near the top
      setIsAtTop(getScrollTop() < 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      capture: true,
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll, { capture: true });
  }, []);

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

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <div className="pointer-events-auto shadow-2xl shadow-blue-950/20 dark:shadow-black/60 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/80 p-1">
        <Dock
          iconSize={40}
          iconMagnification={54}
          iconDistance={110}
          className="border-none mt-0 bg-transparent p-1 gap-1.5"
        >
          {/* Home */}
          <DockIcon
            className={`relative group transition-all duration-200 ${
              isAtTop
                ? "bg-blue-600/15 text-blue-600 dark:text-blue-400 font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
            }`}
          >
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Home"
              className="absolute inset-0 flex items-center justify-center rounded-full cursor-pointer focus:outline-none"
            >
              <Home className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="sr-only">Home</span>
            </button>

            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 ease-out origin-bottom px-2.5 py-1 text-xs font-medium rounded-md bg-foreground text-background shadow-md pointer-events-none whitespace-nowrap">
              Home
            </span>

            {isAtTop && (
              <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 pointer-events-none" />
            )}
          </DockIcon>

          {/* Separator */}
          <div className="mx-1 h-6 w-px bg-border/70 self-center shrink-0" />

          {/* GitHub */}
          <DockIcon className="relative group text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all duration-200">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="absolute inset-0 flex items-center justify-center rounded-full"
            >
              <GithubIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="sr-only">GitHub</span>
            </a>

            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 ease-out origin-bottom px-2.5 py-1 text-xs font-medium rounded-md bg-foreground text-background shadow-md pointer-events-none whitespace-nowrap">
              GitHub
            </span>
          </DockIcon>

          {/* LinkedIn */}
          <DockIcon className="relative group text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all duration-200">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="absolute inset-0 flex items-center justify-center rounded-full"
            >
              <LinkedinIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="sr-only">LinkedIn</span>
            </a>

            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 ease-out origin-bottom px-2.5 py-1 text-xs font-medium rounded-md bg-foreground text-background shadow-md pointer-events-none whitespace-nowrap">
              LinkedIn
            </span>
          </DockIcon>

          {/* Separator */}
          <div className="mx-1 h-6 w-px bg-border/70 self-center shrink-0" />

          {/* Theme Toggler */}
          <DockIcon className="relative group text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all duration-200">
            <AnimatedThemeToggler
              variant="circle"
              className="absolute inset-0 flex items-center justify-center p-0 rounded-full hover:bg-transparent focus-visible:ring-0 [&_svg]:transition-transform [&_svg]:group-hover:scale-110"
            />

            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 ease-out origin-bottom px-2.5 py-1 text-xs font-medium rounded-md bg-foreground text-background shadow-md pointer-events-none whitespace-nowrap">
              Theme
            </span>
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
}
