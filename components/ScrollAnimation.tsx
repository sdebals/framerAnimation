"use client";
import {motion} from "framer-motion";

const ScrollAnimation = () => {
  return (
    <>
      <motion.div
        style={{width: 300, height: 300, backgroundColor: "blue", margin: "800px auto"}}
        initial={{opacity: 0.2}}
        whileInView={{opacity: 1, scale: 1.25, transition: {duration: 3}}}
        viewport={{
          once: true,
          //amount: 0.1
          margin: "-200px",
        }}
        className="text-serif text-6xl font-bold text-white">
        Scroll animation only once
      </motion.div>
    </>
  );
};

export default ScrollAnimation;
