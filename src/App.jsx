import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import MyHero from "./components/MyHero";

import MyNavbar from "./components/MyNavbar";
import Projects from "./components/Projects";
// import Test from "./test";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <section id="Homepage" className="homepage">
          <MyHero />
        </section>

        <section id="About" className="about">
          <About />
        </section>
        <section id="Project" className="project">
          <Projects />
        </section>
        <section id="Contact" className="contact">
          <Contact/>
        </section>
      </main>
      {/* <Test/> */}
    </>
  );
}

export default App;
