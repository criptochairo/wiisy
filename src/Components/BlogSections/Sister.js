import React from "react";
import Sisterimg from '../../Resources/Icons/twins.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import postimg from '../../Resources/Pics/Sister/apr22.jpg';

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

            <i>April</i><br /><br />

                Dear Sister, this month's question is:
                <br /><br />
                <b>- What characteristics do you think someone who leads a team of people at work should have?</b>
                <br /><br />
                <i>- Well, I think it depends on the type of work and how many people there are in your team because the bigger the team you oversee, the more difficult it is to get to know each one of the members in-depth.
                <br /><br />
                But assuming that it is a manageable number, I think it would be good for the person who leads to be empathic with the team members and to find a way to get to know them better to guide the strengths of each one towards the achievement of the team's objectives.
                <br /><br />
                I think it is desirable that this person be responsible and organized since I have seen cases of people with a lot of knowledge but who cannot get their team to meet the deadlines.
                <br /><br />
                And I think that it is also desirable that the person be intelligent because it is very demotivating to have a boss who has no idea of the issues that are the responsibility of the team.
                <br /><br />
                That's what I think, but it's ok to have a different opinion!</i>
                <br /><br /><br />

            ------------------------<br /><br />
            <i>Previous Posts</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-sisters-advice/jan22"><h2>January</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-sisters-advice/feb22"><h2>February</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-sisters-advice/mar22"><h2>March</h2></Link>
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