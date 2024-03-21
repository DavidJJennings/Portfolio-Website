import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  project: {
    id: number;
    title: string;
    img: string;
    repository?: string;
    url: string;
    description: string;
    technologies: {
      name: string;
      image: string;
    }[];
  };
};

const ProjectItem: React.FC<Props> = ({ project }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const textPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["300%", "0%", "-300%"]
  );
  return (
    <motion.section
      ref={ref}
      key={project.id}
      className="overflow-hidden h-screen snap-center pt-14 pb-8 px-12 flex flex-col justify-start items-center gap-y-4 lg:flex-row-reverse xl:px-20"
    >
      <div className=" flex w-4/5 flex-col max-w-[300px] lg:w-1/2 lg:p-16 lg:max-w-none z-10">
        <a href={project.url} target="_blank">
          <img
            src={project.img}
            className="w-full aspect-auto"
            alt="Display Image"
          />
        </a>
        <div className="w-full flex justify-evenly p-3">
          {project.technologies.map((technology) => {
            return (
              <div
                className="w-5 aspect-square md:w-7 lg:w-8 xl:w-9 2xl:w-10 bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: `url(${technology.image})` }}
                key={technology.name}
              ></div>
            );
          })}
        </div>
      </div>
      <motion.div
        style={{ y: textPosition }}
        className="flex flex-col gap-y-4 items-center w-full justify-center lg:w-1/2 lg:gap-y-6"
      >
        <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
          {project.title}
        </h3>

        <p className="text-justify text-sm sm:text-base md:text-[1.075rem] lg:text-xl xl:text-2xl 2xl:text-3xl">
          {project.description}
        </p>

        <div className="flex w-full x-sm:w-4/5 items-center justify-center gap-x-3 lg:gap-6">
          <a className="w-1/2 sm:w-1/3" target="_blank" href={project.url}>
            <button className="bg-transparent border-2 w-full rounded-md mt-2 py-2 2xl:py-2 text-sm  font-semibold md:text-[1.075rem] lg:text-xl xl:text-2xl 2xl:text-3xl hover:opacity-50">
              Live Demo
            </button>
          </a>
          {project.repository && (
            <a
              className="w-1/2 sm:w-1/3"
              target="_blank"
              href={project.repository}
            >
              <button className="bg-transparent border-2 w-full rounded-md mt-2 py-2 2xl:py-2 text-sm  font-semibold md:text-[1.075rem] lg:text-xl xl:text-2xl 2xl:text-3xl hover:opacity-50">
                Visit Repo
              </button>
            </a>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};
export default ProjectItem;
