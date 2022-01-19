import React from "react";
import { Link } from "react-router-dom";
import NavEs from "../../../../Nav-es";

function Post() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            <h1>Enero del 2022</h1><br />

                <p class="content-text">

                [Reporte de mi hermano gemelo]
                <br /><br />
                Al principio de cada libro, una vez que se define el tamaño y el número de páginas, así como el layout general, lo primero es recibir o recopilar todo el material, después revisar las fotos y ponerlas al tamaño y resolución que se usarán en el libro. Voy en esa parte.
                <br /><br /><br />

                <Link className="link" style={{ color: 'black' }} to="/blog/my-book-es"><h2>Regresar</h2></Link>
            
            </p>

        </div> 
    </div>
    )
}

export default Post;