import React from 'react';
import '../styles/Boton.css';
import Button from 'react-bootstrap/Button';




function Boton() {
  return (
    <div className="botones d-grid gap-2">
      <Button className='boton1'  size="lg">
        Iniciar Sesión
      </Button>
      <Button className='boton2' size="lg">
        Registrate
      </Button>
    </div>
  );
}

export default Boton;