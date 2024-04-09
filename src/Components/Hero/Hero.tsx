import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
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
    <div className="w-full py-10 x-sm:py-5 lg:pb-16 lg:pt-4 px-4 h-full flex flex-col items-center md:flex-row-reverse justify-center md:gap-x-8 xl:gap-x-12 relative overflow-x-hidden whitespace-nowrap">
      <div className="h-1/2 md:h-2/3 md:p-5 z-10 md:relative md:bottom-10 md:w-1/3">
        <img
          className="h-full"
          style={{
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
          }}
          src="Headshot.png"
          alt="Placeholder Headshot"
        />
      </div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col justify-center items-center h-full xl:gap-y-3 z-10"
      >
        <motion.div className="text-center flex flex-col gap-y-4 x-sm:gap-y-6 pt-3 x-sm:pt-5">
          <motion.h2
            variants={textVariants}
            className=" font-bold text-2xl x-sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl "
          >
            David Jennings
          </motion.h2>
          <motion.h4
            variants={textVariants}
            className=" font-extralight text-lg x-sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl"
          >
            Junior Front End Developer
          </motion.h4>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="flex pt-3 x-sm:pt-6 gap-x-4 w-full justify-center"
        >
          <Link to="Projects" smooth={true} duration={100} className="w-1/2">
            <motion.button className="bg-transparent border-2 rounded-md w-full py-2 text-sm font-semibold md:text-lg lg:text-xl 2xl:text-2xl hover:opacity-50">
              My Projects
            </motion.button>
          </Link>

          <Link to="Contact" smooth={true} duration={100} className="w-1/2">
            <motion.button className="bg-transparent border-2 w-full rounded-md py-2 text-sm font-semibold md:text-lg lg:text-xl 2xl:text-2xl hover:opacity-50">
              Contact
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className="flex gap-x-4" variants={textVariants}>
          <a target="_blank" href="https://github.com/DavidJJennings">
            <img
              className="h-10 mt-4 x-sm:h-12 lg:h-14 xl:h-16 hover:opacity-50"
              src="Github-Icon.svg"
              alt=""
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/david-jennings-1ba9311b6/"
          >
            <img
              className="h-10 mt-4 x-sm:h-12 lg:h-14 xl:h-16 hover:opacity-50"
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
