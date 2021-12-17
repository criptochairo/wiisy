import React from "react";
import { Link } from "react-router-dom";
import logo from './Resources/logo-final.jpeg';

function Nav() {
    return (
        <div className="overlay">
        <nav>
            <Link to="/"><img src={logo} alt="Logo" /></Link>
            <ul className="nav-links">
                <Link  to="/"><li>Home</li></Link>
                <Link style={{ color: 'white'}} to="/about"><li>About Me</li></Link>
                <Link style={{ color: 'white'}} to="/blog"><li>Blog</li></Link>
                <Link style={{ color: 'white'}} to="/community-board"><li>Community Board</li></Link>
                <Link style={{ color: 'white'}} to="/contact-me"><li>Contact Me</li></Link>
            </ul>
        </nav>
        </div>
    )
}

export default Nav;