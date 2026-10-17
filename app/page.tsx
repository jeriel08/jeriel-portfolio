import { ScrollArea } from "@/components/ui/scroll-area";
import { BlurFade } from "@/components/ui/blur-fade";
import { HeroSection } from "@/components/sections/hero-section";
import { EducationSection } from "@/components/sections/education-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { PortfolioDock } from "@/components/portfolio-dock";
import { AboutSection } from "@/components/sections/about-section";
import { Pointer } from "@/components/ui/pointer";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <div className="relative h-dvh w-full overflow-hidden bg-background [@media(pointer:fine)]:[&_*]:cursor-none">
      <Pointer className="fill-blue-500 text-blue-500" />
      <ScrollArea className="h-full w-full">
        <div className="relative z-10 max-w-2xl mx-auto py-12 pb-28 sm:py-24 px-6">
          {/* Main Content */}
          <main className="min-h-dvh flex flex-col gap-14 relative">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <HeroSection />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <AboutSection />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <EducationSection />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <CertificationsSection />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <SkillsSection />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <ProjectsSection />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <ContactSection />
            </BlurFade>
          </main>
        </div>
      </ScrollArea>

      {/* Bottom Floating MagicUI Dock */}
      <PortfolioDock />
    </div>
  );
}
