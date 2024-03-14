"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        " scroller overflow-hidden w-full h-full dark:text-black text-black",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full h-full shrink-0 gap-4 w-max flex-nowrap bg-transparent",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative text-[25px] flex-shrink-0 md:w-[450px] bg-[#FDF0E7]  dark:bg-white"
            key={item.name}
          >
            <blockquote className=" w-full h-full space-x-3 flex items-center justify-center">
              {/* <div
                aria-hidden="true"
                className="user-select-none text-white -z-1 pointer-events-none absolute  w-[calc(100%_+_4px)]"
              ></div> */}
              <div className="relative z-20 flex flex-row items-center">
                <Image
                  src={item.name}
                  height="30"
                  width="30"
                  className=""
                  alt="thumbnail"
                />
              </div>
              <span className=" relative z-20  leading-[1.6]  font-romanesco">
                {item.quote}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
