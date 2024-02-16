"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import {
  IconHome,
  IconFolderCode,
  IconUser,
  IconCode,
  IconBook,
} from "@tabler/icons-react";
export function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "hero-section",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Education",
      link: "education-section",
      icon: <IconBook className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "skills-section",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "projects-section",
      icon: (
        <IconFolderCode className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
