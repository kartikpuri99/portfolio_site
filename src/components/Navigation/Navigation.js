import React from "react";
import "./Navigation.css";
import DrawerToggleButton from "../Navigation/SideDrawer/DrawerToggleButton";
const Navigation = (props) => {
  

  return (
    <header className={`toolbar ${props.colorInverse && "nav_white"}`}>
      <nav className="toolbar__navigation">
        <div>
          <DrawerToggleButton click={props.drawerClickHandler} colorInverse={props.colorInverse}/>
        </div>
        <div className="toolbar__logo">
          <a href="#home">
            <span>KAR</span>TIK
          </a>
        </div>
        <div className="spacer"></div>
        <div className="toolbar_navigation-items">
          <ul className="activelinks">
            <li className="actives">
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#experience">EXPERIENCE</a>
            </li>
            <li>
              <a href="#work">WORK</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
