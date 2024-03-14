"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`w-[50px] h-[25px] absolute right-5 top-4 p-2 rounded-full bg-slate-200 dark:bg-[#212933] flex items-center ${
        theme === "dark" ? `justify-start` : `justify-end`
      } `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="w-[20px] h-[20px] bg-stone-500 dark:bg-white rounded-full hover:scale-110 active:scale-110 duration-1000"></div>
    </button>
  );
};
