import React from 'react';
import logo from "../logo.png";
//import {HashLink as Link} from "react-router-hash-link"

import {Link} from 'react-scroll';
//import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faBars} from "@fortawesome/free-solid-svg-icons";
//import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div class="container">
                
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="header-wraper"  duration={1000}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" smooth to="#header-wraper">About Me</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="header-wraper">Services</Link>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
      </li>
      
    </ul>

    </div>
    
  </div>
</nav>
    )
}

export default Navbar
