import React from "react";
import "./DrawerToggleButton.css";
import togglebutton from '../../../assests/signs.svg';

const drawerToggleButton = (props) => {
  return (
    <button className="toggle-button" onClick={props.click}>
      {/* <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div> */}
    <img src={togglebutton} alt='images not loaded'className="toggle-button__line"></img>
    </button>
  );
};

export default drawerToggleButton;
