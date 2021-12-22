import React from "react";
import Momimg from '../../Resources/Icons/grandma.png';

function Mom() {
    return (
        <div className="aboutme-page">

            <div className="text-container"> 
            <img src={Momimg} alt="wiisy-logo" id="blog-img" /> 
            <h1><i>Abuelita</i> Recommends</h1> <br />

            <p class="content-text">
            My mom (her grandkids call her <i>Abuelita</i>) dedicated much of her life to raising three sons and two daughters, and then helping raise her three granddaughters and three grandsons. The time she had left for herself was minimal, yet she always found a way to keep her curiosity for learning.
            <br /><br />
            Now that we no longer live at her home and she enjoys her time more freely, she has a vast collection of recommendations on books, movies, documentaries, places, etc.
            <br /><br />
            I want to share her recommendations with you in this space to honor all that institutional memory that she has built in her more than 70 trips around the sun.
            <br /><br />
            Hopefully, this space will encourage you to turn to the people you have spent a lifetime with and engage in conversations about what they have learned during their lives.
            <br /><br /><br /><br />
            </p>

        </div> 
    </div>
    )
}

export default Mom;