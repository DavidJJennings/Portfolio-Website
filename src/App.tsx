import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import About from "./Components/Skills/About";
import Parallax from "./Components/Skills/Parallax";

function App() {
  return (
    <div className="bg-Bg-Gradient snap-y snap-mandatory w-screen">
      <section id="Homepage" className="h-screen w-screen snap-start">
        <Nav />
        <div className="h-[90%]">
          <Hero />
        </div>
      </section>

      <section
        id="Skills/Technologies"
        className="h-screen w-screen snap-start"
      >
        <Parallax text={"Skills"} />
      </section>
      <section className="h-screen w-screen snap-start">
        <About />
      </section>

      <section id="Projects" className="h-screen w-screen snap-start">
        <Parallax text={"Projects"} />
      </section>

      <section>
        <Projects />
      </section>
      <section id="Contact" className="h-screen w-screen snap-start">
        <Contact />
      </section>
    </div>
  );
}

export default App;
