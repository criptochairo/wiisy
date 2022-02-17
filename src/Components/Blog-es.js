import React from "react";
import { Link } from "react-router-dom";
import './Blog.css';
import blogimg from '../Resources/Pics/503.jpg';
import Social from '../Resources/Icons/camera.png';
import Microphone from '../Resources/Icons/microphone.png';
import Book from '../Resources/Icons/book.png';
import Mom from '../Resources/Icons/motherhood.png';
import Sister from '../Resources/Icons/twins.png';
import Grandma from '../Resources/Icons/grandma.png';
import Week from '../Resources/Icons/week.png';
import Prize from '../Resources/Icons/wreath.png';
import GoTop from "./GoTop";
import NavEs from "../Nav-es";

function Blog() {
    return (
        <div className="text-container"> 
        <NavEs />
            <img src={blogimg} alt="wiisy" id="header-img" />
            <h1>Blog</h1>
            
            <p className="content-text">Aquí escribo sobre mis proyectos más recientes después de haber pasado por el proceso <b><i>¿Y si digo que sí?</i></b><br /><br />
            Este es mi espacio para inspirarlos a crear su propio espacio después de haber dicho que <u><b><i>¡sí!</i></b></u> a su alma creativa.<br /><br /><br /></p>

            <ul className="blog-list">
                <div className="blog-container">
                    <Link to="/blog/my-photography/es"><img src={Social} alt="my-photography" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-photography/es"><h2>Mis fotografías</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-podcast/es"><img src={Microphone} alt="my-podcast" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-podcast/es"><h2>Mi podcast</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-book/es"><img src={Book} alt="my-book" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-book/es"><h2>Libro con mi hermano gemelo</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-daughters-projects/es"><img src={Mom} alt="my-projects" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-daughters-projects/es"><h2>Proyectos con mi hija</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-sisters-advice/es"><img src={Sister} alt="my-sister" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-sisters-advice/es"><h2>Consejos de mi hermana</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-moms-recommendations/es"><img src={Grandma} alt="my-mom" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-moms-recommendations/es"><h2>Abuelita recomienda</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/moment-of-the-month/es"><img src={Week} alt="momtw" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/moment-of-the-month/es"><h2>Momento del mes</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/person-of-the-month/es"><img src={Prize} alt="person-of-the-month" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/person-of-the-month/es"><h2>La persona <i>¿Y si digo que sí?</i> del mes</h2></Link>
                </div>
                
            </ul>

            <GoTop />
            
        </div>
    )
}

export default Blog;