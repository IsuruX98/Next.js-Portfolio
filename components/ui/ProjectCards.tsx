import { HoverEffect } from "../ui/card-hover-effect";

export function ProjectCards() {
  return (
    <div className="xl:px-36 lg:px-20 px-12">
      <div className="">
        <h1 className="text-[16px] mb-4">PROJECTS</h1>
        <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          Best Projects
        </div>
      </div>
      <HoverEffect />
    </div>
  );
}
