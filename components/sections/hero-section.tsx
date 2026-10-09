import Image from "next/image";
import React from "react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="hero" className="relative">
      {/* Background Animated Grid Pattern */}
      <div className="absolute -top-14 sm:-top-28 left-1/2 -translate-x-1/2 w-screen max-w-6xl h-[420px] sm:h-[500px] pointer-events-none -z-10 overflow-hidden">
        <AnimatedGridPattern
          numSquares={35}
          maxOpacity={0.25}
          x={2}
          y={-1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white_20%,transparent_100%)]",
            "stroke-border/70 dark:stroke-border/40 fill-blue-600/10 dark:fill-blue-400/15",
            "w-full h-full",
          )}
        />
      </div>

      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-6 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="gap-2 flex flex-col order-2 md:order-1 flex-1 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
                Jeriel Sanao
              </span>
            </h1>
            <p className="inline-block text-muted-foreground max-w-[600px] md:text-lg lg:text-xl">
              Aspiring Software Engineer &amp; Information Technology Student
            </p>
          </div>

          <div className="relative shrink-0 order-1 md:order-2 self-start md:self-auto">
            <div className="relative size-32 sm:size-36 md:size-40 aspect-square overflow-hidden rounded-full border-6 border-border/80 dark:shadow-black/40 ring-8 ring-background">
              <Image
                src="/selfie.jpg"
                alt="Jeriel Sanao"
                width={350}
                height={350}
                priority
                className="w-full h-full object-cover scale-115 -translate-x-[2%] translate-y-[4%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
