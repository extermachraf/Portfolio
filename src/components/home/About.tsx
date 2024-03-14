"use client";
import React from "react";
import LeftSide from "./leftside/LeftSide";
import { SVGMaskEffectDemo } from "../SVGMaskEffectDemo/SVGMaskEffectDemo";
import Linkdeen from "@/../public/linkdeen.svg";
import Link from "next/link";
import git from "@/../public/github.svg";
import Image from "next/image";
import { motion } from "framer-motion";
function FindMeOn() {
  return (
    <div className="flex items-center justify-end">
      <div className="mr-[10px] w-[300px] text-[30px]  col-start-2 ">
        <div className="flex space-x-7 items-center">
          <div className="text-[#252930] dark:text-white">find me on</div>
          <div className="flex space-x-3">
            <Link href="https://www.linkedin.com/in/achraf-el-kouch-a43256258/">
              <Image
                src="/linkdeen.svg"
                width="24"
                height="24"
                className="h-[30px] w-[30px] object-cover group-hover/card:shadow-xl"
                alt=""
              />
            </Link>
            <Link href="https://github.com/extermachraf?tab=overview&from=2024-03-01&to=2024-03-05">
              <Image
                src="/github.svg"
                width="24"
                height="24"
                className="h-[30px] w-[30px] object-cover group-hover/card:shadow-xl"
                alt=""
              />
            </Link>
            <Link href="achraf.maim@gmail.com">
              <Image
                src="/mail.svg"
                width="24"
                height="24"
                className="h-[30px] w-[30px] object-cover group-hover/card:shadow-xl"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="rounded-lg lg:w-[300px] h-[10px] bg-[#4F46E5] dark:bg-[#27C7D4]"></div>
      </div>
    </div>
  );
}

const About = () => {
  return (
    <motion.div
      id="AboutSection"
      className=" w-full h-screen flex items-center justify-center pt-11"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <div className=" w-full h-full flex items-center space-x-4 justify-around">
        <div className="sm:hidden md:block md:w-[500px] lg:w-[800px] h-full">
          <LeftSide />
        </div>
        <div className=" w-full  h-full grid grid-rows-4 place-items-center ">
          <div className="row-start-1  w-full h-full flex flex-col items-start justify-end space-y-[-20px]">
            <div className="text-[50px] text-[#252930] dark:text-white">
              El Kouch Achraf
            </div>
            <div className="text-[40px] font-medium dark:text-[#27C7D4] text-[#4F46E5] ml-[40px]">
              {" "}
              software engineering student
            </div>
          </div>
          <div className="row-start-2 row-span-2  ">
            <SVGMaskEffectDemo />
          </div>
          <div className="mr-[10px] row-start-4 w-full h-full ">
            <FindMeOn />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
