"use client";

import React, { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Sparkles, ArrowUpRight } from "lucide-react";

export function PortfolioNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-foreground font-semibold tracking-tight transition-opacity hover:opacity-90"
        >
          <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            JS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight">Jeriel Sanao</span>
            <span className="text-[11px] text-muted-foreground flex items-center gap-1.5 font-normal">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              UM BSIT Student
            </span>
          </div>
        </a>

        {/* Desktop Quick Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a
            href="#education"
            className="hover:text-foreground transition-colors"
          >
            Education
          </a>
          <a href="#skills" className="hover:text-foreground transition-colors">
            Skills
          </a>
          <a
            href="#certifications"
            className="hover:text-foreground transition-colors"
          >
            Certifications
          </a>
          <a
            href="#projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <AnimatedThemeToggler
            variant="circle"
            className="border border-border/80 bg-background/50 hover:bg-muted"
          />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/30"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
