import React from "react";
import '../App.css';
import NavEs from "../Nav-es";
import contactimg from '../Resources/Pics/181.JPEG';

function ContactEs() {
    return (
        <div className="text-container">
            <NavEs />
            <img src={contactimg} alt="wiisy-logo" id="header-img" />
            <h1>Contáctenme</h1><br />

            <p className="content-text" id="contact">
            <strong>
                E-mail:</strong><br /><br />
            
           <a href="mailto: whatifisayyes2021@gmail.com" id="mail">whatifisayyes2021@gmail.com<br /><br /></a> 

            Con gusto leeré sus comentarios, preguntas, dudas y demás y les contestaré lo más pronto que pueda.
            <br /><br />

            ¡Soy toda oídos!

            </p>

            
        </div>
    )
}

export default ContactEs;