import React from "react";
import Week from '../../Resources/Icons/week.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
import Pic1 from '../../Resources/Pics/MOTW/mar22/1.jpg';
// import Pic2 from '../../Resources/Pics/MOTW/feb22/2.jpeg';

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

            <i>Marzo</i> <br /><br />

            <b><i>Maya</i></b>:  
            Este mes me divertí practicando béisbol. Me sentí más fuerte que hace varios años. Ahora puedo lanzar la pelota más lejos. Papá y yo trabajamos en fildear, lanzar y batear en el campo. ¡Estoy muy emocionada de jugar béisbol en un equipo por primera vez en abril! 
            <br /><br />
            <b><i>Papá</i></b>:
            Este mes ayudé a Maya a prepararse para su primera temporada en las ligas menores. Compramos nuevos pantalones de béisbol, un cinturón, un bate de béisbol y nuevos tacos en Instant Replay Sports aquí en Ithaca. Trabajamos en ejercicios básicos de carrera, fildeo, bateo y lanzamiento. Mostró una mejora en su fildeo, carrera y lanzamiento. Golpear requiere más práctica y repetición, lo cual vendrá con el tiempo. A pesar de la lluvia torrencial y los vientos fríos fuimos a Cass Park, donde se jugarán muchos partidos de la liga. ¡Maya jugará en las ligas menores de Cal Ripken en abril y está muy emocionada! Estoy orgulloso de ella y espero verla crecer como jugadora de béisbol este verano.


            <div className="motw-pics">
                <img src={Pic1} alt="#" />
            </div>

            ------------------------<br /><br />
            <i>Posts Anteriores</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/moment-of-the-month/dec21/es"><h2>Diciembre</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/moment-of-the-month/jan22/es"><h2>Enero</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/moment-of-the-month/feb22/es"><h2>Febrero</h2></Link>
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