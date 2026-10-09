import React from "react";
import { FolderGit2, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  category: "Academic Capstone" | "Systems & Web" | "Computer Science Core";
}

const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Student Academic & Portal Management System",
    subtitle: "Full-Stack Web Application for University Records",
    category: "Academic Capstone",
    featured: true,
    description:
      "A centralized academic portal designed to manage course registrations, student academic records, faculty evaluations, and grade reporting. Features role-based access control, relational database normalization, and responsive dashboards.",
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "JWT Auth"],
    githubUrl: "https://github.com/jeriel08",
  },
  {
    id: "proj-2",
    title: "Departmental Inventory & Asset Tracker",
    subtitle: "Hardware & Laboratory Asset Control Platform",
    category: "Systems & Web",
    featured: true,
    description:
      "A robust inventory management system tailored for university laboratories and IT departments. Tracks device serials, check-in/out logs, condition reporting, and automated stock alerts with audit logs.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/jeriel08",
  },
  {
    id: "proj-3",
    title: "Algorithm & Graph Pathfinding Visualizer",
    subtitle: "Interactive Data Structures & Algorithm Simulator",
    category: "Computer Science Core",
    featured: false,
    description:
      "Interactive algorithm visualizer implementing Dijkstra's Algorithm, A* Search, Breadth-First Search (BFS), and Depth-First Search (DFS). Built to demonstrate deep understanding of computational efficiency and algorithmic time complexity.",
    tags: ["TypeScript", "React", "Canvas API", "Algorithms", "Data Structures"],
    githubUrl: "https://github.com/jeriel08",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 border-t border-border/40 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-xl text-base">
            Academic software solutions, systems projects, and applications built during my degree program at University of Mindanao.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-card border border-border/80 overflow-hidden shadow-sm transition-all duration-200 hover:border-blue-500/50 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Card Header Visual Accent */}
              <div className="h-32 bg-gradient-to-br from-blue-900/20 via-slate-900/10 to-indigo-900/20 dark:from-blue-950/60 dark:via-slate-900/40 dark:to-indigo-950/60 border-b border-border/60 p-5 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-background/80 text-foreground border border-border/60 backdrop-blur-xs">
                    {project.category}
                  </span>
                  <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="z-10">
                  <p className="text-xs font-medium text-muted-foreground line-clamp-1">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-muted-foreground">
                        Academic Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
