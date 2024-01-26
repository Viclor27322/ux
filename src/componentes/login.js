import React, { useState} from "react";
import Logo from '../img/CirupieD.png';
import { Link , useNavigate} from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react';
import Input from './comInput';

export default function Login() {
    const history = useNavigate();
    const [correo, cambiarCorreo] = useState({campo:'',valido: null});
    const [pass, cambiarPass] = useState({campo:'',valido: null});
    const [formularioValido, cambiarFormularioValido] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const captcha = useRef(null); 

    const onChange = () => {
       if(captcha.current.getValue()){
            setMensajeError('');
            cambiarFormularioValido('');
       }
    }

    
    const Onsubmit = async (e) => {
        e.preventDefault();
        
        /* if (!captcha.current.getValue()) {
            setMensajeError('Verifica el valor del captcha');
            return;
        } */
    
        if (correo.valido === 'true' && pass.valido === 'true') {
            try {
                const response = await fetch('http://localhost:3001/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Correo: correo.campo,
                        Password: pass.campo,
                    }),
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    // Aquí puedes manejar la respuesta exitosa, por ejemplo, redirigir al usuario a otra página
                    console.log('Inicio de sesión exitoso:', data);
                    history('/Ad');

                } else {
                    // Aquí puedes manejar la respuesta con error, por ejemplo, mostrar un mensaje al usuario
                    console.error('Error en el inicio de sesión:', data);
                    setMensajeError('Credenciales incorrectas. Por favor, verifica tu correo y contraseña.');
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
                setMensajeError('Error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
            }
        } else {
            cambiarFormularioValido('Por favor llenar el formulario correctamente');
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
                                <Input
                                    estado={pass}
                                    cambiarEstado={cambiarPass}
                                    tipo="password"
                                    label="Contraseña"
                                    placeholder="Ingresa la contaseña"
                                    name="pass"
                                    leyendaError="La contraseña debe contener de 4 a 12 digitos"
                                    expresionRegular={expresiones.password}
                                
                                />
                                
                               {/*  <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="email"  placeholder="Ingresa el correo electronico"/>
                                </div> */}
                                {/* <div className="mb-3 pb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" placeholder="Ingresa la contaseña" />
                                </div> */}
                                <div className="recaptcha pb-3">
                                    <ReCAPTCHA
                                        ref={captcha}
                                        sitekey="6Le1clcpAAAAACoTgKJ-IcXfNhD3AGSEMFM-HPA3"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="text-danger">
                                        {mensajeError}
                                </div>
                                <div className="text-danger">
                                        {formularioValido}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-block ">Iniciar sesión</button>
                                </div>
                                
                                
                            </form>
                            <div className="p-2">
                                    <Link className="link" to={'/Recuperacion'}>Recuperacion de contraseña</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
