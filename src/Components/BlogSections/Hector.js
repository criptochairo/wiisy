import React from "react";
import first from '../../Resources/Texts/hector_page-0001.jpg'; 
import second from '../../Resources/Texts/hector_page-0002.jpg'; 
import third from '../../Resources/Texts/hector_page-0003.jpg'; 
import fourth from '../../Resources/Texts/hector_page-0004.jpg'; 

function Hector() {
    return (
        
        <div className="hector">
            <h1>What if I Say Yes?</h1>
            <p>Here, you can read a bit about the original philosophy behind What if I Say Yes, directly from the author, our dearest Héctor Cárdenas.</p>

            <img src={first} alt="first page" />
            <img src={second} alt="second page" />
            <img src={third} alt="third page" />
            <img src={fourth} alt="fourth page" />

        </div>
    )
}

export default Hector;