import React from "react";
import first from '../../Resources/Texts/hector_page-0001.jpg'; 
import second from '../../Resources/Texts/hector_page-0002.jpg'; 
import third from '../../Resources/Texts/hector_page-0003.jpg'; 
import fourth from '../../Resources/Texts/hector_page-0004.jpg'; 
import logo from '../../Resources/logo-final.jpeg';
import hector from '../../Resources/Pics/hector.jpg';
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";

function HectorEs() {
    return (
        <div className="text-container">
            <NavEs />
            <img src={logo} alt="wiisy-logo" id="header-img"/>
            <h1>What If I Say Yes?</h1>
            <p className="content-text">El 5 de noviembre del 2005 mi hermano, Héctor Cárdenas, le dedicó a una amiga una de sus pinturas. Abajo leerán el texto que leyó esa noche. Sus palabras me inspiraron, años después, a crear este sitio web en su honor:</p>
            
            <div className="hector">

            <img src={first} alt="first page" />
            <img src={second} alt="second page" />
            <img src={third} alt="third page" />
            <img src={fourth} alt="fourth page" />
            <img src={hector} alt="hector" />

            </div>

            <GoTop />
        </div>

        
    )
}

export default HectorEs;