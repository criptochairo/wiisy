import React from "react";
import Week from '../../Resources/Icons/week.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
import Pic1 from '../../Resources/Pics/MOTW/jan1.jpg';
import Pic2 from '../../Resources/Pics/MOTW/jan2.jpg';

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

            <i>Enero del 2022</i> <br /><br />

            <b>Maya:</b> En enero hicimos un reto llamado “El karaoke Figueroa”. Fue realmente divertido. Hecho en casa. ¡Hicimos ocho rondas, cuatro rondas cada uno, y cantamos canciones al azar sacadas de un sombrero! Seleccionamos esto como “El momento del mes” porque ha sido una de las pocas veces que hemos podido cantar juntos. Aunque nos dio un poco de pena, nos divertimos mucho juntos.
            <br /><br />
            <b>Carlos:</b> Así es, cantamos con todo nuestro corazón a pesar de que a menudo cantábamos desentonados y decíamos la letra equivocada, ¡ups! Maya me juzgó a mí y yo la juzgué a ella basándonos en la letra, la entonación y la melodía. Fue un reto cantar una canción pop adolescente del 2013 un momento ("Victorious" del programa de Nickelodeon) y luego cantar una canción de hip hop o rap de los 80s al siguiente ("The Breaks" de Kurtis Blow). Pronto planeamos hacer esto nuevamente con más canciones extrañas u oscuras a través de más géneros. ¡Incluso podemos incluir canciones en español para hacerlo aún más desafiante! ¡Maya ganó esta competencia con 80 puntos contra 70.75 (míos) de un total de 120 puntos! 
            <br /><br />

            <div className="motw-pics">
                <img src={Pic1} alt="#" />
                <img src={Pic2} alt="#" />
            </div>

            ------------------------<br /><br />
            <i>Posts Anteriores</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/moment-of-the-month/jan22/es"><h2>Diciembre</h2></Link>
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