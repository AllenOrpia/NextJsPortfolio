"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className=" max-w-[45rem] text-center leading-8  scroll-mt-28 mb-28 "
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 text-lg ">
        After earning my bachelor's degree in biological sciences, I took the
        opportunity to deeply contemplate on what I truly wanted to do in life.
        It was during this period of reflection that I decided to pursure my
        true passion for programming. Enrolling in a bootcamp, I embarked on a
        journey into full-stack development. What captivates me most about
        programming is the immense satisfaction I get when tackling complex
        challenges and discovering solutions. Currently, my core stack is
        MongoDB, Node.js, React, and NextJS. I am also familiar with Python and
        MySQL. I love to keep myself occupied and am continously learning new
        technologies to further develop my skills.
      </p>
      <p className="text-lg">
        Outside of coding, you can usually find me playing video games,
        binge-watching movies on Netflix, or hitting the gym. I've also got a
        soft spot for nature, so I make it a point to take leisurely walks
        whenever I can, soaking in the scenery and giving my mind a chance to
        unwind.
      </p>
    </motion.section>
  );
}
