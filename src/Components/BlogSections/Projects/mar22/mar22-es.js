import React from "react";
import { Link } from "react-router-dom";
import NavEs from "../../../../Nav-es";
import ReactPlayer from 'react-player/youtube';

function Post() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            <h1>Marzo del 2022</h1><br />

                <p class="content-text">

                <br /><br />
                Cookies finalmente accedió a hacer un video para este sitio web… El único problema es que no se acuerda de cómo se llama este sitio web, ja, ja.
                <br /><br />

                <ReactPlayer url='https://youtu.be/8I1UchJSccQ' className="post-video" />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-daughters-projects/es"><h2>Regresar</h2></Link>
            
            </p>

        </div> 
    </div>
    )
}

export default Post;