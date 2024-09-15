import React from "react";
import '../styles/Navbar.css'

import { Link } from "react-router-dom";


const Navbar =()=>{
    return(
        <nav className="Navbar">
             <p className="Head">KHABREY </p>
            <ul>
               
                <li ><Link to='/' className="link" >home</Link> </li>
                <li> <Link to='/sports' className="link">Sports</Link>  </li>
            
                <li>  <Link to='/space' className="link">Space</Link></li>
                <li> <Link to='/about' className="link">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;