import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import About from "./Components/Skills/About";
import Parallax from "./Components/Skills/Parallax";

function App() {
  return (
    <div className="bg-Bg-Gradient">
      <section id="Homepage" className="h-screen snap-center">
        <Nav />
        <div className="h-[90%]">
          <Hero />
        </div>
      </section>

      <section id="Skills/Technologies" className="h-screen snap-center">
        <Parallax text={"Skills"} />
      </section>
      <section className="h-screen snap-center">
        <About />
      </section>
      <section id="Projects" className="h-screen snap-center">
        <Parallax text={"Projects"} />
      </section>
      <Projects />
      <section id="Contact" className="h-screen snap-center">
        <Contact />
      </section>
    </div>
  );
}

export default App;
