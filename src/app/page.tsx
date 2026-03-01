import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Timeline from "@/components/experience/Timeline";
import PipelineVisualizer from "@/components/showcases/pipeline/PipelineVisualizer";
import BaseballDashboard from "@/components/showcases/baseball/BaseballDashboard";
import StarSchemaExplorer from "@/components/showcases/starschema/StarSchemaExplorer";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/contact/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <div id="showcases">
          <section className="bg-navy">
            <PipelineVisualizer />
          </section>
          <BaseballDashboard />
          <section className="bg-light-gray/50">
            <StarSchemaExplorer />
          </section>
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
