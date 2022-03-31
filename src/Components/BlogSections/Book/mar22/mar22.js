import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../../Nav";
import postimg from '../../../../Resources/Pics/Book/mar22-1.jpg';
import postimg2 from '../../../../Resources/Pics/Book/mar22-2.jpg';

function Post() {
    return (
        <div>
            <Nav />a
            <div className="text-container">
            <h1>March, 2022</h1><br />

            <p class="content-text">

                <img src={postimg} alt="wiisy-logo" className="profile-pic" id="book-cover" />
                <img src={postimg2} alt="wiisy-logo" className="profile-pic" id="book-cover" />

                <i>March, 2022</i>
                <br /><br />
                This is a taste of what you're going to see in the book.
                <br /><br />
                We still need to add text to it. 
                <br /><br />
                We are currently working on that.
                <br /><br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-book"><h2>Back</h2></Link>
            
            </p>

        </div> 
    </div>
    )
}

export default Post;