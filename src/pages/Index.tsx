import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import WorkflowsGallery from "@/components/WorkflowsGallery";
import Community from "@/components/Community";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <WorkflowsGallery />
      <Community />
      <Contact />
    </div>
  );
};

export default Index;