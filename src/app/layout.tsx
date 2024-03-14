import type { Metadata } from "next";
import "./globals.css";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo/ThreeDCardDemo";
import { SVGMaskEffectDemo } from "@/components/SVGMaskEffectDemo/SVGMaskEffectDemo";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "@/components/toggle/ThemeSwitcher";
import { NavBar } from "@/components/navBar/NavBar";
import { Italianno } from "next/font/google";
import { Oswald } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-oswald", // Custom variable for Oswald font
});

export const metadata: Metadata = {
  title: "El Kouch Achraf",
  description: "Portfolio website",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.className} bg-slate-50 dark:bg-[#252930]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
