import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../../Nav";
import GoTop from "../../../GoTop";

function Post() {
    return (
        <div className="aboutme-page">
            <Nav />

            <div className="text-container"> 
            
            <h1>January 11, 2022</h1> <br />

                <p class="content-text">

                I took more than 500 photographs on my daily walks. Over time I improved my eye and my attention to detail. I began to see with the eyes of a photographer and then when I saw something beautiful in nature, I immediately framed it in my mind, even before taking out the phone to use the camera. <br/><br/>
                
                My photos from the beginning are interesting but are missing something. <br/><br/>
                
                The last ones I like a lot and since it seems that the people with whom I shared them also liked them, we decided that one day we are going to offer them here, on this website, in a little store.<br/><br/>

                The idea is that whoever likes my photographs can buy and download them as a digital file and then use them however they want.<br/><br/>

                I will tell you here how we are progressing with this project.<br/><br/>
                
                In the meantime, here is a sample of what I photographed from December 13, 2020, to December 13, 2021:<br/><br/><br/><br/>

                
                <Link className="link" style={{ color: 'black' }} to="/blog/my-photography"><h2>Back</h2></Link>
                               
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default Post;