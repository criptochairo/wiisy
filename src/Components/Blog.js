import React from "react";
import { Link } from "react-router-dom";
import './Blog.css';
import blogimg from '../Resources/Pics/503.jpg';
import Social from '../Resources/Icons/camera.png';
import Microphone from '../Resources/Icons/microphone.png';
import Book from '../Resources/Icons/book.png';
import Mom from '../Resources/Icons/motherhood.png';
import Sister from '../Resources/Icons/twins.png';
import Grandma from '../Resources/Icons/grandma.png';
import Week from '../Resources/Icons/week.png';
import Prize from '../Resources/Icons/wreath.png';

function Blog() {
    return (
        <div className="text-container"> 
            <img src={blogimg} alt="wiisy" id="header-img" />
            <h1>Blog</h1>
            
            <p className="content-text">After going through the <b><i>What if I Say Yes</i></b> process, I write about my most recent projects.<br /><br />
            This is my space to inspire you to create your own space after saying <u><b><i>yes</i></b></u> to your creative soul.<br /><br /><br /></p>
            <ul className="blog-list">
                <div className="blog-container">
                    <Link to="/blog/my-photography"><img src={Social} alt="my-photography" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-photography"><h2>My Photography</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-podcast"><img src={Microphone} alt="my-podcast" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-podcast"><h2>My Podcast</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-book"><img src={Book} alt="my-book" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-book"><h2>Book with my Twin Brother</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-daughters-projects"><img src={Mom} alt="my-projects" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-daughters-projects"><h2>Projects with my Daughter</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-sisters-advice"><img src={Sister} alt="my-sister" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-sisters-advice"><h2>Sister's Advice</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/my-moms-recommendations"><img src={Grandma} alt="my-mom" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/my-moms-recommendations"><h2><i>Abuelita</i> Recommends</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/moment-of-the-week"><img src={Week} alt="momtw" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/moment-of-the-week"><h2>Moment of the Week</h2></Link>
                </div>

                <div className="blog-container">
                    <Link to="/blog/person-of-the-month"><img src={Prize} alt="person-of-the-month" /></Link>
                    <Link style={{ color: 'black'}} to="/blog/person-of-the-month"><h2>The <i>What If I Say Yes</i> Person of the Month</h2></Link>
                </div>
                
            </ul>
            
        </div>
    )
}

export default Blog;