import React from "react";
import { useState } from "react";
import footerLogo from "./images/footerlogo.jpg";

const Footer = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div class="footer">
 
            <img src={footerLogo} alt="Footer Logo"  width="500" height="200" />

            <div class="two">
                <ul>
                    <h5>Navigation</h5>
                    <li>
                        <a class="a" href="/">Home</a>
                    </li>
                    <li>
                        <a class="a" href="/about">About</a>
                    </li>
                    <li>
                        <a class="a" href="/menu">Menu</a>
                    </li>
                    <li>
                        <a class="a" href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a class="a" href="/order">Order Online</a>
                    </li>
                    <li>
                        <a class="a" href="/login">Login</a>
                    </li>
                </ul>
            </div>
            <div class="three">
                <ul>
                    <h5>Contact</h5>
                    <li>
                        <a id="nav" href="#">Phone Number</a>
                    </li>
                    <li>
                        <a id="nav" href="#">Email</a>
                    </li>
                    <li>
                        <a id="nav" href="#">Address</a>
                    </li>
                </ul>
            </div>
            <div class="four"><ul><h5>Social Media</h5>
                <li>
                    <a id="nav" href="#">Instagram</a>
                </li>
                <li>
                    <a id="nav" href="#">LinkedIn</a>
                </li>
                <li>
                    <a id="nav" href="#">Pinterest</a>
                </li>
            </ul>
            </div>
        </div>
    );
}


export default Footer;