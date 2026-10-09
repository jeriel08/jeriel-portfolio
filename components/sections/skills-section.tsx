import React from "react";
import { Wrench, Code2, Server, Database, Terminal, Cpu } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    description: "Building responsive, accessible, and high-performance interfaces.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / Semantic Web",
      "CSS3 / Animations",
      "Responsive UI Design",
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    description: "Architecting backend logic, server endpoints, and services.",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "Java",
      "Python",
      "C# / OOP Principles",
      "PHP",
      "Authentication / JWT",
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    description: "Data modeling, relational schemas, and query optimization.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Database Schema Design",
      "SQL Query Optimization",
      "Data Normalization",
    ],
  },
  {
    title: "Tools & DevOps Fundamentals",
    icon: Terminal,
    description: "Version control, workflow efficiency, and debugging utilities.",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Postman (API Testing)",
      "npm / pnpm",
      "Command Line (Bash/PowerShell)",
      "Turbopack / Vite",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-t border-border/40 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <Wrench className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-muted-foreground max-w-xl text-base">
            Languages, frameworks, databases, and developer tools I utilize to craft modern software.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative rounded-2xl bg-card border border-border/80 p-6 shadow-sm transition-all duration-200 hover:border-blue-500/50 hover:shadow-md"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-secondary text-secondary-foreground border border-border/60 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
