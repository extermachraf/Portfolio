"use client";
import Image from "next/image";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo/ThreeDCardDemo";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { SVGMaskEffectDemo } from "@/components/SVGMaskEffectDemo/SVGMaskEffectDemo";
import About from "@/components/home/About";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-between">
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
