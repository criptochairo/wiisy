import React from "react";
import Pic1 from '../../../../Resources/Pics/MOTW/feb22/1.jpeg';
import Pic2 from '../../../../Resources/Pics/MOTW/feb22/2.jpeg';
import GoTop from "../../../GoTop";
import { Link } from "react-router-dom";
import NavEs from "../../../../Nav-es";

function Jan22Es() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            
            <h1>Febrero del 2022</h1><br /> 

            <p class="content-text">

            ¡Este mes Maya y yo celebramos nuestros cumpleaños con estilo!
            <br /><br />
            ¡Ordenamos dos deliciosos pasteles de zanahoria, uno para cada quien, con decoraciones sorpresa únicas de Vasantha, una excelente repostera de Ithaca, Nueva York!
            <br /><br />
            Maya y yo elegimos nuestras respectivas celebraciones de cumpleaños como <i>El Momento del Mes</i> por dos razones:
            <br /><br />
            1) nos encanta el pastel de zanahoria, y 2) el pastel de zanahoria era el pastel favorito de mi Mami, Virginia Morales (la abuela paterna de Maya). Compartíamos el mismo cumpleaños (1 de febrero). Ella falleció, a principios de mayo de 2015, a la corta edad de 66 años. 
            <br /><br />
            ¡La extrañamos mucho!
            <br /><br />
            Entonces, en honor a mi Mami, el pastel de zanahoria será de ahora en adelante nuestro tradicional pastel de cumpleaños.
            <br /><br />
            ¡Disfruten también de nuestras fotos!
            <br /><br />

            <div className="motw-pics">
                <img src={Pic1} alt="#" />
                <img src={Pic2} alt="#" />
            </div>

            </p>

            <Link className="link" style={{ color: 'black', fontSize: '100%', marginTop: '1.5em'}} to="/blog/moment-of-the-month/es/"><h2>Regresar</h2></Link>

            <GoTop />
        </div> 
    </div>
    )
}

export default Jan22Es;