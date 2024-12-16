"use client";
import {motion} from "framer-motion";

export const emojis = [
  {id: 1, face: "😀"},
  {id: 2, face: "🤓"},
  {id: 3, face: "🤣"},
  {id: 4, face: "😎"},
];

const variants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {opacity: 0, y: 100},
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    y: 0,
  },
};
const Staggered = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <motion.div className="bg-slate-600 rounded-lg flex flex-row w-96 text-white gap-2 overflow-hidden p-4 " variants={variants} initial="hidden" animate="visible">
        {emojis.map((emoji) => {
          return (
            <motion.div key={emoji.id} variants={childVariants} className="text-6xl text-bold">
              {emoji.face}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Staggered;
