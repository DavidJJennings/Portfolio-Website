import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import About from "./Components/Skills/About";
import Parallax from "./Components/Skills/Parallax";

function App() {
  return (
    <div className=" bg-Bg-Gradient snap-y snap-mandatory w-screen relative">
      <Nav />

      <Hero />

      <Parallax text={"Skills/Technologies"} />

      <About />

      <Parallax text={"Projects"} />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
