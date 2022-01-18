import React from "react";
import Sisterimg from '../../Resources/Icons/twins.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";

function SisterEs() {
    return (
        <div className="aboutme-page">
            <NavEs />

            <div className="text-container"> 
            <img src={Sisterimg} alt="wiisy-logo" id="blog-img" /> 
            <h1>Consejos de mi hermana</h1> <br />

            <p class="content-text">
            La mujer más importante en mi vida, después de mi mamá, es mi hermana Rocío.
            <br /><br />
            Es más grande que yo y por tanto le ha tocado abrir brecha para que cuando me toque pasar por ahí, la vida me sea menos difícil.
            <br /><br />
            Ella me cuida a la distancia, me quiere incondicionalmente y me ha enseñado a vivir la vida de manera más liviana.
            <br /><br />
            Cuando he tenido momentos difíciles es a ella a quien consulto.
            <br /><br />
            Y así como en inglés existe la sección tan famosa de <b><i>Dear Abby</i></b> (<a href="https://en.wikipedia.org/wiki/Dear_Abby" target="_blank" rel="noreferrer" >Dear Abby - Wikipedia</a>), en este sitio quiero crear una sección parecida, pero con mi hermana siendo la que da consejos y orienta a las y los lectores, así como me ha aconsejado y orientado a mí.
            <br /><br />
            Este espacio pretende ser un lugar divertido para escuchar, aprender y considerar una perspectiva nueva.
            <br /><br />
            Rocío y yo esperamos que lo disfruten.
            <br /><br /><br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog-es"><h2>De Vuelta a Blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations-es"><h2>Siguiente Sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-daughters-projects-es"><h2>Sección Anterior</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default SisterEs;