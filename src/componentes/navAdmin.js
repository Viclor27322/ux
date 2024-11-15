import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

export default function NavbarAdmin() {
    const { isAuthenticated, isLoading, logout, user } = useContext(AuthContext);
    const history = useNavigate();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            history('/');
        }
    }, [isLoading, isAuthenticated, history]);

    const Salir = () => {
        logout();
        history('/login');
    };

    if (isLoading) {
        return <div>Loading...</div>; // Muestra un indicador de carga mientras se verifica la autenticación
    }

    return (
        <div className='nav-color'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light pe-5 border bt-2">
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                     {/* Mostrar nombre de usuario y foto */}
                    <div className="d-flex align-items-center">
                        {user?.ImagenUrl && (
                            <img
                                src={user.ImagenUrl}
                                alt="img"
                                className="img-profile rounded-circle me-2"
                                style={{ width: '40px', height: '40px' }} 
                            />
                        )}
                        <span className="navbar-text">{user?.Nombre || "Usuario"}</span>
                    </div>
                    <div className="collapse navbar-collapse pe-5 " id="navbarNavAltMarkup">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-2 text-primary">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad'}>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/Citas'}>Citas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/Horario'}>Horario</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/Expediente'}>Expedientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/RegistroHeridas'}>Heridas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/Pacientes'}>Paciente</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/Difusion'}>Difusion</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/ListaUser'}>Usuarios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/HistorialPagos'}>Pagos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/HistorialPagos'}>Pagos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Ad/FeedBack'}>FeedBack</Link>
                            </li>
                            <input type="button" className="btn btn-success me-2" onClick={Salir} value="Logout" />
                        </ul>
                    </div>
                   
                </div>
            </nav>
        </div>
    );
}




{/*  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {user !== null ? (
                                user.IdRol === 1 && 2 ? (
                                    <div className='d-flex'>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad'}>Inicio</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/Citas'}>Citas</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/Horario'}>Horario</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/Expediente'}>Expedientes</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/RegistroHeridas'}>Heridas</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/Pacientes'}>Paciente</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/Difusion'}>Difusion</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/ListaUser'}>Usuarios</Link>
                                        </li>
                                    </div>
                                ) : (
                                    <div className='d-flex'>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad'}>Inicio</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/Citas'}>Citas</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/Horario'}>Horario</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/Expediente'}>Expedientes</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/RegistroHeridas'}>Heridas</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/Pacientes'}>Paciente</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/Difusion'}>Difusion</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/ListaUser'}>Usuarios</Link>
                                        </li>
                                    </div>
                                )
                            ) : null}
                            {user !== null ? (
                                user.IdRol === 3 && 5 ? (
                                    <div className='d-flex'>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad'}>Inicio</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/Citas'}>Citas</Link>
                                        </li>
                                    </div>
                                ) : (
                                    <div></div>
                                )
                            ) : null}
                            {user !== null ? (
                                user.IdRol === 4 ? (
                                    <div className='d-flex'>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad'}>Inicio</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/Citas'}>Citas</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/Ad/ListaUser'}>Usuarios</Link>
                                        </li>
                                    </div>
                                ) : (
                                    <div></div>
                                )
                            ) : null}
                           zzz
                        </ul> */}