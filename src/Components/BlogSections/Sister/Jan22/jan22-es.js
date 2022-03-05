import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import NavEs from "../../../../Nav-es";
import rocyimg from '../../../../Resources/Pics/rocy-cascada.jpeg';

function Post() {
    return (
        <div className="aboutme-page">
            <NavEs />
            <div className="text-container"> 

            <img src={rocyimg} alt="rocy" id="rocy-img" className="profile-pic" />

            <p class="content-text">
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
                <br /><br /><br /><br />

            <Link className="link" style={{ color: 'black' }} to="/blog/my-sisters-advice/es"><h2>Regresar</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Post;