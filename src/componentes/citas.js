import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/es";
import ComponenteInput from "./comInput";
import { Modal } from "bootstrap";
import Swal from 'sweetalert2';

const localizer = momentLocalizer(moment);

export default function Citas() {
  const [citas, setCitas] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [selectedPaciente, setSelectedPaciente] = useState("");
  const [start, setStart] = useState({ campo: "", valido: null });
  const [end, setEnd] = useState({ campo: "", valido: null });
  const [description, setDescription] = useState({ campo: "", valido: null });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editedStart, setEditedStart] = useState({ campo: "", valido: null });
  const [editedEnd, setEditedEnd] = useState({ campo: "", valido: null });
  const [editedDescription, setEditedDescription] = useState({ campo: "", valido: null });
  const [editedPaciente, setEditedPaciente] = useState("");

  useEffect(() => {
    obtenerCitas();
    obtenerPacientes();
  }, []);

  const obtenerCitas = async () => {
    try {
      const response = await fetch("https://rest-api2-three.vercel.app/api/citas");
      const data = await response.json();
      setCitas(data);
    } catch (error) {
      console.error("Error al obtener citas:", error);
    }
  };

  const obtenerPacientes = async () => {
    try {
      const response = await fetch("https://rest-api2-three.vercel.app/api/pacientes");
      const data = await response.json();
      setPacientes(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error en el servidor al obtener los pacientes',
    });
    }
  };

  const handlePacienteChange = (e) => {
    setSelectedPaciente(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedStart = moment(start.campo).format("YYYY-MM-DD HH:mm:ss");
    const formattedEnd = moment(end.campo).format("YYYY-MM-DD HH:mm:ss");
  
    try {
      const response = await fetch("https://rest-api2-three.vercel.app/api/citas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          IdUser: 5,
          idPaciente: selectedPaciente,
          HorarioInicio: formattedStart,
          HoraFin: formattedEnd,
          Descripcion: description.campo,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg || 'Error al agregar la cita');
      }
      Swal.fire({
        icon: 'success',
        title: '¡Exito!',
        text: data.msg,
      });
      setSelectedPaciente("");
      setStart({ campo: "", valido: null });
      setEnd({ campo: "", valido: null });
      setDescription({ campo: "", valido: null });
      obtenerCitas();
    } catch (error) {
      console.error("Error al agregar la cita:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Error en el servidor al agregar la cita',
      });
    }
  };
  
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const formattedStart = moment(editedStart.campo).format("YYYY-MM-DD HH:mm:ss");
    const formattedEnd = moment(editedEnd.campo).format("YYYY-MM-DD HH:mm:ss");
    const pacienteId = parseInt(editedPaciente);
  
    fetch(`https://rest-api2-three.vercel.app/api/citas/${selectedEvent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        IdPaciente: pacienteId,
        HorarioInicio: formattedStart,
        HoraFin: formattedEnd,
        Descripcion: editedDescription.campo,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then(data => {
            throw new Error(data.msg || 'Error al actualizar la cita');
          });
        }
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          icon: 'success',
          title: '¡Exito!',
          text: data.msg,
        });
        obtenerCitas();
        const modal = Modal.getInstance(document.getElementById("modal"));
        modal.hide();
      })
      .catch((error) => {
        console.error("Error al actualizar la cita:", error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message || 'Error en el servidor al actualizar la cita',
        });
      });
  };
  
  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta cita?')) {
      fetch(`https://rest-api2-three.vercel.app/api/citas/${selectedEvent.id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            obtenerCitas();
            Swal.fire({
              icon: 'success',
              title: '¡Exito!',
              text: 'Cita eliminada correctamente',
            });
            const modal = Modal.getInstance(document.getElementById("modal"));
            modal.hide();
          } else {
            throw new Error('Error al eliminar la cita');
          }
        })
        .catch((error) => {
          console.error("Error al eliminar la cita:", error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message || 'Error en el servidor al eliminar la cita',
          });
        });
    }
  };
  

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    const modal = new Modal(document.getElementById("modal"), {});
    modal.show();
    
    // Asignar los valores del evento seleccionado a los estados correspondientes
    setEditedStart({ campo: moment(event.start).format("YYYY-MM-DDTHH:mm"), valido: true });
    setEditedEnd({ campo: moment(event.end).format("YYYY-MM-DDTHH:mm"), valido: true });
    setEditedDescription({ campo: event.description, valido: true });
    setEditedPaciente(event.title); // Seleccionar el paciente correcto
  };
  

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,
    fechaHora: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01]\d|2[0-3]):([0-5]\d)$/,
  };

  const eventos = citas.map((cita) => ({
    id: cita.IdCita,
    title: cita.Nombre + " "+ cita.ApellidoP,
    start: new Date(moment.utc(cita.HorarioInicio).format("YYYY-MM-DD HH:mm:ss")),
    end: new Date(moment.utc(cita.HoraFin).format("YYYY-MM-DD HH:mm:ss")),
    description: cita.Descripcion,
    style: {
      backgroundColor: cita.Estado ? "red" : "green",
      color: "white",
      borderColor: "black",
    },
  }));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2>Agregar cita</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="paciente" className="form-label">
                Paciente:
              </label>
              <select
                id="paciente"
                className="form-select"
                value={selectedPaciente}
                onChange={handlePacienteChange}
                required
              >
                <option value="">Selecciona un paciente</option>
                {pacientes.map((paciente) => (
                  <option key={paciente.IdPaciente} value={paciente.IdPaciente}>
                    {paciente.Nombre + " " + paciente.ApellidoP + " " + paciente.ApellidoM}
                  </option>
                ))}
              </select>
            </div>
            <ComponenteInput
              estado={start}
              cambiarEstado={setStart}
              tipo="datetime-local"
              label="Fecha de Inicio"
              placeholder="Selecciona la fecha y hora de inicio"
              name="start"
              leyendaError="Ingrese una fecha y hora válida"
              expresionRegular={expresiones.fechaHora}
            />
            <ComponenteInput
              estado={end}
              cambiarEstado={setEnd}
              tipo="datetime-local"
              label="Fecha de Fin"
              placeholder="Selecciona la fecha y hora de fin"
              name="end"
              leyendaError="Ingrese una fecha y hora válida"
              expresionRegular={expresiones.fechaHora}
            />
            <ComponenteInput
              estado={description}
              cambiarEstado={setDescription}
              tipo="text"
              label="Descripción"
              placeholder="Ingresa la descripción"
              name="description"
              leyendaError="Descripción demasiado larga, menor a 100 caracteres"
              expresionRegular={expresiones.nombre}
            />
            <button type="submit" className="btn btn-primary">
              Agregar Cita
            </button>
          </form>
        </div>
        <div className="col-md-8">
          <h1>Calendario</h1>
          <Calendar
            localizer={localizer}
            events={eventos}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={handleSelectEvent}
            messages={{
              next: "sig",
              previous: "ant",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día"
            }}
          />
        </div>
      </div>

      <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                Detalles de la cita
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>Editar Cita</h5>
              {selectedEvent && (
                <form onSubmit={handleEditSubmit}>
                  <div className="mb-3">
                    <label htmlFor="pacienteEdit" className="form-label">
                      Paciente:
                    </label>
                    <input
                      id="pacienteEdit"
                      className="form-control"
                      value={editedPaciente}
                      readOnly
                    />
                  </div>
                  <ComponenteInput
                    estado={editedStart}
                    cambiarEstado={setEditedStart}
                    tipo="datetime-local"
                    label="Fecha de Inicio"
                    placeholder="Selecciona la fecha y hora de inicio"
                    name="start"
                    leyendaError="Ingrese una fecha y hora válida"
                    expresionRegular={expresiones.fechaHora}
                  />
                  <ComponenteInput
                    estado={editedEnd}
                    cambiarEstado={setEditedEnd}
                    tipo="datetime-local"
                    label="Fecha de Fin"
                    placeholder="Selecciona la fecha y hora de fin"
                    name="end"
                    leyendaError="Ingrese una fecha y hora válida"
                    expresionRegular={expresiones.fechaHora}
                  />
                  <ComponenteInput
                    estado={editedDescription}
                    cambiarEstado={setEditedDescription}
                    tipo="text"
                    label="Descripción"
                    placeholder="Ingresa la descripción"
                    name="description"
                    leyendaError="Descripción demasiado larga, menor a 100 caracteres"
                    expresionRegular={expresiones.nombre}
                  />
                  
                  <button type="submit" className="btn btn-primary">
                    Guardar Cambios
                  </button>
                </form>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Eliminar
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
