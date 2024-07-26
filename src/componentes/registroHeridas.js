import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function RegistroListHeridas() {
    const [registros, setRegistros] = useState([]);
    const [filteredRegistros, setFilteredRegistros] = useState([]);
    const [selectedRegistro, setSelectedRegistro] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Número de registros por página

    useEffect(() => {
        obtenerRegistros();
    }, []);

    useEffect(() => {
        // Filtrar registros cuando se actualiza el término de búsqueda
        setFilteredRegistros(registros.filter(registro =>
            `${registro.Nombre} ${registro.ApellidoP} ${registro.ApellidoM}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        ));
    }, [searchTerm, registros]);

    const obtenerRegistros = async () => {
        try {
            const response = await fetch("https://rest-api2-three.vercel.app/api/clasificacion_heridas");
            const data = await response.json();
            setRegistros(data);
        } catch (error) {
            console.error("Error al obtener registros:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://rest-api2-three.vercel.app/api/clasificacion_heridas/${id}`);
            setRegistros(registros.filter(registro => registro.IdClasificacionHeridas !== id));
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Registro eliminado exitosamente',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un problema al eliminar el registro',
            });
            console.error('Error deleting record:', error);
        }
    };

    const openModal = (registro) => {
        setSelectedRegistro(registro);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        obtenerRegistros();
        setSelectedRegistro(null);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(); // Puedes ajustar el formato según tus necesidades
    };

    // Función para manejar el cambio en el término de búsqueda
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Paginación
    const indexOfLastRegistro = currentPage * itemsPerPage;
    const indexOfFirstRegistro = indexOfLastRegistro - itemsPerPage;
    const currentRegistros = filteredRegistros.slice(indexOfFirstRegistro, indexOfLastRegistro);

    const totalPages = Math.ceil(filteredRegistros.length / itemsPerPage);

    return (
        <div className="container mt-4">
            <h2>Registro Heridas</h2>
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Buscar por nombre"
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="row mt-4">
                {currentRegistros.map(registro => (
                    <div key={registro.IdClasificacionHeridas} className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{registro.Nombre} {registro.ApellidoP} {registro.ApellidoM}</h5>
                                <p className="card-text"> Creado: {formatDate(registro.FechaCreacion)}</p>
                                <button className="btn btn-danger" onClick={() => openModal(registro)}>Eliminar</button>
                                <a className="btn btn-warning" href={`https://cirupied-eight.vercel.app/Ad/EditarHeridas/${registro.IdClasificacionHeridas}`}>
                                    Editar
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Paginación */}
            <nav aria-label="Page navigation ">
                <ul className="pagination justify-content-center pt-5">
                    <li className="page-item">
                        <button className="page-link" onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}>
                            Anterior
                        </button>
                    </li>
                    {[...Array(totalPages).keys()].map(number => (
                        <li className="page-item" key={number + 1}>
                            <button className="page-link" onClick={() => setCurrentPage(number + 1)}>
                                {number + 1}
                            </button>
                        </li>
                    ))}
                    <li className="page-item">
                        <button className="page-link" onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}>
                            Siguiente
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Modal para Confirmar Eliminación */}
            {showModal && selectedRegistro && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmar Eliminación</h5>
                                <button type="button" className="close" onClick={closeModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>¿Estás seguro de que deseas eliminar el registro con ID {selectedRegistro.IdClasificacionHeridas}?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
                                <button type="button" className="btn btn-danger" onClick={() => {
                                    handleDelete(selectedRegistro.IdClasificacionHeridas);
                                    closeModal();
                                }}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
