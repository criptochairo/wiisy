import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import aboutmeimg from '../Resources/Pics/210.JPEG';
import blogimg from '../Resources/Pics/136.JPG';
import communityimg from '../Resources/Pics/95.JPEG';
import contactimg from '../Resources/Pics/54.JPEG';

function Home() {
    return (
        <div id="content-page">

            <div className="section-container" id="header">
                <h1>What if I Say Yes?</h1>
                <h4>by Lucía Cárdenas</h4>
            </div>
            
            
            <div className="section-container">
                <Link to="/about"><img src={aboutmeimg} alt="about-me" /></Link>
                <Link style={{ color: 'black'}} to="/about"><h2>About Me</h2></Link>
                <p>Hello! My name is Lucía Cárdenas and I invite you to join me in exploring the different ways in which your life can change for the better if you decide to say <b>YES!</b> to the many opportunities that life presents to you.</p>
            </div>

            <div className="section-container">
                <Link to="/blog"><img src={blogimg} alt="blog" /></Link>
                <Link style={{ color: 'black'}} to="/blog"><h2>Blog</h2></Link>
                <p>Here you will see how I have said <b>yes!</b> to life. Come in, read and get inspired to start doing your thing.</p>
            </div>

            <div className="section-container">
                <Link to="/community-board"><img src={communityimg} alt="community-board" /></Link>
                <Link style={{ color: 'black'}} to="/blog"><h2>Community Board</h2></Link>
                <p>This is a space to learn from others and for others to learn from you. Come in and share your experiences!</p>
            </div>

            <div className="section-container">
                <Link to="/contact-me"><img src={contactimg} alt="contact-me" /></Link>
                <Link style={{ color: 'black'}} to="/blog"><h2>Contact Me</h2></Link>
                <p>I'm all ears. Send me your doubts, questions and / or comments.</p>
            </div>

            
        </div>
    )
}

export default Home;