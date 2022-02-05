import React from "react";
import Sisterimg from '../../Resources/Icons/twins.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
import postimg from '../../Resources/Pics/sister2.jpg';

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
            <br /><br />

            ------------------------<br /><br />

            <img src={postimg} alt="rocy" id="rocy-img" className="profile-pic" />

            <i>Febrero</i><br /><br />

            <i>Este mes, mi hermana tiene <b>consejos para bailar:</b></i>
                <br /><br />
                ¡¡Diviértete!! 
                <br /><br />
                Siempre es padre ver a alguien bailando que se está divirtiendo, aunque parezca que no tenga estilo.
                <br /><br />
                De hecho, esto me recuerda mucho a mi hermano Héctor jaja. Se movía muy gracioso, pero se divertía y nos divertía a nosotros también.
                <br /><br />
                Y si te gusta algún tipo de baile en particular, ¡toma clases! La práctica siempre ayuda 😉.
                <br /><br /><br />

            ------------------------<br /><br />
            <i>Posts anteriores</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-sisters-advice/11-jan-22-es"><h2>Enero</h2></Link>
                </div>

            <br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog-es"><h2>Regresar al blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations-es"><h2>Siguiente sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-daughters-projects-es"><h2>Sección anterior</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default SisterEs;