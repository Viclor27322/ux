import React from "react";
import { Link } from 'react-router-dom';
import Error from '../img/404.png'

export default function errror500(){
    return(
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="text-center">
                <img src={Error} alt="" width="250" height="200" className="r-50" />
            <h1 className="display-4">500</h1>
            <p className="lead">Existe un problema con el servidor</p>
            <p>Al parecer se produjo un error interno dentro del servidor, si perciste notifiquelo.</p>
            <Link to="/" className="btn btn-primary">
                Volver al Inicio
            </Link>
            </div>
      </div>
    )
}
