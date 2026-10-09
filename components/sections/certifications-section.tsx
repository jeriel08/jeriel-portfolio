import React from "react";
import { Award, CheckCircle, ExternalLink, ShieldCheck, Calendar } from "lucide-react";

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  description: string;
}

const certifications: CertificationItem[] = [
  {
    id: "cert-1",
    title: "IT Specialist - Software Development",
    issuer: "Certiport / Pearson VUE",
    issueDate: "2024",
    credentialId: "VERIFIED-UM-BSIT-01",
    skills: ["Software Engineering", "Core Algorithms", "Debugging", "OOP"],
    description:
      "Validates foundational knowledge of software development concepts, programming logic, object-oriented concepts, and code lifecycle.",
  },
  {
    id: "cert-2",
    title: "Foundational C# & .NET Programming",
    issuer: "freeCodeCamp / Microsoft",
    issueDate: "2024",
    credentialId: "FCC-MS-CSHARP-02",
    skills: ["C#", ".NET Core", "Object-Oriented Design", "Data Structures"],
    description:
      "Comprehensive certification covering foundational C# syntax, data manipulation, methods, error handling, and object-oriented application design.",
  },
  {
    id: "cert-3",
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    issueDate: "2023",
    credentialId: "FCC-RESPONSIVE-WEB-03",
    skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox & Grid"],
    description:
      "Certification encompassing modern semantic HTML5 markup, advanced CSS styling, CSS Grid/Flexbox architecture, and accessible UI layout standards.",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 border-t border-border/40 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <Award className="h-3.5 w-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-xl text-base">
            Formal technical certifications validating practical engineering skills, programming competence, and system fundamentals.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col justify-between rounded-2xl bg-card border border-border/80 p-6 shadow-sm transition-all duration-200 hover:border-blue-500/50 hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="h-3 w-3" />
                    Verified
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[11px] rounded-md bg-secondary text-secondary-foreground font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Calendar className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  Issued {cert.issueDate}
                </span>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-[11px] text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
