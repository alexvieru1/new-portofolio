"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedBall } from "../ui/animated-ball";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

const title = "AV";
const subtitle = "Crafting Digital Experiences";

const HomePage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 0)" // Starting color of the background gradient
        gradientBackgroundEnd="rgb(0, 0, 0)" // Ending color of the background gradient
        firstColor="0, 153, 255" // Blue color
        secondColor="221, 74, 255" // Purple color
        thirdColor="100, 220, 255" // Cyan color
        fourthColor="200, 50, 50" // Red color
        fifthColor="180, 180, 50" // Yellow color
        pointerColor="140, 100, 255" // Light purple for the pointer
        size="100%" // Size of the animated elements
        blendingValue="hard-light" // Blending mode for the animated elements
        interactive={true} // Allow interaction
        className="absolute inset-0 w-full h-full" // Full-screen background animation
      >
        <div className="relative z-10 flex flex-col justify-center items-center select-none mt-36 lg:mt-10">
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
                  hidden: { opacity: 0, y: index % 2 === 0 ? 100 : -100 },
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
                  staggerChildren: 0.05, // Staggering each letter by 0.05 second for a quicker animation
                  delayChildren: 2.5, // Delay before starting the animation for "Crafting Digital Experiences"
                },
              },
            }}
            className="flex flex-wrap items-center justify-center text-white font-semibold pointer-events-none text-4xl text-center md:text-5xl lg:text-5xl"
          >
            {subtitle.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }} // Duration of 0.5 seconds for each letter animation
                className={letter === " " ? "inline-block w-2" : ""}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
          <div className="mt-32">
            <AnimatedBall />
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default HomePage;
