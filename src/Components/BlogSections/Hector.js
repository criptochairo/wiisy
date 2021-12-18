import React from "react";
import first from '../../Resources/Texts/hector_page-0001.jpg'; 
import second from '../../Resources/Texts/hector_page-0002.jpg'; 
import third from '../../Resources/Texts/hector_page-0003.jpg'; 
import fourth from '../../Resources/Texts/hector_page-0004.jpg'; 

function Hector() {
    return (
        <div className="text-container">
            <h1>What If I Say Yes?</h1>
            <p className="content-text">On November 5, 2005, my brother (Héctor Cárdenas) dedicated a painting to one of his friends. Below you will see the text he read that night. His words inspired me, years later, to create this website in his honor:</p>
            
            <div className="hector">

            <img src={first} alt="first page" />
            <img src={second} alt="second page" />
            <img src={third} alt="third page" />
            <img src={fourth} alt="fourth page" />

            </div>
        </div>

        
    )
}

export default Hector;