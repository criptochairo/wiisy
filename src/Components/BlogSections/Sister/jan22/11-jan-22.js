import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import Nav from "../../../../Nav";
import rocyimg from '../../../../Resources/Pics/rocy-cascada.jpeg';

function Post() {
    return (
        <div className="aboutme-page">
            <Nav />
            <div className="text-container"> 

            <img src={rocyimg} alt="rocy" id="rocy-img" className="profile-pic" />

            <p class="content-text">
            <i>January 2022</i><br /><br />
            
            Hello dear sister, 
                <br /><br />
                The moment of truth has arrived. I am going to ask you a question for the blog and you're going to give me some advice, ready?
                <br /><br />
                <b>What is the best way to start the new year?</b>
                <br /><br />
                <i>Hahaha, I already got stage fright. But here I go:</i>
                <br /><br />
                <i>I would say that the best way to start the year is to write down what you want to achieve and have it in sight as much as possible. It also helps to put on the wallpaper of the cell phone that you see all the time, some image that motivates you to do what you want to achieve. For example, Luis [our older brother] put the image of Nims Purja (the one who climbed the 14 peaks of more than 8 thousand meters).  I went for something different and put Saitama (the one from the anime "One Punch Man") who decides to train non-stop for 3 years to become stronger. In the end, they are examples of willpower worthy of being copied. And I also like to think that you can start the year with optimism and try to find the positive side of things. Just like Mike Wasowski in Monsters, when he said "I'm on the cover of a magazine !!!" and only his feet were visible, ha-ha. In short: start the year with goals and a good attitude.</i>
                <br /><br /><br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice"><h2>Back</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Post;