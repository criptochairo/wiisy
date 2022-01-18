import React from "react";
import Prize from '../../Resources/Icons/wreath.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";

function WIISYPersonEs() {
    return (
        <div className="aboutme-page">
            <NavEs />

            <div className="text-container"> 
            <img src={Prize} alt="wiisy-logo" id="blog-img" /> 
            <h1>La persona del mes que mejor ejemplifica la frase: <b>"¿Y si digo que sí?</b></h1> <br /><br />

            <p class="content-text">
            En esta sección quiero compartir con ustedes las historias de la gente que he conocido y que ejemplifica perfectamente la filosofía del <b>"¿y si digo que sí!"</b>
            <br /><br />
            Conocerán a personas que, en distintos momentos de sus vidas, se han atrevido a decir que <b>¡sí!</b> y han iniciado proyectos de lo más interesantes.
            <br /><br />
            Son la gente que me inspira a seguir adelante y que me recuerda que vale la pena vivir.
            <br /><br />
            Espero que este espacio los inspire a expresar lo mejor de sí mismos en las distintas áreas de su interés.
            <br /><br />
            ¡Buena suerte!
            <br /><br /><br /><br />
            
            <strong>2022</strong><br /><br />
            <Link style={{ color: 'blue' }} to="/blog/person-of-the-month/jan22-es">Enero</Link><br /><br /><br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog-es"><h2>De Vuelta a Blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-photography-es"><h2>Siguiente Sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/moment-of-the-week-es"><h2>Sección Anterior</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default WIISYPersonEs;