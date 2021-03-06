import React from "react";
import '../App.css';
import Nav from "../Nav";
import contactimg from '../Resources/Pics/181.JPEG';

function Contact() {
    return (
        <div className="text-container">
            <Nav />
            <img src={contactimg} alt="wiisy-logo" id="header-img" />
            <h1>Contact Me</h1><br />

            <p className="content-text" id="contact">
            <strong>
                E-mail:</strong><br /><br />
            
           <a href="mailto: whatifisayyes2021@gmail.com" id="mail">whatifisayyes2021@gmail.com<br /><br /></a> 

            I will gladly read your comments, questions, doubts, and more, and I will answer you as soon as I can.<br /><br />

            I'm all ears!

            </p>

            
        </div>
    )
}

export default Contact;