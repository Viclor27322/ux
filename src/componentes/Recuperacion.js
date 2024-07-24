import React, { useState} from "react";
import Logo from '../img/CirupieD.png';
import { Link , useNavigate} from 'react-router-dom';
import Input from './comInput';
import Swal from 'sweetalert2';

export default function Recuperacion() {
    const history = useNavigate();
    const [correo, cambiarCorreo] = useState({campo:'',valido: null});

    const expresiones = {
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    const onChange = () => {
       
    }
    
    const Onsubmit = async (e) => {
        e.preventDefault();
        
        if (correo.valido === 'true') {
            try {
                const responseExist = await fetch('https://rest-api2-three.vercel.app/api/emailExist/'+correo.campo, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
    
                const dataExist = await responseExist.json();
                console.log(dataExist);
    
                if (responseExist.ok) {
                    console.log(dataExist);
                    Swal.fire({
                        icon: 'info',
                        title: 'Correo enviado',
                        text: 'Se ha enviado un mensaje a tu correo para que restablezcas la contraseña',
                    });
                    
                    const responseSendEmail = await fetch('https://rest-api2-three.vercel.app/api/send-email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ Token: dataExist.Token, Correo: correo.campo }),
                    });
                    
                    const dataSendEmail = await responseSendEmail.json();
                    
                    if (responseSendEmail.ok) {
                        console.log('El correo se envió con éxito', dataSendEmail);
                        Swal.fire({
                            icon: 'success',
                            title: 'Correo enviado',
                            text: 'El correo de recuperación se ha enviado correctamente',
                        });
                    } else {
                        console.error('Error al enviar el correo', dataSendEmail);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error al enviar correo',
                            text: 'Ocurrió un error al enviar el correo de recuperación. Por favor, inténtalo de nuevo más tarde.',
                        });
                    }
                } else {
                    console.error('Correo no encontrado:', dataExist);
                    Swal.fire({
                        icon: 'error',
                        title: 'Correo no encontrado',
                        text: 'El correo proporcionado no se encuentra en nuestra base de datos. Por favor, verifica tu correo e inténtalo de nuevo.',
                    });
                }
            } catch (error) {
                console.error('Error al intentar recuperar la contraseña:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error al recuperar contraseña',
                    text: 'Ocurrió un error al intentar recuperar la contraseña. Por favor, inténtalo de nuevo más tarde.',
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Correo inválido',
                text: 'Por favor, ingresa un correo electrónico válido.',
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
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-block ">Recuperar</button>
                                </div>
                            </form>
                            <Link className="link" to={'/RecuperacionPregunta'}>Recuperacion Por Contraseña</Link>
                                    
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
