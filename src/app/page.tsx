import Image from "next/image";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo/ThreeDCardDemo";
import { SVGMaskEffectDemo } from "@/components/SVGMaskEffectDemo/SVGMaskEffectDemo";
import About from "@/components/home/About";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      < About />
      < Projects />
      < Contact />
    </main>
  );
}
