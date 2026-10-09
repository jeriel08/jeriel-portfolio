import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="space-y-3 text-left">
      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
        About
      </h3>
      <p className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
        I study BS Information Technology at the{" "}
        <span className="font-semibold text-foreground">
          University of Mindanao
        </span>
        . I build practical, efficient software solutions and web applications,
        combining solid computer science fundamentals with modern developer
        tooling.
      </p>
    </section>
  );
}
