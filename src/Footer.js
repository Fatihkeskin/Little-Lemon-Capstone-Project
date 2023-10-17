import React from "react";
import { useState } from "react";

const Footer = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <img src={"https://picsum.photos/200/300"} alt="logo" />
            </div>

        </nav>
    );
}


export default Footer;