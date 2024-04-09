import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const textVariants = {
    initial: { opacity: 0 },

    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.75,
      },
    },
  };
  return (
    <div
      ref={ref}
      className="snap-center relative flex flex-col w-screen box-border h-screen justify-center items-center p-6 px-6 xx-sm:p-12 xx-sm:px-10 x-sm:pt-20 x-sm:px-12 lg:px-12"
    >
      <motion.div
        variants={textVariants}
        initial={"initial"}
        animate={isInView ? "animate" : "initial"}
        className="relative flex flex-col w-full h-full items-center justify-center x-sm:justify-start  gap-y-4 sm:gap-y-8"
      >
        <motion.div
          className="flex flex-col items-center justify-center gap-y-2 x-sm:w-full xx-sm:items-start lg:px-12 "
          variants={textVariants}
        >
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            About
          </h2>
          <p className=" text-justify text-[0.85rem] xx-sm:text-sm leading-loose x-sm:leading-8 sm:leading-7 lg:leading-8  xl:leading-9 lg:text-xl xl:text-2xl 2xl:text-3xl ">
            As a junior front-end developer with over a years experience in
            React, I blend technical skills and creativity to engineer
            responsive, high-performance websites. I'm a huge health and fitness
            enthusiast so in my spare time I love to try different sports or
            learn to cook new recipes. I am someone who enjoys an ever changing
            landscape and from a young age have sought to facilitate the
            aquisition of new skills and hobbies, I believe that no task is too
            difficult to overcome with enough dedicated practice and passion.
          </p>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="hidden sm:flex sm:flex-col sm:w-full"
        >
          <h3 className="font-bold text-xl mb-4 text-center md:mb-6 lg:text-2xl xl:text-3xl">
            Key Technologies
          </h3>
          <div className="flex w-full justify-around md:justify-center gap-x-20">
            <ul className=" list-disc list-inside lg:text-xl xl:text-2xl">
              <li>HTML/CSS</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Tailwind</li>
            </ul>
            <ul className=" list-disc list-inside lg:text-xl xl:text-2xl">
              <li>Styled Components</li>
              <li>LESS/SASS</li>
              <li>Git/Github</li>
              <li>Figma/Canva</li>
            </ul>
          </div>
        </motion.div>
        <motion.a
          variants={textVariants}
          className="w-1/2 sm:w-1/3 lg:w-1/4"
          href="David Jennings CV.pdf"
          download={"David Jennings CV"}
        >
          <button className="bg-transparent border-2 w-full rounded-md mt-2 xx-sm:mt-0 py-2 2xl:py-2 text-sm  font-semibold md:text-lg lg:text-xl 2xl:text-2xl hover:opacity-50">
            Download CV
          </button>
        </motion.a>
      </motion.div>
    </div>
  );
};
export default About;
