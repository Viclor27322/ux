import React, { useState, useEffect } from "react";
import moment from "moment";
import Input from './comInput';

export default function HorariosAtencion() {
    const [horarios, setHorarios] = useState([]);
    const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);


    const [horaInicio, setHoraInicio] = useState({ campo: "", valido: null });
    const [horaFin, setHoraFin] = useState({ campo: "", valido: null });
    const [estado, setEstado] = useState("");
    const [dia, setDia] = useState({ campo: "", valido: null });

    useEffect(() => {
        obtenerHorarios();
    }, []);

    const obtenerHorarios = async () => {
        try {
            const response = await fetch("https://rest-api2-three.vercel.app/api/horarios");
            const data = await response.json();
            setHorarios(data);
            console.log(data);
        } catch (error) {
            console.error("Error al obtener los horarios de atención:", error);
        }
    };

    const abrirModalEditar = (horario) => {
        setHorarioSeleccionado(horario);
        setHoraInicio({ campo: moment(horario.HoraInicio).add(6,'hours').format("HH:mm"), valido: true });
        setHoraFin({ campo: moment(horario.HoraFin).add(6,'hours').format("HH:mm"), valido: true });
        setEstado(horario.Estado ? "true" : "false");
        setDia({campo: horario.Dia, valido: true});
    };

    const cerrarModalEditar = () => {
        setHorarioSeleccionado(null);
    };

    const actualizarHorario = async () => {
        try {
            // Realizar la llamada a la API para actualizar el horario de atención
            await fetch(`https://rest-api2-three.vercel.app/api/horarios/${dia.campo}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        horaInicio: horaInicio.campo,
                        horaFin: horaFin.campo,
                        estado: estado
                    }
                ),
            });
            obtenerHorarios();
            cerrarModalEditar();
        } catch (error) {
            console.error("Error al actualizar el horario de atención:", error);
        }
    };

    return (
        <div className="container">
            <h1 className="text-center">Horarios de Atención</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Día</th>
                        <th>Hora de Inicio</th>
                        <th>Hora de Fin</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {horarios.map(horario => (
                        <tr >
                            <td>{horario.Dia}</td>
                            <td>{moment(horario.HoraInicio).add(6,'hours').format("HH:mm:ss")}</td>
                            <td>{moment(horario.HoraFin).add(6, 'hours').format("HH:mm:ss")}</td>
                            <td>{horario.Estado ? "Activo" : "Inactivo"}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => abrirModalEditar(horario)}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal de edición */}
            {horarioSeleccionado && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Editar Horario {dia.campo}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={cerrarModalEditar}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <Input
                                        estado={horaInicio}
                                        cambiarEstado={setHoraInicio}
                                        tipo="time"
                                        label="Hora de Inicio"
                                        placeholder="Ingrese la hora de inicio"
                                        name="horaInicio"
                                    />
                                </div>
                                <div>
                                    <Input
                                        estado={horaFin}
                                        cambiarEstado={setHoraFin}
                                        tipo="time"
                                        label="Hora de Fin"
                                        placeholder="Ingrese la hora de fin"
                                        name="horaFin"
                                    />
                                </div>
                                <div>
                                    <label><strong>Estado:</strong></label>
                                    <select className="form-select"
                                        value={estado}
                                        onChange={e => setEstado(e.target.value)}
                                    >
                                        <option value="true">Activo</option>
                                        <option value="false">Inactivo</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={cerrarModalEditar}>Cancelar</button>
                                <button type="button" className="btn btn-primary" onClick={actualizarHorario}>Guardar Cambios</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
