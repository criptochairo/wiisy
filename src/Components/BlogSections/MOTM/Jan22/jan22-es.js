import React from "react";
import Pic1 from '../../../../Resources/Pics/MOTW/jan1.jpg';
import Pic2 from '../../../../Resources/Pics/MOTW/jan2.jpg';
import GoTop from "../../../GoTop";
import { Link } from "react-router-dom";
import NavEs from "../../../../Nav-es";

function Jan22Es() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            
            <h1>Enero del 2022</h1><br /> 

            <p class="content-text">

            <b>Maya:</b> En enero hicimos un reto llamado “El karaoke Figueroa”. Fue realmente divertido. Hecho en casa. ¡Hicimos ocho rondas, cuatro rondas cada uno, y cantamos canciones al azar sacadas de un sombrero! Seleccionamos esto como “El momento del mes” porque ha sido una de las pocas veces que hemos podido cantar juntos. Aunque nos dio un poco de pena, nos divertimos mucho juntos.
            <br /><br />
            <b>Carlos:</b> Así es, cantamos con todo nuestro corazón a pesar de que a menudo cantábamos desentonados y decíamos la letra equivocada, ¡ups! Maya me juzgó a mí y yo la juzgué a ella basándonos en la letra, la entonación y la melodía. Fue un reto cantar una canción pop adolescente del 2013 un momento ("Victorious" del programa de Nickelodeon) y luego cantar una canción de hip hop o rap de los 80s al siguiente ("The Breaks" de Kurtis Blow). Pronto planeamos hacer esto nuevamente con más canciones extrañas u oscuras a través de más géneros. ¡Incluso podemos incluir canciones en español para hacerlo aún más desafiante! ¡Maya ganó esta competencia con 80 puntos contra 70.75 (míos) de un total de 120 puntos! 
            <br /><br />

            <div className="motw-pics">
                <img src={Pic1} alt="#" />
                <img src={Pic2} alt="#" />
            </div>

            </p>

            <Link className="link" style={{ color: 'black', fontSize: '100%', marginTop: '1.5em'}} to="/blog/moment-of-the-month/es/"><h2>Regresar</h2></Link>

            <GoTop />
        </div> 
    </div>
    )
}

export default Jan22Es;