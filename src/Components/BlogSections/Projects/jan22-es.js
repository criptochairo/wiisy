import React from "react";
import { Link } from "react-router-dom";
import NavEs from "../../../Nav-es";
import postimg from '../../../Resources/Pics/projects1.jpg';

function Post() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            <h1>Enero del 2022</h1><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

                <p class="content-text">

                <i>Enero</i>
                <br /><br />
                Maya y yo hemos estado muy ocupadas últimamente y este mes solo nos dio tiempo de tomarnos una foto con Cookies.
                <br /><br />
                Cookies ha estado muy ocupada porque se fue de gira, ji, ji.
                <br /><br />
                Pero, bueno, esperamos tener un video nuevo (en español y en inglés) para compartir con ustedes muy pronto.
                <br /><br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-daughters-projects/es"><h2>Regresar</h2></Link>
            
            </p>

        </div> 
    </div>
    )
}

export default Post;