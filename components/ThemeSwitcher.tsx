"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [style, setStyle] = useState(() =>
    theme === "light" ? "justify-start" : "justify-end"
  );

  useEffect(() => {
    setStyle(theme === "light" ? "justify-start" : "justify-end");
  }, [theme]);

  return (
    <button
      className={`w-[40px] h-[15px] bg-[#686868] dark:bg-white rounded-[35px] transition-margin duration-700 ease-in-out mr-9
          sm:h-[20px] sm:w-[50px] sm:rounded-[50px]] sm:fixed`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className={`flex items-center space-x-2 ${style}`}>
        <div className="w-[22px] h-[12px] rounded-full bg-[#FFF] dark:bg-[#222] transition duration-700 mx-1"></div>
      </div>
    </button>
  );
};
