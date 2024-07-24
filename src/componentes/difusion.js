import React, { useState, useEffect } from "react";
import Input from './comInput';
import { Modal } from "bootstrap";
import Swal from "sweetalert2";

export default function Notas() {
    const [notas, setNotas] = useState([]);
    const [titulo, cambiarTitulo] = useState({ campo: '', valido: null });
    const [descripcion, cambiarDescripcion] = useState({ campo: '', valido: null });
    const [selectedNota, setSelectedNota] = useState(null);

    // Función para abrir el modal y seleccionar la nota
    const handleOpenModal = (nota) => {
        setSelectedNota(nota);
        // Abre el modal
        const modal = new Modal(document.getElementById("exampleModal2"), {});
        modal.show();
    };

    const handleCloseModal = () => {
        const modal = Modal.getInstance(document.getElementById("exampleModal2"));
        modal.hide();
    };

    const expresiones = {
        titulo: /^.{1,50}$/,
        descripcion: /^.{1,500}$/
    }

    useEffect(() => {
        // Llamada a la API para obtener las notas
        obtenerNotas();
    }, []);

    const obtenerNotas = async () => {
        fetch("https://rest-api2-three.vercel.app/api/notas")
            .then(response => response.json())
            .then(data => setNotas(data))
            .catch(error => console.error("Error al obtener notas:", error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Llamada a la API para agregar una nueva nota
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
                icon: 'success',
                title: 'Éxito',
                text: error.msg,
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
            // Llamada a la API para eliminar la nota seleccionada
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
                        setSelectedNota(null); // Limpiar la nota seleccionada
                        handleCloseModal(); // Cerrar el modal
                    } else {
                        throw new Error('Error al eliminar la nota');
                    }
                })
                .catch(error =>Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: error.msg,
                }));
        }
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();

        // Llamada a la API para actualizar los datos de la nota
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
                handleCloseModal(); // Cerrar el modal
            })
            .catch(error => Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: error.msg,
            }));
    };

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
            <div className="row mt-4">
                {notas.map(nota => (
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
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detalles de la Nota</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {selectedNota && (
                                <form onSubmit={handleEditSubmit}>
                                    <Input
                                        estado={titulo}
                                        cambiarEstado={cambiarTitulo}
                                        tipo="text"
                                        label="Título de la nota"
                                        placeholder="Ingresa el título"
                                        name="titulo"
                                        leyendaError="El título solo puede contener hasta 50 caracteres"
                                        expresionRegular={expresiones.titulo}
                                        defaultValue={selectedNota.Titulo}
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
                                        defaultValue={selectedNota.Descripcion}
                                    />
                                    <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                                </form>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
