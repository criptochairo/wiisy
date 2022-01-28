import React from "react";
import Week from '../../Resources/Icons/week.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
import Pic1 from '../../Resources/Pics/MOTW/pic1.jpeg';
import Pic2 from '../../Resources/Pics/MOTW/pic2.jpeg';

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

            <i>11 de enero del 2022</i> <br /><br />

            Como muestran las fotos, ¡Maya y yo finalmente exploramos oficialmente nuestros respectivos instrumentos musicales! ¿Qué significa esto? Bueno, ella tomó mi guitarra y yo tomé su violín y ambos tocamos la "Oda a la Alegría" de Beethoven (Sinfonía No. 9 en Re menor, Op. 125) por separado con la ayuda del otro.
            <br /><br />
            Serví como su primer profesor de guitarra y ella fue mi primera profesora de violín. ¡Qué momento! Maya estuvo increíble, tocando, no solo esta pieza sino otras, con tanta fluidez. Y me dijo que yo también aprendía rápido con el violín. Entonces, para nuestro primer momento del mes, ¡compartimos nuestra musicalidad! 
            <br /><br />

            <div className="motw-pics">
                <img src={Pic1} alt="#" />
                <img src={Pic2} alt="#" />
            </div>

            <Link className="link" style={{ color: 'black' }} to="/blog-es"><h2>Regresar al blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/person-of-the-month-es"><h2>Siguiente sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations-es"><h2>Sección anterior</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default MomentOTWEs;