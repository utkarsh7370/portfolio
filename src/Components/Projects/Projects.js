import React from "react";
import Heading from "../Heading/Heading";
import { AnimationOnScroll } from "react-animation-on-scroll";

import "./Projects.css";

function Projects(props) {
  const data = props.dataFile;
  console.log(data);
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <div className="projectSection">
        <Heading title={props.title} subtitle={props.subtitle} />
        <div className="container">
          <div className="row">
            {data.map((element) => {
              return (
                <div className="col-lg-3 col-md- col-sm-12 mt-4">
                  <div className="project-card px-2 py-5">
                    <h3 className="project-title fw-bold mb-2">
                      {element.title}
                    </h3>
                    <p className="project-des text-center">{element.desc}</p>
                    <a className="prject-repo-link" href={element.repo}>
                      Repo
                    </a>
                    <a className="prject-link" href={element.link}>
                      Visit
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

export default Projects;
