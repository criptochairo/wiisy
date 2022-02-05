import React from "react";
import bookimg from '../../Resources/Icons/book.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import postimg from '../../Resources/Pics/kok1.jpg';

function Book() {
    return (
        <div className="aboutme-page">
        <Nav />

        <div className="text-container"> 
            <img src={bookimg} alt="wiisy-logo" id="blog-img" /> 
            <h1>Book With my Twin Brother</h1> <br />

            <p className="content-text">
            My twin brother Jorge and I turned 50 this past summer (2021), and to celebrate in a big way, I thought we could create a book together and publish it through Amazon but without a publisher involved and without depending on on others telling us if they liked our project or not.
            <br /><br />
            I consulted with my brother, and he said <i><b>yes!</b></i>
            <br /><br />
            Many years ago, Jorge found in painting a way to fall in love with life and his <i>being</i> again after having gone through harrowing moments. And since then, he has created works of art that have made those who see them fall in love with life too.
            <br /><br />
            And if that wasn't enough, a few years ago, he created his website to promote Mexican artists (you must visit <a href="https://www.pintoresmexicanos.com/" target="_blank" rel="noreferrer" >www.pintoresmexicanos.com</a> to see what I'm talking about ... It's beautiful!)
            <br /><br />
            Well, our idea for the book is to choose his best 50 works of art (paintings, drawings and sculptures) and combine them with my best 50 photographs.
            <br /><br />
            Jorge will design the book, and I will write the text, and together we will publish in 2022. We hope you will like the book as much as we already do.
            <br /><br />
            The idea is to inspire you to do the same: self-publishing is a way to bring out our most sincere and most profound thoughts and share them with the world without any unnecessary publishing barriers.
            <br /><br />
            In sum, in this section, I will tell you about our creative process and update you on our progress.
            <br /><br />
            
            ------------------------<br /><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

            <i>January 11, 2022<br /><br /></i>

            <b>[Report from my twin brother]</b>
            <br /><br />
            At the beginning of each book, once the size and number of pages are defined, as well as the general layout, the first thing is to receive or collect all the material, then review the photos and make sure they have the size and resolution that will be used in the book. I am at that stage.
            <br /><br /><br />

            

            <Link className="link" style={{ color: 'black' }} to="/blog"><h2>Back to Blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-daughters-projects"><h2>Next Section</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-podcast"><h2>Previous Section</h2></Link>
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default Book;