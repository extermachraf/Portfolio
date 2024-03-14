"use client";
import React, { useEffect, useState } from "react";
import { ThemeSwitcher } from "@/components/toggle/ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import Loading from "../Loading/Loading";

export function NavBar() {
  const [loading, setLoading] = useState(false);
  const loadingAnimation = () => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="fixed w-full top-3 h-[60px] bg-[#4F46E5] dark:bg-[#ffffff] z-50">
      <div className="h-full w-fit absolute ml-[10px]">
        <Image
          src="/logo.svg"
          height="30"
          width="30"
          className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
      <ThemeSwitcher />
      <div className="h-full flex items-center dark:text-[#222831] text-white justify-center text-[25px] space-x-5 md:space-x-44">
        <ScrollLink to="AboutSection">
          <button onClick={loadingAnimation}>About</button>
        </ScrollLink>
        <ScrollLink onClick={loadingAnimation} to="projecttSection">
          <button>Projects</button>
        </ScrollLink>
        <ScrollLink onClick={loadingAnimation} to="contactSection">
          <button>Contact</button>
        </ScrollLink>
      </div>
    </div>
  );
}
