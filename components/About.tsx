"use client";
import React, { use, useContext } from "react";
import { IoMdCodeDownload } from "react-icons/io";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      className="w-full font-bold"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex  justify-around">
        <div className="max-w-[600px] min-w-[300px] h-[340px] sm:h-[450px] sm:max-w-[600px] sm:min-w-[300px] lg:w-[800px]">
          <div className="text-[#00ADB5] font-hi text-[30px] py-5 sm:text-[35px] lg:text-[44px]">
            Hi, I m Achraf
          </div>
          <div className="text-[#5B6C69] dark:text-[#00ADB5] font-hi text-[20px] pb-10 sm:text-[30px] lg:text-[30px]">
            Software engineering student
          </div>
          <div className="font-normal text-[14px] w-[350px] pb-4 sm:w-[380px] lg:w-[470px] lg:text-[17px]">
            I'm a software engineering student at 1337 School with a versatile
            skill set in programming languages. I'm dedicated to continuous
            learning and eager to contribute to dynamic tech projects and teams,
            aiming to make a positive impact
          </div>
          <div className="flex w-full space-x-4 lg:space-x-6 justify-start items-center pb-3">
            <button className="dark:bg-[#FFFFFF] dark:text-[#222222] bg-[#2F3140] text-white w-[100px] h-[30px] rounded-[25px] text-[13px] hover:bg-opacity-50 dark:hover:bg-opacity-50 transition-all duration-300 ease-in-out sm:w-[100px] lg:w-[150px]">
              Contact me
            </button>
            <button
              className="bg-[#2F3140] text-white w-[130px] h-[25px] rounded-[25px] text-[13px] flex items-center justify-center space-x-2
            hover:bg-teal-500 hover:bg-opacity-75 hover:text-white transition-all duration-300 ease-in-out sm:w-[140px] lg:w-[200px]"
            >
              <div>Download CV</div>
              <IoMdCodeDownload className="w-[22px] h-[22px]" />
            </button>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="font-lexend">Find me on :</div>
            <div className="flex space-x-2">
              <Link href="https://github.com/extermachraf">
                <FaGithubSquare />
              </Link>
              <Link href="https://www.linkedin.com/in/achraf-el-kouch-a43256258/">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-[280px] h-[340px] sm:h-[450px] flex items-center justify-center">
          <div className=" bg-[#5B6C69] dark:bg-[#C5C5C5] sm:w-[220px] h-[220px] absolute rounded-full  container hidden sm:block lg:w-[245px] lg:h-[240px]">
            <Image
              className="rounded-full"
              src="/noback.png"
              alt="selfpic"
              sizes="(max-width: 600px) 400px,
            (max-width: 1200px) 800px,
            1200px"
              fill
            ></Image>
          </div>
          <div className="dark:bg-[#FFFFFF80] hidden sm:block absolute rounded-full ml-[280px] mb-[170px] -z-20 w-[120px] h-[120px] bg-[#5B6C6980] blur-[7px]"></div>
          <div className="mb-[350px] ml-[80px] dark:bg-[#FFFFFF80] hidden sm:block absolute rounded-full w-[50px] h-[50px] bg-[#5B6C6980] blur-[7px]"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
