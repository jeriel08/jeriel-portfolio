import React from "react";
import { ArrowDown, Mail, Calendar, GraduationCap, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-blue-600/10 dark:bg-blue-500/15 blur-[120px] transition-all" />
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center sm:text-left flex flex-col items-center sm:items-start gap-8">
        {/* Status Pills */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Seeking Software Engineering Internships &amp; Opportunities
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border">
            <GraduationCap className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            UM BSIT Class of 2027
          </span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
              Jeriel Sanao
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-foreground/90 tracking-tight">
            Aspiring Software Engineer &amp; Information Technology Student
          </p>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I study BS Information Technology at the{" "}
            <span className="font-semibold text-foreground">
              University of Mindanao
            </span>
            . I build practical, efficient software solutions and web applications,
            combining solid computer science fundamentals with modern developer tooling.
          </p>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl text-left">
          <div className="p-3.5 rounded-xl bg-card border border-border/80 shadow-xs flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <GraduationCap className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[11px] text-muted-foreground uppercase font-medium tracking-wide">University</p>
              <p className="text-xs sm:text-sm font-semibold text-foreground truncate">Univ. of Mindanao</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-card border border-border/80 shadow-xs flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[11px] text-muted-foreground uppercase font-medium tracking-wide">Graduation</p>
              <p className="text-xs sm:text-sm font-semibold text-foreground">Target 2027</p>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-card border border-border/80 shadow-xs flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[11px] text-muted-foreground uppercase font-medium tracking-wide">Location</p>
              <p className="text-xs sm:text-sm font-semibold text-foreground">Davao City, PH</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-600/25 hover:shadow-blue-600/40"
          >
            <span>Explore Projects</span>
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card hover:bg-accent text-foreground font-medium text-sm border border-border transition-colors shadow-xs"
          >
            <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>Contact Me</span>
          </a>

          <div className="flex items-center gap-2 ml-1">
            <a
              href="https://github.com/jeriel08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-card hover:bg-accent border border-border text-muted-foreground hover:text-foreground transition-colors shadow-xs"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-card hover:bg-accent border border-border text-muted-foreground hover:text-foreground transition-colors shadow-xs"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
