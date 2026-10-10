import React from "react";
import { SectionBadge } from "@/components/ui/section-badge";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { getSkillIcon } from "@/components/tech-icons";

interface SkillRow {
  category: string;
  skills: string[];
}

const skillRows: SkillRow[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Java", "Python", "PHP", "JWT"],
  },
  {
    category: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git & GitHub", "VS Code", "Postman (API Testing)"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-8 scroll-mt-12">
      {/* Section Header */}
      <div className="space-y-3 text-center">
        {/* Centered White Pill Title with Fading Lines */}
        <SectionBadge title="Skills & Technologies" />

        {/* Short Header and Subtitle */}
        <div className="space-y-2 pt-1">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Skills Learned Over the Years
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            These are the skills &amp; technologies that I have learned and used
            on my academic projects. Learning these tools has taught me core
            principles and better ways to build software efficiently.
          </p>
        </div>
      </div>

      {/* Skills Showcase: 4 Scroll-Based Velocity rows */}
      <ScrollVelocityContainer className="space-y-3.5 sm:space-y-4">
        {skillRows.map((row, index) => (
          <div key={row.category} className="relative overflow-hidden py-1">
            {/* Left and right gradient masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-background to-transparent" />

            <ScrollVelocityRow
              direction={index % 2 === 1 ? -1 : 1}
              baseVelocity={5}
              pauseOnHover
              className="py-1"
            >
              <div className="inline-flex items-center gap-3 pr-3">
                {row.skills.map((skill) => {
                  const Icon = getSkillIcon(skill);
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-sm sm:text-base font-semibold bg-card text-foreground border border-border/80 shadow-xs hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default select-none"
                    >
                      {Icon && <Icon className="size-5 sm:size-5.5 shrink-0" />}
                      <span>{skill}</span>
                    </span>
                  );
                })}
              </div>
            </ScrollVelocityRow>
          </div>
        ))}
      </ScrollVelocityContainer>
    </section>
  );
}
