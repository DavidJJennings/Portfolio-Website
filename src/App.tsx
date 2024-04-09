import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import About from "./Components/Skills/About";
import Parallax from "./Components/Skills/Parallax";

function App() {
  return (
    <div className="bg-Bg-Gradient snap-y snap-mandatory w-screen relative">
      <div id="Homepage" className="h-screen w-screen snap-start">
        <Nav />
        <div className="h-[90%]">
          <Hero />
        </div>
      </div>

      <Parallax text={"Skills"} />
      <div className="h-screen w-screen snap-start">
        <About />
      </div>

      <Parallax text={"Projects"} />

      <Projects />

      <div id="Contact" className="h-screen w-screen snap-start relative">
        <Contact />
      </div>
    </div>
  );
}

export default App;
