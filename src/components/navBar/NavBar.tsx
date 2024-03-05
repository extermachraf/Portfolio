"use client";
import React, { useState } from "react";
import { ThemeSwitcher } from "@/components/toggle/ThemeSwitcher";
import Image from "next/image";
import Link from 'next/link'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export function NavBar() {
  return (
    <div className="fixed w-full top-3 h-[60px] bg-[#27C7D4] dark:bg-[#EA5863]">
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
        <div className="h-full flex items-center justify-center text-[30px] space-x-5 md:space-x-44">
            <button onClick={() => scroll.scrollToTop()} className="">About</button>
            <ScrollLink to="projecttSection" smooth={true} duration={500}>
                <button>Projects</button>
            </ScrollLink>
            <ScrollLink to="contactSection" smooth={true} duration={500}>
                <button>Contact</button>
            </ScrollLink>
        </div>
    </div>
  );
}
