import React from "react";
import bookimg from '../../Resources/Icons/book.png';

function Book() {
    return (
        <div className="aboutme-page">

        <div className="text-container"> 
            <img src={bookimg} alt="wiisy-logo" id="blog-img" /> 
            <h1>Book With my Twin Brother</h1> <br />

            <p className="content-text">
            My twin brother and I turned 50 this summer (2021) and to celebrate in a big way, I thought we could create a book together and publish it through Amazon. Without editorials involved and without depending on someone telling us if they liked our project or not.
            <br /><br />
            I consulted with my brother, and he said yes (See? He paid attention to the process of "what if I say yes?")
            <br /><br />
            Many years ago, Jorge found in painting a way to fall in love again with life and with his being after having gone through harrowing moments. And since then, he has created works of art that make those who see them fall in love with life.
            <br /><br />
            And if that wasn't enough, a few years ago, he created his own website to promote Mexican artists (you must visit <a href="www.pintoresmexicanos.com">www.pintoresmexicanos.com</a> to see what I'm talking about ... It's a beauty!)
            <br /><br />
            Well, our idea is to choose his best 50 works of art (painting, drawing and sculpture) and combine them with my best 50 photographs.
            <br /><br />
            Jorge will design the book, and I will write the text, and together we will publish in 2022 a work that I hope you like as much as we already do.
            <br /><br />
            The idea is to inspire you to do the same: self-publishing is a way to bring out our most sincere and most profound thoughts and share them with the world.
            <br /><br />
            Here I will tell you about our creative process and update you on our progress...
            <br /><br /><br /><br />
            </p>

        </div> 
    </div>
    )
}

export default Book;