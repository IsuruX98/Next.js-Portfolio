import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import img1 from "../assets/logo/react.jpg";
import img2 from "../assets/logo/java.png";
import img3 from "../assets/logo/bootstrap.png";
import img4 from "../assets/logo/css.png";
import img5 from "../assets/logo/expressjs.png";
import img6 from "../assets/logo/html.webp";
import img7 from "../assets/logo/javascript.jpg";
import img8 from "../assets/logo/koa.png";
import img9 from "../assets/logo/kotlin.png";
import img28 from "../assets/logo/native.png";
import img10 from "../assets/logo/Laravel.webp";
import img11 from "../assets/logo/mern.png";
import img12 from "../assets/logo/mongo.png";
import img13 from "../assets/logo/mysql.jpg";
import img14 from "../assets/logo/nextjs.webp";
import img15 from "../assets/logo/nodejs.png";
import img16 from "../assets/logo/php.png";
import img17 from "../assets/logo/python.png";
import img18 from "../assets/logo/springboot.png";
import img19 from "../assets/logo/tailwind.webp";

import img20 from "../assets/logo/vscode.png";
import img21 from "../assets/logo/webstorm.png";
import img22 from "../assets/logo/ij.jpg";
import img23 from "../assets/logo/postman.jpg";
import img24 from "../assets/logo/figma.jpg";
import img25 from "../assets/logo/canva.jpg";
import img26 from "../assets/logo/as.png";
import img27 from "../assets/logo/pc.png";
import img29 from "../assets/logo/github.jpg";
import img30 from "../assets/logo/git.jpg";

const Skills = () => {
  return (
    <div className="xl:px-36 lg:px-20 px-12 py-28 sm:mr-0 mr-[-80px]">
      <div className="mb-16">
        <h1 className="text-[16px] mb-4">SKILLS</h1>
        <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          Languages and Frameworks
        </div>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5}>
          <div className="flex md:gap-10 gap-2 pr-5">
            <div>
              <Image
                src={img1}
                alt={"react"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img2}
                alt={"java"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img3}
                alt={"bootstrap"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img4}
                alt={"css"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img5}
                alt={"expressjs"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img6}
                alt={"html"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img7}
                alt={"javascript"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img8}
                alt={"koa"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img28}
                alt={"kotlin"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img9}
                alt={"kotlin"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img10}
                alt={"laravel"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img11}
                alt={"mern"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img12}
                alt={"mongo"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img13}
                alt={"mysql"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img14}
                alt={"nextjs"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img15}
                alt={"nodejs"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img16}
                alt={"php"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img17}
                alt={"python"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img18}
                alt={"springboot"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img19}
                alt={"tailwind"}
                className="w-32 h-32 object-contain"
              />
            </div>
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
            <div>
              <Image
                src={img20}
                alt={"react"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img21}
                alt={"java"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img29}
                alt={"java"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img22}
                alt={"bootstrap"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img27}
                alt={"css"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img30}
                alt={"css"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img23}
                alt={"css"}
                className="w-32 h-32 object-contain"
              />
            </div>

            <div>
              <Image
                src={img24}
                alt={"expressjs"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img25}
                alt={"html"}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div>
              <Image
                src={img26}
                alt={"javascript"}
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
