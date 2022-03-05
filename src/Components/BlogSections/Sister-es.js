import React from "react";
import Sisterimg from '../../Resources/Icons/twins.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
// import postimg from '../../Resources/Pics/sister2.jpg';

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

            {/* <img src={postimg} alt="rocy" id="rocy-img" className="profile-pic" /> */}

            <i>Marzo</i><br /><br />

                - Una pregunta para tu hermana (es la que tengo para todas las mamás): ¿cómo combinar de manera armónica los proyectos personales y laborales con la maternidad :)?”
                <br /><br />
                <i>- Creo que cada quien puede encontrar la mejor solución posible de acuerdo a sus propias circunstancias.
                <br /><br />
                Me refiero a que es más fácil poder tener tiempo para tus proyectos personales o laborales si tienes a otras personas que pueden apoyarte con el cuidado de tus hijos, como tu pareja o familiares, o si puedes dejarlos en actividades vespertinas o guarderías, o si tienes jefes comprensivos que entienden tu nuevo rol de mamá.
                <br /><br />
                Pero si no tuvieras ninguna de estas ventajas, dado que la etapa más complicada es cuando los hijos son pequeños, diría que la opción es postergar un poco el proyecto personal o laboral en lo que los hijos son un poco más grandes.
                <br /><br />
                Creo que dedicar tiempo a tus proyectos personales o laborales no implica necesariamente falta de atención para tus hijos, pero sí hay que estar al pendiente para hacer ajustes en caso de que les llegara a afectar, porque cada hijo es diferente.
                <br /><br />
                Y siempre tener un espacio para dedicarles tiempo de calidad y hacerles sentir lo importantes que son en tu vida.</i>
                <br /><br /><br />

            ------------------------<br /><br />
            <i>Posts anteriores</i><br /><br />

                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-sisters-advice/jan22/es"><h2>Enero</h2></Link>
                </div>
                <div id="post-link">
                    <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-sisters-advice/feb22/es"><h2>Febrero</h2></Link>
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