import { FloatingNavDemo } from "@/components/ui/FloatingNavDemo";
import Hero from "../components/Hero";
import React from "react";
import Education from "@/components/Education";
import { CardHoverEffectDemo } from "@/components/ui/CardHoverEffectDemo";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div>
      <div>
        <section id="hero-section">
          <Hero />
        </section>
        <section id="education-section" className="py-10">
          <Education />
        </section>
        <section id="skills-section">
          <Skills />
        </section>
        <section id="projects-section" className="py-10">
          <CardHoverEffectDemo />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
