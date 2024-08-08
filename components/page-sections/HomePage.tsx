"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import { motion } from "framer-motion";
import { AnimatedBall } from "../ui/animated-ball";

const title = "AV";
const subtitle = "Crafting Digital Experiences";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <WavyBackground className="max-w-5xl mx-auto pb-40">
        <div className="flex flex-col justify-center items-center select-none mt-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 1, // Staggering each letter by 1 second for a longer animation
                },
              },
            }}
            className="flex items-center justify-center text-white font-bold pointer-events-none text-8xl text-center md:text-9xl lg:text-9xl"
          >
            {title.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: index % 2 === 0 ? -100 : 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 2 }} // Duration of 2 seconds for each letter animation
                className={
                  letter === " "
                    ? "inline-block w-2 text-game-of-squids"
                    : "text-game-of-squids"
                } // Reduced width for narrower spacing
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1, // Staggering each letter by 0.1 second for a shorter animation
                  delayChildren: 2.5, // Delay before starting the animation for "Crafting Digital Experiences"
                },
              },
            }}
            className="flex flex-wrap items-center justify-center text-white font-semibold pointer-events-none text-4xl text-center md:text-5xl lg:text-5xl"
          >
            {subtitle.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }} // Duration of 0.5 seconds for each word animation
                className="block w-full md:w-auto md:inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.div>
          <div className="mt-32">
            <AnimatedBall />
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default HomePage;
