import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';

const EditProfile = () => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        imagen: null
    });

    useEffect(() => {
        if (user) {
            setFormData({
                nombre: user.Nombre,
                correo: user.Correo,
                telefono: user.Telefono,
                imagen: null
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
            if (!validTypes.includes(file.type)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor selecciona un archivo de imagen válido (JPEG, PNG, GIF o SVG).',
                });
                setFormData({ ...formData, imagen: null }); // Resetear imagen
            } else {
                setFormData({ ...formData, imagen: file });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { nombre, telefono, imagen } = formData;

        if (!nombre || !telefono) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor completa todos los campos.',
            });
            return;
        }

        if (!imagen) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor selecciona una imagen para subir.',
            });
            return;
        }

        const uploadData = new FormData();
        uploadData.append('file', imagen);
        uploadData.append('Nombre', nombre);
        uploadData.append('Telefono', telefono);

        try {
            const response = await fetch(`https://newapiimagenes.onrender.com/api/users/${user.IdUser}`, {
                method: 'PUT',
                body: uploadData,
                headers: {
                    'Accept': 'application/json',
                },
            });
        
            const data = await response.json();
        
            if (!response.ok) {
                throw new Error(data.msg || 'Error al actualizar el perfil');
            }
        
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: data.msg,
            });
        } catch (error) {
            console.error('Error updating profile:', error);
            
            // Mostrar el contenido de la respuesta si no es JSON
            if (error.response) {
                const errorText = await error.response.text();
                console.error('Error response:', errorText);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Detalles: ' + errorText,
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo actualizar el perfil. Intenta de nuevo más tarde.',
                });
            }
        }          
    };

    return (
        <div className="container mt-5">
            <h2>Editar Perfil</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input type="email" className="form-control" name="correo" value={formData.correo} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Selecciona Imagen</label>
                    <input type="file" className="form-control" accept="image/*" onChange={handleImageUpload} required />
                </div>
                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditProfile;
