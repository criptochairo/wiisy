import React from "react";
import Momimg from '../../Resources/Icons/grandma.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import postimg from '../../Resources/Pics/mom1.jpg';
import postimg2 from '../../Resources/Pics/mom2.jpg';

function Mom() {
    return (
        <div>
            <Nav />
            <div className="text-container"> 
            <img src={Momimg} alt="wiisy-logo" id="blog-img" /> 
            <h1><i>Abuelita</i> Recommends</h1> <br />

            <p class="content-text">
            My mom (her grandkids call her <i>Abuelita</i>) dedicated much of her life to raising three sons and two daughters and then helping raise her three granddaughters and three grandsons. The time she had left for herself was minimal, yet she always found a way to keep her curiosity for learning.
            <br /><br />
            Now that we no longer live at her home and she enjoys her time more freely, she has a vast collection of recommendations on books, movies, documentaries, places to visit, restaurants, etc.
            <br /><br />
            I want to share her recommendations with you in this section that draws on all the institutional memory she has built in her more than 70 trips around the sun.
            <br /><br />
            Hopefully, this space will encourage you to turn to the people you have spent a lifetime with and engage in conversations about what they have learned during their lives.
            <br /><br />

            ------------------------<br /><br />

                <img src={postimg2} alt="hotel" id="lalo-img" className="profile-pic" />

            
                <i>February<br /><br /></i>

                I visited Hotel Geneve, located at Calle de Londres 130, in Zona Rosa in Mexico City.
                <br /><br />
                It was founded in 1907 by a Canadian of Irish descent, and an American woman, and decorated in classic European style.
                <br /><br />
                This place introduced innovations in the hotel industry in many ways. The hotel has a collection of old telephones in the bar. 
                <br /><br />
                In one of them, you can hear a recording of Porfirio Díaz thanking Tomás Alva Edison for a telephone that he had gifted Porfirio.
                <br /><br />
                We got a tour of the hotel, and it is like entering a time tunnel since it is also a museum. It has display cases that have objects from past times, as well as photographs of distinguished people who have stayed there at different times.
                <br /><br />
                The hotel's original owners had it until 1970, and in 1991 it became part of Carlos Slim's Grupo Carson Hotel chain.
                <br /><br />
                It is worth visiting. For more information about the history of the hotel: <a href="https://www.hotelgeneve.com.mx/en/" target="_blank" rel="noreferrer ">Click here</a>
                <br /><br />
                <img src={postimg} alt="hotel" id="lalo-img" className="profile-pic" />
                <br />

                ------------------------<br /><br />
                <i>Previous Posts</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-moms-recommendations/jan22"><h2>January</h2></Link>
                </div>

                <br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog"><h2>Back to Blog</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/moment-of-the-month"><h2>Next Section</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice"><h2>Previous Section</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Mom;