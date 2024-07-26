import React, { useState, useEffect } from "react";
import Input from './comInput';
import { Modal } from "bootstrap";
import Swal from "sweetalert2";
import '../css/colores.css';

export default function Notas() {
    const [notas, setNotas] = useState([]);
    const [filteredNotas, setFilteredNotas] = useState([]);
    const [titulo, cambiarTitulo] = useState({ campo: '', valido: null });
    const [descripcion, cambiarDescripcion] = useState({ campo: '', valido: null });
    const [selectedNota, setSelectedNota] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [notasPerPage] = useState(5);

    const expresiones = {
        titulo: /^.{1,50}$/,
        descripcion: /^.{1,500}$/
    };

    useEffect(() => {
        obtenerNotas();
    }, []);

    useEffect(() => {
        const filtered = notas.filter(nota =>
            nota.Titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            nota.Descripcion.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredNotas(filtered);
        setCurrentPage(1);
    }, [searchTerm, notas]);

    const obtenerNotas = async () => {
        fetch("https://rest-api2-three.vercel.app/api/notas")
            .then(response => response.json())
            .then(data => {
                setNotas(data);
                setFilteredNotas(data);
            })
            .catch(error => console.error("Error al obtener notas:", error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://rest-api2-three.vercel.app/api/notas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Titulo: titulo.campo,
                Descripcion: descripcion.campo
            })
        })
            .then(response => response.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: data.msg,
                });
                cambiarTitulo({ campo: '', valido: null });
                cambiarDescripcion({ campo: '', valido: null });
                obtenerNotas();
            })
            .catch(error => Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message,
            }));
    };

    useEffect(() => {
        if (selectedNota) {
            cambiarTitulo({ campo: selectedNota.Titulo, valido: null });
            cambiarDescripcion({ campo: selectedNota.Descripcion, valido: null });
        }
    }, [selectedNota]);

    const handleDelete = () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta nota?')) {
            fetch(`https://rest-api2-three.vercel.app/api/notas/${selectedNota.IdNota}`, {
                method: "DELETE"
            })
                .then(response => {
                    if (response.ok) {
                        const data = response.json();
                        Swal.fire({
                            icon: 'success',
                            title: 'Éxito',
                            text: data.msg,
                        });
                        obtenerNotas();
                        setSelectedNota(null);
                        handleCloseModal();
                    } else {
                        throw new Error('Error al eliminar la nota');
                    }
                })
                .catch(error => Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message,
                }));
        }
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();

        fetch(`https://rest-api2-three.vercel.app/api/notas/${selectedNota.IdNota}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Titulo: titulo.campo,
                Descripcion: descripcion.campo
            })
        })
            .then(response => response.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: data.msg,
                });
                obtenerNotas();
                handleCloseModal();
            })
            .catch(error => Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message,
            }));
    };

    const handleOpenModal = (nota) => {
        setSelectedNota(nota);
        const modal = new Modal(document.getElementById("exampleModal2"), {});
        modal.show();
    };

    const handleCloseModal = () => {
        const modal = Modal.getInstance(document.getElementById("exampleModal2"));
        modal.hide();
    };

    const indexOfLastNota = currentPage * notasPerPage;
    const indexOfFirstNota = indexOfLastNota - notasPerPage;
    const currentNotas = filteredNotas.slice(indexOfFirstNota, indexOfLastNota);
    const totalPages = Math.ceil(filteredNotas.length / notasPerPage);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Notas</h1>
            <div className="row mt-4">
                <div className="col text-center">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Agregar nueva nota
                    </button>
                </div>
            </div>
            <div className="row mt-4 mb-3">
                <div className="col-md-6 offset-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar notas..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mt-4">
                {currentNotas.map(nota => (
                    <div className="col-md-4 mb-4" key={nota.IdNota}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{nota.Titulo}</h5>
                                <p className="card-text">{nota.Descripcion}</p>
                                <button className="btn btn-primary" onClick={() => handleOpenModal(nota)}>
                                    Detalles
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
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
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Agregar nueva nota</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form" onSubmit={handleSubmit}>
                                <Input
                                    estado={titulo}
                                    cambiarEstado={cambiarTitulo}
                                    tipo="text"
                                    label="Título de la nota"
                                    placeholder="Ingresa el título"
                                    name="titulo"
                                    leyendaError="El título solo puede contener hasta 50 caracteres"
                                    expresionRegular={expresiones.titulo}
                                />
                                <Input
                                    estado={descripcion}
                                    cambiarEstado={cambiarDescripcion}
                                    tipo="text"
                                    label="Descripción"
                                    placeholder="Ingresa la descripción"
                                    name="descripcion"
                                    leyendaError="La descripción solo puede contener hasta 500 caracteres"
                                    expresionRegular={expresiones.descripcion}
                                />
                                <button type="submit" className="btn btn-primary">Agregar Nota</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editar nota</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form" onSubmit={handleEditSubmit}>
                                <Input
                                    estado={titulo}
                                    cambiarEstado={cambiarTitulo}
                                    tipo="text"
                                    label="Título de la nota"
                                    placeholder="Ingresa el título"
                                    name="titulo"
                                    leyendaError="El título solo puede contener hasta 50 caracteres"
                                    expresionRegular={expresiones.titulo}
                                />
                                <Input
                                    estado={descripcion}
                                    cambiarEstado={cambiarDescripcion}
                                    tipo="text"
                                    label="Descripción"
                                    placeholder="Ingresa la descripción"
                                    name="descripcion"
                                    leyendaError="La descripción solo puede contener hasta 500 caracteres"
                                    expresionRegular={expresiones.descripcion}
                                />
                                <button type="submit" className="btn btn-primary">Guardar cambios</button>
                                <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar Nota</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
