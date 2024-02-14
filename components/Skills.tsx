import React from "react";
import { FaReact, FaJava, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiSpringboot,
  SiPhp,
  SiPython,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiAndroidstudio,
  SiIntellijidea,
  SiFigma,
  SiCanva,
  SiPostman,
  SiWebstorm,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="xl:px-36 lg:px-20 px-12 py-28 sm:mr-0 mr-[-80px]">
      <div className="mb-16">
        <h1 className="text-[16px] mb-4">SKILLS</h1>
        <div className="flex flex-col gap-7">
          <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            Languages And Frameworks
          </div>
          <div className="flex md:justify-evenly justify-center gap-2">
            <FaReact className="lg:text-5xl md:text-3xl text-2xl" />
            <SiNextdotjs className="lg:text-5xl md:text-3xl text-2xl" />
            <FaJava className="lg:text-5xl md:text-3xl text-2xl" />
            <SiJavascript className="lg:text-5xl md:text-3xl text-2xl" />
            <SiKotlin className="lg:text-5xl md:text-3xl text-2xl" />
            <FaNodeJs className="lg:text-5xl md:text-3xl text-2xl" />
            <SiMongodb className="lg:text-5xl md:text-3xl text-2xl" />
            <SiSpringboot className="lg:text-5xl md:text-3xl text-2xl" />
            <SiPhp className="lg:text-5xl md:text-3xl text-2xl" />
            <SiPython className="lg:text-5xl md:text-3xl text-2xl" />
            <SiMysql className="lg:text-5xl md:text-3xl text-2xl" />
            <SiTailwindcss className="lg:text-5xl md:text-3xl text-2xl" />
            <SiBootstrap className="lg:text-5xl md:text-3xl text-2xl" />
            <SiHtml5 className="lg:text-5xl md:text-3xl text-2xl" />
            <FaCss3Alt className="lg:text-5xl md:text-3xl text-2xl" />
          </div>
          <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            Environments
          </div>
          <div className="flex md:justify-evenly justify-center gap-3">
            <TbBrandVscode className="lg:text-5xl md:text-3xl text-2xl" />
            <SiIntellijidea className="lg:text-5xl md:text-3xl text-2xl" />
            <SiWebstorm className="lg:text-5xl md:text-3xl text-2xl" />
            <SiAndroidstudio className="lg:text-5xl md:text-3xl text-2xl" />
            <SiPostman className="lg:text-5xl md:text-3xl text-2xl" />
            <SiFigma className="lg:text-5xl md:text-3xl text-2xl" />
            <SiCanva className="lg:text-5xl md:text-3xl text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
