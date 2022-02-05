import React from "react";
import Mom from '../../Resources/Icons/motherhood.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import postimg from '../../Resources/Pics/projects1.jpg';

function Proyects() {
    return (
        <div className="aboutme-page">
            <Nav />
            <div className="text-container"> 
            <img src={Mom} alt="wiisy-logo" id="blog-img" /> 
            <h1>Projects with my Daughter</h1> <br />

            <p class="content-text">
            One of the silver linings of the pandemic was that I found new ways to get close to my daughter Maya. For several months, being together all day was a challenge ... until one day, we discovered that we could create things together.
            <br /><br />
            In the summer of 2021, several of her cousins graduated from junior high and senior high school. To celebrate them from a distance, we made a video with a significant character in Maya's life named Cookies.
            <br /><br />
            My brother Héctor gave her a teddy bear the day she was born. He came to the hospital and brought a pink plastic bracelet that said, "It's a girl!" and a beautiful teddy bear that Maya later baptized as <b>Cookies</b> (yes, like that, in plural).
            <br /><br />
            Cookies' video was so successful that we decided to continue making and sharing more of them to celebrate someone's birthday or to entertain younger friends.
            <br /><br />
            We will share some of the videos we created together (Maya, Cookies and I) in this section.
            <br /><br />
            I hope it inspires you to collaborate with someone else and create visual projects to share them with the world too!
            <br /><br />
            
            ------------------------<br /><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

            <i>January</i>
            <br /><br />
            Maya and I have been very busy lately and this month we only had time to take a photo with Cookies.<br /><br />

            Cookies has been very busy because she went on tour, ha-ha!<br /><br />

            But hey, we hope to have a new video (in Spanish and English) to share with you very soon.<br /><br />
            <br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog"><h2>Back to Blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice"><h2>Next Section</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-book"><h2>Previous Section</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Proyects;