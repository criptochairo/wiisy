import React from "react";
import Sisterimg from '../../Resources/Icons/twins.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import postimg from '../../Resources/Pics/sister2.jpg';

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

            ------------------------<br /><br />
            <i>Previous Posts</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-sisters-advice/jan22"><h2>January</h2></Link>
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