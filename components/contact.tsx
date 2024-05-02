"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmails";
import { useFormStatus } from "react-dom";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="contact"
      className="mb-28 sm:mb-40  w-[min(100% ,38rem)] text-center scroll-mt-28"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 dark:text-gray-50 -mt-5 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:allenorpia17@gmail.com">
          allenorpia17@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email Sent successfully')
        }}
      >
        <input
          required
          maxLength={500}
          className="h-14 rounded-lg borderBlack px-4"
          type="email"
          placeholder="Your email"
          name="senderEmail"
        />
        <textarea
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          name="message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
