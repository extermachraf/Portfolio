"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
7;
import {
  TailwindcssButtons,
  buttons,
} from "../TailwindcssButtons/TailwindcssButtons";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    githubLink: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      //   animate={{
      //     backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      //   }}
      className="no-scrollbar bg-transparent h-full overflow-y-auto  flex justify-around relative"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="lg:text-[80px] text-[50px]  dark:text-[#27C7D4]"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg  text-black dark:text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg  text-black dark:text-slate-300 max-w-sm mt-10"
              >
                <motion.div
                  className="w-[300px] h-[40px] bg-[#252930] text-white flex items-center justify-center
                  shadow-md shadow-black dark:shadow-white border-2 border-solid border-gray-300"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "white",
                    color: "#4F46E5",
                    rotate: 3,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <Link
                    className="flex items-center space-x-2 "
                    href={item.githubLink}
                  >
                    <TbBrandGithub />
                    <span className="text-[15px]">Link to the project</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          ))}
          {/* <div className="h-40 w-6 bg-white" /> */}
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          "hidden md:block h-[500px] w-[500px]  bg-white sticky top-20 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
