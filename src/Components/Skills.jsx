import React from "react";
// import reactIcon from "../Images/react-icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faReact,
  faCss3Alt,
  faJava,
  faFigma,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex bg-blue-200 flex-col
    items-center 
    p-5
    "
    >
      <header
        className="p-2 text-xl font-bold text-blue-600
      md:text-4xl md:p-8"
      >
        Tech Stack
      </header>

      {/* skill item container */}
      <div
        className="grid grid-cols-4 bg-gray-500  p-5 gap-4 w-4/5
        md:w-3/5 md:gap-2 md:grid-cols-4"
        id="container"
      >
        {/* java */}
        <div className="flex justify-center items-center p-2" id="skillItem">
          <FontAwesomeIcon
            icon={faJava}
            size="2xl"
            style={{ color: "#f89821" }}
            className="md:text-6xl"
          />
        </div>
        {/* html */}
        <div className="flex justify-center items-center p-2" id="skillItem">
          <FontAwesomeIcon
            icon={faHtml5}
            size="2xl"
            style={{ color: "#e44c27" }}
            className="md:text-6xl"
          />
        </div>
        {/* javascript */}
        <div className="flex justify-center items-center p-2" id="skillItem">
          <FontAwesomeIcon
            icon={faJs}
            size="2xl"
            style={{ color: "#f0db4f" }}
            className="md:text-6xl"
          />
        </div>
        {/* react js */}
        <div className="flex justify-center items-center p-2" id="skillItem">
          <FontAwesomeIcon
            icon={faReact}
            size="2xl"
            style={{ color: "#60dbfb" }}
            className="md:text-6xl"
          />
        </div>
        {/* css */}
        <div className="flex justify-center items-center p-2" id="skillItem">
          <FontAwesomeIcon
            icon={faCss3Alt}
            size="2xl"
            style={{ color: "#34bceb" }}
            className="md:text-6xl"
          />
        </div>
        {/* mysql */}
        <div className="flex justify-center items-center p-2" id="skillItem">
          <FontAwesomeIcon
            icon={faDatabase}
            size="2xl"
            style={{ color: "#00718b" }}
            className="md:text-6xl"
          />
        </div>
        {/* figma */}
        <div className="flex justify-center items-center p-2" id="skillItem">
          <FontAwesomeIcon
            icon={faFigma}
            size="2xl"
            style={{ color: "#9d57f7" }}
            className="md:text-6xl"
          />
        </div>
        <div className="flex justify-center items-center p-2" id="skillItem">
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            style={{ color: "#010813" }}
            className="md:text-6xl"
          />
        </div>
      </div>


     
    </div>
  );
};
export default Skills;
