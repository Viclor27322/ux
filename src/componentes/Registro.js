import React, { useState} from "react";
import Logo from '../img/CirupieD.png';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react';
import Input from './comInput';

export default function Registro() {
    const [nombre, cambiarNombre] = useState({campo:'',valido: null});
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

    const submit = (e)=> {
        e.preventDefault();
        if(captcha.current.getValue()){
            setMensajeError('');
       }else{
            setMensajeError('Verifica el valor del captcha');
       }
        if(
            correo.valido === 'true' &&
            pass.valido === 'true '
        ){
            cambiarFormularioValido('');
            cambiarCorreo({campo:'', valido: null});
            cambiarPass({campo:'', valido: null}); 
             // enviar a la api
        }else{
            cambiarFormularioValido('Por favor llenar el formulario correctamente');
        }
        
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-3 pb-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="d-flex justify-content-center align-items-center pb-3">
                            <img src={Logo} alt="" width="250" height="200" className="r-50" />
                        </div>

                        <div className="card-body">
                            <form className="form" onSubmit={submit}>
                                <Input
                                    estado={nombre}
                                    cambiarEstado={cambiarNombre}
                                    tipo="text"
                                    label="Nombre del usuario"
                                    placeholder="Ingresa el nombre"
                                    name="nombre"
                                    leyendaError="El nombre solo puede contener letras y espacios"
                                    expresionRegular={expresiones.nombre}
                                    onChange={onChange}
                                />
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
                                    <button type="submit" className="btn btn-primary btn-block ">Registro</button>
                                </div>
                                
                                
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
