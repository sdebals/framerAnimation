"use client";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

const ToggleAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setIsVisible(!isVisible)}>Toggle animation</button>
      <AnimatePresence>
        {" "}
        {/*** animation should be direct child */}
        {isVisible && (
          <motion.div
            style={{width: 300, height: 300, backgroundColor: "blue", marginTop: 50}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 2}}
            className="text-serif text-6xl font-bold text-white">
            Animation toggle
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToggleAnimation;
