import React, { useState, useEffect, useContext, useRef } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditProfile = () => {
    const history = useNavigate();
    const { login } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        imagen: null
    });
    const [imagePreview, setImagePreview] = useState(null); // Estado para la vista previa
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const videoRef = useRef(null); // Referencia al video

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
                setImagePreview(null); // Resetear vista previa
            } else {
                setFormData({ ...formData, imagen: file });
                setImagePreview(URL.createObjectURL(file)); // Crear vista previa
            }
        }
    };

    const openCamera = async () => {
        setIsCameraOpen(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
        } catch (err) {
            console.error('Error accessing camera:', err);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo acceder a la cámara. Verifica los permisos.',
            });
        }
    };

    const captureImage = () => {
        const video = videoRef.current;
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
            const file = new File([blob], 'captura.jpg', { type: 'image/jpeg' });
            setFormData({ ...formData, imagen: file });
            setImagePreview(URL.createObjectURL(file)); // Crear vista previa
        }, 'image/jpeg');
        setIsCameraOpen(false);
        // Detener el stream de la cámara
        const stream = video.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
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
            const response = await fetch(`http://localhost:3001/api/users/${user.IdUser}`, {
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
                text: 'Usuario actualizado correctamente',
            });
            console.log(data);
            login(data);
            history('/Ad/Perfil');
        } catch (error) {
            console.error('Error updating profile:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo actualizar el perfil. Intenta de nuevo más tarde.',
            });
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
                    <input type="file" className="form-control" accept="image/*" capture onChange={handleImageUpload} />
                </div>

                {imagePreview && (
                    <div className="mb-3">
                        <label className="form-label">Vista Previa</label>
                        <img src={imagePreview} alt="Vista previa" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                )}


                <button type="button" className="btn btn-secondary mt-3" onClick={openCamera}>Abrir Cámara</button>
                {isCameraOpen && (
                    <div className="mb-3">
                        <video ref={videoRef} autoPlay style={{ maxWidth: '100%', height: 'auto' }}></video>
                        <button type="button" className="btn btn-success" onClick={captureImage}>Capturar Imagen</button>
                    </div>
                )}
                
                <button type="submit" className="btn btn-primary mt-3 ms-3">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditProfile;
