import React from "react";
import Momimg from '../../Resources/Icons/grandma.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
import postimg from '../../Resources/Pics/mom1.jpg';
import postimg2 from '../../Resources/Pics/mom2.jpg';

function MomEs() {
    return (
        <div className="aboutme-page">
            <NavEs />

            <div className="text-container"> 
            <img src={Momimg} alt="wiisy-logo" id="blog-img" /> 
            <h1>Abuelita recomienda</h1> <br />

            <p class="content-text">
            Mi mamá (sus nietos le dicen “Abuelita”) dedicó gran parte de su vida a criar a 3 hijos y 2 hijas, y luego a ayudar en la crianza de sus 3 nietas y 3 nietos. El tiempo que le quedaba para sí misma era mínimo y aun así siempre encontró la manera de mantener su curiosidad por aprender.
            <br /><br />
            Ahora que ya no estamos en casa y que puede disfrutar de su tiempo de manera más libre tiene una colección de recomendaciones enorme sobre libros, películas, documentales, lugares, etc.
            <br /><br />
            En este espacio quiero compartir sus recomendaciones con ustedes, como una manera de honrar toda esa memoria institucional que tiene en sus más de 70 vueltas alrededor del sol.
            <br /><br />
            Ojalá este espacio los anime a voltear la mirada a la gente con la que han compartido toda una vida y entablar conversaciones sobre las cosas que han aprendido en el curso de sus vidas.
            <br /><br />
            
            ------------------------<br /><br />

            <img src={postimg2} alt="hotel" id="lalo-img" className="profile-pic" />

            
                <i>Febrero<br /><br /></i>

                Conocí el Hotel Geneve, que está en la calle de Londres 130, de la zona Rosa de la CDMX.
                <br /><br />
                Fue fundado en 1907 por un canadiense, de origen irlandés, y una americana y decorado al estilo clásico europeo.
                <br /><br />
                Fue innovador en muchos aspectos en el ramo hotelero y tiene en el bar una colección de teléfonos antiguos. 
                <br /><br />
                En uno de ellos se puede escuchar una grabación de Porfirio Díaz dándole las gracias a Tomás Alva Edison por un teléfono que éste le había regalado.
                <br /><br />
                Nos dieron un recorrido por el hotel y es como entrar en el túnel del tiempo, ya que también es museo, pues cuenta con vitrinas que tienen objetos de épocas pasadas, así como fotografías de personajes distinguidos que se han alojado ahí en diferentes tiempos.
                <br /><br />
                Los dueños originales del hotel lo poseyeron hasta 1970, y en 1991 pasó a formar parte de la cadena hotelera del Grupo Carson de Carlos Slim.
                <br /><br />
                Vale la pena conocerlo. Para mayor información sobre la historia del hotel: <a href="https://www.hotelgeneve.com.mx/es/" target="_blank" rel="noreferrer ">Hagan click aquí</a>
                <br /><br />
                <img src={postimg} alt="hotel" id="lalo-img" className="profile-pic" />
                <br />

                ------------------------<br /><br />
                <i>Previous Posts</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-moms-recommendations/11-jan-22/es"><h2>Enero</h2></Link>
                </div>

                <br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog/es"><h2>Regresar al blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/moment-of-the-month/es"><h2>Siguiente sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice/es"><h2>Sección anterior</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default MomEs;