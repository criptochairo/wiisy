import React from "react";
import Pic1 from '../../../../Resources/Pics/MOTW/jan1.jpg';
import Pic2 from '../../../../Resources/Pics/MOTW/jan2.jpg';
import GoTop from "../../../GoTop";
import { Link } from "react-router-dom";
import Nav from "../../../../Nav";

function Jan22() {
    return (
        <div>
            <Nav />
            <div className="text-container">
            
            <h1>January</h1><br />

            <p class="content-text">

            <b>Maya:</b> In January, we did a <i>Figueroa Karaoke Challenge</i>.  It was really fun. It was homemade. We did eight rounds, four rounds each, and sang random songs picked out of a hat! We selected this as The Moment of the Month because it was one of the few times we could sing together. Even though we were embarrassed, we had lots of fun together.
            <br /><br />
            <b>Carlos:</b> That is right, we sang our hearts out even though we often sang off-key and said the wrong lyrics, oops! We judged ourselves based on lyrics, intonation, and melody. It was challenging to sing a 2013 <i>teen pop song</i> one minute ("Victorious" Nickelodeon show) and then a 1980s <i>hip hop or rap</i> song the next ("The Breaks" by Kurtis Blow). We plan to do this again soon with more strange or obscure songs across more genres. We may even include Spanish language songs to make it even more challenging! Maya won this competition 80 points to 70.75 points out of 120 points!
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