import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import Nav from "../../../../Nav";

function Post() {
    return (
        <div>
            <Nav />
            <div className="text-container">
            <h1>January 11, 2022</h1><br />

                <p class="content-text">

                Last year I basically worked on deciding what I wanted to do during my first season. Then my brother Luis (the sound director of my podcast) and I spent several months trying to see where in my apartment I could record to make it sound better… until we discovered that I had the microphone in the wrong position. It's two-sided and I was recording from the wrong side, ha-ha. But hey, that's how you learn. 
                <br /><br />
                Keep in mind that he is trying to help me from Mexico while I am here in the United States. So, all the training has been at a distance through WhatsApp or Zoom or whatever we can use.
                <br /><br />
                Once my brother had given me the green light to start recording, it turns out that I wanted to rewrite my first episode because I became a super fan of <a href="https://themoth.org/podcast" target="_blank" rel="noreferrer">The Moth</a> podcast and since I love how people tell their stories, I wanted to tell mine just like they do.
                <br /><br />
                I looked for the methodology they use and am working on it. I have been writing and rewriting and won’t stop until I have something that I like a lot. When I get to that point, I will record my first episode.
                <br /><br />
                I'll keep you posted ... but I am getting there.
                <br /><br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-podcast"><h2>Back</h2></Link>
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default Post;