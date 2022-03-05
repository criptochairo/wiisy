import React from "react";
import Week from '../../Resources/Icons/week.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
import Pic1 from '../../Resources/Pics/MOTW/feb22/1.jpeg';
import Pic2 from '../../Resources/Pics/MOTW/feb22/2.jpeg';

function MomentOTWEs() {
    return (
        <div className="aboutme-page">
            <NavEs />

            <div className="text-container"> 
            <img src={Week} alt="wiisy-logo" id="blog-img" /> 
            <h1>El momento del mes</h1> <br />


            <p class="content-text">
            El momento del mes es una sección que estará a cargo de mi hija Maya y mi esposo Carlos. 
            <br /><br />
            Querían participar en este espacio y dije que <b><i>¡sí!</i></b> <span role="img" aria-label="smile">😄</span>
            <br /><br />
            Aquí van a hablar de algún momento del mes que se les hizo crítico, divertido, interesante, curioso y demás.
            <br /><br />
            Es un espacio para animarlos a ustedes a reflexionar sobre cómo vivieron el mes que pasó y a elegir un momento que quieran recordar por siempre.
            <br /><br />
            Maya y Carlos esperan que les guste lo que van a compartir con ustedes. 
            <br /><br />
            ------------------------<br /><br />

            <i>Febrero</i> <br /><br />

            ¡Este mes Maya y yo celebramos nuestros cumpleaños con estilo!
            <br /><br />
            ¡Ordenamos dos deliciosos pasteles de zanahoria, uno para cada quien, con decoraciones sorpresa únicas de Vasantha, una excelente repostera de Ithaca, Nueva York!
            <br /><br />
            Maya y yo elegimos nuestras respectivas celebraciones de cumpleaños como <i>El Momento del Mes</i> por dos razones:
            <br /><br />
            1) nos encanta el pastel de zanahoria, y 2) el pastel de zanahoria era el pastel favorito de mi Mami, Virginia Morales (la abuela paterna de Maya). Compartíamos el mismo cumpleaños (1 de febrero). Ella falleció, a principios de mayo de 2015, a la corta edad de 66 años. 
            <br /><br />
            ¡La extrañamos mucho!
            <br /><br />
            Entonces, en honor a mi Mami, el pastel de zanahoria será de ahora en adelante nuestro tradicional pastel de cumpleaños.
            <br /><br />
            ¡Disfruten también de nuestras fotos!
            <br /><br />

            <div className="motw-pics">
                <img src={Pic1} alt="#" />
                <img src={Pic2} alt="#" />
            </div>

            ------------------------<br /><br />
            <i>Posts Anteriores</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/moment-of-the-month/dec21/es"><h2>Diciembre</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/moment-of-the-month/jan22/es"><h2>Enero</h2></Link>
                </div>

            <br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog/es"><h2>Regresar al blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/person-of-the-month/es"><h2>Siguiente sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations/es"><h2>Sección anterior</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default MomentOTWEs;