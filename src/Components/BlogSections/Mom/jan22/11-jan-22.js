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
                We just went to a restaurant in Mexico City, in the colonia Roma, on Zacatecas Street. Your brother Luis recommended it to us. It's called <a href="https://twitter.com/EatLalo" target="_blank" rel="noreferrer">“Lalo”</a>.
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