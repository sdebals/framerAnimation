"use client";
import {motion} from "framer-motion";

const TextAnimation = () => {
  return (
    <>
      <motion.h2 initial={{y: 25, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1, ease: "easeInOut"}} className="text-serif text-6xl font-bold">
        Text animation transform and fade!
      </motion.h2>
      <motion.h2
        style={{overflow: "hidden", whiteSpace: "nowrap"}}
        initial={{width: 0}}
        animate={{width: "100%"}}
        transition={{delay: 1, duration: 2, ease: "easeInOut"}}
        className="text-serif text-6xl font-bold">
        Text animation width!
      </motion.h2>
      <motion.h2 initial={{color: "#333"}} animate={{color: ["#6a9bd1", "#4c6ef5", "#1a3e96", "#ff0000"]}} transition={{duration: 2, repeat: Infinity}} className="text-serif text-6xl font-bold">
        Text animation colors!
      </motion.h2>
    </>
  );
};

export default TextAnimation;
