import React, { useState } from "react";
import Logo from '../img/CirupieD.png';
import { useNavigate } from 'react-router-dom';
import Input from './comInput';
import Swal from 'sweetalert2';
import md5 from 'md5';
import blacklistedPasswords from '../Auth/listanegra'


export default function Registro() {
    const history = useNavigate();
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [pass, cambiarPass] = useState({ campo: '', valido: null });
    const [Telefono, cambiarTelefono] = useState({ campo: '', valido: null });
    const [mostrarPass, setMostrarPass] = useState(false);
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        password: /^.{4,12}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{10}$/
    }

    const toggleMostrarPass = () => {
        setMostrarPass(!mostrarPass);
    };

    const onChange = () => {

    }

    const handleAceptaTerminos = () => {
        setAceptaTerminos(!aceptaTerminos);
    };
    function isPasswordBlacklisted(password) {
        return blacklistedPasswords.includes(password.toLowerCase()); // Verifica si la contraseña está en la lista negra, convirtiendo todo a minúsculas para hacer la comparación insensible a mayúsculas y minúsculas
      }

    const submit = async (e) => {
        e.preventDefault();

        if (!aceptaTerminos) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes aceptar los términos y condiciones.',
            });
            return;
        }        
        if(isPasswordBlacklisted(pass.campo)){
            Swal.fire({
                icon: 'error',
                title: 'Password debil',
                text: 'La contraseña que has elegido es débil. Por favor, elige una más segura.',
            });
            return;
        }        

        if (
            nombre.valido === 'true' &&
            correo.valido === 'true' &&
            pass.valido === 'true' &&
            Telefono.valido === 'true'
        ) {
            try {
                const hashedPassword = md5(pass.campo);
                console.log("passs: "+ hashedPassword);
                const response = await fetch('https://rest-api2-three.vercel.app/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Nombre: nombre.campo,
                        Correo: correo.campo,
                        Pass: hashedPassword,
                        Registro_Pass: new Date(),
                        Telefono: Telefono.campo
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: '¡Registro exitoso!',
                        text: 'Ahora puedes iniciar sesión.',
                    }).then(() => {
                        history('/Login');
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.msg,
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error al realizar el registro.',
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, llena todos los campos correctamente.',
            });
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
                                    estado={Telefono}
                                    cambiarEstado={cambiarTelefono}
                                    tipo="tel"
                                    label="Telefono"
                                    placeholder="Ingresa tu numero de telefono"
                                    name="telefono"
                                    leyendaError="Asegurate de agregar un numero de telefono correcto"
                                    expresionRegular={expresiones.telefono}
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
                                    tipo={mostrarPass ? "text" : "password"}
                                    label="Contraseña"
                                    placeholder="Ingresa la contraseña"
                                    name="pass"
                                    leyendaError="La contraseña debe tener entre 4 y 12 caracteres"
                                    expresionRegular={expresiones.password}
                                    onChange={onChange}
                                />
                                <button
                                    className="btn btn-secondary"
                                    type="button"
                                    onClick={toggleMostrarPass}
                                >
                                    {mostrarPass ? "Ocultar" : "Mostrar"}
                                </button>
                                <div className="form-check mt-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="aceptaTerminos"
                                        checked={aceptaTerminos}
                                        onChange={handleAceptaTerminos}
                                    />
                                    <label className="form-check-label" htmlFor="aceptaTerminos">
                                        Acepto los términos y condiciones
                                    </label>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-block ">Registro</button>
                                    <a ></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
