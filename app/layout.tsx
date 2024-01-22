import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import NavBar from "@/components/NavBar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Achraf El Kouch",
  description: "Achraf El Kouch's personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] transition-margin duration-200 ease-in-out`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="w-full h-[40px]  flex items-center justify-end">
            <NavBar />
            <ThemeSwitcher />
          </div>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
