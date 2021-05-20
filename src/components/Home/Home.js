import React from "react";
import "./Home.css";
import Fade from "react-reveal/Fade";
import avatar from "../../assests/web-profileimage.png";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section id="home" className="home mt-5 pt-5">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-4 position-relative">
            <div className="image-container w-75 h-75">
              <img className="home-image" alt="not loading" src={avatar}></img>
            </div>
          </div>
          <div className="col-lg-8 position-relative">
            <Fade cascade right>
              <div className="home-text-container">
                <div className="row custom-row">Hi!</div>
                <div className="row custom-row">
                  <div className="home-iams">I am</div>
                  <div className="animationtexts">
                    <Typewriter
                      options={{
                        strings: ["Kartik.", "VLSI Enthusiast.","Web Developer."],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
                <div className="row custom-row icons">
                  <li>
                    <a href="https://www.facebook.com/kartik.puri.714">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="icon1 facebook"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/kartik-p-92ab19118/">
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="icon1 linkedin"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/kartikpuri99">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="icon1 github"
                      />
                    </a>
                  </li>
                </div>
                <div className="row custom-row">
                  <a
                    href="https://internshala.com/student/resume_download/E4BAB3CF-70BB-2005-86F3-D9A91C022B17/7176653"
                    className="home-button"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Download CV
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

// {
/* <section className="home" id="home">
        <div className="home-text container">
          <div className="row justify-content-center">
            <div className="col-lg-12 home-avatar">&nbsp;</div>
          </div>
          <div className="row justify-content-center">
            <div className="home-maintext col-lg-12 text-center mt-4 mx-auto">
              <div className="home-iam ">I Am</div>
              <div className="animationtext">
                <Typewriter
                  options={{
                    strings: ["Kartik.", "Full Stack Developer."],
                    autoStart: true,
                    loop: true,
                  }}
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
      </section> */
// }

export default Home;
