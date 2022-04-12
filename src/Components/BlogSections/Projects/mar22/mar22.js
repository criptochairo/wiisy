import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../../Nav";
import ReactPlayer from 'react-player/youtube';

function Post() {
    return (
        <div>
            <Nav />a
            <div className="text-container">
            <h1>March, 2022</h1><br />

                <p class="content-text">

                <br /><br />
                Cookies finally agreed to make a video for the website… The only problem is that she does not remember what the website name is, ha-ha!
                <br /><br />

                <ReactPlayer url='https://youtu.be/8I1UchJSccQ' className="post-video" />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-daughters-projects"><h2>Back</h2></Link>
            
            </p>

        </div> 
    </div>
    )
}

export default Post;