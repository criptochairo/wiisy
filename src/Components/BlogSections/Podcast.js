import React from "react";
import Microphone from '../../Resources/Icons/microphone.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import Nav from "../../Nav";
import postimg from '../../Resources/Pics/Podcast/Apr22/apr1.jpg';
import postimg2 from '../../Resources/Pics/Podcast/Apr22/apr2.jpg';
import postimg3 from '../../Resources/Pics/Podcast/Apr22/apr3.jpg';


function Podcast() {
    return (
        <div className="aboutme-page">
            <Nav />
            <div className="text-container">
            <img src={Microphone} alt="wiisy-logo" id="blog-img" /> 
            <h1>My Podcast</h1><br />

                <p class="content-text">

                One day, reflecting with my husband and daughter about the meaning of my life and answering their questions, I concluded that I wanted to try something new that made me very nervous but at the same time excited; that is, to create my podcast. 
                <br /><br />
                Thanks to the pandemic, I had started listening to many podcasts and had fallen in love with this personal form of communication.
                <br /><br />
                Now the question was... And what do I make my podcast about? What do I have to offer to the world?
                <br /><br />
                It turns out that, for many years, I have been gifting words to my family, dear friends, and others I love and admire. Yet I have not published these writings; I have not shared them with anyone other than the people to whom they are dedicated.
                <br /><br />
                So, I thought, "what if I do it about gifts and words?"
                <br /><br />
                Thus, my podcast's title was born: <i>De regalos y palabras</i> (Of Gifts and Words).
                <br /><br />
                The logo was designed for me by my twin brother Jorge. My oldest brother Luis is the sound director. My sister-in-law Ana Laura helped me train my voice. And my daughter Maya recorded the podcast presentation.
                <br /><br />
                My mother tongue is Spanish, so I record it in Spanish. I still haven't gotten myself into saying <i>what if I say yes to recording it in English?</i> That still scares me because my pronunciation isn't perfect, and I'm afraid I will end up saying something that sounds like something else, ha-ha. But in the spirit of this website, I will say <b><i>yes!</i></b> to presenting my podcast in English one day.
                <br /><br />
                In the meantime, I will write here about what I talk about in my various episodes to inspire you to do the same: learn to give away your own words, and who knows, maybe also create your podcast someday!
                <br /><br />
                
                ------------------------<br /><br />
                {/* SECCIÓN DEL POST */}

                    <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

                    <i>April</i>
                    <br /><br />

                    On April 19, 2022 I published <b>Episode #2: Words That Promise</b>. 
                    <br /><br />
                    In this episode, I tell you how and when I met my Carlos, how our relationship evolved, and finally, how we got to our two weddings, the civil and the one we created and held at a restaurant called Rosa Mexicano in New York City.
                    <br /><br />
                    I talk about all these details to give you some context before you hear me reading the marriage vows I wrote to my now-husband.
                    <br /><br />

                    <img src={postimg2} alt="wiisy-logo" className="profile-pic" /><br />
                    <img src={postimg3} alt="wiisy-logo" className="profile-pic" /><br />

                    <ul>
                        <li><a href="https://anchor.fm/lucia-cardenas/episodes/Episode-2---Words-That-Promise-e1hcv8n" target="_blank" rel="noreferrer">Anchor</a></li><br />
                        <li><a href="https://open.spotify.com/episode/3Nl22ZtQh4mle1BRXIPzMB" target="_blank" rel="noreferrer">Spotify</a></li><br />
                        <li><a href="https://podcasts.apple.com/mx/podcast/episode-2-words-that-promise/id1608798314?i=1000558069844" target="_blank" rel="noreferrer">Apple Podcasts</a></li><br />
                        <li><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80MWRmNzY3Yy9wb2RjYXN0L3Jzcw?sa=X&ved=0CAMQ4aUDahcKEwjIpb70q6H3AhUAAAAAHQAAAAAQCg" target="_blank" rel="noreferrer">Google Podcasts</a></li>
                    </ul>   

                    <br /><br />

                {/* TERMINA POST */}
                ------------------------<br /><br />
                <i>Previous Posts</i><br /><br />

                    <div id="post-link">
                        <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-podcast/jan22"><h2>January</h2></Link>
                    </div>
                    <div id="post-link">
                        <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-podcast/feb22"><h2>February</h2></Link>
                    </div>
                    <div id="post-link">
                        <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-podcast/mar22"><h2>March</h2></Link>
                    </div>

                <br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog"><h2>Back to Blog</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-book"><h2>Next Section</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-photography"><h2>Previous Section</h2></Link>
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default Podcast;