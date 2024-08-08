"use client";
import React, { useRef, useState } from "react";
import { FlipWords } from "../ui/flip-words";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { technologiesWithDetails } from "@/constants/technologiesLogos";

const About = () => {
  const words = ["creative", "reliable", "efficient", "innovative"];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const logos = technologiesWithDetails;

  return (
    <div id="about" className="mt-10 lg:mt-60 flex flex-col justify-center items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="4xs:text-4xl md:text-5xl font-semibold text-neutral-700 dark:text-neutral-200 text-center w-[80%]"
      >
        I&apos;m Alex<span className="inline-block">👋</span>.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center w-[80%] mt-6"
      >
        I&apos;m all about being
        <FlipWords words={words} /> <br />
        when it comes to crafting web experiences.
      </motion.div>

      {/* Toggleable Additional Text */}
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-lg mx-auto font-normal text-neutral-700 dark:text-neutral-300 text-center w-[80%] mt-10"
            >
              I&apos;m a passionate web developer with a love for bringing ideas
              to life on the web. With a strong foundation in both front-end and
              back-end technologies, I thrive on creating seamless,
              user-friendly experiences. Whether working solo or collaborating
              with a team, I always bring a<strong> creative</strong> and{" "}
              <strong>detail-oriented</strong> approach to every project.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="text-lg mx-auto font-normal text-neutral-700 dark:text-neutral-300 text-center w-[80%] mt-10"
            >
              I started my journey as a web developer 2 years ago, and during
              this time, I&apos;ve been passionate about building a variety of
              projects, from small business websites to dynamic web
              applications. I enjoy diving into new technologies and exploring
              creative ways to push the boundaries of what&apos;s possible on
              the web. Outside of coding, I love spending time with my dog on
              long walks and unwinding by watching TV series with my cat.
              Whether working on personal projects or exploring new tools,
              I&apos;m always eager to learn and grow in this ever-evolving
              field.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              className="text-lg mx-auto font-semibold text-neutral-700 dark:text-neutral-300 text-center w-[80%] mt-10"
            >
              Tech Stack:
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              className="grid grid-cols-4 lg:grid-cols-8 gap-1 lg:gap-2"
            >
              <AnimatedTooltip items={logos} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="m-16 flex justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          onClick={toggleExpand}
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>{isExpanded ? "Hide Details" : "Get to Know Me"}</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default About;
