"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Loading = () => {
  const [countFromZeroToHundred, setCountFromZeroToHundred] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountFromZeroToHundred((prev) => prev + 1);
    }, 10);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed h-screen w-screen bg-[#FE9063] grid grid-rows-7 z-50">
      <div className="row-start-1 row-span-1 w-full h-full flex items-center justify-start p-7">
        <div>
          <Image
            src="/logo.svg"
            height="40"
            width="40"
            className="h-[90%] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </div>
      </div>
      <div className="row-start-2 row-span-5 w-full h-full  flex items-center justify-center">
        <p className="text-[#EA5863] text-[300px]">{countFromZeroToHundred}%</p>
      </div>
      <div className="row-start-7 w-full h-full flex items-center justify-between p-9">
        <div className="text-[80px]">Please wait ...</div>
        <div className="w-[300px] ">
          <Image
            src="/sbr.svg"
            height="40"
            width="40"
            className="h-[90%] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
