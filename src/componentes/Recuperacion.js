import React, { useState} from "react";
import Logo from '../img/CirupieD.png';
import { Link , useNavigate} from 'react-router-dom';
import Input from './comInput';

export default function Recuperacion() {
    const history = useNavigate();
    const [correo, cambiarCorreo] = useState({campo:'',valido: null});
    const [formularioValido, cambiarFormularioValido] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const [mensajeValidacion, setMensajeValidacion] = useState('');

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }



    const onChange = () => {
       
    }
    
    const Onsubmit = async (e) => {
        e.preventDefault();
        
        if (correo.valido === 'true') {
            try {
                const responseExist = await fetch('http://localhost:3001/api/emailExist/'+correo.campo, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
    
                const dataExist = await responseExist.json();
    
                if (responseExist.ok) {
                    setMensajeValidacion('Se ha enviado un mensaje a tu correo para que restablezcas la contraseña');
                    
                    const responseSendEmail = await fetch('http://localhost:3001/api/send-email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ Correo: correo.campo }),
                    });
                    
                    const dataSendEmail = await responseSendEmail.json();
                    
                    if (responseSendEmail.ok) {
                        console.log('El correo se envió con éxito', dataSendEmail);
                        setMensajeValidacion('Correo de recuperación enviado');
                    } else {
                        console.error('Error al enviar el correo', dataSendEmail);
                        // Muestra un mensaje de error al usuario
                    }
                } else {
                    console.error('Error en la verificación de correo:', dataExist);
                    setMensajeError('Correo no encontrado. Por favor, verifica tu correo.');
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
                setMensajeError('Error al intentar recuperar la contraseña. Por favor, inténtalo de nuevo más tarde.');
            }
        } else {
            cambiarFormularioValido('Por favor, llena el formulario correctamente');
        }
    };
    

    return (
        <div className="container">
            <div className="row justify-content-center mt-3 pb-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="d-flex justify-content-center align-items-center pb-3">
                            <img src={Logo} alt="" width="250" height="200" className="r-50" />
                        </div>

                        <div className="card-body">
                            <form className="form" onSubmit={Onsubmit}>
                                <Input
                                    estado={correo}
                                    cambiarEstado={cambiarCorreo}
                                    tipo="email"
                                    label="Correo Electrónico"
                                    placeholder="Ingresa el correo electronico"
                                    name="correo"
                                    leyendaError="El correo debe de ser un correo valido"
                                    expresionRegular={expresiones.correo}
                                    onChange={onChange}
                                />
                                <div className="text-danger">
                                        {mensajeError}
                                </div>
                                <div className="text-danger">
                                        {formularioValido}
                                </div>
                                <div className="text-success">
                                        {mensajeValidacion}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-block ">Recuperar</button>
                                </div>
                                
                                
                            </form>
                            <div className="p-2">
                                    <Link className="link" to={'/Login'}>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
