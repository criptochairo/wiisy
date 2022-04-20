import React from "react";
import Microphone from '../../Resources/Icons/microphone.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
import postimg from '../../Resources/Pics/Podcast/Apr22/apr1.jpg';
import postimg2 from '../../Resources/Pics/Podcast/Apr22/apr2.jpg';
import postimg3 from '../../Resources/Pics/Podcast/Apr22/apr3.jpg';

function PodcastEs() {
    return (
        <div className="aboutme-page">\
        <NavEs />
            <div className="text-container">
            <img src={Microphone} alt="wiisy-logo" id="blog-img" /> 
            <h1>Mi pódcast</h1><br />

                <p class="content-text">

                Un día, reflexionando en voz alta con mi esposo y mi hija sobre el sentido de mi vida, y contestando a sus preguntas, llegué a la conclusión de que quería intentar algo nuevo que me daba mucho nervio pero que a la vez me emocionaba enormemente: crear mi propio pódcast.
                <br /><br />
                Gracias a la pandemia había empezado a escuchar muchos pódcasts y me había enamorado de esta forma tan íntima de comunicación.
                <br /><br />
                Ahora la pregunta era... ¿y de qué hago mi pódcast?, ¿qué tengo que ofrecerle al mundo?
                <br /><br />
                Pues resulta que desde hace muchos años yo regalo palabras, a mi familia, a mis amigas y amigos queridos, a gente a la que quiero y admiro. Pero esos escritos no los he publicado, no los he compartido con nadie más que con las personas a las que van dedicados.
                <br /><br />
                Entonces pensé "¿y si lo hago sobre regalos y palabras?"
                <br /><br />
                Así nació el título, la idea y mi pódcast: <i>De regalos y palabras.</i>
                <br /><br />
                El logo me lo diseñó mi hermano gemelo, Jorge. Mi hermano mayor, Luis, es el director de sonido. Mi cuñada, Ana Laura, me ayudó a entrenar mi voz. Y mi hija, Maya, grabó la presentación del pódcast.
                <br /><br />
                Mi lengua materna es el español y por eso lo grabo en español. Todavía no me aviento a decir ¿y si digo que sí a grabarlo en inglés? porque eso me da todavía mucho miedo (mi pronunciación no es perfecta y no vaya a ser que acabe diciendo algo que suene a otra cosa, ja, ja). Pero en el espíritu de este sitio web, algún día estaré anunciando que dije que <u><b>¡sí!</b></u> y presentaré mi pódcast en inglés.
                <br /><br />
                Mientras tanto, aquí les contaré de lo que hablo en mis distintos episodios, con toda la intención de inspirarlos a hacer lo mismo: aprender a regalar sus propias palabras… y ¿quién sabe? A lo mejor también a crear un día su propio pódcast.
                <br /><br />

                ------------------------<br /><br />
                {/* COMIENZA POST */}

                <img src={postimg} alt="wiisy-logo" className="profile-pic" />

                <i>Abril del 2022</i>
                <br /><br />

                El 12 de abril del 2022 publiqué el <b>Episodio #2: Palabras que prometen.</b>
                <br /><br />
                Les hablo de mi relación con Carlos y de cómo se fue desarrollando hasta llegar a la propuesta de matrimonio y la planeación de la boda. Todo esto con la idea de darles un poco de contexto antes de leerles lo que le escribí a mi Carlos como mis votos de matrimonio.
                <br /><br />

                <img src={postimg2} alt="wiisy-logo" className="profile-pic" />
                <img src={postimg3} alt="wiisy-logo" className="profile-pic" />
                <br /><br />

                <ul>
                    <li><a href="https://anchor.fm/lucia-cardenas/episodes/Episodio-2---Palabras-que-prometen-e1h3qg7" target="_blank" rel="noreferrer">Anchor</a></li><br />
                    <li><a href="https://open.spotify.com/episode/6Ag9C9FouiQh4zHR5diRTg" target="_blank" rel="noreferrer">Spotify</a></li><br />
                    <li><a href="https://podcasts.apple.com/mx/podcast/episodio-2-palabras-que-prometen/id1608798314?i=1000557413115" target="_blank" rel="noreferrer">Apple Podcasts</a></li><br />
                    <li><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80MWRmNzY3Yy9wb2RjYXN0L3Jzcw/episode/YWNmYzkzOTQtOTgyOC00M2U0LWE0NzYtOTcxMWE5ZDFjMjMy?sa=X&ved=0CAUQkfYCahcKEwjIpb70q6H3AhUAAAAAHQAAAAAQAQ" target="_blank" rel="noreferrer">Google Podcasts</a></li>
                </ul>

                <br /><br />

                {/* TERMINA POST */}
                ------------------------<br /><br />
                
                <i>Posts Anteriores</i><br /><br />

                    <div id="post-link">
                        <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-podcast/jan22/es"><h2>Enero</h2></Link>
                    </div>
                    <div id="post-link">
                        <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-podcast/feb22/es"><h2>Febrero</h2></Link>
                    </div>
                    <div id="post-link">
                        <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-podcast/mar22/es"><h2>Marzo</h2></Link>
                    </div>

                <br /><br />


                <Link className="link" style={{ color: 'black' }} to="/blog/es"><h2>Regresar al blog</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-book/es"><h2>Siguiente sección</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-photography/es"><h2>Sección anterior</h2></Link>
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default PodcastEs;