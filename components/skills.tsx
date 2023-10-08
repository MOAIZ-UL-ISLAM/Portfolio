'use client'
import React from "react";
import {motion} from "framer-motion"
import {BiLogoPython,BiLogoJavascript,BiLogoReact,BiLogoMongodb,BiLogoFirebase,BiLogoHtml5,BiLogoCss3,BiLogoTailwindCss} from 'react-icons/bi'
import {FaSass,FaBootstrap} from 'react-icons/fa'
import {TbBrandNextjs} from 'react-icons/tb'
import {DiDjango} from 'react-icons/di'


const Skills = () => {
  return (
    <motion.div
    initial={{opacity:0,scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:1.5}}
    className="flex relative flex-col text-center md:text-left xl:flex-row 
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h1 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-4x1 ">
        Skills
      </h1>
      <div className="grid grid-cols-4 gap-12">
        <span
      
        className="text-6xl   cursor-pointer  border border-black/5 rounded-full p-2 text-blue-800">
          <BiLogoPython/>
        </span>
        <span
        
        className="text-6xl  cursor-pointer  border border-black/5 rounded-full p-2 text-blue-400">
          <BiLogoReact/>
        </span>
        <span className="text-6xl  cursor-pointer  border border-black/5 rounded-full p-2 text-green-600">
          <BiLogoMongodb/>
        </span>
        <span className="text-6xl  cursor-pointer  border border-black/5 rounded-full p-2 text-pink-400">
          <FaSass/>
        </span>
        <span className="text-6xl  cursor-pointer  border border-black/5 rounded-full p-2 text-yellow-300">
          <BiLogoFirebase/>
        </span>
        <span className="text-6xl  cursor-pointer  border border-black/5 rounded-full p-2">
          <TbBrandNextjs/>
        </span>
        <span className="text-6xl  cursor-pointer  border border-black/5 rounded-full p-2 text-red-500">
          <BiLogoHtml5/>
        </span>
        <span className="text-6xl  cursor-pointer  border border-black/5 rounded-full p-2 text-blue-600">
          <BiLogoTailwindCss/>
        </span>
        <span className="text-6xl  cursor-pointer  border border-black/5 rounded-full p-2 text-blue-600">
          <BiLogoCss3/>
        </span>
        <span className="text-6xl   cursor-pointer border border-black/5 rounded-full p-2 text-green-600">
          <DiDjango/>
        </span>
        <span className="text-6xl   cursor-pointer border border-black/5 rounded-full p-2 text-purple-700">
          <FaBootstrap/>
        </span>
        <span className="text-6xl  cursor-pointer  border border-black/5 rounded-full p-2 text-yellow-300">
          <BiLogoJavascript/>
        </span>
       </div>
    </motion.div>
  );
};

export default Skills;
