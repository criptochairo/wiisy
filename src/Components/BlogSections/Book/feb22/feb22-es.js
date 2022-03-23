import React from "react";
import { Link } from "react-router-dom";
import NavEs from "../../../../Nav-es";
import postimg from '../../../../Resources/Pics/Book/PortadaEsp.jpg';

function Post() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            <h1>Febrero del 2022</h1><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

                <p class="content-text">

                <br /><br />
                Esta es la portada de nuestro próximo libro. ¿A poco no está preciosa? Tiene una de mis fotografías y una pintura de Jorge.
                <br /><br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-book/es"><h2>Regresar</h2></Link>
            
            </p>

        </div> 
    </div>
    )
}

export default Post;