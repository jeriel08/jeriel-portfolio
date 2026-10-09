import { PortfolioNavbar } from "@/components/portfolio-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { PortfolioDock } from "@/components/portfolio-dock";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <PortfolioNavbar />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Bottom Floating MagicUI Dock */}
      <PortfolioDock />
    </div>
  );
}
