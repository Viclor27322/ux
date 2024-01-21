import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment"; // Importa Moment.js
import "moment/locale/es"; // Establece el idioma de Moment.js si es necesario

const localizer = momentLocalizer(moment);
export default function Admin() {
  const events = [
    {
      title: "Evento 1",
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 5),
    },
    {
      title: "MOB",
      start: new Date(2024, 7,  22),
      end: new Date(2024, 7, 22),
    },
    // Agrega más eventos según tus necesidades
  ];

  return (
    <div className="container">
      <h1>Mi Calendario</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }} // Ajusta la altura según tus necesidades
      />
    </div>
  );
}
