import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import Nav from "../../../../Nav";
import postimg from '../../../../Resources/Pics/Podcast/logo.jpg';
import postimg2 from '../../../../Resources/Pics/Podcast/logoesp.jpg';

function Post() {
    return (
        <div>
            <Nav />
            <div className="text-container">
            <h1>February, 2022</h1><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

                <p class="content-text">

                    <i>February</i>
                    <br /><br />

                    On February 6, 2022, I finally published the introductory episode of my podcast. How exciting! 
                    <br /><br />
                    Given the lovely response from the audience and by popular demand, I have decided to say YES! to record it in English.
                    <br /><br />
                    I published that episode on February 14, 2022.
                    <br /><br />
                You can find the Introductory Episode (in English and Spanish) here:
                <br />
                <ul>
                    <li><a href="https://anchor.fm/lucia-cardenas" target="_blank" rel="noreferrer">Anchor</a></li><br />
                    <li><a href="https://open.spotify.com/show/7Kqsh8mLHJIlCOIdHXkskT" target="_blank" rel="noreferrer">Spotify</a></li><br />
                    <li><a href="https://podcasts.apple.com/mx/podcast/de-regalos-y-palabras-con-luc%C3%ADa-c%C3%A1rdenas-of-gifts/id1608798314" target="_blank" rel="noreferrer">Apple Podcasts</a></li><br />
                    <li><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80MWRmNzY3Yy9wb2RjYXN0L3Jzcw" target="_blank" rel="noreferrer">Google Podcasts</a></li>
                </ul>   

                <img src={postimg2} alt="wiisy-logo" className="profile-pic" />
                <br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-podcast"><h2>Back</h2></Link>
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default Post;