import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Hero from "./Components/Hero/Hero";
// import Heading from "./Components/Heading/Heading";
import About from "./Components/About/About";
import Skills from "./Components/Skills.js/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
      <Projects title="My" subtitle="Projects" />
      <Contact />
    </div>
  );
}

export default App;
