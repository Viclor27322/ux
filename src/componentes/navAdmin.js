import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';
export default function NavbarAdmin() {
    return (
        <div className='nav-color'>
            
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light pe-5 border bt-2">
                <div class="container-fluid ">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse pe-5 " id="navbarNavAltMarkup">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* Enfermera normal */}
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad'}>Inicio</Link>
                            </li>
                            {/* Enfermera general
                            Doctor */}
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/Citas'}>Citas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/Expediente'}>Expedientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/Pacientes'}>Paciente</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/Difusion'}>Difusion</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>Cerrar Sesion</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}