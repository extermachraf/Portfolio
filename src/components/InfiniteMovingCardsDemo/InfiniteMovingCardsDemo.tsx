"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-full w-full rounded-md flex  antialiased  bg-transparent items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "El Kouch Achraf",
    name: "/info/linkd.svg",
    title: "A Tale of Two Cities",
  },
  {
    quote: "extermachraf",
    name: "/info/git.svg",
    title: "Hamlet",
  },
  {
    quote: "achraf.miam@gmail.com",
    name: "/info/maill.svg",
    title: "A Dream Within a Dream",
  },
  {
    quote: "+212702763761",
    name: "/info/phone.svg",
    title: "Pride and Prejudice",
  },
];
