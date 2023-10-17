import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="navbar">
            <Router>

            <div className="navbar-logo">
                <img src={"https://picsum.photos/200/300"} alt="logo" />
            </div>

            <ul className="navbar-links">
                <Link className="link" to={"/"}>Home</Link>
                <Link className="link" to={'/Reservations'}>Reservation</Link>
                <Link className="link" to={"/OrderOnline"}>OrderOnline</Link>
                <HashLink className="link" smooth to="/#Menu">Menu</HashLink>
                <HashLink className="link" smooth to="/#About">About</HashLink>
            </ul>
            </Router>
        </nav>
    );
}


export default Navbar;