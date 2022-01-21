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

            <i>11 de enero del 2022</i><br /><br />

                Hola, ma:
                <br /><br />
                <b>¿Qué recomiendas para este primer mes del año?</b>
                <br /><br />
                <i>Hola hijita querida:
                <br /><br />
                Acabamos de ir a un restorán en la CDMX que está en la colonia Roma, en la calle de Zacatecas. Tu hermano Luis nos lo recomendó y se llama <a href="https://www.google.com.mx/maps/place/Lalo!/@19.4153908,-99.1646584,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff395f34802d:0x1c6328f5be71ded7!8m2!3d19.4153858!4d-99.1624697" target="_blank" rel="noreferrer">“Lalo!”</a>.
                <br /><br />
                La comida riquísima y la atención es excelente.
                <br /><br />
                Yo pedí un postre que le llaman pan francés pero que no tiene nada que ver con lo que comúnmente conocemos con ese nombre. ¡Estaba delicioso!
                <br /><br /><br /></i>

            <Link className="link" style={{ color: 'black' }} to="/blog-es"><h2>Regresar al blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/moment-of-the-week-es"><h2>Siguiente sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice-es"><h2>Sección anterior</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default MomEs;