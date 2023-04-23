// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills.js/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import ProjectData from "./Components/Projects/ProjectData";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects title="My" subtitle="Projects" dataFile={ProjectData} />
      <Contact />
    </>
  );
}
export default App;
