import React from "react";
import "./Heading.css";

function Heading(props) {
  return (
    <div>
      <h1 className="heading text-center">
        {props.title} <span>{props.subtitle}</span>
      </h1>
    </div>
  );
}

export default Heading;
