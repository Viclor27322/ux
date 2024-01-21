import React, { useState} from "react";
import Logo from '../img/CirupieD.png';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react';

export default function Login() {
    const {capchaValido, cambiarCaptchaValido} = useState(null);
    const {usuarioValido, cambiarUsuarioValido} = useState(false);
    const [mensajeError, setMensajeError] = useState('');


    const captcha = useRef(null); 

    const onChange = () => {
       if(captcha.current.getValue()){
            console.log('El usuario no es un robot');
            setMensajeError('');
       }
    }

    const submit = (e)=> {
        e.preventDefault();
        if(captcha.current.getValue()){
            console.log('El usuario no es un robot');
       }else{
            console.log('El usuario no es un robot');
            setMensajeError('Verifica el valor del captcha');
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
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="email"  placeholder="Ingresa el correo electronico"/>
                                </div>
                                <div className="mb-3 pb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" placeholder="Ingresa la contaseña" />
                                </div>
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
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-block ">Iniciar sesión</button>
                                </div>
                                
                                
                            </form>
                            <div className="p-2">
                                    <Link className="link">Recuperacion de contraseña</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
