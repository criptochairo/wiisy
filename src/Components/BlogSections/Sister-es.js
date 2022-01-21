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
            <br /><br />

            ------------------------<br /><br />

            <i>Enero del 2022</i><br /><br />

                Hola hermanita: 
                <br /><br />
                Ya llegó la hora de la verdad. Te voy a hacer una pregunta para el blog y tú me vas a dar un consejo, ¿sale?
                <br /><br />
                <b>¿Cuál es la mejor manera de empezar el año nuevo?</b>
                <br /><br />
                <i>Jajaja, ya me dio pánico escénico. Pero ahí te va:</i>
                <br /><br />
                <i>Yo diría que la mejor manera de empezar el año es anotando lo que quieres lograr y tenerlo a la vista lo más posible. También ayuda poner en tu fondo de pantalla del celular que ves todo el tiempo, alguna imagen que te motive a lograr lo que quieres proponerte. Por ejemplo, Luis [nuestro hermano mayor] puso la imagen de Nims Purja (el que subió los 14 picos de más de 8 mil metros). Yo me fui por algo más cotorro y puse a Saitama (el del ánime “One Punch Man”) que decide entrenar sin descanso durante 3 años para volverse más fuerte. Al final, son ejemplos de una fuerza de voluntad digna de ser copiada. Y también me gusta pensar que hay que empezar el año con optimismo y tratar de encontrar el lado positivo de las cosas. Así como Mike Wasowski en Monsters, cuando decía “¡¡¡salí en la portada!!!” y solo se le veían los pies, jajaja. En resumen: empezar el año con objetivos y buena actitud.</i>
                <br /><br /><br />

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