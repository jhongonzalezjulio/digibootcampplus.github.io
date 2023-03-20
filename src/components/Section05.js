import React from "react";
import '../styles/Section05.css';
import powerbi from '../imagenes/programming.png';
import web from '../imagenes/web-development.png';
import agil from '../imagenes/agil.png';
import azur from '../imagenes/azur.png';
import analitica from '../imagenes/analitica.png';
import cienciad from '../imagenes/ciencia-de-los-datos.png';
import pro from '../imagenes/codificacion.png';
import ai from '../imagenes/cerebro.png';
import front from '../imagenes/disenador-grafico.png';



function Section05() {
    return (

        <div className="contenedormain">
            <div className="detodo">
                <div className="gruop-bootcamp">
                    <h1 className="namebootcamp">
                        NUESTROS BOOTCAMPS
                    </h1>
                </div>
                <div className="contenedor-section05">
                    <div className="contenedortextobootcamp">
                        <div className="bootcamp">
                            <div className="bootcampimagen">
                                <img
                                    className="imagenboot"
                                    src={powerbi}
                                />
                                <span className="tituloboot">Microsoft Power BI</span>
                            </div>
                        </div>
                        <div className="bootcamp">
                            <div className="bootcampimagen">
                                <img
                                    className="imagenboot"
                                    src={agil}
                                />
                                <span className="tituloboot">Metodologias Agiles</span>
                            </div>
                        </div>
                        <div className="bootcamp">
                            <div className="bootcampimagen">
                                <img
                                    className="imagenboot"
                                    src={azur}
                                />
                                <span className="tituloboot">Ciberseguridad con azure</span>
                            </div>
                        </div>
                        <div className="bootcamp">
                            <div className="bootcampimagen">
                                <img
                                    className="imagenboot"
                                    src={web}
                                />
                                <span className="tituloboot">Ciberseguridad</span>
                            </div>
                        </div>
                        <div className="bootcamp">
                            <div className="bootcampimagen">
                                <img
                                    className="imagenboot"
                                    src={analitica}
                                />

                                <span className="tituloboot">Analitica de Datos</span>

                            </div>
                        </div>
                        <div className="bootcamp">
                            <div className="bootcampimagen">
                                <img
                                    className="imagenboot"
                                    src={cienciad}
                                />
                                <span className="tituloboot">Ciencia - Analitica De Datos</span>
                            </div>
                        </div>
                        <div className="bootcamp">
                            <div className="bootcampimagen">
                                <img
                                    className="imagenboot"
                                    src={pro}
                                />
                                <span className="tituloboot">Fundamentos De programación</span>
                            </div>
                        </div>
                        <div className="bootcamp">
                            <div className="bootcampimagen">
                                <img
                                    className="imagenboot"
                                    src={ai}
                                />
                                <span className="tituloboot">Inteligencia Artificial</span>
                            </div>
                        </div>
                        <div className="bootcamp">
                            <div className="bootcampimagen">
                                <img
                                    className="imagenboot"
                                    src={front}
                                />
                                <span className="tituloboot">Front End</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section05;