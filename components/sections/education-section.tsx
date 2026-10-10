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
          className="group flex items-center justify-between gap-3 sm:gap-4 p-2 -mx-2 rounded-xl transition-colors hover:bg-muted/40 cursor-pointer"
        >
          {/* Logo on the left */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="size-11 sm:size-12 rounded-full border border-border/80 bg-muted/40 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-xs">
              <Image
                src="/um-logo.png"
                alt="University of Mindanao Logo"
                width={48}
                height={48}
                className="size-full object-contain"
              />
            </div>

            {/* School Name and Program */}
            <div className="min-w-0 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1 font-semibold text-sm sm:text-base text-foreground leading-snug">
                <span className="truncate">University of Mindanao</span>
                <ArrowUpRight className="size-3.5 sm:size-4 text-muted-foreground shrink-0 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground truncate">
                Bachelor of Science in Information Technology (BSIT)
              </p>
            </div>
          </div>

          {/* Years on the right */}
          <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right shrink-0 font-medium">
            2023 - Present
          </div>
        </a>
      </div>
    </section>
  );
}
