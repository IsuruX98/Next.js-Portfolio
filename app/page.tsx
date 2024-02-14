import { FloatingNavDemo } from "@/components/ui/FloatingNavDemo";
import Hero from "../components/Hero";
import React from "react";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import { CardHoverEffectDemo } from "@/components/ui/CardHoverEffectDemo";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div>
      <FloatingNavDemo />

      <div>
        <Hero />
        <Education />
        <Skills />
        <CardHoverEffectDemo />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
