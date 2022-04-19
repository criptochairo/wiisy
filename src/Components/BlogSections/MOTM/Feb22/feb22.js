import React from "react";
import Pic1 from '../../../../Resources/Pics/MOTW/feb22/1.jpeg';
import Pic2 from '../../../../Resources/Pics/MOTW/feb22/2.jpeg';
import GoTop from "../../../GoTop";
import { Link } from "react-router-dom";
import Nav from "../../../../Nav";

function Jan22() {
    return (
        <div>
            <Nav />
            <div className="text-container">
            
            <h1>February</h1><br />

            <p class="content-text">

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

            </p>

            <Link className="link" style={{ color: 'black', fontSize: '100%', marginTop: '1.5em'}} to="/blog/moment-of-the-month/"><h2>Back</h2></Link>

            <GoTop />
        </div> 
    </div>
    )
}

export default Jan22;