const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Kick It",
      img: "Kick-It-img.png",
      repository: "https://github.com/DavidJJennings/Kick-It",
      url: "#",
      description:
        "A hip eCommerce store for footwear enthusiasts looking to add the most sought after trainers to their prized collections. Filter, sort and add your favourites to the basket so you can review your purchase at the checkout!",
      technologies: [
        { name: "React", image: "/React-Icon.svg" },
        { name: "Vite", image: "/vite.svg" },
        { name: "Tailwind", image: "/Tailwind-Icon.svg" },
        { name: "Firebase", image: "/Firebase-Icon.svg" },
      ],
    },
    {
      id: 2,
      title: "Code Connect",
      img: "Code-Connect-img.png",
      repository: "https://github.com/DavidJJennings/Code-Connect",
      url: "#",
      description:
        "A social media platform for New Developers looking to connect, collaborate and share their projects in a environment of individuals with similar ability. Google Authentication is enabled, however, should you not wish to use your account, please use the details provided in the placeholders.",
      technologies: [
        { name: "React", image: "/React-Icon.svg" },
        { name: "Vite", image: "/vite.svg" },
        { name: "Styled Components", image: "/Styled-Components-Icon.svg" },
        { name: "Redux", image: "/Redux-Icon.svg" },
        { name: "Firebase", image: "/Firebase-Icon.svg" },
      ],
    },
  ];
  return (
    <div>
      {projects.map((project) => {
        return (
          <section
            key={project.id}
            className="h-screen snap-center pt-14 pb-8 px-12 flex flex-col justify-start items-center gap-y-4"
          >
            <div className=" flex w-4/5 flex-col max-w-[300px]">
              <a href={project.url}>
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
                      className="w-5 h-5 bg-no-repeat bg-center bg-contain"
                      style={{ backgroundImage: `url(${technology.image})` }}
                      key={technology.name}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col  gap-y-4">
              <h3 className="text-center text-xl sm:text-2xl font-bold">
                {project.title}
              </h3>
              <p className="text-justify text-sm sm:text-base">
                {project.description}
              </p>
            </div>
            <a
              className="w-1/2 sm:w-1/3 lg:w-1/4"
              target="_blank"
              href={project.repository}
            >
              <button className="bg-transparent border-2 w-full rounded-md mt-2 xx-sm:mt-0 py-2 2xl:py-2 text-sm  font-semibold md:text-lg lg:text-xl 2xl:text-2xl hover:opacity-50">
                Visit Repo
              </button>
            </a>
          </section>
        );
      })}
    </div>
  );
};
export default Projects;
