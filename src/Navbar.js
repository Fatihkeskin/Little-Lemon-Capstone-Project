import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="navbar">
           
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Reservation</a></li>
                    <li><a href="/">OrderOnline</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">About</a></li>
                    
                    {/*<Link href="/">Home</Link>
                    <Link className="link" to={'/Reservations'}>Reservation</Link>
                    <Link className="link" to={"/"}>OrderOnline</Link>
                    <Link className="link" to={"/"}>Menu</Link>
                    <Link className="link" to={"/"}>About</Link>
    */}
                </ul>
         
        </nav>
    );
}


export default Navbar;