import React from "react";
import './Navbar.css'

const Navbar = ()=> {
    return(
        <div className="Navbar"> 
            <span className="nav-logo">eLearning</span>
            <div className="nav-items">
            <input type="text" placeholder="Search" className="search-bar" />
            </div>
        </div>
    )
}

export default Navbar