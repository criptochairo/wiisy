import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import aboutmeimg from '../Resources/Pics/210.JPEG';
import blogimg from '../Resources/Pics/503.jpg';
import communityimg from '../Resources/Pics/544.JPEG';
import contactimg from '../Resources/Pics/181.JPEG';
import logo from '../Resources/logo-final.jpeg';
import GoTop from "./GoTop";
import NavEs from "../Nav-es";

function HomeEs() {
    return (
        
        <div id="content-page">

            <NavEs />

            <div className="section-container" id="header">
                <h1>¿Y si digo que sí?</h1>
                <h4>por Lucía Cárdenas</h4>
            </div>

            
            <div className="section-container">
                <Link to="/blog/what-if-i-say-yes-es"><img src={logo} alt="wiisy" /></Link>
                <Link style={{ color: 'black' }} to="/blog/what-if-i-say-yes-es"><h2>¿Y si digo que sí?</h2></Link>
                <p className="container-text">Lean aquí el texto original de mi hermano, que me dio la idea para crear este sitio web.</p>
            </div>
            
            <div className="section-container">
                <Link to="/about-es"><img src={aboutmeimg} alt="about-me" /></Link>
                <Link style={{ color: 'black' }} to="/about-es"><h2>Acerca de Mí</h2></Link>
                <p className="container-text">¡Hola! Mi nombre es Lucía Cárdenas. Denle click <Link style={{ color: 'black' }} to="/about-es">aquí</Link> para que se enteren de por qué decidí crear este sitio web.</p>
            </div>

            <div className="section-container">
                <Link to="/blog-es"><img src={blogimg} alt="blog" /></Link>
                <Link style={{ color: 'black' }} to="/blog-es"><h2>Blog</h2></Link>
                <p className="container-text">Aquí verán cómo yo le he dicho que ¡sí! a la vida. Entren, lean e inspírense para empezar a hacer lo suyo.</p>
            </div>
            
            <div className="section-container">
                <Link to="/community-board-es"><img src={communityimg} alt="community-board" /></Link>
                <Link style={{ color: 'black' }} to="/community-board-es"><h2>Pizarrón Comunitario</h2></Link>
                <p className="container-text">Este es un espacio para aprender de los demás y que otros aprendan de ustedes. ¡Entren y compartan sus experiencias!</p>
            </div>

            <div className="section-container">
                <Link to="/contact-me-es"><img src={contactimg} alt="contact-me" /></Link>
                <Link style={{ color: 'black' }} to="/contact-me-es"><h2>Contáctenme</h2></Link>
                <p className="container-text">Soy toda oídos. ¿Me mandan sus preguntas y comentarios?</p>
            </div>

            <GoTop />

            <div className="footer">
            <h3>Suscríbanse para recibir mi boletín semanal por correo electrónico. Los inspirará a probar cosas nuevas al permitirse decir que ¡SÍ!</h3>
            <small>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></small><br />
            <small>Website by <a href="https://github.com/criptochairo" title="GithubProfile">Criptochairo</a></small>
            </div>
            
        </div>
    )
}

export default HomeEs;