import React from "react";
import { Link } from "react-router-dom";
import logo from './Resources/Icons/logo-final.jpg';

function NavEs() {
    return (
        <div className="overlay">
        <nav>
        <Link to="/es" id="logo"><img src={logo} alt="Logo" /></Link>
            <ul className="nav-links">
                <Link style={{ color: 'black'}} to="/es"><li>· Página Principal</li></Link>
                <Link style={{ color: 'black'}} to="/blog/what-if-i-say-yes-es"><li>· ¿Y si digo que sí?</li></Link>
                <Link style={{ color: 'black'}} to="/about-es"><li>· Acerca de mí</li></Link>
                <Link style={{ color: 'black'}} to="/blog-es"><li>· Blog</li></Link>
                <Link style={{ color: 'black'}} to="/community-board-es"><li>· Pizarrón Comunitario</li></Link>
                <Link style={{ color: 'black'}} to="/contact-me-es"><li>· Contáctenme</li></Link>
                <Link style={{ color: 'black'}} to="/"><li>· English</li></Link>
            </ul>
        <Link to="/es" id="logo-2"><img src={logo} alt="Logo" /></Link>
        </nav>
        </div>
    )
}

export default NavEs;