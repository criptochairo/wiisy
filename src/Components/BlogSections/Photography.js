import React from "react";
import Social from '../../Resources/Icons/camera.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";

function Photography() {
    return (
        <div className="aboutme-page">
            <Nav />
            <div className="text-container"> 
            <img src={Social} alt="wiisy-logo" id="blog-img" />
            <h1>My Photography</h1> <br />

            <p class="content-text">

                In December 2020, I <b>started taking photographs</b> during my daily outdoor walks. It was my way of relieving stress after several months, mostly indoors at home during the beginnings of the pandemic. Taking photos made me <b>observe</b> more closely what nature has to offer. <br /><br />I started <b>seeing</b> things in new ways. I took my time to breathe, process, and enjoy life by looking at and being with nature.<br /><br />

                And then one day, I thought, what if I start sharing my photos with those I love? And not only that, what if I could create a playful experience for them? And so I shared my pictures with them and a special descriptive and creative caption.    
                <br /><br />
                In this photography blog, you will see what I have seen and shared since and also get a chance to read the captions I came up with. 
                <br /><br />
                I hope to inspire you to start seeing your world from a different lens… one that is more attentive, patient, loving and understanding. 
                <br /><br />
                If you do that, I can assure you will start feeling better about your own life.
                <br /><br /><br /><br /> 

                <Link className="link" style={{ color: 'black', textAlign: 'left' }} to="/blog/my-photography/11-jan-22"><h2>January 11th, 2022</h2></Link><br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog"><h2>Back to Blog</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-podcast"><h2>Next Section</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/person-of-the-month"><h2>Previous Section</h2></Link>
                               
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default Photography;