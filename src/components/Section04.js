import React from "react";
import '../styles/Section04.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../imagenes/img1.jpg';
import img2 from '../imagenes/img2.jpg';
import img3 from '../imagenes/img3.jpg';



function Section04() {
    return (
        <div className="contenedor-section04">
            <div className="texto-modelo">
                <h1 className="textomodel">
                    Modelo de Enseñanza
                </h1>
            </div>
            <div className="contenedor-credenciales">
                <div className="credencial">
                    <Card style={{ width: '30rem',  height:'40rem', boxShadow:'0 0 16px' }}>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title style={{fontSize:'3em', fontWeight:'bold'}}>DIRIGIDO</Card.Title>
                            <Card.Text style={{fontSize:'1.8em'}}>
                                Programadores, ingenieros y cualquier profesional o entusiasta, que le interese conocer conceptos de las tecnologias 4.0
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </div>
                <div className="credencial">
                    <Card style={{ width: '30rem', height:'40rem', boxShadow:'0 0 16px' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title style={{fontSize:'3em',fontWeight:'bold'}}>PRE-REQUISITOS</Card.Title>
                            <Card.Text style={{fontSize:'1.8em'}}>
                            Conocimientos del S.O. Windows e Internet. Mente abierta para aprender los conceptos básicos y claves sobre tecnologías 4.0 aplicadas a las empresas
                            </Card.Text>
                          
                        </Card.Body>
                    </Card>
                </div>
                <div className="credencial">
                    <Card style={{ width: '30rem', height:'40rem', boxShadow:'0 0 16px' }}>
                        <Card.Img variant="top" src={img3}  />
                        <Card.Body>
                            <Card.Title style={{fontSize:'3em', fontWeight:'bold' }}>METODOLOGÍA</Card.Title>
                            <Card.Text style={{fontSize:'1.8em'}}>
                            Nuestros Bootcamp será orientado así:
* 100% Virtual (opcional)
* 80% práctico.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Section04;

