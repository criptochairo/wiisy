import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import Nav from "../../../../Nav";
import postimg from '../../../../Resources/Pics/sister2.jpg';

function Post() {
    return (
        <div className="aboutme-page">
            <Nav />
            <div className="text-container"> 

            <img src={postimg} alt="rocy" id="rocy-img" className="profile-pic" />

            <p class="content-text">

            <i>February</i><br /><br />

            <i>This month, my sister has <b>Tips for Dancing:</b></i>
                <br /><br />
                Have fun!!
                <br /><br />
                It's always nice to see someone dancing who is having fun, even if they seem to have no style.
                <br /><br />
                In fact, this reminds me a lot of my brother Héctor, ha-ha. His movements were very funny, but he had fun and we had fun watching him.
                <br /><br />
                And if you like a particular type of dance, take classes! Practice always helps 😉.
                <br /><br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice"><h2>Back</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Post;