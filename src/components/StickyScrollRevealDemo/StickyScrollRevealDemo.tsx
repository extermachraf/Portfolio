"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { DirectionAwareHoverDemo } from "../DirectionAwareHoverDemo/DirectionAwareHoverDemo";

export function StickyScrollRevealDemo() {
  const content = [
    {
      title: "Multiplayer Pong",
      description:
        "This project involves creating a dynamic web platform dedicated to a ping-pong game integrating real-time chat functionalities. Developed using TypeScript, ReactJS, NestJS, and Web Sockets, the application ensures an interactive and engaging experience for players, fostering live communication during gameplay.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src="/tran.png"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
      githubLink: "demo",
    },
    {
      title: "WebServ:",
      description:
        "Create a high-performance web server in C++ focusing on efficiently handling incoming requests and responses, utilizing techniques such as multiplexing, parsing, and more.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/webserv.png"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
      githubLink: "demo",
    },
    {
      title: "Inception:",
      description:
        "Expand system administration knowledge through the use of Docker. This project involves virtualizing multiple Docker images within a personal virtual machine. The primary goal is to establish an infrastructure comprising diverse services, all adhering to specific rules and configurations.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/inc.png"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
      githubLink: "demo",
    },
    {
      title: "Minishell:",
      description:
        "Develop a Unix shell using the C language, involving syntax analysis and interpretation of terminal commands, process creation using fork, their execution, handling pipes, as well as managing the command-line environment.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/mini.png"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
      githubLink: "demo",
    },
  ];

  return (
    <div className="text-[20px] w-full h-full p-[40px]">
      <StickyScroll content={content} contentClassName="bg-transparent" />
    </div>
  );
}
