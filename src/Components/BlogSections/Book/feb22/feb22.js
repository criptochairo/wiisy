import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../../Nav";
import postimg from '../../../../Resources/Pics/Book/PortadaEsp.jpg';

function Post() {
    return (
        <div>
            <Nav />a
            <div className="text-container">
            <h1>February, 2022</h1><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

                <p class="content-text">

                <br /><br />
                This is the cover of our forthcoming book. Isn't it lovely? It features one of my photos and one of Jorge's paintings.
                <br /><br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-book"><h2>Back</h2></Link>
            
            </p>

        </div> 
    </div>
    )
}

export default Post;