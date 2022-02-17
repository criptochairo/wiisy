import React from "react";
import bookimg from '../../Resources/Icons/book.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
import postimg from '../../Resources/Pics/Book/PortadaEsp.jpg';

function BookEs() {
    return (
        <div className="aboutme-page">
            <NavEs />

        <div className="text-container"> 
            <img src={bookimg} alt="wiisy-logo" id="blog-img" /> 
            <h1>Libro con mi hermano gemelo</h1> <br />

            <p className="content-text">
            
            Mi hermano gemelo y yo cumplimos 50 años este verano (2021) y para celebrar en grande se me ocurrió que podríamos crear un libro juntos y publicarlo a través de Amazon. Sin editoriales de por medio y sin depender de que alguien nos dijera si le gustaba nuestro proyecto o no.
            <br /><br />
            Consulté con mi hermano y me dijo que <i><b>¡sí!</b></i>
            <br /><br />
            Hace muchos años Jorge encontró en la pintura una manera de volverse a enamorar de la vida y de su ser, después de haber pasado por momentos muy dolorosos. Y desde entonces ha creado obras de arte que enamoran a quien las ve.
            <br /><br />
            Y por si fuera poco, hace unos años creó su propio sitio web para promover a artistas mexicanos (tienen que visitar <a href="https://www.pintoresmexicanos.com/" target="_blank" rel="noreferrer" >www.pintoresmexicanos.com</a> para que vean de qué les estoy hablando... ¡es una belleza!)
            <br /><br />
            Bueno, el caso es que nuestra idea es escoger sus mejores 50 obras de arte (pintura, dibujo y escultura) y combinarlas con mis mejores 50 fotografías.
            <br /><br />
            Jorge va a diseñar el libro y yo voy a escribir el texto y juntos publicaremos en el 2022 una obra que espero les guste tanto como a nosotros.
            <br /><br />
            La idea es inspirarlos a hacer lo mismo: autopublicar es una manera de sacar a la luz nuestros más sinceros y profundos pensamientos y compartirlos con el mundo sin tener que enfrentar barreras innecesarias de las casas editoriales
            <br /><br />
            En resumen, aquí les contaré sobre nuestro proceso creativo y los actualizaré sobre nuestro progreso.
            <br /><br />
            
            ------------------------<br /><br />

            <img src={postimg} alt="wiisy-logo" className="profile-pic" /><br />

            <i>Febrero, 2022</i>

            <br /><br /><br />
            Esta es la portada de nuestro próximo libro. ¿A poco no está preciosa? Tiene una de mis fotografías y una pintura de Jorge.
            <br /><br /><br />

            ------------------------<br /><br />

            <i>Posts Anteriores</i><br /><br />

            <div id="post-link">
                <Link className="link" style={{ color: 'black', textAlign: 'center' }} to="/blog/my-book/jan22/es"><h2>Enero</h2></Link>
            </div>

            <br /><br />


            <Link className="link" style={{ color: 'black' }} to="/blog/es"><h2>Regresar al blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-daughters-projects/es"><h2>Siguiente sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-podcast/es"><h2>Sección anterior</h2></Link>
            
            </p>

            <GoTop />
        </div> 
    </div>
    )
}

export default BookEs;