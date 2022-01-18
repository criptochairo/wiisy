import React from "react";
import Social from '../../Resources/Icons/camera.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";

function PhotographyEs() {
    return (
        <div className="aboutme-page">
            <NavEs />

            <div className="text-container"> 
            <img src={Social} alt="wiisy-logo" id="blog-img" />
            <h1>Mis Fotografías</h1> <br />

                <p class="content-text">

                En diciembre del 2020 comencé a <b>tomar fotografías </b>durante mis caminatas diarias al aire libre. Era mi forma de procesar mi estrés después de varios meses de estar en casa por la pandemia. Tomar fotos me hizo <b>observar</b> más de cerca lo que la naturaleza tiene que ofrecer. <br /><br />
                
                Empecé a <b>ver</b> las cosas de una manera nueva. Me tomé mi tiempo para respirar, procesar y disfrutar la vida mirando y estando con la naturaleza.<br /><br />

                Y luego, un día pensé: ¿qué pasaría si empiezo a compartir mis fotos con las personas que amo? Y no solo eso. ¿Qué tal que creara una experiencia divertida para esas personas? Es así como decidí compartir mis fotos agregándoles una frase descriptiva y creativa.<br /><br />

                En este blog podrán ver lo que he estado viendo desde entonces y podrán leer los subtítulos que se me ocurrieron.<br /><br />

                Espero inspirarlos a comenzar a ver su mundo desde un lente diferente… uno que sea más atento, paciente, amoroso y comprensivo.<br /><br />

                Si lo hacen, les puedo asegurar que comenzarán a sentirse mejor sobre sus propias vidas.<br /><br /><br /><br />


                
                <Link className="link" style={{ color: 'black' }} to="/blog-es"><h2>De Vuelta a Blog</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-podcast-es"><h2>Siguiente Sección</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/person-of-the-month-es"><h2>Sección Anterior</h2></Link>
                               
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default PhotographyEs;