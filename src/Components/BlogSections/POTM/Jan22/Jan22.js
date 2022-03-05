import React from "react";
import bankkyimg from '../../../../Resources/Pics/Bankky.jpeg';
import GoTop from "../../../GoTop";
import Youtube from "../../../../Resources/youtube.png";
import Instagram from "../../../../Resources/instagram.png";
import Facebook from "../../../../Resources/facebook.png";
import BankkyLogo from "../../../../Resources/BankkyLogo.png";
import { Link } from "react-router-dom";
import Nav from "../../../../Nav";

function Jan22() {
    return (
        <div>
            <Nav />
            <div className="text-container">
            <img src={bankkyimg} alt="bankky" id="bankky-img" className="profile-pic" />
            
            <h1>Bankky</h1><br />

            <p class="content-text">
                    
                    Bankky is one of my dearest friends, here in Ithaca, NY.<br /><br />
                    I met her a few years ago and she quickly amazed me with her positive attitude towards life and tremendous creativity.<br /><br />
                    Here are 10 questions so you can get to know her:<br /><br /><br /><br />

                    <b><i>1. How would you describe yourself?</i></b><br /><br />
                    My name is Bankky I am a daughter, sister, a wife, and a mother to four amazing children. I was born and raised in Thailand, I'm married to a Japanese husband and I now live here in Ithaca NY.<br /><br /><br />

                    <b><i>2. What do you want out of life?</i></b><br /><br />
                    I want to learn about myself. I want to discover what I can do and what I like, find out what makes me happy, as well as try new things. I want to enjoy the life I have created with my family and to see my kids grow, choose their own paths and to support them. I want to help people by sharing what I know. I hope that it can inspire them.<br /><br /><br />

                    <b><i>3. Why do you do the things you do?</i></b><br /><br />
                    It makes me happy and I believe that life is supposed to feel good.<br /><br /><br />

                    <b><i>4. How do you understand the “What If I Say Yes” process?</i></b><br /><br />
                    My “What If I Say Yes” process is to first make the decision of whatever I want to do. Then, I just go and do it. The last and most important step is to ignore the naysayers. <br /><br /><br />

                    <b><i>5. What would you say was your earliest “What If I Say Yes” moment?</i></b><br /><br />
                    My earliest “What If I Say Yes” moment was when I decided to have a child at the age of 18 against my parents will. This was the first time I made an important decision for myself, by myself.<br /><br /><br />

                    <b><i>6. Describe your most recent “What If I Say Yes” moment.</i></b><br /><br />
                    My most recent “What If I Say Yes Moment” was deciding that I wanted to learn how to play a ukulele. It's been six months since then, and I have made a lot of progress. Along the way, I have also found that playing ukulele is one of the many things that makes me happy. <br /><br /><br />

                    <b><i>7.  What things have you created in your life after having said “What If I Say Yes”? Make a list.</i></b><br /><br />
                    A family, countless sewing projects, crochet, knitting, cardboard furniture and toys, woodworking, play felt food, a youtube channel, making printable patterns, the photoshop skill, 3D designing, learning how to cook, and the latest project crochet a chunky cardigan for my daughter.<br /><br /><br />

                    <b><i>8. How have others reacted to your “What If I Say Yes” process?</i></b><br /><br />
                    I don't really pay attention to what people think about what I do.<br /><br /><br />

                    <b><i>9. What will be your next “What If I Say Yes” moment?</i></b><br /><br />
                    For now, I don't know, but when the time does come, I'll know exactly what to do.<br /><br /><br />

                    <b><i>10. What have you learned from the “What If I Say Yes” process?</i></b><br /><br />
                    I've learned that life is yours, so do whatever makes you happy. <br /><br /><br />

                    You can find Bankky at:<br /><br />  

                    </p>      

            <div className="profile-container">
                <a href="https://www.youtube.com/c/HappyBankkyCraftyMom" target="_blank" rel="noreferrer"><img src={Youtube} alt="ytlogo" /></a>
                <b>HappyBankkycraftymom</b>
            </div>

            <div className="profile-container">
                <a href="https://www.instagram.com/happybankkycraftymom/?hl=en" target="_blank" rel="noreferrer"><img src={Instagram} alt="instalogo" /></a>
                <b>@Happybankkycraftymom</b>
            </div>

            <div className="profile-container">
                <a href="https://www.facebook.com/HappyBankkyCraftymom/" target="_blank" rel="noreferrer"><img src={Facebook} alt="fblogo" /></a>
                <b>@Happybankkycraftymom</b>
            </div>

            <div className="profile-container">
                <a href="https://www.happybankkycraftymom.com/" target="_blank" rel="noreferrer"><img src={BankkyLogo} alt="website" id="bankkylogo"/></a>
                <b>Happybankkycraftymom.com</b>
            </div>


            <Link className="link" style={{ color: 'black', fontSize: '100%', marginTop: '1.5em'}} to="/blog/person-of-the-month/"><h2>Back to Person of the Month</h2></Link>

            <GoTop />
        </div> 
    </div>
    )
}

export default Jan22;