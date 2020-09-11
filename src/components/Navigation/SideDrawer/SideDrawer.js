import React from "react";
import "./SideDrawer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faUser,faHistory,faBriefcase,faIdCard} from '@fortawesome/free-solid-svg-icons'
import sidedrawer_logo from '../../../assests/LIGHTLOGO.png';
import sidedrawer_logo1 from '../../../assests/DARKLOGO.png';

const SideDrawer = (props) => {
  let drawerClasses=['side-drawer'];
  if(props.show){
    drawerClasses=['side-drawer','open']
  }
  return (
    <nav className={`${drawerClasses.join(' ')} ${props.colorInverse?"side-drawer_inverse":""} `}>
      <img src={props.colorInverse?sidedrawer_logo1:sidedrawer_logo} alt="not loaded images" className='sidedrawer_logo'/>
      <hr className={`horizontal-line ${props.colorInverse?"horizontal-line_inverse":""}`}/>
      <ul>
        <li>
        <FontAwesomeIcon
                  icon={faHome}
                  className={`home-icons mr-2 ${props.colorInverse?"link_inverse":""}`}
                /> <a href="#home" className={`${props.colorInverse?"link_inverse":""}`}  onClick={props.click}>HOME</a>
        </li>
        <li> <FontAwesomeIcon
                  icon={faUser}
                  className={`home-icons mr-3 ${props.colorInverse?"link_inverse":""}`}
                />
          <a href="#about"  className={`${props.colorInverse?"link_inverse":""}`}   onClick={props.click}>ABOUT</a>
        </li>
        <li> <FontAwesomeIcon
                  icon={faHistory}
                  className={`home-icons mr-3 ${props.colorInverse?"link_inverse":""}`} 
                />
          <a href="#experience"  className={`${props.colorInverse?"link_inverse":""}`}  onClick={props.click}>EXPERIENCE</a>
        </li>
        <li> <FontAwesomeIcon
                  icon={faBriefcase}
                  className={`home-icons mr-3 ${props.colorInverse?"link_inverse":""}`}
                />
          <a href="#work"  className={`${props.colorInverse?"link_inverse":""}`} onClick={props.click}>WORK</a>
        </li>
        <li> <FontAwesomeIcon
                  icon={faIdCard}
                  className={`home-icons mr-3 ${props.colorInverse?"link_inverse":""}`}
                />
          <a href="#contact"  className={`${props.colorInverse?"link_inverse":""}`} onClick={props.click}>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
