import React from "react";
import Momimg from '../../Resources/Icons/grandma.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";

function MomEs() {
    return (
        <div className="aboutme-page">
            <NavEs />

            <div className="text-container"> 
            <img src={Momimg} alt="wiisy-logo" id="blog-img" /> 
            <h1>Abuelita Recomienda</h1> <br />

            <p class="content-text">
            Mi mamá (sus nietos le dicen “Abuelita”) dedicó gran parte de su vida a criar a 3 hijos y 2 hijas, y luego a ayudar en la crianza de sus 3 nietas y 3 nietos. El tiempo que le quedaba para sí misma era mínimo y aun así siempre encontró la manera de mantener su curiosidad por aprender.
            <br /><br />
            Ahora que ya no estamos en casa y que puede disfrutar de su tiempo de manera más libre tiene una colección de recomendaciones enorme sobre libros, películas, documentales, lugares, etc.
            <br /><br />
            En este espacio quiero compartir sus recomendaciones con ustedes, como una manera de honrar toda esa memoria institucional que tiene en sus más de 70 vueltas alrededor del sol.
            <br /><br />
            Ojalá este espacio los anime a voltear la mirada a la gente con la que han compartido toda una vida y entablar conversaciones sobre las cosas que han aprendido en el curso de sus vidas.
            <br /><br /><br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog-es"><h2>De Vuelta a Blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/moment-of-the-week-es"><h2>Siguiente Sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice-es"><h2>Sección Anterior</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default MomEs;