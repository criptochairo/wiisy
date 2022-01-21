import React from "react";
import Sisterimg from '../../Resources/Icons/twins.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";

function Sister() {
    return (
        <div className="aboutme-page">
            <Nav />
            <div className="text-container"> 
            <img src={Sisterimg} alt="wiisy-logo" id="blog-img" /> 
            <h1>Sister's Advice</h1> <br />

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

            <i>January 2022</i><br /><br />

            Hello dear sister, 
                <br /><br />
                The moment of truth has arrived. I am going to ask you a question for the blog and you're going to give me some advice, ready?
                <br /><br />
                <b>What is the best way to start the new year?</b>
                <br /><br />
                <i>Hahaha, I already got stage fright. But here I go:</i>
                <br /><br />
                <i>I would say that the best way to start the year is to write down what you want to achieve and have it in sight as much as possible. It also helps to put on the wallpaper of the cell phone that you see all the time, some image that motivates you to do what you want to achieve. For example, Luis [our older brother] put the image of Nims Purja (the one who climbed the 14 peaks of more than 8 thousand meters).  I went for something different and put Saitama (the one from the anime "One Punch Man") who decides to train non-stop for 3 years to become stronger. In the end, they are examples of willpower worthy of being copied. And I also like to think that you can start the year with optimism and try to find the positive side of things. Just like Mike Wasowski in Monsters, when he said "I'm on the cover of a magazine !!!" and only his feet were visible, ha-ha. In short: start the year with goals and a good attitude.</i>
                <br /><br /><br />

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