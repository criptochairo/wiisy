import React from "react";
import Week from '../../Resources/Icons/week.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import Pic1 from '../../Resources/Pics/MOTW/feb22/1.jpeg';
import Pic2 from '../../Resources/Pics/MOTW/feb22/2.jpeg';

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

            <i>February</i> <br /><br />

            This month Maya and I celebrated our birthdays in style!  
            <br /><br />
            We ordered two separate delicious carrot cakes with unique surprise decorations from Vasantha, a local Ithaca, NY cake-making master!  
            <br /><br />
            Maya and I selected our respective birthday celebrations as the <i>Moment of the Month</i> for two related reasons:  
            <br /><br />
            1) we love carrot cake, and 2) carrot cake was my mother (Mami), Virginia Morales's favorite cake too (Maya's paternal grandma), with whom I shared the same birthday (Feb. 1) and who passed at the young age of 66 in early May 2015.  
            <br /><br />
            We miss her very much!  
            <br /><br />
            So, in honor of my Mami, Maya and I will make carrot cake, our traditional birthday cake, from here on out!
            <br /><br />
            Enjoy our photos too!
            <br /><br />

            <div className="motw-pics">
                <img src={Pic1} alt="#" />
                <img src={Pic2} alt="#" />
            </div>

            ------------------------<br /><br />
            <i>Previous Posts</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/moment-of-the-month/dec21"><h2>December</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/moment-of-the-month/jan22"><h2>January</h2></Link>
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