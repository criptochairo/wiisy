import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import Nav from "../../../../Nav";
import postimg from '../../../../Resources/Pics/Mom/Feb22/feb22-1.JPG';
import postimg2 from '../../../../Resources/Pics/Mom/Feb22/feb22-2.JPG';
import postimg3 from '../../../../Resources/Pics/Mom/Feb22/feb22-3.JPG';
import postimg4 from '../../../../Resources/Pics/Mom/Feb22/feb22-4.JPG';
import postimg5 from '../../../../Resources/Pics/Mom/Feb22/feb22-5.jpg';

function Post() {
    return (
        <div className="aboutme-page">
            <Nav />
            <div className="text-container"> 
            <h1><i>March<br /><br /></i></h1>

            <img src={postimg} alt="hotel" id="lalo-img" className="profile-pic" />

            <p class="content-text">
            

                <b>How did you come up with wanting to walk the entire periphery of the island of Manhattan, and why?</b>
                <br /><br />
                I like to walk and get to know places on foot. And Manhattan, in many places along the rivers, has walkways you can enjoy.
                <br /><br />
                I like to be near the rivers and see the different types of boats go by. And I enjoy walking the different paths and discovering where they lead. 
                <br /><br />
                <br /><b>How long did it take you to walk the whole way?</b>
                <br /><br />
                I don't remember exactly, but my husband thinks it was like 4 days total, over several trips we made to NYC. Each time we restarted the route where we had left it the last time we were in the city.
                <br /><br />
                <br /><b>What do you think about the experience?</b>
                <br /><br />
                I enjoyed it a lot and we saw very beautiful landscapes. For example, the area north of Battery Park, on the side of the Hudson River, is very nice.
                <br /><br />
                <br /><b>Who did you walk with?</b>
                <br /><br />
                I walked with my husband. And here, I would like to tell you an anecdote:
                <br /><br />
                We had reached the northernmost part of the island and were coming back on the side of the Hudson River, in an upper part where there is no walkway on the bank of the river.
                <br /><br />
                As soon as we could, we went down, and I realized that we had left the Washington Bridge behind. I wanted to get to where I could be standing under the bridge.
                <br /><br />
                My husband, already tired, decided to wait for me sited on a bench, while I walked the route I wanted.
                <br /><br />
                When I was under the bridge, I saw something that I was very pleased to find: a small red lighthouse.
                <br /><br />
                I walked over and found that it had an inscription. As I recall, the inscription was on the lighthouse, on a plaque with the data of the writer who had written a children's book with the lighthouse as the main character.
                <br /><br />
                This lighthouse had been built in 1880 and was in Sandy Hook, NJ. And in 1921 it was moved to Fort Washington Park. It became the Jeffrey's Hook Lighthouse, and it was the only lighthouse on Manhattan Island.
                <br /><br />
                In 1951, when it was supposed to be demolished because it was no longer in operation, it was ceded to the city of New York instead, thanks to public outcry, editorial pages in The New York Times, and I also understand thanks to the publication of the children's book.
                <br /><br />
                With time and given that it had not been in operation for a while, it deteriorated. Thirty years later it became part of the National Register of Historic Places.
                <br /><br />
                The lighthouse was restored in 1980 and in 2002, on the 60th anniversary of the book's publication, the lighthouse (which had been out since 1947) was given new lenses that made it shine on the waters of the Hudson River once again.
                <br /><br />
                The book is titled: <u>The Little Red Lighthouse and the Great Gray Bridge</u>. The author is Hildegarde H. Swift and the illustrations are by Lynd Ward.
                <br /><br />
                This book was first published in 1942.
                <br /><br />
                It is worth visiting the lighthouse and I also recommend you buy the book.
                <br /><br />
                <img src={postimg2} alt="hotel" id="lalo-img" className="profile-pic" />
                <img src={postimg3} alt="hotel" id="lalo-img" className="profile-pic" />
                <img src={postimg4} alt="hotel" id="lalo-img" className="profile-pic" />
                <img src={postimg5} alt="hotel" id="lalo-img" className="profile-pic" />
                <br />

            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations"><h2>Back</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Post;