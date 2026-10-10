"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, CheckCircle2 } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Lens } from "@/components/ui/lens";
import { Badge } from "@/components/ui/badge";

export interface Certification {
  id: string;
  name: string;
  program: string;
  issuer: string;
  date: string;
  fullDate: string;
  credentialUrl?: string;
  skills: string[];
  badgeUrl: string;
}

const certifications: Certification[] = [
  {
    id: "cert-java",
    name: "Java",
    program: "Information Technology Specialist",
    issuer: "Certiport • Pearson VUE",
    date: "Mar 2024",
    fullDate: "March 6, 2024",
    credentialUrl:
      "https://www.credly.com/badges/d7954d81-27df-4ed6-b8df-4a404d5bdadb/public_url",
    skills: [
      "Java SE",
      "Object-Oriented Programming",
      "Algorithms",
      "Data Structures",
    ],
    badgeUrl: "/java.svg",
  },
  {
    id: "cert-db",
    name: "Databases",
    program: "Information Technology Specialist",
    issuer: "Certiport • Pearson VUE",
    date: "Apr 2025",
    fullDate: "April 4, 2025",
    credentialUrl:
      "https://www.credly.com/badges/ffc513c5-6247-469a-b95e-73f407e44f2d/public_url",
    skills: [
      "Database Administration",
      "Data Manipulation",
      "Core Database Concepts",
      "Creating Database Objects",
      "Data Storage",
    ],
    badgeUrl: "/databases.svg",
  },
  {
    id: "cert-html-css",
    name: "HTML and CSS",
    program: "Information Technology Specialist",
    issuer: "Certiport • Pearson VUE",
    date: "May 2025",
    fullDate: "May 15, 2025",
    credentialUrl:
      "https://www.credly.com/badges/19683aac-a1ec-46c8-8937-5b2b615fc687/public_url",
    skills: [
      "HTML5 Semantics",
      "CSS3 Architecture",
      "Responsive Design",
      "Flexbox & Grid",
    ],
    badgeUrl: "/html_and_css.svg",
  },
  {
    id: "cert-networking",
    name: "Networking",
    program: "Information Technology Specialist",
    issuer: "Certiport • Pearson VUE",
    date: "Oct 2025",
    fullDate: "October 3, 2025",
    credentialUrl:
      "https://www.credly.com/badges/ad22cc45-7fe8-44c0-b326-be019c4daa89/public_url",
    skills: [
      "Basic Network Infrastructure",
      "Internet Protocol",
      "Local Area Networking",
      "Network Security",
      "OSI Model",
      "Wide Area Networks",
      "Wired and Wireless Networks",
    ],
    badgeUrl: "/networking.svg",
  },
  {
    id: "cert-security",
    name: "Network Security",
    program: "Information Technology Specialist",
    issuer: "Certiport • Pearson VUE",
    date: "Jul 2026",
    fullDate: "July 14, 2026",
    credentialUrl:
      "https://www.credly.com/badges/19de208e-2abc-48be-87d7-8966ae5668fd/public_url",
    skills: [
      "Network Security",
      "Operating System Security",
      "Security Layers",
      "Security Software",
    ],
    badgeUrl: "/network_security.svg",
  },
];

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const swipeDirection = isDesktop ? "right" : "down";

  const handleOpenCert = (cert: Certification) => {
    setActiveCert(cert);
    setSelectedCert(cert);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedCert(null);
    }
  };

  const currentCert = selectedCert || activeCert || certifications[0];

  return (
    <section id="certifications" className="space-y-4 text-left">
      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
        Certifications
      </h3>

      <div className="flex flex-col gap-3">
        {certifications.map((cert) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => handleOpenCert(cert)}
            className="group flex items-start gap-3 sm:gap-4 p-1 -mx-1 rounded-xl text-left cursor-pointer focus:outline-none"
          >
            {/* Credly Badge on the left */}
            <div className="size-10 sm:size-11 rounded-full border border-border/80 bg-muted/40 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-xs mt-0.5 group-hover:border-blue-500/50 transition-colors">
              <Image
                src={cert.badgeUrl}
                alt={`${cert.name} Credly Badge`}
                width={44}
                height={44}
                className="size-full object-contain"
              />
            </div>

            {/* Certification Name, Program, and Date */}
            <div className="flex-1 min-w-0">
              {/* Top row: Name on left, Date on right (same level) */}
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 font-semibold text-xs sm:text-sm text-foreground">
                  <span className="truncate">{cert.name}</span>
                  <ArrowUpRight className="size-3.5 text-muted-foreground shrink-0 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                </span>
                <span className="text-[11px] sm:text-xs tabular-nums text-muted-foreground text-right shrink-0 font-medium">
                  {cert.date}
                </span>
              </div>

              {/* Bottom row: Program & Issuer */}
              <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 truncate">
                {cert.program}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Certificate Drawer (Bottom on mobile, Floating on desktop) */}
      <Drawer
        key={swipeDirection}
        open={!!selectedCert}
        onOpenChange={handleOpenChange}
        swipeDirection={swipeDirection}
        showSwipeHandle={!isDesktop}
      >
        <DrawerContent className="data-[swipe-axis=y]:h-[85dvh] data-[swipe-axis=y]:max-h-[92dvh] sm:max-w-md">
          {/* Header */}
          <DrawerHeader className="p-5 pb-3">
            <div className="flex flex-col gap-1 text-left">
              <DrawerTitle className="text-base sm:text-lg font-bold text-foreground">
                {currentCert.name}
              </DrawerTitle>
              <DrawerDescription className="text-xs text-muted-foreground">
                {currentCert.program} • {currentCert.issuer}
              </DrawerDescription>
            </div>
          </DrawerHeader>

          {/* Drawer Body / Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-5 py-3 space-y-4">
            {/* Status card with Credly Badge preview */}
            <div className="rounded-xl border border-dashed border-border/80 bg-muted/20 p-5 text-center space-y-4">
              {/* Prominent Badge Preview with MagicUI Lens */}
              <div className="flex flex-col items-center justify-center gap-1.5">
                <Lens
                  zoomFactor={1.7}
                  lensSize={140}
                  ariaLabel="Magnify Credly Badge"
                  className="rounded-2xl cursor-zoom-in"
                >
                  <div className="relative size-36 sm:size-44 p-1 flex items-center justify-center drop-shadow-md">
                    <Image
                      src={currentCert.badgeUrl}
                      alt={`${currentCert.name} Credly Badge`}
                      width={176}
                      height={176}
                      className="size-full object-contain pointer-events-none select-none"
                      priority
                    />
                  </div>
                </Lens>
                <p className="text-[10px] text-muted-foreground/70 select-none">
                  Hover to inspect badge details
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <CheckCircle2 className="size-3.5" />
                <span>Verified Credential</span>
              </div>
              <div className="space-y-0.5">
                <p className="text-xs text-muted-foreground">Issued Date</p>
                <p className="text-sm font-semibold text-foreground">
                  {currentCert.fullDate}
                </p>
              </div>

              <div className="pt-2.5 border-t border-border/50 text-left">
                <p className="text-xs text-muted-foreground mb-2 text-center">
                  Verified Competencies
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {currentCert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <DrawerFooter className="p-5 pt-3 border-t border-border/40 gap-2">
            {currentCert.credentialUrl && (
              <a
                href={currentCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
              >
                <span>Verify Credly</span>
                <ExternalLink className="size-3.5" />
              </a>
            )}
            <DrawerClose className="w-full py-2 px-4 rounded-xl border border-border text-foreground hover:bg-muted text-xs sm:text-sm font-medium transition-colors cursor-pointer">
              Close
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
