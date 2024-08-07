import React from "react";
import { Link } from 'react-router-dom';
import Error from '../img/404.png'

export default function error404(){
    return(
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="text-center">
                <img src={Error} alt="" width="250" height="200" className="r-50" />
            <h1 className="display-4">404</h1>
            <p className="lead">Página no encontrada</p>
            <p>La página que estás buscando no existe.</p>
            <Link to="/Ad" className="btn btn-primary">
                Volver al Inicio
            </Link>
            </div>
      </div>
    )
}
