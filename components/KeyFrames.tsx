"use client";
import {motion} from "framer-motion";

const KeyFrames = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xslns="http://www.w3.org/2000/svg"
        initial={{fill: "#ff0000"}}
        animate={{scale: [null, 2, 1.5, 3], fill: "#0000ff"}}
        transition={{duration: 3, times: [0, 0.75, 0.9, 1]}}
        className="text-serif text-6xl font-bold text-white">
        <circle cx="100" cy="100" r="80" />
      </motion.svg>
    </div>
  );
};

export default KeyFrames;
