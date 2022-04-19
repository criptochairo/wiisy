import React from "react";
import Week from '../../Resources/Icons/week.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import Pic1 from '../../Resources/Pics/MOTW/mar22/1.jpg';
// import Pic2 from '../../Resources/Pics/MOTW/feb22/2.jpeg';

function MomentOTW() {
    return (
        <div className="aboutme-page">
            <Nav />
            <div className="text-container"> 
            <img src={Week} alt="wiisy-logo" id="blog-img" /> 
            <h1>Moment of the Month</h1> <br />


            <p class="content-text"> 
            My daughter Maya and my husband Carlos will oversee this section. 
            <br /><br />
            They wanted to participate in my website, and I said <b><i>yes!</i></b> <span role="img" aria-label="smile">😄</span>
            <br /><br />
            Here they will talk about a moment of the month that was critical, fun, interesting, curious, etc., for them.
            <br /><br />
            It is a space to encourage you to reflect on how you lived the past month by choosing a moment you want to remember forever.
            <br /><br />
            Maya and Carlos hope that you will like what they share with you. 
            <br /><br />
            
            ------------------------<br /><br /> 

            <i>March</i> <br /><br />

            <b><i>Maya</i></b>:  
            This month, I had fun practicing baseball. I felt stronger than I did several years ago. I can now throw the ball farther. Papa and I worked on some fielding, throwing, and hitting on the field. I am so excited to play baseball on a team for the first time in April!  
            <br /><br />
            <b><i>Papa</i></b>:
            This month, I helped Maya get ready for her first Little league season. We purchased new baseball pants, a belt, a baseball bat, and new cleats at Instant Replay Sports here in Ithaca. We worked on basic running drills, fielding, hitting, and throwing. She showed improvement in her fielding, running, and throwing. Hitting requires more practice and repetition, which will come with time. We went to Cass Park, where many league games will be played despite the drizzling rain and cold winds. Maya will be playing in the Cal Ripken Little league in April and is very excited! I am proud of her and look forward to watching her grow as a baseball player this summer.

            <div className="motw-pics">
                <img src={Pic1} alt="#" />
            </div>

            ------------------------<br /><br />
            <i>Previous Posts</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/moment-of-the-month/dec21"><h2>December</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/moment-of-the-month/jan22"><h2>January</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/moment-of-the-month/feb22"><h2>February</h2></Link>
                </div>

            <br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog"><h2>Back to Blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/person-of-the-month"><h2>Next Section</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations"><h2>Previous Section</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default MomentOTW;