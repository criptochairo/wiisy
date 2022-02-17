import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../Nav";
import postimg from '../../../Resources/Pics/projects1.jpg';

function Post() {
    return (
        <div>
            <Nav />a
            <div className="text-container">
            <h1>January, 2022</h1><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

                <p class="content-text">

                <i>January</i>
                <br /><br />
                Maya and I have been very busy lately and this month we only had time to take a photo with Cookies.
                <br /><br />
                Cookies has been very busy because she went on tour, ha-ha!
                <br /><br />
                But hey, we hope to have a new video (in Spanish and English) to share with you very soon.
                <br /><br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-daughters-projects"><h2>Back</h2></Link>
            
            </p>

        </div> 
    </div>
    )
}

export default Post;