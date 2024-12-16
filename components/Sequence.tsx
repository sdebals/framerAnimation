"use client";
import {motion, useAnimate, useMotionValue} from "framer-motion";
import {useEffect} from "react";

const Sequence = () => {
  const [scope, animate] = useAnimate();
  const progress = useMotionValue(100);

  const sequence = [
    ["#box1", {x: 200}, {duration: 2}],
    ["#box2", {x: -20, opacity: 0}, {duration: 1}],
    [progress, 200, {duration: 2.5}],
  ];

  useEffect(() => {
    animate(sequence);
  }, []);

  return (
    <div ref={scope} className="flex flex-col items-center mt-20">
      <motion.div id="box1" style={{width: progress, height: 100, backgroundColor: "blue"}}></motion.div>
      <motion.div id="box2" style={{width: 100, height: 100, backgroundColor: "red"}}></motion.div>
    </div>
  );
};

export default Sequence;
