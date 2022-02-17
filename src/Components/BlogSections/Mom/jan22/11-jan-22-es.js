import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import NavEs from "../../../../Nav-es";
import postimg from '../../../../Resources/Pics/lalo.jpg';

function Post() {
    return (
        <div className="aboutme-page">
            <NavEs />
            <div className="text-container"> 

            <img src={postimg} alt="rocy" id="mom-img" className="profile-pic" />

            <p class="content-text">

            <i>Enero del 2022</i><br /><br />

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

            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations/es"><h2>Regresar</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Post;