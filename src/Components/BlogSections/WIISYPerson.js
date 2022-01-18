import React from "react";
import Prize from '../../Resources/Icons/wreath.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";

function WIISYPerson() {
    return (
        <div className="aboutme-page">
            <Nav />
            <div className="text-container"> 
            <img src={Prize} alt="wiisy-logo" id="blog-img" /> 
            <h1>The <i>What If I Say Yes</i> Person of the Month</h1> <br /><br />

            <p class="content-text">
            In this section, I want to share the stories of the people I have met who perfectly exemplify the <b>"What If I Say Yes!"</b> philosophy.
            <br /><br />
            You will meet people who have dared to say <i><b>yes!</b></i> at different times in their lives and have started exciting projects along the way.
            <br /><br />
            They are the people who inspire me to keep going and the ones who remind me that life is worth living.
            <br /><br />
            I hope this space inspires you to express yourself the best you can, depending on your different areas of interest.
            <br /><br />
            Good luck!<br /><br /><br /><br />
            
            <strong>2022</strong><br /><br />
            <Link style={{ color: 'blue' }} to="/blog/person-of-the-month/jan22">January</Link><br /><br /><br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog"><h2>Back to Blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-photography"><h2>Next Section</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/moment-of-the-week"><h2>Previous Section</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default WIISYPerson;