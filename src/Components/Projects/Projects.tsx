import ProjectItem from "./ProjectItem";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Kick It",
      img: "Kick-It-img.png",
      repository: "https://github.com/DavidJJennings/Kick-It",
      url: "https://kick-it-20f0e.web.app/",
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
      url: "https://code-connect-603de.web.app/",
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
        return <ProjectItem key={project.id} project={project} />;
      })}
    </div>
  );
};
export default Projects;
