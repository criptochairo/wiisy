import React from "react";
import Momimg from '../../Resources/Icons/grandma.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import postimg from '../../Resources/Pics/Mom/apr22.jpg';

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

                <img src={postimg} alt="hotel" id="lalo-img" className="profile-pic" />

            
                <i>April<br /><br /></i>

                For this month my recommendation is that you watch the documentary:
                <br /><br />
                <b><i>“Los 14 ochomiles. No hay nada imposible”.</i></b>
                <br /><br />
                That's the title in Spanish, and it's on Netflix. 
                <br /><br />
                In the United States it is:
                <br /><br />
                <b>"14 Peaks: Nothing Is Impossible"</b>
                <br /><br />
                It's a very inspiring story.
                <br /><br />
                And if you want to know more about <b>Project Possible</b>, visit the website of the documentary's high altitude expedition leader, Nimsdai Purja:
                <br /><br />
                <a href="https://www.nimsdai.com/bremont-project-possible" target="_blank" rel="noreferrer">Click here to visit the website</a>
                <br /><br /><br />

                ------------------------<br /><br />
                <i>Previous Posts</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-moms-recommendations/jan22"><h2>January</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-moms-recommendations/feb22"><h2>February</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-moms-recommendations/mar22"><h2>March</h2></Link>
                </div>

                <br /><br />

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