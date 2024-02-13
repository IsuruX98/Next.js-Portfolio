"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import eyezenweb from "../../assets/images/image1.jpg";
import Image from "next/image";

export function AnimatedPinDemo() {
  const cardData = [
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
      img: eyezenweb,
      link: "https://github.com/IsuruX98/EyeZen-Mobile",
      lang: "React Native, Nodejs, Expressjs, MongoDB, VsCode, Postman",
    },
    {
      title: "Travely - Travel and Tourism Web App (MERN stack)",
      description:
        "I developed user registration, login, and profile management, along with admin features like user oversight and role management, all secured with JWT authentication, for our travel project.",
      img: eyezenweb,
      link: "https://github.com/IsuruX98/Travely",
      lang: "MERN stack, Tailwind CSS, VsCode, Postman",
    },
    {
      title: "GoTicket - Mobile Project (React Native, Springboot and MySQL)",
      description:
        "a cutting-edge mobile app designed to enhance bus ticketing systems with a Digital QR ticket system and a Ticket scanner for the inspector to generate tickets and check tickets",
      img: eyezenweb,
      link: "https://github.com/IsuruX98/GoTicket-Mobile",
      lang: "React Native, Springboot, MySQL, VsCode, Postman",
    },
    {
      title: "Kandy Cookery - Restaurant Website Frontend (React, TailwindCSS)",
      description:
        "responsive and visually appealing frontend application created for a restaurant website. It is built using React and Tailwind CSS to provide an interactive and user-friendly experience for restaurant visitors.",
      img: eyezenweb,
      link: "https://github.com/IsuruX98/Kandy-Cookery-FE",
      lang: "React, tailwind",
    },
    {
      title:
        "Neighbourly - App for solution ideas to Economic crisis (Android - Kotlin)",
      description:
        "I contributed by developing user registration, login, andpersonalized home page features for a project tackling rural poverty in Sri Lanka. The platform facilitates fund donations and maintains donation records for testing",
      img: eyezenweb,
      link: "https://github.com/IsuruX98/MAD_Project_Neighbourly",
      lang: "Android - Kotlin, Firebase, Android Studio",
    },
    {
      title: "Help Desk - Java Servlet project (Java)",
      description:
        "I managed users and designed UI with UI Kit CSS in a Java Servlet project. I implemented registration, login, and profile features, enhancing my Java web development skills and creating appealing web applications.",
      img: eyezenweb,
      link: "https://github.com/IsuruX98/Java-Project-Help-Desk",
      lang: "Java Servlet, UI Kit CSS, MySQL, eclipse, IntelliJ IDEA",
    },
    {
      title:
        "HealthMart - Online Pharmacy management system (HTML / CSS,Javascript, PHP, Sql)",
      description:
        "The project's goal was a responsive online pharmacy site for web development learning. It had medication shopping, cart, admin/user controls, and CRUD operations, teaching HTML, CSS, JavaScript, PHP, and SQL practically.",
      img: eyezenweb,
      link: "https://github.com/IsuruX98/HealthMart",
      lang: "HTML / CSS,Javascript, PHP, Sql, XAMPP, VsCode",
    },
  ];

  return (
    <div className="w-full xl:px-36 lg:px-20 px-12 py-28">
      <div className="grid grid-cols-4">
        {cardData.map((data, index) => (
          <PinContainer key={index} title={data.title} href={data.link}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-full">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {data.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">{data.description}</span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4">
                <Image src={data.img} alt="" />
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}
