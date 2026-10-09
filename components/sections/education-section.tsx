import React from "react";
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const keyCoursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Web Systems & Technologies",
  "Database Management Systems",
  "Software Engineering & Architecture",
  "Information Assurance & Security",
  "Systems Analysis and Design",
  "Networking & Infrastructure",
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 border-t border-border/40 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Education
          </h2>
          <p className="text-muted-foreground max-w-xl text-base">
            Formal training and academic curriculum providing the foundation for my software engineering journey.
          </p>
        </div>

        {/* Education Card */}
        <div className="relative rounded-2xl bg-card border border-border/80 p-6 sm:p-8 shadow-sm transition-all hover:border-blue-500/40">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-border/60">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-600/20">
                  UM
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    University of Mindanao
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400">
                    Bachelor of Science in Information Technology (BSIT)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs sm:text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                <Calendar className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                <span>Expected Graduation: 2027</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                <span>Davao City, Philippines</span>
              </div>
            </div>
          </div>

          {/* Details & Coursework */}
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                Key Coursework &amp; Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                {keyCoursework.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 text-xs font-medium text-foreground/90"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Curriculum focused on software engineering standards, database architecture, responsive UI engineering,
              and algorithm optimization — preparing for real-world production environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
