import React from "react";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 h-screen">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-8 xl:px-36 lg:px-20 px-12">
          <div className="text-6xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            Isuru Madusanka
            <div className="relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            </div>
          </div>

          <div>
            As a BSc (Hons) Software Engineering student at the Sri Lanka
            Institute of Information Technology, I possess coding skills in
            Java, Kotlin, and Javascript, along with familiarity in Springboot,
            MERN stack, and CSS frameworks like Bootstrap5 and Tailwind. I am
            eager to secure an internship as a software engineer to contribute
            to meaningful projects and learn from a dynamic team, utilizing my
            knowledge and passion for software development.
          </div>
          <div>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  dark:bg-black  rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Download CV
              </div>
            </button>
          </div>
        </div>
      </div>
      <div>2</div>
    </div>
  );
};

export default Hero;
