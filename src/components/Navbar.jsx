import React from "react";
import logo from "../../public/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={logo}/>
        </nav>        
    )
}