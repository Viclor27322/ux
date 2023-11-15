import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/es";

const localizer = momentLocalizer(moment);

export default function Citas() {
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-4">
          <h2>Agregar Evento</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Título
              </label>
              <input type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
              <label htmlFor="start" className="form-label">
                Fecha de Inicio
              </label>
              <input type="datetime-local" className="form-control" id="start" />
            </div>
            <div className="mb-3">
              <label htmlFor="end" className="form-label">
                Fecha de Fin
              </label>
              <input type="datetime-local" className="form-control" id="end" />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Descripcion
              </label>
              <input type="text" className="form-control" id="description" />
            </div>
            <button type="button" className="btn btn-primary">
              Agregar Evento
            </button>
          </form>
        </div>
        <div className="col-md-8">
          <h1>Calendario</h1>
          <Calendar
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
        
      </div>
    </div>
  );
}
