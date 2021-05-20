/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Fade from "react-reveal/Fade";
import "./About.css";
import MainProgressBar from "./MainProgressBar/MainProgressBar";
import Heading from "../../utils/Heading";

const skillsa = [
  {
    name: "HTML and CSS",
    percentage: 70,
  },
  {
    name: "JavaScript/React",
    percentage: 80,
  },
  {
    name: "NodeJS",
    percentage: 60,
  },
];

const skillsb = [
  {
    name: "Python",
    percentage: 60,
  },
  {
    name: "Flutter",
    percentage: 50,
  },
  {
    name: "C++",
    percentage: 50,
  },
];

const About = () => {
  return (
    <React.Fragment>
      <section id="about" className="about">
        <Fade bottom cascade>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="text-center mx-auto about-title">
                  <Heading firstname="About" lastname="Me" />
                  <div className="about-maintext">
                    I am an Electronics and Communication Engineering student at
                    Bharati Vidyapeeth's College Of Engineering. A Full Stack
                    Web developer.I also have interest in frontend VLSI and
                    verilog .Apart from programming you will find me playing
                    FIFA,listening music and playing football.
                    <span role="img">⚽⚽</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4 pt-4">
              <div className="col-lg-12 about-detail text-center mx-auto mt-3">
                <ul className="mb-0 list-inline text-center about-work">
                  <li className="list-inline-item mr-2 ">ENGINEER</li>
                  <li className="list-inline-item mr-2 text-white">--</li>
                  <li className="list-inline-item mr-2 ">VLSI ENTHUSIAST</li>
                  <li className="list-inline-item mr-2 text-white">--</li>
                  <li className="list-inline-item mr-0 ">WEB-DESIGNER</li>
                </ul>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-12 text-center mx-auto mt-5 pt-5">
                <Heading firstname="Skills" />
              </div>
              <div className="col-lg-6 col-sm-12 col-md-12">
                {skillsa.map((skill) => (
                  <MainProgressBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
              <div className="col-lg-6 col-sm-12 col-md-12">
                {skillsb.map((skill) => (
                  <MainProgressBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div> */}
          </div>
        </Fade>
      </section>
    </React.Fragment>
  );
};

export default About;
