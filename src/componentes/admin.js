import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment"; // Importa Moment.js
import "moment/locale/es"; // Establece el idioma de Moment.js si es necesario
import { Modal} from "bootstrap"; 

const localizer = momentLocalizer(moment);
export default function Admin() {
  
  const [citas, setCitas] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    obtenerCitas();
  }, []);

  const obtenerCitas = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/citas");
      const data = await response.json();
      setCitas(data);
    } catch (error) {
      console.error("Error al obtener citas:", error);
    }
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    // Abre el modal al seleccionar un evento
    const modal = new Modal(document.getElementById("modal"), {});
    modal.show();
  };
  const eventos = citas.map((cita) => ({
    id: cita.IdCita,
    title: cita.Nombre + " "+ cita.ApellidoP,
    start: new Date(moment.utc(cita.HorarioInicio).format("YYYY-MM-DD HH:mm:ss")),
    end: new Date(moment.utc(cita.HoraFin).format("YYYY-MM-DD HH:mm:ss")),
    description: cita.Descripcion,
    estado:cita.Estado,
    style: {
      backgroundColor: cita.Estado ? "red" : "green", // Color de fondo basado en el estado
      color: "white", // Color del texto del evento
      borderColor: "black", // Color del borde del evento
    },
  }));

  return (
    <div>
      <div className="container">
      <h1>Mi Calendario</h1>
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
              {selectedEvent && (
                <div>
                  <p><strong>Titulo:</strong> {selectedEvent.title}</p>
                  <p><strong>Inicio:</strong> {moment(selectedEvent.start).format("LLL")}</p>
                  <p><strong>Fin:</strong> {moment(selectedEvent.end).format("LLL")}</p>
                  <p><strong>Descripción:</strong> {selectedEvent.description}</p>
                </div>
              )}
            </div>
            <div className="modal-footer">
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
