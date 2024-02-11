"use client";
import React, { useRef } from "react";
import "@/components/Projects/project.scss";
import { useDataContext } from "../Context";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "@/app/page.scss";
import Intro from "./Intro";
import Display from "./displayImages/Display";

const Single = ({ project }: { project: Projects }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  return (
    <section className="flex items-center justify-center">
      <div className=" cont w-[400px] sm:w-[1300px] justify-around">
        <div className="wrraper">
          <div className="imageContainer" ref={ref}>
            <Display images={project.image}></Display>
          </div>
          <motion.div
            className="textContainer sm:w-[400px]"
            style={{ y }}
            // transition={{ duration: 10, delay: 0.5 }}
            transition={{ duration: 3, delay: 0.1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-[#00ADB5] font-bold sm:text-[20px] dark:text-white">
              {project.name}
            </h2>
            <p className="dark:text-[#99a6a4]">{project.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const data = useDataContext();

  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className=" w-[400px] sm:w-[1300px] flex items-center justify-center">
      <div className="project" ref={ref}>
        <Intro></Intro>
        <div className="progress z-10">
          <motion.div
            style={{ scaleX }}
            className="progressBar bg-[#5B6C69] dark:bg-white"
          ></motion.div>
        </div>
        {data.projects.map((proj) => (
          <Single project={proj} key={proj.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
