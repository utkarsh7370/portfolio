import React from "react";
import Heading from "../Heading/Heading";
import "./Skills.css";

function Skills() {
  return (
    <div className="skillSection">
      <Heading title="My" subtitle="Skills" />
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-10 offset-1">
            <h2 className="skillHead">Technical Skills</h2>
            <h5>HTML</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated progressBg"
                style={{ width: "95%" }}
              ></div>
            </div>
            <h5>CSS</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated progressBg"
                style={{ width: "90%" }}
              ></div>
            </div>
            <h5>React Js</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated progressBg"
                style={{ width: "85%" }}
              ></div>
            </div>
            <h5>Node Js</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated progressBg"
                style={{ width: "65%" }}
              ></div>
            </div>
            <h5>MongoDb</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated progressBg"
                style={{ width: "90%" }}
              ></div>
            </div>
            <h5>MySql</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated text-center progressBg"
                style={{ width: "60%" }}
              ></div>
            </div>
            <h5>C/C++</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated text-center progressBg"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-10 offset-1">
            <h2 className="skillHead">Tools Skills</h2>
            <h5>VS Code</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated progressBg"
                style={{ width: "100%" }}
              ></div>
            </div>
            <h5>Github</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated progressBg"
                style={{ width: "90%" }}
              ></div>
            </div>
            <h5>Git</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated progressBg"
                style={{ width: "85%" }}
              ></div>
            </div>
            <h5>MS Word</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated progressBg"
                style={{ width: "100%" }}
              ></div>
            </div>
            <h5>Excel</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated progressBg"
                style={{ width: "100%" }}
              ></div>
            </div>
            <h5>Canva</h5>
            <div
              class="progress"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: "1.3vh" }}
            >
              <div
                class="progress-bar progress-bar-striped progress-bar-animated text-center progressBg"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
