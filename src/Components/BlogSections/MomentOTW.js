import React from "react";
import Week from '../../Resources/Icons/week.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import Pic1 from '../../Resources/Pics/MOTW/pic1.jpeg';
import Pic2 from '../../Resources/Pics/MOTW/pic2.jpeg';

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

            <i>January 11, 2022</i> <br /><br />

            As the photos show, Maya and I finally and officially explored our respective musical instruments!  What does this mean? Well, she picked up my guitar and I picked up her violin and we both played Beethoven's "Ode to Joy" (Symphony No. 9 in D minor, Op. 125) separately with the other's help.
            <br /><br />
            I served as her first guitar teacher and she was my first violin teacher.  What a moment!  Maya was amazing, playing not only this piece but others with such fluidity.  And she told me I was a quick learner too with the violin. So, for our first moment of the week, we share our musicality!
            <br /><br />

            <div className="motw-pics">
                <img src={Pic1} alt="#" />
                <img src={Pic2} alt="#" />
            </div>

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