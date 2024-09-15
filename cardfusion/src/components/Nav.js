import React, { useState } from "react";
import logo from "../photos/logo1.png";
import { Link } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
function Nav() {

  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="Nav navbar  navbar-expand-lg bg-body-tertiary">
      <div className="container justify-content-start" >
        <img
          src={logo}
          alt="Logo"
          width="100"
          height="90"
          
          className="d-inline-block align-text-top justify-content-start "
        />
        <h1  className="navhead">CARD FUSION</h1>

        
      </div>
    </nav>
  );
}

export default Nav;
