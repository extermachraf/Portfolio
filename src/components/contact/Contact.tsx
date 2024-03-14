import React from "react";
import Submit from "./Submit";
import Info from "./Info";
import Image from "next/image";
import { InfiniteMovingCardsDemo } from "../InfiniteMovingCardsDemo/InfiniteMovingCardsDemo";

const Contact = () => {
  return (
    <div id="contactSection" className=" w-full h-screen grid grid-rows-8 ">
      <div className="w-screen h-[60px] row-start-8 ">
        <InfiniteMovingCardsDemo />
      </div>
      <div className=" row-start-2  w-full row-span-6 h-full flex items-center justify-between">
        <div className="hidden md:block  w-[40%] h-full">
          <div className="w-full h-full flex items-center justify-center  ml-[10px]">
            <Image
              src="/me.jpg"
              height="200"
              width="600"
              className="lg:h-[400px] lg:w-[400px] md:h-[250pxpx] md:w-[200px] object-cover shadow-md shadow-black dark:shadow-white group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </div>
        </div>
        <div className="md:w-[60%]  w-full h-full  flex items-center justify-center">
          <Submit />
        </div>
      </div>
    </div>
  );
};

export default Contact;
