import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import NavEs from "../../../../Nav-es";
import postimg from '../../../../Resources/Pics/Podcast/logo.jpg';
import postimg2 from '../../../../Resources/Pics/Podcast/logoesp.jpg';


function Post() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            <h1>Febrero del 2022</h1><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

                <p class="content-text">

                <i>Febrero del 2022</i>
                <br /><br />

                El 6 de febrero del 2022, por fin publiqué el episodio introductorio de mi pódcast. ¡Qué emoción! 
                <br /><br />
                Dada la respuesta tan linda del público y debido a la gran demanda, he decidido decirle que ¡SÍ! a grabar ahora mi episodio en inglés.
                <br /><br />
                Publiqué ese episodio el 14 de febrero del 2022.
                <br /><br />
                Pueden encontrar mi Episodio introductorio, en español e inglés aquí:
                <br />
                <ul>
                    <li><a href="https://anchor.fm/lucia-cardenas" target="_blank" rel="noreferrer">Anchor</a></li><br />
                    <li><a href="https://open.spotify.com/show/7Kqsh8mLHJIlCOIdHXkskT" target="_blank" rel="noreferrer">Spotify</a></li><br />
                    <li><a href="https://podcasts.apple.com/mx/podcast/de-regalos-y-palabras-con-luc%C3%ADa-c%C3%A1rdenas-of-gifts/id1608798314" target="_blank" rel="noreferrer">Apple Podcasts</a></li><br />
                    <li><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80MWRmNzY3Yy9wb2RjYXN0L3Jzcw" target="_blank" rel="noreferrer">Google Podcasts</a></li>
                </ul>

                <img src={postimg2} alt="wiisy-logo" className="profile-pic" />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-podcast/es"><h2>Regresar</h2></Link>
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default Post;