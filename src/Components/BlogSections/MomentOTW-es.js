import React from "react";
import Week from '../../Resources/Icons/week.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";

function MomentOTWEs() {
    return (
        <div className="aboutme-page">
            <NavEs />

            <div className="text-container"> 
            <img src={Week} alt="wiisy-logo" id="blog-img" /> 
            <h1>El momento de la semana</h1> <br />


            <p class="content-text">
            El momento de la semana es una sección que estará a cargo de mi hija Maya y mi esposo Carlos. 
            <br /><br />
            Querían participar en este espacio y dije que <b><i>¡sí!</i></b> <span role="img" aria-label="smile">😄</span>
            <br /><br />
            Aquí van a hablar de algún momento de la semana que se les hizo crítico, divertido, interesante, curioso y demás.
            <br /><br />
            Es un espacio para animarlos a ustedes a reflexionar sobre cómo vivieron la semana que pasó y a elegir un momento que quieran recordar por siempre.
            <br /><br />
            Maya y Carlos esperan que les guste lo que van a compartir con ustedes.
            <br /><br /><br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog-es"><h2>De Vuelta a Blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/person-of-the-month-es"><h2>Siguiente Sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations-es"><h2>Sección Anterior</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default MomentOTWEs;