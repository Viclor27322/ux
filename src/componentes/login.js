import React from "react";
import Logo from '../img/CirupieD.png';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5 pb-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="d-flex justify-content-center align-items-center pb-3">
                            <img src={Logo} alt="" width="250" height="200" className="r-50" />
                        </div>

                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3 pb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-block ">Iniciar sesión</button>
                                </div>
                                <div className="p-2">
                                    <Link className="link">Recuperacion de contraseña</Link>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
