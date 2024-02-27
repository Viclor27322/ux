import React, { useContext, useState } from "react";
import Logo from '../img/CirupieD.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import Input from './comInput';
import Swal from 'sweetalert2';
import md5 from 'md5';

export default function Login() {
    const history = useNavigate();
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [pass, cambiarPass] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const { login } = useContext(AuthContext);
    const [mostrarPass, setMostrarPass] = useState(false); // Estado para controlar la visibilidad de la contraseña
    const [intentosFallidos, setIntentosFallidos] = useState(0); // Contador de intentos fallidos

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        password: /^.{4,12}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{10}$/
    };

    const onChange = () => {
        setMensajeError('');
        cambiarFormularioValido('');
    };

    const toggleMostrarPass = () => {
        setMostrarPass(!mostrarPass); // Cambia el estado de mostrarPass
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (intentosFallidos >= 3) {
            // Bloquear la cuenta
            await bloquearCuenta();
            return;
        }
    
        if (!correo.campo || !pass.campo || correo.campo === '' || pass.campo === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Asegúrate de proporcionar correctamente el correo y contraseña',
            });
            return;
        }
    
        try {
            const hashedPassword = md5(pass.campo);
            const response = await fetch('https://rest-api2-three.vercel.app/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Correo: correo.campo,
                    Pass: hashedPassword,
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                console.log('Inicio de sesión exitoso:', data);
                const user = data;
                login(user);
                history('/Ad');
            } else {
                console.error('Error en el inicio de sesión:', data);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.msg,
                });
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error interno del servidor. Por favor, inténtalo de nuevo más tarde.',
            });
        }
    };
    const bloquearCuenta = async () => {
        try {

            await fetch('https://rest-api2-three.vercel.app/api/users/bloquearCuenta', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({
                     Correo: correo.campo,
                 }),
             });

            // Muestra un mensaje al usuario indicando que la cuenta ha sido bloqueada
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se ha excedido el límite de intentos fallidos. Tu cuenta ha sido bloqueada. Por favor, contacta al administrador para obtener ayuda.',
            });
        } catch (error) {
            console.error('Error al bloquear la cuenta:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error al bloquear la cuenta. Por favor, inténtalo de nuevo más tarde.',
            });
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
                            <form className="form" onSubmit={onSubmit}>
                                <Input
                                    estado={correo}
                                    cambiarEstado={cambiarCorreo}
                                    tipo="email"
                                    label="Correo Electrónico"
                                    placeholder="Ingresa el correo electrónico"
                                    name="correo"
                                    leyendaError="El correo debe ser válido"
                                    expresionRegular={expresiones.correo}
                                    onChange={onChange}
                                />
                                
                                <Input
                                        estado={pass}
                                        cambiarEstado={cambiarPass}
                                        tipo={mostrarPass ? "text" : "password"} // Utiliza el estado de mostrarPass para definir el tipo de input
                                        label="Contraseña"
                                        placeholder="Ingresa la contraseña"
                                        name="pass"
                                        leyendaError="La contraseña debe tener entre 4 y 12 caracteres"
                                        expresionRegular={expresiones.password}
                                        onChange={onChange}
                                    />
                                <button
                                        className="btn btn-secondary "
                                        type="button"
                                        onClick={toggleMostrarPass} // Al hacer clic, cambia el estado de mostrarPass
                                    >
                                    {mostrarPass ? "Ocultar" : "Mostrar"}
                                    </button>
                                <div className="text-danger">
                                    {mensajeError}
                                </div>
                                <div className="text-danger">
                                    {formularioValido}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                                </div>
                            </form>
                            <div className="p-2">
                                <Link className="link" to={'/Recuperacion'}>Recuperación de contraseña</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
