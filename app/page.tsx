import { FloatingNavDemo } from "@/components/ui/FloatingNavDemo";
import Hero from "../components/Hero";
import React from "react";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import { CardHoverEffectDemo } from "@/components/ui/CardHoverEffectDemo";

const Home = () => {
  return (
    <div>
      <FloatingNavDemo />

      <div>
        <Hero />
        <Education />
        <CardHoverEffectDemo />
      </div>
    </div>
  );
};

export default Home;
