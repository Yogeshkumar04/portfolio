import CursorGlow from "@/components/ui/CursorGlow";
import Hero from "@/components/home/Hero";
import AboutStory from "@/components/home/AboutStory";
import StorySteps from "@/components/home/StorySteps";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ResearchStatement from "@/components/home/ResearchStatement";
import PublicationsPreview from "@/components/home/PublicationsPreview";
import Skills from "@/components/home/Skills";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <CursorGlow />
      <Hero />
      <AboutStory />
      <StorySteps />
      <FeaturedProjects />
      <ResearchStatement />
      <PublicationsPreview />
      <Skills />
      <ContactCTA />
    </main>
  );
}