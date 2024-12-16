"use client";
import {motion, useScroll, useMotionValueEvent, useTransform} from "framer-motion";

const ScrollUseScroll = () => {
  const {scrollY} = useScroll();

  useMotionValueEvent(scrollY, "change", (val) => {
    console.log(val);
  });

  const scale = useTransform(scrollY, [2000, 2400], [1, 1.5]);
  return (
    <>
      <motion.div
        style={{
          scale,
          width: 600,
          height: 500,
          backgroundColor: "red",
          margin: "500px auto",
        }}
        className="text-serif text-6xl font-bold text-white">
        Scroll animation controlled by scroll position - scrollY
      </motion.div>
    </>
  );
};

export default ScrollUseScroll;
