import React from "react";
import Sisterimg from '../../Resources/Icons/twins.png';

function Sister() {
    return (
        <div className="aboutme-page">

            <div className="text-container"> 
            <img src={Sisterimg} alt="wiisy-logo" id="blog-img" /> 
            <h1>Sister's Advice</h1> <br />

            <p class="content-text">
            The most important woman in my life, after my mother, is my sister Rocío.
            <br /><br />
            She is older than me and therefore has had to open the path so that life is less complicated for me when I go throught it.
            <br /><br />
            She takes care of me from a distance, loves me unconditionally, and has taught me to live life more lightly.
            <br /><br />
            When I have had difficult moments, it is she who I consult.
            <br /><br />
            And just as there is the famous <b><i>Dear Abby</i></b> column (<a href="https://en.wikipedia.org/wiki/Dear_Abby" target="_blank" rel="noreferrer" >Dear Abby - Wikipedia</a>), I want to create a similar section here, but with my sister being the one who gives advice and guides readers, just as she has advised and guided me.
            <br /><br />
            This space is intended to be fun while we learn and consider a new perspective.
            <br /><br />
            Rocío and I hope you enjoy it.
            <br /><br /><br /><br />
            </p>

        </div> 
    </div>
    )
}

export default Sister;