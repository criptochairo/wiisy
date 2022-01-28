import React from "react";
import Momimg from '../../Resources/Icons/grandma.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import laloimg from '../../Resources/Pics/lalo.jpg';

function Mom() {
    return (
        <div>
            <Nav />
            <div className="text-container"> 
            <img src={Momimg} alt="wiisy-logo" id="blog-img" /> 
            <h1><i>Abuelita</i> Recommends</h1> <br />

            <p class="content-text">
            My mom (her grandkids call her <i>Abuelita</i>) dedicated much of her life to raising three sons and two daughters and then helping raise her three granddaughters and three grandsons. The time she had left for herself was minimal, yet she always found a way to keep her curiosity for learning.
            <br /><br />
            Now that we no longer live at her home and she enjoys her time more freely, she has a vast collection of recommendations on books, movies, documentaries, places to visit, restaurants, etc.
            <br /><br />
            I want to share her recommendations with you in this section that draws on all the institutional memory she has built in her more than 70 trips around the sun.
            <br /><br />
            Hopefully, this space will encourage you to turn to the people you have spent a lifetime with and engage in conversations about what they have learned during their lives.
            <br /><br />

            ------------------------<br /><br />

                <img src={laloimg} alt="lalo" id="lalo-img" className="profile-pic" />

            
                <i>January 11, 2022<br /><br /></i>

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

                <Link className="link" style={{ color: 'black' }} to="/blog"><h2>Back to Blog</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/moment-of-the-month"><h2>Next Section</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice"><h2>Previous Section</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Mom;