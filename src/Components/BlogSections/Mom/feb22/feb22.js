import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import Nav from "../../../../Nav";
import postimg from '../../../../Resources/Pics/mom1.jpg';
import postimg2 from '../../../../Resources/Pics/mom2.jpg';

function Post() {
    return (
        <div className="aboutme-page">
            <Nav />
            <div className="text-container"> 

            <img src={postimg2} alt="hotel" id="lalo-img" className="profile-pic" />

            <p class="content-text">
            <i>February</i><br /><br />
            
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

            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations"><h2>Back</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Post;