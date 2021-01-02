import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <h3>Home</h3>
            </Link>
            <ul>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
