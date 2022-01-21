import React from "react";
import Prize from '../../Resources/Icons/wreath.png';
import { Link } from "react-router-dom";
import GoTop from "../GoTop";
import NavEs from "../../Nav-es";
import bankkyimg from '../../Resources/Pics/Bankky.jpeg';
import Youtube from "../../Resources/youtube.png";
import Instagram from "../../Resources/instagram.png";
import Facebook from "../../Resources/facebook.png";
import BankkyLogo from "../../Resources/BankkyLogo.png";

function WIISYPersonEs() {
    return (
        <div className="aboutme-page">
            <NavEs />

            <div className="text-container"> 
            <img src={Prize} alt="wiisy-logo" id="blog-img" /> 

            <h1>La persona <i>¿Y si digo que sí?</i> del mes</h1> 
            <br />

            <p class="content-text">
            En esta sección quiero compartir con ustedes las historias de la gente que he conocido y que ejemplifica perfectamente la filosofía del <b>"¿y si digo que sí!"</b>
            <br /><br />
            Conocerán a personas que, en distintos momentos de sus vidas, se han atrevido a decir que <b>¡sí!</b> y han iniciado proyectos de lo más interesantes.
            <br /><br />
            Son la gente que me inspira a seguir adelante y que me recuerda que vale la pena vivir.
            <br /><br />
            Espero que este espacio los inspire a expresar lo mejor de sí mismos en las distintas áreas de su interés.
            <br /><br />
            ¡Buena suerte!
            <br /><br /><br /><br />

            ------------------------<br /><br />

            <img src={bankkyimg} alt="bankky" id="bankky-img" className="profile-pic" />

            <h1>Bankky</h1> <br />
                    
                Bankky es una de mis amigas más queridas acá en Ithaca, NY.
                <br /><br />
                La conocí hace algunos años y rápidamente me sorprendió su actitud positiva ante la vida y su tremenda creatividad.
                <br /><br />
                Aquí hay 10 preguntas para la que la conozcan:
                <br /><br /><br /><br />

                    <b><i>1. ¿Cómo te describirías a ti misma?</i></b>
                    <br /><br />
                    Mi nombre es Bankky. Soy hija, hermana, esposa y madre de cuatro hijos/as increíbles. Nací y crecí en Tailandia. Estoy casada con un japonés y ahora vivo en Ithaca, NY.
                    <br /><br /><br />

                    <b><i>2. ¿Qué quieres de la vida?</i></b>
                    <br /><br />
                    Quiero aprender sobre mí misma. Quiero descubrir lo que puedo hacer y lo que me gusta, descubrir qué me hace feliz, así como probar cosas nuevas. Quiero disfrutar de la vida que he creado con mi familia y ver crecer a mis hijos/as, verlos elegir sus propios caminos y apoyarlos. Quiero ayudar a la gente compartiendo lo que sé. Espero que pueda inspirarlos.
                    <br /><br /><br />

                    <b><i>3. ¿Por qué haces las cosas que haces?</i></b>
                    <br /><br />
                    Me hace feliz y creo que se supone que la vida debe sentirse bien.
                    <br /><br /><br />

                    <b><i>4. ¿Cómo entiendes el proceso de "¿qué pasa si digo que sí?”</i></b>
                    <br /><br />
                    Mi proceso de “¿qué pasa si digo que sí?" es tomar primero la decisión de lo que quiero hacer. Entonces, simplemente voy y lo hago. El último paso y el más importante es ignorar a los detractores. 
                    <br /><br /><br />

                    <b><i>5. ¿Cuál dirías que fue tu primer momento de "¿qué pasa si digo que sí?"</i></b>
                    <br /><br />
                    Mi primer momento de "¿qué pasa si digo que sí?" fue cuando decidí tener una hija a la edad de 18 años en contra de la voluntad de mis padres. Esta fue la primera vez que tomé una decisión importante para mí, por mí misma.
                    <br /><br /><br />

                    <b><i>6. Describe su momento más reciente de "¿qué pasa si digo que sí?".</i></b>
                    <br /><br />
                    Una familia, innumerables proyectos de costura, ganchillo, tejido, muebles y juguetes de cartón, carpintería, comida de juego hecha de fieltro, un canal de YouTube, hacer patrones imprimibles, la habilidad de usar Photoshop, diseño 3D, aprender a cocinar y el último proyecto de ganchillo: un cárdigan grueso para mi hija. 
                    <br /><br /><br />

                    <b><i>7. ¿Qué cosas has creado en tu vida después de haber dicho "¿y si digo que sí?” Haz una lista.</i></b>
                    <br /><br />
                    A family, countless sewing projects, crochet, knitting, cardboard furniture and toys, woodworking, play felt food, a youtube channel, making printable patterns, the photoshop skill, 3D designing, learning how to cook, and the latest project crochet a chunky cardigan for my daughter.
                    <br /><br /><br />

                    <b><i>8. ¿Cómo han reaccionado los demás a tu proceso de "¿y qué pasa si digo que sí?”</i></b>
                    <br /><br />
                    Realmente no presto atención a lo que la gente piensa sobre lo que hago.
                    <br /><br /><br />

                    <b><i>9. ¿Cuál será tu próximo momento de “¿y qué pasa si digo que sí?”</i></b>
                    <br /><br />
                    Por ahora, no lo sé, pero cuando llegue el momento, sabré exactamente qué hacer.
                    <br /><br /><br />

                    <b><i>10. ¿Qué has aprendido del proceso "¿y qué pasa si digo que sí"?</i></b>
                    <br /><br />
                    He aprendido que la vida es tuya, así que haz lo que sea que te haga feliz. 
                    <br /><br /><br />

                    Puedes encontrar a Bankky en:
                    <br /><br />        


            <div className="profile-container">
                <a href="https://www.youtube.com/c/HappyBankkyCraftyMom" target="_blank" rel="noreferrer"><img src={Youtube} alt="ytlogo" /></a>
                <b>HappyBankkycraftymom</b>
            </div>

            <div className="profile-container">
                <a href="https://www.instagram.com/happybankkycraftymom/?hl=en" target="_blank" rel="noreferrer"><img src={Instagram} alt="instalogo" /></a>
                <b>@Happybankkycraftymom</b>
            </div>

            <div className="profile-container">
                <a href="https://www.facebook.com/HappyBankkyCraftymom/" target="_blank" rel="noreferrer"><img src={Facebook} alt="fblogo" /></a>
                <b>@Happybankkycraftymom</b>
            </div>

            <div className="profile-container">
                <a href="https://www.happybankkycraftymom.com/" target="_blank" rel="noreferrer"><img src={BankkyLogo} alt="website" id="bankkylogo"/></a>
                <b>Happybankkycraftymom.com</b>
            </div>

            <br />

            <Link className="link" style={{ color: 'black' }} to="/blog-es"><h2>Regresar al blog</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/my-photography-es"><h2>Siguiente sección</h2></Link>
            <Link className="link" style={{ color: 'black' }} to="/blog/moment-of-the-week-es"><h2>Sección anterior</h2></Link>
            </p>

            

            <GoTop />

        </div> 
    </div>
    )
}

export default WIISYPersonEs;