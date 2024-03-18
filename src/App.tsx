import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Nav/Nav";
import About from "./Components/Skills/About";
import Skills from "./Components/Skills/Parallax";

function App() {
  return (
    <div className=" bg-Bg-Gradient">
      <section id="Homepage" className="h-screen snap-center">
        <Nav />
        <div className="h-[90%]">
          <Hero />
        </div>
      </section>

      <section id="Skills/Technologies" className="h-screen snap-center">
        <Skills />
      </section>
      <section id="Skills/Technologies" className="h-screen snap-center">
        <About />
      </section>
      <section id="Projects" className="h-screen snap-center">
        Project1
      </section>
      <section className="h-screen snap-center">Project1</section>
      <section className="h-screen snap-center">Project1</section>
      <section id="Contact" className="h-screen snap-center">
        Contact
      </section>
    </div>
  );
}

export default App;
