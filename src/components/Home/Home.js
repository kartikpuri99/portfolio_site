import React from "react";
import "./Home.css";
// import avatar from "../../assests/photoq.jpg";
import Typical from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <React.Fragment>
      <section className="home" id="home">
        <div className="home-text container">
          <div className="row justify-content-center">
            <div className="col-lg-12 home-avatar">
              &nbsp;
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="home-maintext col-lg-12 text-center mt-4 mx-auto">
              <div className="home-iam ">I Am</div>
              <div className="animationtext">
                <Typical
                  steps={["Kartik.", 3000, "Full Stack Developer.", 3000]}
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center w-100">
            <div className="home-icons-container">
              <a href="https://www.facebook.com/kartik.puri.714">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="home-icons mr-3"
                />
              </a>
              <a href="https://www.linkedin.com/in/kartik-p-92ab19118/">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="home-icons mr-3"
                />
              </a>
              <a href="https://github.com/kartikpuri99">
                <FontAwesomeIcon icon={faGithub} className="home-icons" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <a
                href="https://internshala.com/student/resume_download/E4BAB3CF-70BB-2005-86F3-D9A91C022B17/7176653"
                className="btn btn-large btn-outline-light home-button"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
    
      </section>
    </React.Fragment>
  );
};

export default Home;
