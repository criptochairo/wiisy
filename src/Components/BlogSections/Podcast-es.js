import React from "react";
import Microphone from '../../Resources/Icons/microphone.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";

function PodcastEs() {
    return (
        <div className="aboutme-page">\
        <NavEs />
            <div className="text-container">
            <img src={Microphone} alt="wiisy-logo" id="blog-img" /> 
            <h1>Mi Podcast</h1><br />

                <p class="content-text">

                Un día, reflexionando en voz alta con mi esposo y mi hija sobre el sentido de mi vida, y contestando a sus preguntas, llegué a la conclusión de que quería intentar algo nuevo que me daba mucho nervio pero que a la vez me emocionaba enormemente: crear mi propio podcast.<br /><br />

                Gracias a la pandemia había empezado a escuchar muchos podcasts y me había enamorado de esta forma tan íntima de comunicación.<br /><br />

                Ahora la pregunta era... ¿y de qué hago mi podcast?, ¿qué tengo que ofrecerle al mundo?<br /><br />

                Pues resulta que desde hace muchos años yo regalo palabras, a mi familia, a mis amigas y amigos queridos, a gente a la que quiero y admiro. Pero esos escritos no los he publicado, no los he compartido con nadie más que con las personas a las que van dedicados.<br /><br />

                Entonces pensé "¿y si lo hago sobre regalos y palabras?"<br /><br />

                Así nació el título, la idea y mi pódcast: <i>De regalos y palabras.</i><br /><br />

                El logo me lo diseñó mi hermano gemelo, Jorge. Mi hermano mayor, Luis, es el director de sonido. Mi cuñada, Ana Laura, me ayudó a entrenar mi voz. Y mi hija, Maya, grabó la presentación del podcast.<br /><br />

                Mi lengua materna es el español y por eso lo grabo en español. Todavía no me aviento a decir ¿y si digo que sí a grabarlo en inglés? porque eso me da todavía mucho miedo (mi pronunciación no es perfecta y no vaya a ser que acabe diciendo algo que suene a otra cosa, ja, ja). Pero en el espíritu de este sitio web, algún día estaré anunciando que dije que <u><b>¡sí!</b></u> y presentaré mi pódcast en inglés.<br /><br />

                Mientras tanto, aquí les contaré de lo que hablo en mis distintos episodios, con toda la intención de inspirarlos a hacer lo mismo: aprender a regalar sus propias palabras… y ¿quién sabe? A lo mejor también a crear un día su propio podcast.<br /><br /><br /><br />


                <Link className="link" style={{ color: 'black', textAlign: 'left' }} to="/blog/my-podcast/11-jan-22-es"><h2>· 11 de enero 2022</h2></Link><br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog-es"><h2>De Vuelta a Blog</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-book-es"><h2>Siguiente Sección</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-photography-es"><h2>Sección Anterior</h2></Link>
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default PodcastEs;