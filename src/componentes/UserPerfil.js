import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div>No estás autenticado.</div>; 
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Perfil de Usuario</h2>
            <div className="card mb-3 shadow-lg">
                <img 
                    src={user.ImagenUrl} 
                    alt="Perfil"
                    className="card-img-top rounded-circle mx-auto" // Imagen en la parte superior, centrada
                    style={{ width: '150px', height: '150px' }} // Tamaño de la imagen
                />
                <div className="card-body text-center">
                    <h5 className="card-title text-primary">{user.Nombre}</h5>
                    <p className="card-text">
                        <strong>Correo:</strong> {user.Correo}
                    </p>
                    <p className="card-text">
                        <strong>Teléfono:</strong> {user.Telefono}
                    </p>
                    <Link to="/Ad/EditPerfil" className="btn btn-primary">Editar Perfil</Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
