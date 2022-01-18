import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import aboutmeimg from '../Resources/Pics/210.JPEG';
import blogimg from '../Resources/Pics/503.jpg';
import communityimg from '../Resources/Pics/544.JPEG';
import contactimg from '../Resources/Pics/181.JPEG';
import logo from '../Resources/logo-final.jpeg';
import GoTop from "./GoTop";
import Nav from '../Nav';
import Mexico from '../Resources/Icons/mexico.png';

function Home() {
    return (
        <div id="content-page">
            <Nav />
            <div className="title-container" id="header">
                <h1>What If I Say Yes?</h1>
                <h4>by Lucía Cárdenas</h4>
                <Link style={{ color: 'black' }} to="/es"><img src={Mexico} alt="mexico-flag" id="flag"/></Link>
            </div>

            
            <div className="section-container">
                <Link to="/hector"><img src={logo} alt="wiisy" /></Link>
                <Link style={{ color: 'black' }} to="/hector"><h2>What If I Say Yes?</h2></Link>
                <p className="container-text">Read my brother's original text, which gave me the idea to create this website.</p>
            </div>
            
            <div className="section-container">
                <Link to="/about"><img src={aboutmeimg} alt="about-me" /></Link>
                <Link style={{ color: 'black' }} to="/about"><h2>About Me</h2></Link>
                <p className="container-text">Hello! My name is Lucía Cárdenas. Click <Link style={{ color: 'black' }} to="/about">here</Link> to learn why I decided to create this website.</p>
            </div>

            <div className="section-container">
                <Link to="/blog"><img src={blogimg} alt="blog" /></Link>
                <Link style={{ color: 'black' }} to="/blog"><h2>Blog</h2></Link>
                <p className="container-text">Here you will see how I have said <b>yes!</b> to life. Come in, read and get inspired to start doing your thing.</p>
            </div>
            
            <div className="section-container">
                <Link to="/community-board"><img src={communityimg} alt="community-board" /></Link>
                <Link style={{ color: 'black' }} to="/blog"><h2>Community Board</h2></Link>
                <p className="container-text">This is a space to learn from others and for others to learn from you. Come in and share your experiences!</p>
            </div>

            <div className="section-container">
                <Link to="/contact-me"><img src={contactimg} alt="contact-me" /></Link>
                <Link style={{ color: 'black' }} to="/contact-me"><h2>Contact Me</h2></Link>
                <p className="container-text">I'm all ears. Would you send me your questions and comments?</p>
            </div>

            <GoTop />

            <div className="footer">
            <h3>Subscribe to receive my weekly email newsletter. It will inspire you to try new things by allowing yourself to say YES! Coming soon...</h3>
            <small>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></small><br />
            <small>Website by <a href="https://github.com/criptochairo" title="GithubProfile">Criptochairo</a></small>
            </div>
            
        </div>
    )
}

export default Home;