    import React, { useState, useEffect } from "react";
    import Input from './comInput';
    import { Modal } from "bootstrap";
    import Swal from "sweetalert2";

    export default function Paciente() {
        const [pacientes, setPacientes] = useState([]);
        const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
        const [apellidoP, cambiarApellidoP] = useState({ campo: '', valido: null });
        const [apellidoM, cambiarApellidoM] = useState({ campo: '', valido: null });
        const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
        const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
        const [fechaNacimiento, cambiarFechaNacimiento] = useState({ campo: '', valido: null });
        const [selectedPaciente, setSelectedPaciente] = useState(null);

        // Función para abrir el modal y seleccionar el paciente
        const handleOpenModal = (paciente) => {
            setSelectedPaciente(paciente);
            const modal = new Modal(document.getElementById("exampleModal2"), {});
            modal.show();
        };

        const handleOpenModalSubmit = () => {
            heandleCleanForm();
            const modal = new Modal(document.getElementById("exampleModal"), {});
            modal.show();
        };

        const handleCloseModal = () => {
            const modal = Modal.getInstance(document.getElementById("exampleModal2"));
            modal.hide();
        };
        const handleCloseModa = () => {
            const modal = Modal.getInstance(document.getElementById("exampleModal"));
            modal.hide();
        };


        const expresiones = {
            nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            telefono: /^\d{10}$/,
            fecha: /^\d{4}-\d{2}-\d{2}$/
        }

        useEffect(() => {
            // Llamada a la API para obtener los pacientes
            obtenerPacientes();
        }, []);

        const obtenerPacientes = async () => {
            fetch("https://rest-api2-three.vercel.app/api/pacientes")
                .then(response => response.json())
                .then(data => setPacientes(data))
                .catch(error => console.error("Error al obtener pacientes:", error));
        };
        const heandleCleanForm = () => {
            cambiarNombre({ campo: '', valido: null });
            cambiarApellidoP({ campo: '', valido: null });
            cambiarApellidoM({ campo: '', valido: null });
            cambiarCorreo({ campo: '', valido: null });
            cambiarTelefono({ campo: '', valido: null });
            cambiarFechaNacimiento({ campo: '', valido: null });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await fetch("https://rest-api2-three.vercel.app/api/pacientes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        Nombre: nombre.campo,
                        ApellidoP: apellidoP.campo,
                        ApellidoM: apellidoM.campo,
                        Correo: correo.campo,
                        Telefono: telefono.campo,
                        fechaNacimiento: fechaNacimiento.campo
                    })
                });
                if (!response.ok) {
                    throw new Error('Error al agregar paciente');
                }
                const data = await response.json();
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: data.msg,
                });
                heandleCleanForm();
                obtenerPacientes();
                handleCloseModa();
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.msg,
                });
            }
        };

        useEffect(() => {
            if (selectedPaciente) {
                cambiarNombre({ campo: selectedPaciente.Nombre, valido: null });
                cambiarApellidoP({ campo: selectedPaciente.ApellidoP, valido: null });
                cambiarApellidoM({ campo: selectedPaciente.ApellidoM, valido: null });
                cambiarCorreo({ campo: selectedPaciente.Correo, valido: null });
                cambiarTelefono({ campo: selectedPaciente.Telefono, valido: null });
        
                // Convertir la fecha al formato adecuado
                const fechaNacimientoFormatted = selectedPaciente.fechaNacimiento ?
                    new Date(selectedPaciente.fechaNacimiento).toISOString().split('T')[0] : '';
        
                cambiarFechaNacimiento({ campo: fechaNacimientoFormatted, valido: null });
            }
        }, [selectedPaciente]);
        
        

        const handleDelete = () => {
            if (window.confirm('¿Estás seguro de que deseas eliminar este paciente?')) {
                // Llamada a la API para eliminar al paciente seleccionado
                fetch(`https://rest-api2-three.vercel.app/api/pacientes/${selectedPaciente.IdPaciente}`, {
                    method: "DELETE"
                })
                    .then(response => {
                        if (response.ok) {
                            const data =  response.json();
                            Swal.fire({
                                icon: 'success',
                                title: 'Éxito',
                                text: data.msg,
                            });
                            obtenerPacientes();
                            setSelectedPaciente(null); // Limpiar el paciente seleccionado
                            handleCloseModal(); // Cerrar el modal
                        } else {
                            throw new Error('Error al eliminar el paciente');
                        }
                    })
                    .catch(error => Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: error.msg,
                    }));
            }
        };

        const handleEditSubmit = (e) => {
            e.preventDefault();

            // Llamada a la API para actualizar los datos del paciente
            fetch(`https://rest-api2-three.vercel.app/api/pacientes/${selectedPaciente.IdPaciente}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Nombre: nombre.campo,
                    ApellidoP: apellidoP.campo,
                    ApellidoM: apellidoM.campo,
                    Correo: correo.campo,
                    Telefono: telefono.campo,
                    fechaNacimiento: fechaNacimiento.campo
                })
            })
                .then(response => response.json())
                .then(data => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Éxito',
                        text: data.msg,
                    });
                    console.log("Paciente actualizado:", data);
                    obtenerPacientes();
                    handleCloseModal(); // Cerrar el modal
                })
                .catch(error => Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.msg,
                }));
        };

        return (
            <div className="container mt-4">
                <h1 className="text-center">Pacientes</h1>
                <div className="row mt-4">
                    <div className="col text-center">
                        <button type="button" className="btn btn-primary" data-testid="btn-agregar-paciente" onClick={handleOpenModalSubmit}>
                            Agregar nuevo paciente
                        </button>
                    </div>
                </div>
                <div className="row mt-4">
                    {pacientes.map(paciente => (
                        <div className="col-md-3 mb-4" key={paciente.IdPaciente}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{paciente.Nombre} {paciente.ApellidoP} {paciente.ApellidoM}</h5>
                                    <p className="card-text">{paciente.Correo}</p>
                                    <p className="card-text">{paciente.Telefono}</p>
                                    <button className="btn btn-primary" onClick={() => handleOpenModal(paciente)}>
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
                                <h5 className="modal-title" id="exampleModalLabel">Agregar nuevo paciente</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Input data-testid="nombre"
                                            estado={nombre}
                                            cambiarEstado={cambiarNombre}
                                            tipo="text"
                                            label="Nombre del paciente"
                                            placeholder="Ingresa el nombre"
                                            name="nombre"
                                            leyendaError="El nombre solo puede contener letras"
                                            expresionRegular={expresiones.nombre}
                                        />
                                        
                                        <Input data-testid="apellidoM"
                                            estado={apellidoM}
                                            cambiarEstado={cambiarApellidoM}
                                            tipo="text"
                                            label="Apellido Materno"
                                            placeholder="Apellido Materno"
                                            name="apellidoM"
                                            leyendaError="El apellido solo puede contener letras"
                                            expresionRegular={expresiones.nombre}
                                        />
                                        <Input data-testid="telefono"
                                            estado={telefono}
                                            cambiarEstado={cambiarTelefono}
                                            tipo="tel"
                                            label="Teléfono"
                                            placeholder="Teléfono"
                                            name="telefono"
                                            leyendaError="Asegurate de agregar un numero de telefono correcto"
                                            expresionRegular={expresiones.telefono}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Input data-testid="apellidoP"
                                            estado={apellidoP}
                                            cambiarEstado={cambiarApellidoP}
                                            tipo="text"
                                            label="Apellido Paterno"
                                            placeholder="Apellido Paterno"
                                            name="apellidoP"
                                            leyendaError="El apellido solo puede contener letras"
                                            expresionRegular={expresiones.nombre}
                                        />
                                        <Input data-testid="correo"
                                            estado={correo}
                                            cambiarEstado={cambiarCorreo}
                                            tipo="email"
                                            label="Correo Electrónico"
                                            placeholder="Correo Electrónico"
                                            name="correo"
                                            leyendaError="Asegurate de agregar un correo correcto"
                                            expresionRegular={expresiones.correo}
                                        />
                                        <Input  data-testid="fechaNacimiento"
                                            estado={fechaNacimiento}
                                            cambiarEstado={cambiarFechaNacimiento}
                                            tipo="date"
                                            label="Fecha de Nacimiento"
                                            placeholder="Fecha de Nacimiento"
                                            name="fechaNacimiento"
                                            expresionRegular={expresiones.fecha}
                                            leyendaError="Asegurate de agregar una fecha de nacimiento"
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" data-testid="submit">Agregar Paciente</button>
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
                                <h5 className="modal-title" id="exampleModalLabel">Detalles del Paciente</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {selectedPaciente && (
                                    <form onSubmit={handleEditSubmit}>
                                         <div className="row">
                                         <div className="col-md-6">
                                        <Input
                                            estado={nombre}
                                            cambiarEstado={cambiarNombre}
                                            tipo="text"
                                            label="Nombre del paciente"
                                            placeholder="Ingresa el nombre"
                                            name="nombre"
                                            leyendaError="El nombre solo puede contener letras"
                                            expresionRegular={expresiones.nombre}
                                            defaultValue={selectedPaciente.Nombre}
                                        />
                                        <Input
                                            estado={apellidoP}
                                            cambiarEstado={cambiarApellidoP}
                                            tipo="text"
                                            label="Apellido Paterno"
                                            placeholder="Apellido Paterno"
                                            name="apellidoP"
                                            leyendaError="El apellido solo puede contener letras"
                                            expresionRegular={expresiones.nombre}
                                            defaultValue={selectedPaciente.ApellidoP}
                                        />
                                        <Input
                                            estado={telefono}
                                            cambiarEstado={cambiarTelefono}
                                            tipo="tel"
                                            label="Teléfono"
                                            placeholder="Teléfono"
                                            name="telefono"
                                            leyendaError="Asegurate de agregar un numero de telefono correcto"
                                            expresionRegular={expresiones.telefono}
                                            defaultValue={selectedPaciente.Telefono}
                                        />
                                        </div>
                                        <div className="col-md-6">
                                        <Input
                                            estado={apellidoM}
                                            cambiarEstado={cambiarApellidoM}
                                            tipo="text"
                                            label="Apellido Materno"
                                            placeholder="Apellido Materno"
                                            name="apellidoM"
                                            leyendaError="El apellido solo puede contener letras"
                                            expresionRegular={expresiones.nombre}
                                            defaultValue={selectedPaciente.ApellidoM}
                                        />
                                        <Input
                                            estado={correo}
                                            cambiarEstado={cambiarCorreo}
                                            tipo="email"
                                            label="Correo Electrónico"
                                            placeholder="Correo Electrónico"
                                            name="correo"
                                            leyendaError="Asegurate de agregar un correo correcto"
                                            expresionRegular={expresiones.correo}
                                            defaultValue={selectedPaciente.Correo}
                                        />
                                        <Input
                                            estado={fechaNacimiento}
                                            cambiarEstado={cambiarFechaNacimiento}
                                            tipo="date"
                                            label="Fecha de Nacimiento"
                                            placeholder="Fecha de Nacimiento"
                                            name="fechaNacimiento"
                                            expresionRegular={expresiones.fecha}
                                            leyendaError="Asegurate de agregar una fecha de nacimiento"
                                            value={fechaNacimiento.campo} // Cambiado a value en lugar de defaultValue
                                        />
                                        
                                         
                                        </div>
                                        
                                         </div>
                                        
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
