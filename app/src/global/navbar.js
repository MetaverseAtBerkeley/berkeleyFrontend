import React from 'react'
import Slide from '../components/slide';

import { Link, animateScroll as scroll } from "react-scroll";

import './navbar.scss';

import logo from '../images/logo.png';

const NavButton = ({ title, destination }) => {

  return (
    <Link to={destination} smooth={true} offset={-70}>
      <div className="elm">
        {title}
      </div>
    </Link>
  );
  
};

function Navbar() {
  return (
    <>
    <div className="navbarOccupier">
    </div>
    <Slide className="navbarWrapper">
      <div className="navbar">
        <div className="left">
          <Link to="home" smooth={true}><div className="logo">
            <img src={logo} className="logoImg"></img>
          </div></Link>
        </div>
        <div className="right">
          <NavButton title="Mission" destination="mission" />
          <NavButton title="Join" destination="join" />
          <NavButton title="Contact" destination="contact" />
        </div>
      </div>
    </Slide>
    </>
  )
}

export default Navbar