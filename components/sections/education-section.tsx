import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="space-y-4 text-left">
      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
        Education
      </h3>

      <div className="flex flex-col gap-3">
        <a
          href="https://umindanao.edu.ph"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-3 sm:gap-4 p-1 -mx-1 rounded-xl cursor-pointer"
        >
          {/* Logo on the left */}
          <div className="size-10 sm:size-11 rounded-full border border-border/80 bg-muted/40 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-xs mt-0.5">
            <Image
              src="/um-logo.png"
              alt="University of Mindanao Logo"
              width={44}
              height={44}
              className="size-full object-contain"
            />
          </div>

          {/* School Name, Program, and Date */}
          <div className="flex-1 min-w-0">
            {/* Top row: School name on left, Date on right (same level) */}
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 font-semibold text-xs sm:text-sm text-foreground">
                <span className="truncate">University of Mindanao</span>
                <ArrowUpRight className="size-3.5 text-muted-foreground shrink-0 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
              </span>
              <span className="text-[11px] sm:text-xs tabular-nums text-muted-foreground text-right shrink-0 font-medium">
                2023 - Present
              </span>
            </div>

            {/* Bottom row: Program */}
            <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 truncate">
              Bachelor of Science in Information Technology (BSIT)
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
