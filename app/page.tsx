import React from "react";
import About from "@/components/About";
import Test from "@/components/Test";
import Projects from "@/components/Projects/Projects";
// import Informations from "@/components/Informations";
import { useState, createContext, useContext } from "react";
import { DataProvider, useDataContext } from "@/components/Context";
import "@/app/page.scss";

const page = () => {
  // const data = Informations();
  return (
    <DataProvider>
      <div className="w-full">
        <section className="w-full flex justify-center items-center">
          <div className="w-[400px] sm:w-[1300px] p-4 flex items-center justify-center">
            <About />
          </div>
        </section>
        <div className="w-full flex justify-center items-center">
          <Projects></Projects>
        </div>
      </div>
    </DataProvider>
  );
};

export default page;
