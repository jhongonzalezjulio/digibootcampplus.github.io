import React from "react";
import Nav from 'react-bootstrap/Nav';
import logodigi from '../imagenes/logodigi.png';
import '../styles/Menu.css';

function Menu() {
    return (
        <div className="contenedor-principal">
            <div className="contenedor-logo">
                <img className="logo" src={logodigi}
                />
            </div>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >


                <Nav.Item className="itene">
                    <Nav.Link  className="lista" href="/home" >Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item className="itene">
                    <Nav.Link className="lista" eventKey="link-1">Campamentos</Nav.Link>
                </Nav.Item>
                <Nav.Item className="itene">
                    <Nav.Link className="lista" eventKey="link-2">BootCamps</Nav.Link>
                </Nav.Item>
                <Nav.Item className="itene">
                    <Nav.Link className="lista" eventKey="link-3">Boletin</Nav.Link>
                </Nav.Item>

            </Nav>
        </div>
    );
}

export default Menu;