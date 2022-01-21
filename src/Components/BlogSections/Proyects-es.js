import React from "react";
import Mom from '../../Resources/Icons/motherhood.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";

function ProyectsEs() {
    return (
        <div className="aboutme-page">
            <NavEs />

            <div className="text-container"> 
            <img src={Mom} alt="wiisy-logo" id="blog-img" /> 
            <h1>Proyectos con mi hija</h1> <br />

            <p class="content-text">
            Uno de los rayitos de luz de la pandemia fue que encontré nuevas maneras de acercarme a mi hija Maya. Estar juntas durante varios meses fue todo un reto... hasta que un día descubrimos que podíamos crear cosas juntas.
            <br /><br />
            En el verano del 2021, varios de sus primos/as se graduaron de secundaria y preparatoria y para celebrar a la distancia hicimos un video con un personaje muy importante en la vida de Maya: Cookies.
            <br /><br />
            Es una osita que mi hermano Héctor le regaló el día que nació. Llegó al hospital con una pulserita de plástico rosa que decía "¡es una niña!" y con una osita preciosa a la que Maya bautizó más tarde como <b>Cookies</b> (sí, así, en plural). 
            <br /><br />
            El video de Cookies tuvo tanto éxito que decidimos continuar haciendo y compartiendo más videos para celebrar el cumpleaños de alguien o para entretener a amigos pequeños.
            <br /><br />
            En este espacio compartiremos algunos de los videos que hemos creado juntas (Maya, Cookies y yo).
            <br /><br />
            Espero que los inspire a crear proyectos visuales y a ¡compartirlos con el mundo!
            <br /><br />



            <Link className="link" style={{ color: 'black' }} to="/blog-es"><h2>Regresar al blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice-es"><h2>Siguiente sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-book-es"><h2>Sección anterior</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default ProyectsEs;