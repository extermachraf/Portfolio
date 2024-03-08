"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function DirectionAwareHoverDemo(imageUrl: any) {
  return (
    <div className="h-full w-full relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover>
    </div>
  );
}
