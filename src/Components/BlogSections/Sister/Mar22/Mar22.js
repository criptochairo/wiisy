import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import Nav from "../../../../Nav";
import postimg from '../../../../Resources/Pics/Sister/mar22.jpg';

function Post() {
    return (
        <div className="aboutme-page">
            <Nav />
            <div className="text-container"> 

            <img src={postimg} alt="rocy" id="rocy-img" className="profile-pic" />

            <p class="content-text">

            <i>March</i><br /><br />

                - A question for your sister (the same one I have for all mothers): How to harmoniously combine personal and work projects with motherhood :) ?”
                <br /><br />
                <i>- I believe that everyone can find the best possible solution according to their own circumstances.
                <br /><br />
                I mean, it is easier to have time for your personal or work projects if you have other people who can support you with the care of your children, like your partner or relatives, or if you can leave them in evening activities or daycare, or if you have understanding bosses who get your new role as a mom.
                <br /><br />
                I believe that dedicating time to your personal or work projects does not necessarily imply a lack of attention to your children, but you do have to be on the lookout to adjust in case it affects them, because each child is different.
                <br /><br />
                And always have a space to spend quality time with them and make them feel how important they are in your life.</i>
                <br /><br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice"><h2>Back</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Post;