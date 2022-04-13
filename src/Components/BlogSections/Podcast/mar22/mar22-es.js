import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import NavEs from "../../../../Nav-es";
import postimg from '../../../../Resources/Pics/Podcast/Feb22/feb22.jpg';


function Post() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            <h1>Marzo del 2022</h1><br />

                <p class="content-text">

                <img src={postimg} alt="wiisy-logo" className="profile-pic" />

                <br /><br />

                El 6 de marzo del 2022 publiqué el <b>Episodio #1: Palabras que inspiran</b>.
                <br /><br />
                Les hablo del texto que me ha inspirado a hacer muchas cosas creativas y vivir la vida a plenitud. Ese texto lo escribió mi hermano Héctor y se titula “¿Y si digo que sí?”
                <br /><br />
                <ul>
                    <li><a href="https://anchor.fm/lucia-cardenas/episodes/Episodio-1---Palabras-que-inspiran-e1f8rlj" target="_blank" rel="noreferrer">Anchor</a></li><br />
                    <li><a href="https://open.spotify.com/episode/5tyyw9Mi6H6vMZMkd75zGr" target="_blank" rel="noreferrer">Spotify</a></li><br />
                    <li><a href="https://podcasts.apple.com/mx/podcast/episodio-1-palabras-que-inspiran/id1608798314?i=1000553069766" target="_blank" rel="noreferrer">Apple Podcasts</a></li><br />
                    <li><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80MWRmNzY3Yy9wb2RjYXN0L3Jzcw/episode/OWQzOTg3NWItMmFhOC00YzgwLWFjZWEtN2I1OGVmMGM1NzJk?sa=X&ved=0CAUQkfYCahcKEwjI5eT3gs72AhUAAAAAHQAAAAAQAQ" target="_blank" rel="noreferrer">Google Podcasts</a></li>
                </ul>

                <br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-podcast/es"><h2>Regresar</h2></Link>
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default Post;