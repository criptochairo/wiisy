import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../../../Nav";
import GoTop from "../../../GoTop";
import One from '../../../../Resources/Pics/11Jan22/compressjpeg/1-min.jpg';
import Two from '../../../../Resources/Pics/11Jan22/compressjpeg/2-min.jpg';
import Three from '../../../../Resources/Pics/11Jan22/compressjpeg/203-min.jpg';
import Four from '../../../../Resources/Pics/11Jan22/compressjpeg/278-min.jpg';
import Five from '../../../../Resources/Pics/11Jan22/compressjpeg/292-min.jpg';
import Six from '../../../../Resources/Pics/11Jan22/compressjpeg/378-min.jpg';
import Seven from '../../../../Resources/Pics/11Jan22/compressjpeg/448-min.jpg';
import Eight from '../../../../Resources/Pics/11Jan22/compressjpeg/484-min.jpg';
import Nine from '../../../../Resources/Pics/11Jan22/compressjpeg/549-min.JPEG';
import Ten from '../../../../Resources/Pics/11Jan22/compressjpeg/558-min.jpg';

function Post1Es() {
    return (
        <div>
            <Nav />

            <div className="text-container"> 
            
            <h1>11 de enero del 2022</h1> <br />

                <p class="content-text">

                Tomé más de 500 fotografías en mis caminatas diarias. Con el tiempo fui mejorando mi ojo y mi atención al detalle. Empecé a ver con ojos de fotógrafa y entonces veía algo lindo en la naturaleza y enseguida lo enmarcaba en mi mente, aún antes de sacar el teléfono para usar la cámara. 
                <br/><br/>
                Mis fotos del principio son interesantes, pero algo les faltaba. 
                <br/><br/>
                Las últimas me gustan mucho y como parece ser que a las personas con las que las compartí también les gustaron, decidimos que algún día las vamos a ofrecer aquí, en este sitio web, en una tiendita.  
                <br/><br/>
                
                La idea es que a quien le gusten mis fotografías las pueda comprar y bajar como archivo digital para luego usarlas como quiera.  
                <br/><br/>
                
                Aquí les iré contando cómo vamos progresando con respecto a este proyecto.
                <br/><br/>

                Mientras tanto, he aquí una muestra de lo que fotografié del 13 de diciembre del 2020 al 13 de diciembre del 2021:
                <br/><br/><br/>
            
                </p>

                <div className="post-img-container">
                    <img src={One} alt="postimg" />
                    <img src={Two} alt="postimg" />
                    <img src={Three} alt="postimg" />
                    <img src={Four} alt="postimg" />
                    <img src={Five} alt="postimg" />
                    <img src={Six} alt="postimg" />
                    <img src={Seven} alt="postimg" />
                    <img src={Eight} alt="postimg" />
                    <img src={Nine} alt="postimg" />
                    <img src={Ten} alt="postimg" />
                </div>
                
                <Link className="link" style={{ color: 'black', fontSize: '100%', marginTop: '1em' }} to="/blog/my-photography-es"><h2>Regresar</h2></Link>

            <GoTop />
        </div> 
    </div>
    )
}

export default Post1Es;