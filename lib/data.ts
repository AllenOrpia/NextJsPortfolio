import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import estatePirates from '@/public/EstatePirates.png';
import breads from '@/public/breads.png'
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
    title: "Breads",
    description:
      "Full-stack Threads clone built with Next.js and TypeScript allowing users to create threads, reply to discussions, and form communities with Clerk-powered authentication.",
    tags: ["Next.js", "TailwindCSS", "Typescript", "MongoDB", "Shadcn"],
    imageUrl: breads,
    projectLink: 'https://breads-olive.vercel.app/'
  },
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
      "Full-stack real estate platform built with the MERN stack and Prisma ORM, allowing users to browse, list, and manage properties with seamless authentication.",
    tags: ["React", "JavaScript", "MongoDB", "Prisma", "Framer"],
    imageUrl: estatePirates,
    projectLink: 'https://estatepirates.vercel.app/'
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