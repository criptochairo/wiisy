import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import NavEs from "../../../../Nav-es";
import rocyimg from '../../../../Resources/Pics/sister2.jpg';

function Post() {
    return (
        <div className="aboutme-page">
            <NavEs />
            <div className="text-container"> 

            <img src={rocyimg} alt="rocy" id="rocy-img" className="profile-pic" />

            <p class="content-text">
            <i>Febrero del 2022</i><br /><br />
            
            <i>Este mes, mi hermana tiene <b>consejos para bailar:</b></i>
                <br /><br />
                ¡¡Diviértete!! 
                <br /><br />
                Siempre es padre ver a alguien bailando que se está divirtiendo, aunque parezca que no tenga estilo.
                <br /><br />
                De hecho, esto me recuerda mucho a mi hermano Héctor jaja. Se movía muy gracioso, pero se divertía y nos divertía a nosotros también.
                <br /><br />
                Y si te gusta algún tipo de baile en particular, ¡toma clases! La práctica siempre ayuda 😉.
                <br /><br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice/es"><h2>Regresar</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Post;