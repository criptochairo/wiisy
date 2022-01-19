import React from "react";
import { Link } from "react-router-dom";
import GoTop from "../../../GoTop";
import NavEs from "../../../../Nav-es";

function Post() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            <h1>11 de enero del 2022</h1><br />

                <p class="content-text">

                Hola, ma:
                <br /><br />
                <b>¿Qué recomiendas para este primer mes del año?</b>
                <br /><br />
                <i>Hola hijita querida:
                <br /><br />
                Acabamos de ir a un restorán en la CDMX que está en la colonia Roma, en la calle de Zacatecas. Tu hermano Luis nos lo recomendó y se llama <a href="https://twitter.com/EatLalo" target="_blank" rel="noreferrer">“Lalo”</a>.
                <br /><br />
                La comida riquísima y la atención es excelente.
                <br /><br />
                Yo pedí un postre que le llaman pan francés pero que no tiene nada que ver con lo que comúnmente conocemos con ese nombre. ¡Estaba delicioso!
                <br /><br /><br /></i>

                <Link className="link" style={{ color: 'black' }} to="/blog/my-moms-recommendations-es"><h2>Regresar</h2></Link>
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default Post;