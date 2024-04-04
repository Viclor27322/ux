import React, { useState, useEffect } from "react";
import Input from './comInput';

export default function Paciente() {
    const [pacientes, setPacientes] = useState([]);
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [apellidoP, cambiarApellidoP] = useState({campo:'', valido: null});
    const [apellidoM, cambiarApellidoM] = useState({campo:'', valido: null});
    const [Telefono, cambiarTelefono] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [fechaNacimiento, cambiarFechaNacimiento] = useState({campo:'', valido:null});

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        respuesta: /^[a-zA-ZÀ-ÿ\s]{1,250}$/,
        password: /^.{4,12}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{10}$/,
        fecha: /^\d{4}-\d{2}-\d{2}$/
    }

    useEffect(() => {
        // Llamada a la API para obtener los pacientes
        fetch("http://localhost:3001/api/pacientes")
            .then(response => response.json())
            .then(data => setPacientes(data))
            .catch(error => console.error("Error al obtener pacientes:", error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Llamada a la API para agregar un nuevo paciente
        fetch("http://localhost:3001/api/pacientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Nombre: nombre.campo,
                ApellidoP: apellidoP.campo,
                ApellidoM: apellidoM.campo,
                Correo: correo.campo,
                Telefono: Telefono.campo,
                fechaNacimiento: fechaNacimiento.campo
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log("Nuevo paciente agregado:", data);
                // Actualizar la lista de pacientes con el nuevo paciente agregado
                setPacientes([...pacientes, data]);
                // Limpiar el formulario
                cambiarNombre({ campo: '', valido: null });
                cambiarApellidoP({ campo: '', valido: null });
                cambiarApellidoM({ campo: '', valido: null });
                cambiarCorreo({ campo: '', valido: null });
                cambiarTelefono({ campo: '', valido: null });
                cambiarFechaNacimiento({ campo: '', valido: null });
            })
            .catch(error => console.error("Error al agregar paciente:", error));
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">Pacientes</h1>
            <div className="row mt-4">
                <div className="col text-center">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Agregar nuevo paciente
                    </button>   
                </div>
            </div>
            <div className="row mt-4">
                {pacientes.map(paciente => (
                    <div className="col-md-2" key={paciente.IdPaciente}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{paciente.Nombre}</h5>
                                <p className="card-text">{paciente.Correo}</p>
                                <a href="#" className="btn btn-primary">
                                    Detalles
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form className="form" onSubmit={handleSubmit}>
                            <Input
                                estado={nombre}
                                cambiarEstado={cambiarNombre}
                                tipo="text"
                                label="Nombre del usuario"
                                placeholder="Ingresa el nombre"
                                name="nombre"
                                leyendaError="El nombre solo puede contener letras"
                                expresionRegular={expresiones.nombre}
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
                            />
                            <Input
                                estado={apellidoM}
                                cambiarEstado={cambiarApellidoM}
                                tipo="text"
                                label="Apellido Materno"
                                placeholder="Apellido Materno"
                                name="apellidoM"
                                leyendaError="El apellido solo puede contener letras"
                                expresionRegular={expresiones.nombre}
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
                            />
                            <Input
                                estado={Telefono}
                                cambiarEstado={cambiarTelefono}
                                tipo="tel"
                                label="Teléfono"
                                placeholder="Teléfono"
                                name="telefono"
                                leyendaError="Asegurate de agregar un numero de telefono correcto"
                                expresionRegular={expresiones.telefono}
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
                            />
                            <button type="submit" className="btn btn-primary">Agregar Paciente</button>
                        </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}
