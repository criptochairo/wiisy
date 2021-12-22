import React from "react";
import Prize from '../../Resources/Icons/wreath.png';

function WIISYPerson() {
    return (
        <div className="aboutme-page">

            <div className="text-container"> 
            <img src={Prize} alt="wiisy-logo" id="blog-img" /> 
            <h1>The <i>What If I Say Yes</i> Person of the Month</h1> <br /><br />

            <p class="content-text">
            Here I want to share the stories of the people I have met who perfectly exemplify what I mean by the <b>"What If I Say Yes!"</b> philosophy.
            <br /><br />
            You will meet people who have dared to say <b>yes!</b> at different times in their lives and have started exciting projects.
            <br /><br />
            They are the people who inspire me to keep going and the ones who remind me that life is worth living.
            <br /><br />
            I hope this space inspires you to express the best of yourself in the different areas of your interest.
            <br /><br />
            Good luck!
            </p>

        </div> 
    </div>
    )
}

export default WIISYPerson;