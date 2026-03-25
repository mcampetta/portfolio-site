import { ContactSection } from "@/components/contact-section";
import { EngineeringGuidesSection } from "@/components/engineering-guides-section";
import { ExperienceSection } from "@/components/experience-section";
import { FocusSection } from "@/components/focus-section";
import { HeroSection } from "@/components/hero-section";
import { LabWorkSection } from "@/components/lab-work-section";
import { ProjectsSection } from "@/components/projects-section";
import { RecoveryPracticeSection } from "@/components/recovery-practice-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { siteContent } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection content={siteContent} />
      <LabWorkSection items={siteContent.labWork} />
      <RecoveryPracticeSection items={siteContent.recoveryPracticeVideos} />
      <EngineeringGuidesSection item={siteContent.engineeringGuide} />
      <ExperienceSection items={siteContent.experience} />
      <ProjectsSection items={siteContent.projects} githubCta={siteContent.githubCta} />
      <TestimonialsSection items={siteContent.testimonials} />
      <FocusSection items={siteContent.skills} />
      <ContactSection contact={siteContent.contact} />
    </>
  );
}
