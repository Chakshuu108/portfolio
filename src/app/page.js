import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import SkillsMarquee from '@/components/SkillsMarquee';
import ExperienceSection from '@/components/ExperienceSection';
import ResearchSection from '@/components/ResearchSection';
import Projects from '@/components/Projects';
import ProjectFlow from '@/components/ProjectFlow';
import Capabilities from '@/components/Capabilities';
import Timeline from '@/components/Timeline';
import CTAContact from '@/components/CTAContact';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      <Hero />
      <TrustBar />
      <SkillsMarquee />
      <ExperienceSection />
      <ResearchSection />
      <Projects />
      <ProjectFlow />
      <Capabilities />
      <Timeline />
      <CTAContact />
      <Footer />
      <AIAssistant />
    </main>
  );
}
