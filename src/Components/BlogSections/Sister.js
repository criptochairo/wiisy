import React from "react";
import Sisterimg from '../../Resources/Icons/twins.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import postimg from '../../Resources/Pics/Sister/mar22.jpg';

function Sister() {
    return (
        <div className="aboutme-page">
            <Nav />
            <div className="text-container"> 
            <img src={Sisterimg} alt="wiisy-logo" id="blog-img" /> 
            <h1>My Sister's Advice</h1> <br />

            <p class="content-text">
            The most important woman in my life, after my mother, is my sister Rocío.
            <br /><br />
            She is older and has opened many paths to make life less complicated for me when I go throught it.
            <br /><br />
            She takes care of me from a distance, loves me unconditionally, and has taught me to live life more lightly.
            <br /><br />
            When I have had difficult moments, it is she who I consult (besides my dearest husband, of course).
            <br /><br />
            And just as there is the famous <b><i>Dear Abby</i></b> column (<a href="https://en.wikipedia.org/wiki/Dear_Abby" target="_blank" rel="noreferrer" >Dear Abby - Wikipedia</a>), I wanted to create a similar section where my sister gives advice and guides readers, just as she has advised and guided me.
            <br /><br />
            This space is intended to be fun while we learn and consider a new perspective.
            <br /><br />
            Rocío and I hope you enjoy it.
            <br /><br />
            
            ------------------------<br /><br />

            <img src={postimg} alt="rocy" id="rocy-img" className="profile-pic" />

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

            ------------------------<br /><br />
            <i>Previous Posts</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-sisters-advice/jan22"><h2>January</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-sisters-advice/feb22"><h2>February</h2></Link>
                </div>

            <br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog"><h2>Back to Blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations"><h2>Next Section</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-daughters-projects"><h2>Previous Section</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Sister;