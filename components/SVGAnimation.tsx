"use client";
import {motion} from "framer-motion";

const draw = {
  hidden: {pathLength: 0},
  visible: (i: unknown) => {
    const delay = i;
    return {
      pathLength: 1,
      transition: {
        pathLength: {delay, type: "spring", duration: 1.5, bounce: 0},
      },
    };
  },
};

const SVGAnimation = () => {
  return (
    <motion.svg width="600" height="600" viewBox="0 0 600 600" initial="hidden" animate="visible">
      <motion.line x1="220" y1="30" x2="360" y2="170" strokeWidth="10" stroke="slateblue" variants={draw} custom={0.3} />
      <motion.line x1="220" y1="170" x2="360" y2="30" strokeWidth="10" stroke="slateblue" variants={draw} custom={0.6} />
    </motion.svg>
  );
};

export default SVGAnimation;
