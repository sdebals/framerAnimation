"use client";
import {ReactNode, useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

interface ScrollBoxProps {
  children: ReactNode;
}
const ScrollBox = ({children}: ScrollBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target: ref, offset: ["0 1", "1.8 1"]});
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div ref={ref} style={{scale: scaleProgress, opacity: opacityProgress}} className="my-4">
      {children}
    </motion.div>
  );
};

const ScrollUseScroll2 = () => {
  return (
    <>
      <div className="mx-auto w-[600px] text-white text-xl leading-loose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac quam fringilla, maximus lacus sed, tincidunt ante. Etiam imperdiet, sem vel tempor porttitor, mi nunc luctus magna, ac cursus
        enim leo nec nulla. Integer molestie vel est et malesuada. Mauris accumsan pharetra felis, id efficitur magna blandit ultricies. Fusce malesuada mollis libero ac sagittis. Phasellus porttitor
        sagittis nulla a facilisis. Sed odio arcu, lobortis non nunc id, porta tincidunt dolor. Phasellus sit amet pellentesque diam. Sed sem massa, tincidunt non cursus ac, vestibulum a lectus. Nunc
        suscipit odio at massa suscipit porta sed dictum risus. Aenean scelerisque purus mauris, ac commodo nisi sodales eget. Fusce molestie finibus elit venenatis rutrum. Vestibulum vel tempus erat,
        ultrices aliquam lorem. Ut mattis leo risus, accumsan accumsan purus aliquam suscipit. Integer pretium risus metus, quis laoreet purus laoreet quis.
      </div>
      <ScrollBox>
        <div className="box text-serif text-5xl font-bold text-white max-w-[600px] p-6 bg-green-600">Scroll animation controlled by scroll position - scrollY</div>
      </ScrollBox>
      <ScrollBox>
        <div className="box text-serif text-5xl font-bold text-white max-w-[600px] p-6 bg-orange-600">Scroll animation controlled by scroll position - scrollY</div>
      </ScrollBox>
      <ScrollBox>
        <div className="box text-serif text-5xl font-bold text-white max-w-[600px] p-6 bg-yellow-600">Scroll animation controlled by scroll position - scrollY</div>
      </ScrollBox>
    </>
  );
};

export default ScrollUseScroll2;
