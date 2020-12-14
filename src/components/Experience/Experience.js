import React from "react";
import "./Experience.css";
import { Fade } from "react-reveal";
import Heading from "../../utils/Heading";
import Card from "../../utils/Card/Card";

const edu = [
  {
    name: "Engineering Student at Bharati Vidyapeeth College Of Engineering",
    year: "2018-2022",
    text:
      "Bachelor's of Technology in Electronics and Communication Engineering with CGPA of 8.80.",
  },
  {
    name: "Senior Secondary at Jaspal Kaur Public School",
    year: "2016-2018",
    text:
      "Completed Senior Secondary Education from Jaspal Kaur Public School, Shalimar Bagh and secured an aggregate of 95% in class 12 CBSE. ",
  },
];

const exp = [
  {
    name: "Web Administrator at BVPCSI",
    year: "2020-Present",
    text:
      "Works on regularly updating the website as well as adding new feature to the societies website.",
  },
];
const Experience = () => {
  return (
    <section id="experience" className="Experience">
      <Fade bottom cascade>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text-center mx-auto">
                <Heading firstname="Experience" classes="experience-head" />
                <div className="text-white pt-4 prog-font">
                  My Education and experience till date.
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 pt-3 ">
            <div className="col-lg-6 col-md-6 col-sm-12">
              {edu.map((edu) => (
                <Card
                  key={edu.name}
                  year={edu.year}
                  title={edu.name}
                  text={edu.text}
                />
              ))}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              {exp.map((exp) => (
                <Card
                  key={exp.name}
                  year={exp.year}
                  title={exp.name}
                  text={exp.text}
                />
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Experience;
