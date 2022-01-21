import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import Nav from "../../../../Nav";

function Post() {
    return (
        <div>
            <Nav />
            <div className="text-container">
            <h1>January 11, 2022</h1><br />

                <p class="content-text">

                Hi, mom.
                <br /><br />
                <b>What do you recommend for this first month of the year?</b>
                <br /><br />
                <i>Hello dear, 
                <br /><br />
                We just went to a restaurant in Mexico City, in the colonia Roma, on Zacatecas Street. Your brother Luis recommended it to us. It's called <a href="https://www.google.com.mx/maps/place/Lalo!/@19.4153908,-99.1646584,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1ff395f34802d:0x1c6328f5be71ded7!8m2!3d19.4153858!4d-99.1624697" target="_blank" rel="noreferrer">“Lalo!”</a>.
                <br /><br />
                The food is delicious, and the service is excellent.
                <br /><br />
                I ordered a dessert they call French Bread but it has nothing to do with what it's commonly known by that name. It was delicious!
                <br /><br /><br /></i>

                <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations"><h2>Back</h2></Link>
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default Post;