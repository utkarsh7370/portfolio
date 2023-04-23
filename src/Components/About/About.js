import React from "react";
import Heading from "../Heading/Heading";
import "./About.css";
import Workdata from "./DoingData";
import Projects from "../Projects/Projects";
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  return (
    <>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <section
          className="AboutSection container p-2 mt-5 mb-5 pb-5"
          id="about"
        >
          <Heading title="About" subtitle=" Me" />
          <hr className="text-white" />
          <hr className="text-white" />
          <div>
            <p className="aboutText">
              Hello, I am a frontend web developer, currently studying in 3rd
              year in "MCKV Institute of engineering" for B.Tech degree in
              computer science and engineering department. I am always excited
              to work on new things, framework, projects and technologies etc.
              It is very exciting to work in a new startups and businesses for
              me because I think in these workplaces there are more
              opportunities to learn new things and buil my skill and network.
            </p>
          </div>
          <div className="aboutWork">
            <h1 className="text-white text-bold fs-30 mt-5">
              What i Actually do !
            </h1>
            <Projects title="" subtitle="" dataFile={Workdata} />
          </div>
        </section>
      </AnimationOnScroll>
      ;
    </>
  );
}

export default About;
