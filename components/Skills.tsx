import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

// Import images
import reactLogo from "../assets/logo/react.webp";
import javaLogo from "../assets/logo/java.webp";
import bootstrapLogo from "../assets/logo/bootstrap.webp";
import cssLogo from "../assets/logo/css.webp";
import expressjsLogo from "../assets/logo/expressjs.webp";
import htmlLogo from "../assets/logo/html.webp";
import reactNative from "../assets/logo/IMG_1043.webp";
import javascriptLogo from "../assets/logo/javascript.webp";
import koaLogo from "../assets/logo/koa.webp";
import kotlinLogo from "../assets/logo/kotlin.webp";
import laravelLogo from "../assets/logo/Laravel.webp";
import mernLogo from "../assets/logo/mern.webp";
import mongoLogo from "../assets/logo/mongo.webp";
import mysqlLogo from "../assets/logo/mysql.webp";
import nextjsLogo from "../assets/logo/nextjs.webp";
import nodejsLogo from "../assets/logo/nodejs.webp";
import phpLogo from "../assets/logo/php.webp";
import pythonLogo from "../assets/logo/python.webp";
import springbootLogo from "../assets/logo/springboot.webp";
import tailwindLogo from "../assets/logo/tailwind.webp";
import vscodeLogo from "../assets/logo/vscode.webp";
import webstormLogo from "../assets/logo/webstorm.webp";
import intellijLogo from "../assets/logo/ij.webp";
import postmanLogo from "../assets/logo/postman.webp";
import figmaLogo from "../assets/logo/figma.webp";
import canvaLogo from "../assets/logo/canva.webp";
import androidStudioLogo from "../assets/logo/as.webp";
import pcLogo from "../assets/logo/pc.webp";
import githubLogo from "../assets/logo/github.webp";
import gitLogo from "../assets/logo/git.webp";

const Skills = () => {
  return (
    <div className="xl:px-36 lg:px-20 px-12 py-16">
      <div className="mb-16">
        <h1 className="text-[16px] mb-4">SKILLS</h1>
        <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          Languages and Frameworks
        </div>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5}>
          <div className="flex md:gap-10 gap-2 pr-5">
            {[
              { src: reactLogo, alt: "React" },
              { src: javaLogo, alt: "Java" },
              { src: bootstrapLogo, alt: "Bootstrap" },
              { src: cssLogo, alt: "CSS" },
              { src: expressjsLogo, alt: "Express.js" },
              { src: htmlLogo, alt: "HTML" },
              { src: reactNative, alt: "reactNative" },
              { src: javascriptLogo, alt: "JavaScript" },
              { src: koaLogo, alt: "Koa" },
              { src: kotlinLogo, alt: "Kotlin" },
              { src: laravelLogo, alt: "Laravel" },
              { src: mernLogo, alt: "MERN" },
              { src: mongoLogo, alt: "MongoDB" },
              { src: mysqlLogo, alt: "MySQL" },
              { src: nextjsLogo, alt: "Next.js" },
              { src: nodejsLogo, alt: "Node.js" },
              { src: phpLogo, alt: "PHP" },
              { src: pythonLogo, alt: "Python" },
              { src: springbootLogo, alt: "Spring Boot" },
              { src: tailwindLogo, alt: "Tailwind CSS" },
            ].map((logo, index) => (
              <div key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="w-28 h-28 object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      <div className="pt-6">
        <div className="mb-16">
          <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            Tools and Environments
          </div>
        </div>

        <Marquee direction="left" speed={100} delay={5}>
          <div className="flex md:gap-10 gap-2 pr-5">
            {[
              { src: vscodeLogo, alt: "VSCode" },
              { src: webstormLogo, alt: "WebStorm" },
              { src: intellijLogo, alt: "IntelliJ IDEA" },
              { src: postmanLogo, alt: "Postman" },
              { src: figmaLogo, alt: "Figma" },
              { src: canvaLogo, alt: "Canva" },
              { src: androidStudioLogo, alt: "Android Studio" },
              { src: pcLogo, alt: "PC" },
              { src: githubLogo, alt: "GitHub" },
              { src: gitLogo, alt: "Git" },
            ].map((logo, index) => (
              <div key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="w-32 h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
