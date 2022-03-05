import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import NavEs from "../../../../Nav-es";
import postimg from '../../../../Resources/Pics/mom1.jpg';
import postimg2 from '../../../../Resources/Pics/mom2.jpg';

function Post() {
    return (
        <div className="aboutme-page">
            <NavEs />
            <div className="text-container"> 

            <img src={postimg2} alt="hotel" id="lalo-img" className="profile-pic" />

            <p class="content-text">
            <i>Febrero</i><br /><br />
            
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

            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations/es"><h2>Regresar</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Post;