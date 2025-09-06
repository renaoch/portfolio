"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const cardRef = useRef<HTMLDivElement | any>(null);

  function mouseLeaveHandler() {
    setIsMouseOver(false);
  }
  
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }
  
  function touchStartHandler() {
    setIsMouseOver(true);
  }
  
  function touchEndHandler() {
    setIsMouseOver(false);
  }

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
      ref={cardRef}
      className={cn(
        "text-xl h-[3rem] border border-white/[0.08] rounded-lg relative w-[9rem] overflow-hidden cursor-pointer",
        className
      )}
    >
      {children}

      <div className="relative flex justify-center items-center h-full overflow-hidden">
        {/* Revealed text that animates in smoothly */}
        <motion.div
          className="absolute bg-white z-20 will-change-transform w-full h-full flex items-center justify-center"
          animate={{
            clipPath: isMouseOver 
              ? "inset(0 0% 0 0)" 
              : "inset(0 100% 0 0)"
          }}
          transition={{ 
            duration: 0.6, 
            ease: [0.25, 0.1, 0.25, 1] // smooth easing
          }}
        >
          <p
            
            className="font-bold text-2xl text-black whitespace-nowrap"
          >
            {revealText}
          </p>
        </motion.div>

        {/* Background text with stars */}
        <div className="overflow-hidden flex items-center justify-center">
          <p className="font-bold text-2xl text-gray-400 ">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-white ", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "#10b981",
            borderRadius: "50%",
            zIndex: 1,
           
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);