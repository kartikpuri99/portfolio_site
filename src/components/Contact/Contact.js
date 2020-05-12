import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Heading from "../../utils/Heading";
import Forms from "../../utils/Forms/Forms";

import "./Contact.css";
const Contact = () => {
  return (
    <React.Fragment>
      <section id="contact" className="Contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text-center mx-auto mt-4">
                <Heading firstname="Get In" lastname="Touch" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4 pt-4">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h1 className="text-center mt-4 text-muted lead contact-text mb-4">
                Want to know more about me! Just leave a message or contact me
                on one of the platforms.
              </h1>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="container contact-form">
                <Forms />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="footer" className="port-footer">
        <div className="container">
          <div className="row port-footer-container">
            <div className="col-lg-4 col-md-12 col-sm-12 text-muted h3 lead text-center footer-custom-text">
              © Kartik. Built With ♥ By Kartik.
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12"></div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/kartik.puri.714">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-muted h4 mr-2 contact-icons"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/kartik-p-92ab19118/">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="text-muted h4 mr-2 contact-icons"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/kartikpuri99">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-muted h4 mr-2 contact-icons"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/kartik_puri_kp/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-muted h4 mr-2  contact-icons"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
