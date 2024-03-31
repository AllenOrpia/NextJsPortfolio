'use client'

import Image from "next/image";
import React from "react";
import me from "@/public/pic_of_me.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import useSectionInView from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5)
  
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center  mx-auto scroll-mt-52 mt-28"
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={me}
              alt="Picture of allen on an egghead"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className=" h-28 w-28 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            ✌️
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        Hello, <span className="font-bold">I'm Allen </span>and I'm a{" "}
        <span className="font-bold">full-stack developer</span> with a focus on
        the <span className="font-bold">MERN</span> stack. I enjoy building
        responsive websites & applications.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
      >
        <Link
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-90 transition cursor-pointer "
          href="#contact"
        >
          Contact Me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-90 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
          download={true}
        >
          My Resume{" "}
          <HiDownload className="group-hover:translate-y-1 opacity-70 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/allen-orpia-386b2213b/"
          target="_blank"
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-125 hover:scale-125 hover:text-gray-950 active:scale-90 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/AllenOrpia"
          target="_blank"
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full text-[1.35rem] focus:scale-125 hover:scale-125 hover:text-gray-950 active:scale-90 transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
