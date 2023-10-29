"use client";

import React from "react"; 
import SectionHeading from "./Heading";
import { motion } from "framer-motion";

export default function About() {

  return (
    <motion.section
     
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-1 scroll-mt-48"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       I am pursuing a degree in{" "}
        <span className="font-medium">Software Engineering</span>, I have a
        passion for programming.My main focus is {" "}
        <span className="font-medium">React(Next)</span>{" "} & {" "}
        <span className="font-medium">python(Django)</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
        I am also familiar with TypeScript, Firebase, MySql, Mongodb and much more. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games & watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history</span>.
      </p>
    </motion.section>
  );
}