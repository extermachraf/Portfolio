"use client";
import React, { use, useContext } from "react";
import { motion } from "framer-motion";
import "@/styles/beni.scss";
import { useDataContext } from "@/components/Context";
const Test = () => {
  const data = useDataContext();
  return (
    <div className="course">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, x: -100 }}
        transition={{ duration: 4 }}
      ></motion.div>
    </div>
  );
};

export default Test;
