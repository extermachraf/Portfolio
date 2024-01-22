import React from "react";
import { IoMdCodeDownload } from "react-icons/io";

const About = () => {
  return (
    <div>
      <div>
        <div className="text-[#00ADB5] font-hi text-[30px] py-5">
          Hi, I m Achraf
        </div>
        <div className="text-[#00ADB5] font-hi text-[20px] pb-10">
          Software engineering student
        </div>
        <div className="font-normal text-[14px] w-[350px] pb-4">
          I'm a software engineering student at 1337 School with a versatile
          skill set in programming languages. I'm dedicated to continuous
          learning and eager to contribute to dynamic tech projects and teams,
          aiming to make a positive impact
        </div>
      </div>
      <div className="flex w-full space-x-4 justify-start items-center">
        <button className="dark:bg-[#FFFFFF] dark:text-[#222222] bg-[#2F3140] text-white w-[100px] h-[30px] rounded-[25px] text-[13px] hover:bg-opacity-50 dark:hover:bg-opacity-50 transition-all duration-300 ease-in-out">
          Contact me
        </button>
        <button
          className="bg-[#2F3140] text-white w-[130px] h-[25px] rounded-[25px] text-[13px] flex items-center justify-center space-x-2
        hover:bg-teal-500 hover:bg-opacity-75 hover:text-white transition-all duration-300 ease-in-out"
        >
          <div>Download CV</div>
          <IoMdCodeDownload className="w-[22px] h-[22px]" />
        </button>
      </div>
    </div>
  );
};

export default About;
