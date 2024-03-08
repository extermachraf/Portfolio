"use client";
import { MaskContainer } from "../ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className=" h-[200px] w-full flex items-center justify-center  overflow-hidden ">
      <MaskContainer
        revealText={
          <p className="-z-30 max-w-4xl font-i mx-auto font-bold text-slate-800 dark:text-white font-romanesco  text-xl">
            I&apos;m a software engineering student at 1337 School with a
            versatile skill set in programming languages. I&apos;m dedicated to
            continuous learning and eager to contribute to dynamic tech projects
            and teams, aiming to make a positive impact on the world
          </p>
        }
        className="h-[40rem] font-romanesco rounded-md"
      >
        <p className="text-xl text-start">
          I&apos;m a software engineering student at 1337 School with a
          versatile skill set in programming languages. I&apos;m dedicated to
          continuous learning and eager to contribute to dynamic tech projects
          and teams, aiming to make a positive impact on the world
        </p>
      </MaskContainer>
    </div>
  );
}
