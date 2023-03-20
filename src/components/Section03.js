import React from "react";
import '../styles/Section03.css';
import jovenes from '../imagenes/jovenes.png';





function Section03() {
    return(
        <div className="contenedor-section03">
            <div className="contenedor-imagen">
                <img
                    className="imagen"
                    src={jovenes}
                />
            </div>
            <div className="contenedor-textobootcamp">
                <h1 className="titulobootcamp">
                bootcamps gratuitos para tu formacion
                </h1>
                <h3 className="subtitulobootcamp">
                Descubre cómo especializarte en desarrollo sin importar tu nivel de conocimientos y experiencia. ¡Únete a nuestro programa y lleva tus habilidades al siguiente nivel!
                </h3>
                <div className="btnuno">
                    <button className="botonuno">
                        Registrate ya
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Section03;