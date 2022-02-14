import React from "react";
import Pic1 from '../../../Resources/Pics/MOTW/pic1.jpeg';
import Pic2 from '../../../Resources/Pics/MOTW/pic2.jpeg';
import GoTop from "../../GoTop";
import { Link } from "react-router-dom";
import Nav from "../../../Nav";

function Jan22() {
    return (
        <div>
            <Nav />
            <div className="text-container">
            
            <h1>December 2021</h1><br />

            <p class="content-text">

            As the photos show, Maya and I finally and officially explored our respective musical instruments!  What does this mean? Well, she picked up my guitar and I picked up her violin and we both played Beethoven's "Ode to Joy" (Symphony No. 9 in D minor, Op. 125) separately with the other's help.
            <br /><br />
            I served as her first guitar teacher and she was my first violin teacher.  What a moment!  Maya was amazing, playing not only this piece but others with such fluidity.  And she told me I was a quick learner too with the violin. So, for our first moment of the month, we share our musicality!
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