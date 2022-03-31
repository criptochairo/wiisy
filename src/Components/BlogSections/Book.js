import React from "react";
import bookimg from '../../Resources/Icons/book.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import postimg from '../../Resources/Pics/Book/apr22-1.jpg';
import postimg2 from '../../Resources/Pics/Book/apr22-2.jpg';

function Book() {
    return (
        <div className="aboutme-page">
        <Nav />

        <div className="text-container"> 
            <img src={bookimg} alt="wiisy-logo" id="blog-img" /> 
            <h1>Book with My Twin Brother</h1> <br />

            <p className="content-text">
            My twin brother Jorge and I turned 50 this past summer (2021), and to celebrate in a big way, I thought we could create a book together and publish it through Amazon without a publisher involved and without depending on others telling us if they liked our project or not.
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

            <img src={postimg} alt="wiisy-logo" className="profile-pic" id="book-cover" />
            <img src={postimg2} alt="wiisy-logo" className="profile-pic" id="book-cover" />

            <i>April, 2022</i>
            <br /><br />
            This is another sample of my photos and Jorge's paintings.
            <br /><br />
            Aren't they super cute?
            <br /><br /><br />

            ------------------------<br /><br />
            
            <i>Previous Posts</i><br /><br />

            <div id="post-link">
                <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-book/jan22"><h2>January</h2></Link>
            </div>
            <div id="post-link">
                <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-book/feb22"><h2>February</h2></Link>
            </div>
            <div id="post-link">
                <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-book/mar22"><h2>March</h2></Link>
            </div>

            <br /><br />

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