import React from "react";
import Week from '../../Resources/Icons/week.png';

function MomentOTW() {
    return (
        <div className="aboutme-page">

            <div className="text-container"> 
            <img src={Week} alt="wiisy-logo" id="blog-img" /> 
            <h1>Moment of the Week</h1> <br />


            <p class="content-text">
            My daughter Maya and my husband Carlos will oversee this section. 
            <br /><br />
            They wanted to participate in my website, and I said <b><i>yes</i></b> :)
            <br /><br />
            Here they will talk about a moment of the week that was critical, fun, interesting, curious, etc., for them.
            <br /><br />
            It is a space to encourage you to reflect on how you lived the past week and choose a moment that you want to remember forever.
            <br /><br />
            Maya and Carlos hope you like it.
            <br /><br /><br /><br />
            </p>

        </div> 
    </div>
    )
}

export default MomentOTW;