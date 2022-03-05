import React from "react";
import Pic1 from '../../../../Resources/Pics/MOTW/pic1.jpeg';
import Pic2 from '../../../../Resources/Pics/MOTW/pic2.jpeg';
import GoTop from "../../../GoTop";
import { Link } from "react-router-dom";
import NavEs from "../../../../Nav-es";

function Jan22Es() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            
            <h1>Diciembre de 2021</h1><br /> 

            <p class="content-text">

            Como muestran las fotos, ¡Maya y yo finalmente exploramos oficialmente nuestros respectivos instrumentos musicales! ¿Qué significa esto? Bueno, ella tomó mi guitarra y yo tomé su violín y ambos tocamos la "Oda a la Alegría" de Beethoven (Sinfonía No. 9 en Re menor, Op. 125) por separado con la ayuda del otro.
            <br /><br />
            Serví como su primer profesor de guitarra y ella fue mi primera profesora de violín. ¡Qué momento! Maya estuvo increíble, tocando, no solo esta pieza sino otras, con tanta fluidez. Y me dijo que yo también aprendía rápido con el violín. Entonces, para nuestro primer momento del mes, ¡compartimos nuestra musicalidad! 
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