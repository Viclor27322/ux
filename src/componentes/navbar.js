import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light  pe-5 border bt-2 bs-0 ">
                <div className="container-fluid ">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse pe-5 " id="navbarNavAltMarkup">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-2 text-primary">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to={'/Notas'}>Notas</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link " to={'/Especialistas'}>Especialistas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to={'/Ayuda'}>Ayuda</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Contacto'}>Contactanos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to={'/Citas-Disponibles'}>Agendar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Login'}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Registro'}>Registro</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}