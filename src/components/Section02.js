import React from "react";
import '../styles/Section02.css';
import frontend from '../imagenes/front-development.png';
import backend from '../imagenes/back-end.png';
import coding from '../imagenes/coding.png';

function Section02() {
    return (
        <div className="contenedor-ini">


            <div className="contenedor-flotantes">
                <div className="flotante">
                    <div className="c-i">
                        <img className="imgplus"
                            src={frontend}
                        />
                    </div>
                    <span className="texto">Front End</span>
                </div>
                <div className="flotante">
                    <div className="c-i">
                        <img className="imgplus"
                            src={backend}
                        />
                    </div>
                    <span className="texto">Back End</span>
                </div>
                <div className="flotante">
                    <div className="c-i">
                        <img className="imgplus"
                            src={coding}
                        />
                    </div>
                    <span className="texto">Full Stack</span>
                </div>
            </div>
            <div className="cont-text">
                <h1 className="texto-2">¿ESTÁS LISTO PARA INICIAR HOY UN BOOTCAMP?</h1>
                <div className="contenedor-boton">
                <button className="boton">
                        Registrate aquí
                </button>
                </div>
            </div>
        </div>
    );
}

export default Section02;