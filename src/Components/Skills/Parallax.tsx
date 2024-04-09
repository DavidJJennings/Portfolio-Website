import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
};

const Parallax: React.FC<Props> = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textPosition = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const moonPosition = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const starsPosition = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  return (
    <div
      id={text === "Skills" ? "Skills/Technologies" : "Projects"}
      ref={ref}
      className="w-screen h-screen relative overflow-hidden snap-start"
    >
      <motion.div
        style={{ y: textPosition }}
        className="h-1/3 flex items-center justify-center text-center text-3xl font-bold lg:text-4xl xl:text-5xl"
      >
        {text === "Skills" ? (
          <h2>
            Skills &amp; <br /> Technology
          </h2>
        ) : (
          <h2>My Projects</h2>
        )}
      </motion.div>

      <motion.div className="absolute size h-1/2 w-full bg-contain bg-bottom bg-repeat-x bg-Tree-Bg-Mobile z-10 bottom-0"></motion.div>
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
export default Parallax;
