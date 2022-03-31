import React from "react";
import Momimg from '../../Resources/Icons/grandma.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
import postimg from '../../Resources/Pics/Mom/apr22.jpg';


function MomEs() {
    return (
        <div className="aboutme-page">
            <NavEs />

            <div className="text-container"> 
            <img src={Momimg} alt="wiisy-logo" id="blog-img" /> 
            <h1>Abuelita recomienda</h1> <br />

            <p class="content-text">
            Mi mamá (sus nietos le dicen “Abuelita”) dedicó gran parte de su vida a criar a 3 hijos y 2 hijas, y luego a ayudar en la crianza de sus 3 nietas y 3 nietos. El tiempo que le quedaba para sí misma era mínimo y aun así siempre encontró la manera de mantener su curiosidad por aprender.
            <br /><br />
            Ahora que ya no estamos en casa y que puede disfrutar de su tiempo de manera más libre tiene una colección de recomendaciones enorme sobre libros, películas, documentales, lugares, etc.
            <br /><br />
            En este espacio quiero compartir sus recomendaciones con ustedes, como una manera de honrar toda esa memoria institucional que tiene en sus más de 70 vueltas alrededor del sol.
            <br /><br />
            Ojalá este espacio los anime a voltear la mirada a la gente con la que han compartido toda una vida y entablar conversaciones sobre las cosas que han aprendido en el curso de sus vidas.
            <br /><br />
            
            ------------------------<br /><br />

            <img src={postimg} alt="hotel" id="lalo-img" className="profile-pic" />

            
                <i>Abril</i>
                <br /><br />

                Para este mes mi recomendación es que vean el documental:
                <br /><br />
                <b><i>“Los 14 ochomiles. No hay nada imposible”.</i></b>
                <br /><br />
                Ese el título en español y está en Netflix. 
                <br /><br />
                En Estados Unidos es:
                <br /><br />
                <b>"14 Peaks: Nothing Is Impossible"</b>
                <br /><br />
                Es una historia muy inspiradora.
                <br /><br />
                Y si quieren saber más del <b>Proyecto Posible</b>, visiten el sitio web del alpinista del documental, Nimsdai Purja:
                <br /><br />
                <a href="https://www.nimsdai.com/bremont-project-possible" target="_blank" rel="noreferrer">Hagan click aquí para visitar el website</a>
                <br /><br /><br />

                ------------------------<br /><br />

                <i>Posts Anteriores</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-moms-recommendations/jan22/es"><h2>Enero</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-moms-recommendations/feb22/es"><h2>Febrero</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-moms-recommendations/mar22/es"><h2>Marzo</h2></Link>
                </div>

                <br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog/es"><h2>Regresar al blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/moment-of-the-month/es"><h2>Siguiente sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice/es"><h2>Sección anterior</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default MomEs;