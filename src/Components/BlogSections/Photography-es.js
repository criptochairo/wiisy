import React from "react";
import Social from '../../Resources/Icons/camera.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
import One from '../../Resources/Pics/Photography/jan.jpg';
import Two from '../../Resources/Pics/Photography/feb.jpg';
import Three from '../../Resources/Pics/Photography/mar.jpg';
import Four from '../../Resources/Pics/Photography/apr.jpg';


function PhotographyEs() {
    return (
        <div className="aboutme-page">
            <NavEs />

            <div className="text-container"> 
            <img src={Social} alt="wiisy-logo" id="blog-img" />
            <h1>Mis fotografías</h1> <br />

                <p class="content-text">

                En diciembre del 2020 comencé a <b>tomar fotografías </b>durante mis caminatas diarias al aire libre. Era mi forma de procesar mi estrés después de varios meses de estar en casa por la pandemia. Tomar fotos me hizo <b>observar</b> más de cerca lo que la naturaleza tiene que ofrecer. <br /><br />
                
                Empecé a <b>ver</b> las cosas de una manera nueva. Me tomé mi tiempo para respirar, procesar y disfrutar la vida mirando y estando con la naturaleza.<br /><br />

                Y luego, un día pensé: ¿qué pasaría si empiezo a compartir mis fotos con las personas que amo? Y no solo eso. ¿Qué tal que creara una experiencia divertida para esas personas? Es así como decidí compartir mis fotos agregándoles una frase descriptiva y creativa.<br /><br />

                En este blog podrán ver lo que he estado viendo desde entonces y podrán leer los subtítulos que se me ocurrieron.<br /><br />

                Espero inspirarlos a comenzar a ver su mundo desde un lente diferente… uno que sea más atento, paciente, amoroso y comprensivo.<br /><br />

                Si lo hacen, les puedo asegurar que comenzarán a sentirse mejor sobre sus propias vidas.<br /><br />

                ------------------------<br /><br />

                <i>11 de enero del 2022</i> <br /><br />


                Tomé más de 500 fotografías en mis caminatas diarias. Con el tiempo fui mejorando mi ojo y mi atención al detalle. Empecé a ver con ojos de fotógrafa y entonces veía algo lindo en la naturaleza y enseguida lo enmarcaba en mi mente, aún antes de sacar el teléfono para usar la cámara. 
                <br/><br/>
                Mis fotos del principio son interesantes, pero algo les faltaba. 
                <br/><br/>
                Las últimas me gustan mucho y como parece ser que a las personas con las que las compartí también les gustaron, decidimos que algún día las vamos a ofrecer aquí, en este sitio web, en una tiendita.  
                <br/><br/>
                
                La idea es que a quien le gusten mis fotografías las pueda comprar y bajar como archivo digital para luego usarlas como quiera.  
                <br/><br/>
                
                Aquí les iré contando cómo vamos progresando con respecto a este proyecto.
                <br/><br/>

                Mientras tanto, he aquí una muestra de lo que fotografié del 13 de diciembre del 2020 al 13 de diciembre del 2021:
                <br/><br/><br/>
            

                <div className="post-img-container">
                    <i><b>Enero</b></i><br />
                    <img src={One} alt="postimg" /><br />
                    <i>“Una piedra en el camino me enseñó que…”</i><br />
                    ------------------------<br /><br />
                    <i><b>Febrero</b></i><br />
                    <img src={Two} alt="postimg" /><br />
                    <i>“Alfombra otoñal…”</i><br />
                    ------------------------<br /><br />
                    <i><b>Marzo</b></i><br />
                    <img src={Three} alt="postimg" /><br />
                    <i>“La naturaleza también sonríe…”</i><br />
                    ------------------------<br /><br />
                    <i><b>Abril</b></i><br />
                    <img src={Four} alt="postimg" /><br />
                    <i>“Dos estaciones al mismo tiempo”</i><br />
                </div>

                <br/>
                
                
                <Link className="link" style={{ color: 'black' }} to="/blog/es"><h2>Regresar al blog</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/my-podcast/es"><h2>Siguiente sección</h2></Link>
                <Link className="link" style={{ color: 'black' }} to="/blog/person-of-the-month/es"><h2>Sección anterior</h2></Link>
                               
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default PhotographyEs;