import React from "react";
import Week from '../../Resources/Icons/week.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import Pic1 from '../../Resources/Pics/MOTW/jan1.jpg';
import Pic2 from '../../Resources/Pics/MOTW/jan2.jpg';

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

            <i>January</i> <br /><br />

            <b>Maya:</b> In January, we did a <i>Figueroa Karaoke Challenge</i>.  It was really fun. It was homemade. We did eight rounds, four rounds each, and sang random songs picked out of a hat! We selected this as The Moment of the Month because it was one of the few times we could sing together. Even though we were embarrassed, we had lots of fun together.
            <br /><br />
            <b>Carlos:</b> That is right, we sang our hearts out even though we often sang off-key and said the wrong lyrics, oops! We judged ourselves based on lyrics, intonation, and melody. It was challenging to sing a 2013 <i>teen pop song</i> one minute ("Victorious" Nickelodeon show) and then a 1980s <i>hip hop or rap</i> song the next ("The Breaks" by Kurtis Blow). We plan to do this again soon with more strange or obscure songs across more genres. We may even include Spanish language songs to make it even more challenging! Maya won this competition 80 points to 70.75 points out of 120 points!
            <br /><br />

            <div className="motw-pics">
                <img src={Pic1} alt="#" />
                <img src={Pic2} alt="#" />
            </div>

            ------------------------<br /><br />
            <i>Previous Posts</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/moment-of-the-month/jan22"><h2>December</h2></Link>
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