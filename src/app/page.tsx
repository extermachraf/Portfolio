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
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <main className="snap-y snap-mandatory flex flex-col items-center justify-between">
      <Element name="aboutSection">
        <About />
      </Element>
      <Element name="projectsSection" className="w-full h-full">
        <Projects />
      </Element>
      <Element name="contactSection">
        <Contact />
      </Element>
    </main>
  );
}
