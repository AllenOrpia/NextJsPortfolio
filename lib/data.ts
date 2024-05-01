import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import estatePirates from '@/public/EstatePirates.png';
import calGems from '@/public/Calgems1.png';
import nouveauDepart from '@/public/nouveau-depart.png';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "Nouveau Depart",
    description:
      "Blog website where users can share experiences, insights, and stories. Built with NextJs app router. Integrated with a text editor and contain pagination features.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "NextAuth"],
    imageUrl: nouveauDepart,
    projectLink: 'https://nouveau-depart-pearl.vercel.app/'
  },
  {
    title: "Estate Pirates",
    description:
      "Real Estate website for property listings. It has features like filtering and sorting.",
    tags: ["React", "JavaScript", "MongoDB", "Tailwind", "Prisma", "Framer"],
    imageUrl: estatePirates,
    projectLink: 'https://estatepirates.vercel.app/'
  },
  {
    title: "CalGems",
    description:
      "Yelp-like clone for hiking/camping trails. Features a map for ui enhancement and comments for user interaction.",
    tags: ["Express", "Ejs", "Javascript", "NodeJs"],
    imageUrl: calGems,
    projectLink: 'https://serene-anchorage-99994-207a1d3f8d8d.herokuapp.com/'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "MySQL",
  "Python",
] as const;