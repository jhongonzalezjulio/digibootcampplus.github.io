import React from 'react';
import '../styles/Section06.css';
import { useForm, UseForm } from 'react-hook-form';




const Section06 = () => {
        
     const { register, handleSubmit } = useForm();

     const onSubmit = (data) => {
            console.log(data);
        }  
     
    return(
        <div className="conte-prin">
            <div className="contenedor-text">
                <div className="cont-titu">
                    <h1 className="titu">BOLETÍN DE NOTICIAS</h1>
                    <h3 className='cont-parra'>
                    Te invitamos a que te suscribas a través del siguiente formulario y te sumerjas en esta nueva experiencia de aprendizaje en modalidad Bootcamp.
                    </h3>
                    <h2 className="bienvenido">¡Bienvenido!</h2>
                </div>
            </div>

            <div className='contenedor-formulario'>
                <div className='form-cont'>
                    <h2 className='Registro'>Registro</h2>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <div className='divform'>

                            <input className='inputsentra' placeholder='Nombre' type='text' {...register('nombre')}  />
                        </div>
                        <div className='divform'>
                           
                            <input className='inputsentra' placeholder='Correo' type='email' {...register('correo')}  />
                        </div>
                        <div className='divform'>
                            
                            <input className='inputsentra' placeholder='Edad' type='number' {...register('Edad')}  />
                        </div>
                        <div className='divform'>
                            
                            <select className='ciudad'>
                                <option className='opciones'>Cartagena</option>
                                <option className='opciones'>Barrranquilla</option>
                                <option className='opciones'>Medellin</option>
                                <option className='opciones'>Bogota</option>
                            </select>
                        </div>
                        <input className='boton' type="submit" value="Enviar"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Section06;