import React from "react";
import bankkyimg from '../../../Resources/Pics/Bankky.jpeg';
import GoTop from "../../GoTop";
import Youtube from "../../../Resources/youtube.png";
import Instagram from "../../../Resources/instagram.png";
import Facebook from "../../../Resources/facebook.png";
import BankkyLogo from "../../../Resources/BankkyLogo.png";
import { Link } from "react-router-dom";
import NavEs from "../../../Nav-es";

function Jan22Es() {
    return (
        <div>
            <NavEs />
            <div className="text-container">
            <img src={bankkyimg} alt="bankky" id="bankky-img" className="profile-pic" />

            <h1>Bankky</h1> <br />

            <p class="content-text">
                    
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

                    <b><i>6. Describe tu momento más reciente de "¿qué pasa si digo que sí?".</i></b>
                    <br /><br />
                    Mi más reciente momento de "¿qué pasa si digo que sí?" fue decidir que quería aprender a tocar el ukelele. Han pasado seis meses desde entonces, y he progresado mucho. En el camino, también he descubierto que tocar el ukelele es una de las muchas cosas que me hacen feliz. 
                    <br /><br /><br />

                    <b><i>7. ¿Qué cosas has creado en tu vida después de haber dicho "¿y si digo que sí?” Haz una lista.</i></b>
                    <br /><br />
                    Una familia, innumerables proyectos de costura, ganchillo, tejido, muebles y juguetes de cartón, carpintería, comida de juego hecha de fieltro, un canal de YouTube, hacer patrones imprimibles, la habilidad de usar Photoshop, diseño 3D, aprender a cocinar y el último proyecto de ganchillo: un cárdigan grueso para mi hija.
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

                    </p>    


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


            <Link className="link" style={{ color: 'black', fontSize: '100%', marginTop: '1.5em'}} to="/blog/person-of-the-month/es"><h2>Regresar</h2></Link>

            <GoTop />
        </div> 
    </div>
    )
}

export default Jan22Es;