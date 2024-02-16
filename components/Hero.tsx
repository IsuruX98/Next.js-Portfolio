import image from "../assets/images/profile.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:mr-0 mr-[-80px] xl:pt-0 lg:pt-20 ">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-8 xl:px-36 lg:px-20 px-12 lg:pt-0 pt-32">
          <div className="xl:text-6xl text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            Isuru Madusanka
            <div className="relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            </div>
          </div>

          <div className="text-sm">
            As an intern software engineer at CreativeHub Global, I'm pursuing a
            BSc.Special (Hons) in Information Technology, specializing in
            Software Engineering. At CreativeHub, I leverage ReactJS, Next.js,
            Tailwind CSS, Bootstrap, Node.js, and Express.js to contribute to
            diverse projects. I also engage in freelancing, enhancing my skills
            and broadening my experience. My passion for software development
            fuels my commitment to continuous learning and growth in this
            dynamic field.
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
      <div className="flex flex-col justify-center">
        <div>
          <Image src={image} alt={"profile"} className="p-20" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
