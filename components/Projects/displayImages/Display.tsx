"use client";
import { useDataContext } from "@/components/Context";
import { useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 180 : -180,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 180 : -180,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
const Display = ({ images }: { images: string[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className=" h-full w-full flex items-center justify-center space-x-3">
      <button className="rotate-180" onClick={() => paginate(1)}>
        <FaAnglesRight />
      </button>
      <AnimatePresence initial={false} custom={direction}>
        <div className="">
          <motion.div
            className="w-[300px] h-[200px] rounded-lg relative"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <Image
              className=""
              src={images[imageIndex]}
              alt=""
              sizes="(max-width: 600px) 400px,
            (max-width: 1200px) 800px,
            1200px"
              fill
            ></Image>
          </motion.div>
        </div>
      </AnimatePresence>
      <button className="" onClick={() => paginate(-1)}>
        <FaAnglesRight />
      </button>
    </div>
  );
};

export default Display;
