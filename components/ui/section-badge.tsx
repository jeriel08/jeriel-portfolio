import React from "react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title?: string;
}

export function SectionBadge({
  children,
  title,
  className,
  ...props
}: SectionBadgeProps) {
  const content = children ?? title;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full my-3",
        className
      )}
      {...props}
    >
      {/* Fading horizontal divider line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-border/80 dark:via-white/25 to-transparent pointer-events-none" />

      {/* Pill title */}
      <h2 className="relative z-10 inline-flex items-center justify-center rounded-full bg-white dark:bg-[#ededed] px-4 py-1 sm:px-5 sm:py-1.5 text-xs sm:text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-950 shadow-xs border border-neutral-200/80 dark:border-white/10 select-none">
        {content}
      </h2>
    </div>
  );
}
