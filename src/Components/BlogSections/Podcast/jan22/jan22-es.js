import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import NavEs from "../../../../Nav-es";
import postimg from '../../../../Resources/Pics/lucy2.jpg';


function Post() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            <h1>Enero del 2022</h1><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

                <p class="content-text">

                El año pasado básicamente lo dediqué a decidir qué quiero grabar en mi primera temporada. Luego, mi hermano Luis (el director de sonido de mi pódcast) y yo nos tardamos varios meses tratando de ver dónde en mi departamento podía grabar para que se oyera mejor… hasta que descubrimos que tenía el micrófono al revés. Es de dos caras y yo grababa desde la cara incorrecta, jaja. Pero bueno, así se aprende. 
                <br /><br />
                Tomen en cuenta que él está tratando de ayudarme desde México mientras yo estoy aquí en los Estados Unidos. Entonces, todo el entrenamiento ha sido a la distancia a través de WhatsApp o Zoom o lo que se pueda.
                <br /><br />
                Una vez que ya mi hermano me había dado luz verde para grabar, resulta que quise reescribir mi primer episodio porque me hice super fanática del pódcast <a href="https://themoth.org/podcast" target="_blank" rel="noreferrer">The Moth</a> y como me encanta cómo cuenta la gente sus historias, yo quiero contar la mía así.
                <br /><br />
                Busqué la metodología que usan y en esas ando. Escribiendo y reescribiendo hasta que me quede algo que me guste mucho. Cuando llegue a ese momento, grabaré mi primer episodio.
                <br /><br />
                Los mantendré al tanto… pero ya falta menos.
                <br /><br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-podcast/es"><h2>Regresar</h2></Link>
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default Post;