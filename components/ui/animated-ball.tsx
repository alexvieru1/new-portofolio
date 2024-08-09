import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDownCircle } from "lucide-react";

export const AnimatedBall = () => {
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 300) {
        setOpacity(0);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bounceTransition = {
    y: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeOut",
    },
    opacity: {
      delay: 4.5,
    },
  };

  return (
    <div className="flex items-center justify-end mt-5">
      <motion.div
        transition={bounceTransition}
        animate={{
          y: ["25%", "-50%"],
          opacity: opacity,
        }}
        initial={{ opacity: 0 }}
        style={{ transition: "opacity  0.3s ease" }}
      >
        <ChevronDownCircle className="w-8 h-8 text-white" />
      </motion.div>
    </div>
  );
};
