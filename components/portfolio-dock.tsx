"use client";

import React, { useEffect, useState } from "react";
import {
  Home,
  GraduationCap,
  Wrench,
  Award,
  FolderGit2,
  Mail,
} from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", icon: Home },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "contact", label: "Contact", icon: Mail },
];

export function PortfolioDock() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
      <div className="pointer-events-auto shadow-2xl shadow-blue-950/20 dark:shadow-black/60 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/80 p-1">
        <Dock
          iconSize={40}
          iconMagnification={54}
          iconDistance={110}
          className="border-none mt-0 bg-transparent p-1 gap-1.5"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <DockIcon
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative group transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600/15 text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                }`}
              >
                <span className="sr-only">{item.label}</span>
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                
                {/* Tooltip */}
                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-150 ease-out origin-bottom px-2.5 py-1 text-xs font-medium rounded-md bg-foreground text-background shadow-md pointer-events-none whitespace-nowrap">
                  {item.label}
                </span>

                {isActive && (
                  <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </DockIcon>
            );
          })}

          <div className="mx-1 h-6 w-px bg-border/70 self-center" />

          <DockIcon className="text-muted-foreground hover:text-foreground hover:bg-muted/70">
            <AnimatedThemeToggler variant="circle" />
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
}
