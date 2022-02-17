import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../../Nav";
import postimg from '../../../../Resources/Pics/kok1.jpg';

function Post() {
    return (
        <div>
            <Nav />a
            <div className="text-container">
            <h1>January, 2022</h1><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

                <p class="content-text">

                [Report from my twin brother]
                <br /><br />
                At the beginning of each book, once the size and number of pages are defined, as well as the general layout, the first thing is to receive or collect all the material, then review the photos and make sure they have the size and resolution that will be used in the book. I am at that stage.
                <br /><br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-book"><h2>Back</h2></Link>
            
            </p>

        </div> 
    </div>
    )
}

export default Post;