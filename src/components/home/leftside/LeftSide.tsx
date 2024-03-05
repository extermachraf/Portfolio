import React from "react";
import Image from "next/image";

const LeftSide = () => {
  return (
    <div className=" md:w-full shrink sm:w-0 sm:h-0 md:h-full  flex items-center justify-center">
      <div className="w-fit hidden sm:block absolute ml-[10px]">
        <Image
          src="/ana.jpg"
          height="200"
          width="500"
          className="lg:h-[400px] lg:w-[300px] md:h-[250pxpx] md:w-[200px] object-cover group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
      <div className="lg:mb-[140px] lg:ml-[145px] md:mb-[100px] md:ml-[100px] -z-10 absolute lg:w-[220px] lg:h-[330px] md:w-[150px] md:h-[220px] bg-[#FDF0E7] dark:bg-[#FE9063] "></div>
      <div className="lg:mt-[300px] lg:ml-[120px] md:mt-[200px] md:ml-[100px] -z-20 absolute lg:w-[300px] lg:h-[220px]  md:w-[200px] md:h-[150px] bg-[#27C7D4] dark:bg-[#27C7D4] ">
        <div className="w-full h-full flex items-end justify-end">
          <div className="w-fit hidden sm:block absolute ml-[10px]">
            <Image
              src="/contact.svg"
              height="24"
              width="24"
              className="md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] object-cover group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
