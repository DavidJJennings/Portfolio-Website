const About = () => {
  return (
    <div className="flex flex-col w-full h-full p-16 px-4">
      <div className="flex flex-col w-full items-center justify-center">
        <h2 className="font-bold text-xl mb-3 text-center">About</h2>
        <p className="text-left text-sm leading-relaxed">
          As a junior front-end developer with over a years experience in React,
          I blend technical skills and creativity to engineer responsive,
          high-performance websites. My arsenal includes a variety of libraries
          and technologies, ensuring smooth and engaging user experiences. With
          a focus on clean design and efficient functionality, I strive to push
          the boundaries of what's possible on the web. Here to make the digital
          world a better place, one line of code at a time.
        </p>
      </div>
      <div className="flex flex-col w-full">
        <h2 className="font-bold text-xl mb-4 text-center mt-3">
          Technologies
        </h2>
        <div className="flex w-full justify-between">
          <ul className=" list-disc list-inside">
            <li>HTML/CSS</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Tailwind</li>
          </ul>
          <ul className=" list-disc list-inside">
            <li>Styled Components</li>
            <li>SASS</li>
            <li>Version Control</li>
            <li>Figma/Canva</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
