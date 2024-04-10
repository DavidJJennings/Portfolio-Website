import { motion } from "framer-motion";
import usePageScroll from "../../hooks/usePageScroll";

const Hero = () => {
  const Scroll = usePageScroll();
  const textVariants = {
    initial: { opacity: 0 },

    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const sliderVariants = {
    initial: { x: "100%" },
    animate: {
      x: "-250%",
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 30,
        ease: "linear",
      },
    },
  };

  return (
    <div
      id="Homepage"
      className="lg:snap-center box-border w-screen py-10 x-sm:py-5 lg:pb-16 lg:pt-4 px-4 h-screen flex flex-col items-center md:flex-row-reverse justify-center md:gap-x-8 xl:gap-x-12 relative overflow-x-hidden whitespace-nowrap"
    >
      <img
        className="h-56 md:h-72 relative top-6 x-sm:top-8 md:-top-8 xl:h-1/2"
        style={{
          borderBottomLeftRadius: "50%",
          borderBottomRightRadius: "50%",
        }}
        src="Headshot.png"
        alt="Placeholder Headshot"
      />

      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col justify-center items-center h-full xl:gap-y-3 z-10"
      >
        <motion.div className="text-center flex flex-col gap-y-4 x-sm:gap-y-6 pt-3 x-sm:pt-5">
          <motion.h2
            variants={textVariants}
            className=" font-bold text-2xl x-sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl"
          >
            David Jennings
          </motion.h2>
          <motion.h4
            variants={textVariants}
            className=" font-extralight text-lg x-sm:text-xl md:text-2xl lg:text-3xl 2xl:text-5xl"
          >
            Junior Front End Developer
          </motion.h4>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="flex pt-3 x-sm:pt-6 gap-x-4 w-full justify-center"
        >
          <motion.button
            onClick={(e) => Scroll(e, "Projects")}
            className=" w-1/2 bg-transparent border-2 rounded-md py-2 text-sm font-semibold md:text-lg lg:text-xl 2xl:text-3xl hover:opacity-50"
          >
            My Projects
          </motion.button>

          <motion.button
            onClick={(e) => Scroll(e, "Contact")}
            className=" w-1/2 bg-transparent border-2 rounded-md py-2 text-sm font-semibold md:text-lg lg:text-xl 2xl:text-3xl hover:opacity-50"
          >
            Contact
          </motion.button>
        </motion.div>
        <motion.div className="flex gap-x-4" variants={textVariants}>
          <a target="_blank" href="https://github.com/DavidJJennings">
            <img
              className="h-10 mt-4 x-sm:h-12 lg:h-14 xl:h-16 2xl:h-20 hover:opacity-50"
              src="Github-Icon.svg"
              alt=""
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/david-jennings-1ba9311b6/"
          >
            <img
              className="h-10 mt-4 x-sm:h-12 lg:h-14 xl:h-16 2xl:h-20 hover:opacity-50"
              src="Linkedin-Icon.svg"
              alt=""
            />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-0 text-[40px] sm:text-[90px] md:text-[110px] lg:text-[140px] 2xl:text-[200px] text-[#64656e] opacity-25 z-0 w-full"
      >
        React Developer Designer SEO UI/UX
      </motion.div>
    </div>
  );
};
export default Hero;
