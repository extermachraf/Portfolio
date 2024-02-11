import React from "react";
import "@/app/page.scss";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.section
      className="w-full flex items-center justify-around h-full text-[10px] sm:text-[16px] mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className=" w-[400px] sm:w-[1300px] p-4 h-full ">
        <div className=" w-full flex items-center sm:space-x-16">
          <div className="w-[80%] sm:pl-[7%]  flex flex-col items-start justify-start ">
            <div className="font-bold text-[16px] sm:text-[30px] text-[#00ADB5]">
              Projects
            </div>
            <div className="dark:text-gray-400 text-[#5B6C69]">
              I have had the opportunity to work on a diverse range of projects.
              My journey in the program has equipped me with valuable technical
              skills, a problem-solving mindset, and the ability to collaborate
              effectively with teams.
            </div>
            <div className="font-semibold sm:text-[20px] ">
              {" "}
              Here is a glimpse of some of the impactful projects I have worked
              on:
            </div>
          </div>
          <div className=" w-[15%] flex flex-col items-start  justify-start h-full">
            <img className="" src="/Frame.svg" alt="intro" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Intro;
