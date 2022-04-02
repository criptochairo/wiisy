import React from "react";
import Sisterimg from '../../Resources/Icons/twins.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
import postimg from '../../Resources/Pics/Sister/apr22.jpg';

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

            <i>Abril</i><br /><br />

                Hermanita, va la pregunta de este mes:
                <br /><br />
                - ¿Qué características crees que deba de tener alguien que dirige un equipo de personas en el trabajo?
                <br /><br />
                <i>- Pues yo creo que depende del tipo de trabajo y de qué tantas personas haya en tu equipo, porque mientras más grande es el equipo a tu cargo, más difícil es poder conocer a profundidad a cada uno de los integrantes.
                <br /><br />
                Pero suponiendo que es un número manejable, pienso que estaría bien que la persona que dirige fuera empática con los miembros del equipo y que buscara la forma de conocerlos mejor para poder orientar las fortalezas de cada uno en el logro de los objetivos del equipo.
                <br /><br />
                Creo que es deseable que esa persona sea responsable y organizada, ya que me ha tocado ver casos de personas con mucho conocimiento pero que no logran que su equipo cumpla con las fechas de entrega.
                <br /><br />
                Y creo que también es deseable que sea alguien inteligente porque es muy desmotivador tener un jefe (o jefa) que no tenga idea de los temas que son responsabilidad del equipo.
                <br /><br />
                Eso creo yo, ¡pero se vale opinar diferente!</i>
                <br /><br /><br />

            ------------------------<br /><br />
            <i>Posts anteriores</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-sisters-advice/jan22/es"><h2>Enero</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-sisters-advice/feb22/es"><h2>Febrero</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-sisters-advice/mar22/es"><h2>Marzo</h2></Link>
                </div>

            <br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog/es"><h2>Regresar al blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations/es"><h2>Siguiente sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-daughters-projects/es"><h2>Sección anterior</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default SisterEs;