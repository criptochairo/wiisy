import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../../Nav";
import postimg from '../../../../Resources/Pics/Projects/feb22.JPG';

function Post() {
    return (
        <div>
            <Nav />a
            <div className="text-container">
            <h1>February, 2022</h1><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

                <p class="content-text">

                <br /><br />
                We are still trying to figure out what videos to post here.
                <br /><br />
                By March we will have one for sure.
                <br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-daughters-projects"><h2>Back</h2></Link>
            
            </p>

        </div> 
    </div>
    )
}

export default Post;