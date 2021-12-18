import React from "react";
import { Link } from "react-router-dom";
import logo from './Resources/Icons/logo-final.jpg';

function Nav() {
    return (
        <div className="overlay">
        <nav>
        <Link to="/" id="logo"><img src={logo} alt="Logo" /></Link>
            <ul className="nav-links">
                <Link style={{ color: 'black'}} to="/"><li>· Home</li></Link>
                <Link style={{ color: 'black'}} to="/blog/what-if-i-say-yes"><li>· What If I Say Yes?</li></Link>
                <Link style={{ color: 'black'}} to="/about"><li>· About Me</li></Link>
                <Link style={{ color: 'black'}} to="/blog"><li>· Blog</li></Link>
                <Link style={{ color: 'black'}} to="/community-board"><li>· Community Board</li></Link>
                <Link style={{ color: 'black'}} to="/contact-me"><li>· Contact Me</li></Link>
            </ul>
        <Link to="/" id="logo"><img src={logo} alt="Logo" /></Link>
        </nav>
        </div>
    )
}

export default Nav;