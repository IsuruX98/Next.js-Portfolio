"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import travely from "../../assets/images/travely.webp";
import neighbourly from "../../assets/images/neighbourly.webp";
import helpdesk from "../../assets/images/helpdesk.webp";
import helthmart from "../../assets/images/helthmart.webp";
import eyezenweb from "../../assets/images/eyezenweb.webp";
import eyezenmobile from "../../assets/images/eyezenmobile.webp";
import goticket from "../../assets/images/goticket.webp";
import kandy from "../../assets/images/kandy.webp";

export const HoverEffect = ({ className }: { className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "EyeZen - Revolutionizing Eye Care with Technology (MERN stack)",
      description:
        "eye care application designed to empower users with comprehensive information and resources for preserving and enhancing their eye health. EyeZen is a solution for all things related to eye health.",
      img: eyezenweb,
      link: "https://github.com/IsuruX98/EyeZen-FE",
      lang: "MERN stack, Tailwind CSS, VsCode, Postman",
    },
    {
      title:
        "EyeZen - Mobile Project (React Native, Nodejs, Expressjs and MongoDB)",
      description:
        "mobile app designed to enhance your visual experience! Our React native application combines cutting-edge technology with expert knowledge in eye care. EyeZen is your go-to solution for all things related to eye health",
      img: eyezenmobile,
      link: "https://github.com/IsuruX98/EyeZen-Mobile",
      lang: "React Native, Nodejs, Expressjs, MongoDB, VsCode, Postman",
    },
    {
      title: "Travely - Travel and Tourism Web App (MERN stack)",
      description:
        "I developed user registration, login, and profile management, along with admin features like user oversight and role management, all secured with JWT authentication, for our travel project.",
      img: travely,
      link: "https://github.com/IsuruX98/Travely",
      lang: "MERN stack, Tailwind CSS, VsCode, Postman",
    },
    {
      title: "GoTicket - Mobile Project (React Native, Springboot and MySQL)",
      description:
        "a cutting-edge mobile app designed to enhance bus ticketing systems with a Digital QR ticket system and a Ticket scanner for the inspector to generate tickets and check tickets",
      img: goticket,
      link: "https://github.com/IsuruX98/GoTicket-Mobile",
      lang: "React Native, Springboot, MySQL, VsCode, Postman",
    },
    {
      title: "Kandy Cookery - Restaurant Website Frontend (React, TailwindCSS)",
      description:
        "responsive and visually appealing frontend application created for a restaurant website. It is built using React and Tailwind CSS to provide an interactive and user-friendly experience for restaurant visitors.",
      img: kandy,
      link: "https://github.com/IsuruX98/Kandy-Cookery-FE",
      lang: "React, tailwind",
    },
    {
      title:
        "Neighbourly - App for solution ideas to Economic crisis (Android - Kotlin)",
      description:
        "I contributed by developing user registration, login, andpersonalized home page features for a project tackling rural poverty in Sri Lanka. The platform facilitates fund donations and maintains donation records for testing",
      img: neighbourly,
      link: "https://github.com/IsuruX98/MAD_Project_Neighbourly",
      lang: "Android - Kotlin, Firebase, Android Studio",
    },
    {
      title: "Help Desk - Java Servlet project (Java)",
      description:
        "I managed users and designed UI with UI Kit CSS in a Java Servlet project. I implemented registration, login, and profile features, enhancing my Java web development skills and creating appealing web applications.",
      img: helpdesk,
      link: "https://github.com/IsuruX98/Java-Project-Help-Desk",
      lang: "Java Servlet, UI Kit CSS, MySQL, eclipse, IntelliJ IDEA",
    },
    {
      title:
        "HealthMart - Online Pharmacy management system (HTML / CSS,Javascript, PHP, Sql)",
      description:
        "The project's goal was a responsive online pharmacy site for web development learning. It had medication shopping, cart, admin/user controls, and CRUD operations, teaching HTML, CSS, JavaScript, PHP, and SQL practically.",
      img: helthmart,
      link: "https://github.com/IsuruX98/HealthMart",
      lang: "HTML / CSS,Javascript, PHP, Sql, XAMPP, VsCode",
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  py-10",
        className
      )}
    >
      {projects.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <Image src={item.img} alt={""} className="rounded-2xl" />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-gray-950 border border-black dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "dark:text-zinc-100 font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
