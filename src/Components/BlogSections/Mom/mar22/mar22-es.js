import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import NavEs from "../../../../Nav-es";
import postimg from '../../../../Resources/Pics/Mom/Feb22/feb22-1.JPG';
import postimg2 from '../../../../Resources/Pics/Mom/Feb22/feb22-2.JPG';
import postimg3 from '../../../../Resources/Pics/Mom/Feb22/feb22-3.JPG';
import postimg4 from '../../../../Resources/Pics/Mom/Feb22/feb22-4.JPG';
import postimg5 from '../../../../Resources/Pics/Mom/Feb22/feb22-5.jpg';

function Post() {
    return (
        <div className="aboutme-page">
            <NavEs />
            <div className="text-container"> 

            <h1><i>Marzo<br /><br /></i></h1>

            <img src={postimg} alt="hotel" id="lalo-img" className="profile-pic" />

            <p class="content-text">

                <b>¿Cómo se te ocurrió querer recorrer toda le periferia de la isla de Manhattan, y por qué?</b>
                <br /><br />
                Me gusta caminar y conocer los lugares caminando y Manhattan, en muchas partes a la orilla de los ríos, tiene andadores por donde puedes pasear.
                <br /><br />
                Me gusta estar cerca de los ríos y ver pasar las embarcaciones de distinto tipo y me atrae recorrer los caminos y descubrir a dónde conducen. 
                <br /><br />
                <br /><b>¿Cuánto tiempo te llevó hacer todo el recorrido?</b>
                <br /><br />
                No lo recuerdo con exactitud, pero mi esposo cree que fue como en 4 jornadas y en varios viajes. Reiniciábamos el recorrido en el lugar en el que lo habíamos dejado la última vez.
                <br /><br />
                <br /><b>¿Qué te pareció la experiencia?</b>
                <br /><br />
                Lo disfruté mucho y vimos paisajes muy bellos. Por ejemplo, la zona hacia el norte de Battery Park, por el lado del río Hudson, es muy bonita.
                <br /><br />
                <br /><b>¿Con quién hiciste el recorrido?</b>
                <br /><br />
                Con mi esposo. Y aquí, me gustaría contarles una anécdota:
                <br /><br />
                Habíamos llegado a la zona más al norte de la isla y veníamos de regreso por el lado del río Hudson, en una parte alta donde no hay andador a la orilla del río.
                <br /><br />
                En cuanto pudimos, bajamos y me di cuenta de que habíamos dejado atrás el Washington Bridge y yo quería llegar hasta estar parada abajo del puente.
                <br /><br />
                Mi esposo, ya cansado, decidió esperarme sentado en una banca en lo que yo hacía el recorrido que quería.
                <br /><br />
                Al llegar bajo el puente vi algo que me gustó mucho encontrar: un pequeño faro rojo.
                <br /><br />
                Me acerqué y descubrí que tenía una inscripción. Según recuerdo, la inscripción estaba en el faro, en una placa con los datos de la escritora que había hecho un cuento para niños con el faro como personaje principal.
                <br /><br />
                Este faro había sido construido en 1880 y estaba en Sandy Hook, NJ. En 1921 lo mudaron al Fort Washington Park convirtiéndose en el <i>Jeffrey's Hook Lighthouse</i>, el único faro en la isla de Manhattan.
                <br /><br />
                En 1951, cuando se tenían intenciones de destruirlo porque ya no estaba en funcionamiento, se le cedió a la ciudad de Nueva York gracias a las protestas del público, a páginas editoriales en The New York Times y tengo entendido que también gracias al cuento.
                <br /><br />
                Pero al no estar en uso, se fue deteriorando. Treinta años después pasó a formar parte del Registro Nacional de Lugares Históricos.
                <br /><br />
                Se restauró en 1980 y en 2002, en el 60 aniversario de la publicación del cuento, el faro (que había estado apagado desde 1947) fue provisto de nuevos lentes que lo hicieron brillar en las aguas del río Hudson una vez más.
                <br /><br />
                El cuento se llama <u>The Little Red Lighthouse and the Great Gray Bridge</u>. La autora es Hildegarde H. Swift y las ilustraciones son de Lynd Ward.
                <br /><br />
                Este libro fue publicado por primera vez en 1942.
                <br /><br />
                Vale la pena visitar el faro y también les recomiendo comprar el libro.
                <br /><br />
                <img src={postimg2} alt="hotel" id="lalo-img" className="profile-pic" />
                <img src={postimg3} alt="hotel" id="lalo-img" className="profile-pic" />
                <img src={postimg4} alt="hotel" id="lalo-img" className="profile-pic" />
                <img src={postimg5} alt="hotel" id="lalo-img" className="profile-pic" />
                <br />

            <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations/es"><h2>Regresar</h2></Link>
            </p>

            <GoTop />

        </div> 
    </div>
    )
}

export default Post;