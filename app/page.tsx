import { ScrollArea } from "@/components/ui/scroll-area";
import { HeroSection } from "@/components/sections/hero-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { PortfolioDock } from "@/components/portfolio-dock";
import { AboutSection } from "@/components/sections/about-section";

export default function Home() {
  return (
    <div className="relative h-dvh w-full overflow-hidden bg-background">
      <ScrollArea className="h-full w-full">
        <div className="relative z-10 max-w-2xl mx-auto py-12 pb-28 sm:py-24 px-6">
          {/* Main Content */}
          <main className="min-h-dvh flex flex-col gap-14 relative">
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <CertificationsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        </div>
      </ScrollArea>

      {/* Bottom Floating MagicUI Dock */}
      <PortfolioDock />
    </div>
  );
}
