import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textPosition = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const moonPosition = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const starsPosition = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  return (
    <div ref={ref} className="w-full h-full relative overflow-hidden">
      <motion.div
        style={{ y: textPosition }}
        className="h-1/3 flex items-center justify-center text-center text-3xl font-bold pt-20 lg:text-4xl xl:text-5xl"
      >
        <h2>
          Skills & <br /> Technologies
        </h2>
      </motion.div>
      <motion.div className="absolute w-full h-full bg-contain bg-center bg-repeat-x bg-Tree-Bg-Mobile md:bg-Tree-Bg-Tablet bottom-0 z-30"></motion.div>
      <motion.div
        style={{ y: moonPosition }}
        className="absolute top-8 right-8 md:w-20 lg:w-24 xl:w-28 xl:top-12 xl:right-12 2xl:w-32 2xl:right-16 2xl:top-16 z-20 aspect-square w-14"
      >
        <img src="Moon-Mobile.svg" alt="Moon" />
      </motion.div>
      <motion.div
        style={{ x: starsPosition }}
        className="absolute w-full h-full bg-cover bg-center bg-repeat-x bg-Stars-Mobile z-10 top-0"
      ></motion.div>
    </div>
  );
};
export default Skills;
