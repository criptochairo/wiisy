import React from "react";
import { Link } from "react-router-dom";
import NavEs from "../../../../Nav-es";
import postimg from '../../../../Resources/Pics/Projects/feb22.JPG';

function Post() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            <h1>Febrero del 2022</h1><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

                <p class="content-text">

                <br /><br />
                Todavía estamos tratando de decidir qué videos poner aquí.
                <br /><br />
                Para marzo seguro subiremos uno.
                <br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-daughters-projects/es"><h2>Regresar</h2></Link>
            
            </p>

        </div> 
    </div>
    )
}

export default Post;