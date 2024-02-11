import React from "react";
// import { data, projects } from "@/interfaces/data.ts"
const Informations = () => {
  const data: Data = {
    projects: [
      {
        id: 1,
        name: "FT_Transcendance",
        description:
          "This project involves creating a dynamic web platform dedicated to a ping-pong game integrating real-time chat functionalities. Developed using TypeScript, ReactJS, NestJS, and Web Sockets, the application ensures an interactive and engaging experience for players, fostering live communication during gameplay.",
        image: ["/trans.png", "/noback.png"],
        link: "https://www.google.com",
      },
      {
        id: 2,
        name: "WebServ",
        description:
          "Create a high-performance web server in C++ focusing on efficiently handling incoming requests and responses, utilizing techniques such as multiplexing, parsing, and more.",
        image: ["/trans.png"],
        link: "https://www.google.com",
      },
      {
        id: 3,
        name: "Inception",
        description:
          "Expand system administration knowledge through the use of Docker. This project involves virtualizing multiple Docker images within a personal virtual machine. The primary goal is to establish an infrastructure comprising diverse services, all adhering to specific rules and configurations.",
        image: ["/trans.png"],
        link: "https://www.google.com",
      },
    ],
  };
  return data;
};

export default Informations;
