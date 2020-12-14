import React from "react";
import "./SideDrawer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faHistory,
  faBriefcase,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import sidedrawer_logo from "../../../assests/LIGHTLOGO.png";

const SideDrawer = (props) => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav
      className={`${drawerClasses.join(" ")}`}
    >
      <img
        src={sidedrawer_logo}
        alt="not loaded images"
        className="sidedrawer_logo"
      />
      <hr
        className={`horizontal-line`}
      />

      <ul>
        <li>
          <FontAwesomeIcon
            icon={faHome}
            className={`home-icons mr-2`}
          />{" "}
          <a
            href="#home"
            onClick={props.click}
          >
            HOME
          </a>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faUser}
            className={`home-icons mr-3`}
          />
          <a
            href="#about"
            onClick={props.click}
          >
            ABOUT
          </a>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faHistory}
            className={`home-icons mr-3`}
          />
          <a
            href="#experience"
            onClick={props.click}
          >
            EXPERIENCE
          </a>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faBriefcase}
            className={`home-icons mr-3`}
          />
          <a
            href="#work"
            onClick={props.click}
          >
            WORK
          </a>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faIdCard}
            className={`home-icons mr-3 `}
          />
          <a
            href="#contact"
            onClick={props.click}
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
