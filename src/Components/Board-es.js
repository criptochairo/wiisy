import React from "react";
import '../App.css';
import NavEs from "../Nav-es";
import communityimg from '../Resources/Pics/544.JPEG';

function BoardEs() {
    return (
        <div className="text-container">
            <NavEs />
            <img src={communityimg} alt="wiisy-logo" id="header-img" />
            <h1>Pizarrón Comunitario</h1><br />

            <p className="content-text">
            En cuestiones de creación es muy importante tener un espacio personal, íntimo. Pero también es importante crear un espacio comunal, para compartir lo que pensamos, reflexionamos y sentimos y así darle un sentido más completo a nuestra existencia. 
            <br /><br />

            Después de hacer mis propias reflexiones, a mí me gusta mucho preguntarle a la gente que conozco qué opinan sobre tal o cual tema. Siento que siempre aprendo algo de alguien. Me abre a nuevas maneras de ver el mundo.
            <br /><br />

            Este espacio es para que compartan sus anécdotas relacionadas con sus propios procesos de <b><i>"¿y si digo que sí"</i></b>. Aquí pueden plantear sus dudas, contarnos de sus miedos y resistencias, pero también compartir las veces en las que ese <u><i>¡sí!</i></u> les ha cambiado la vida, aunque sea de maneras muy modestas.

            Dejo entonces este pizarrón para que escriban y compartan... <strong>(próximamente).</strong> 
            </p>
        </div>
    )
}

export default BoardEs;