import React, { useState, useEffect} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/es";
import ComponenteInput from './comInput';

const localizer = momentLocalizer(moment);

export default function Citas() {
  const [citas, setCitas] = useState([]); 
  const [title, setTitle] = useState({ campo: "", valido: null });
  const [start, setStart] = useState({ campo: "", valido: null });
  const [end, setEnd] = useState({ campo: "", valido: null });
  const [description, setDescription] = useState({ campo: "", valido: null });
  const [mensajeError, setMensajeError] = useState('');

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,
    password: /^.{4,12}$/, // 4 a 12 dígitos
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 números
    fechaHora: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01]\d|2[0-3]):([0-5]\d)$/
  };
  

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza las validaciones necesarias antes de enviar los datos
    if (title.valido === "true" && start.valido === "true" && end.valido === "true") {
      // Envía los datos a la API o realiza la acción correspondiente
      setMensajeError('Formulario válido. Enviar datos a la API.');
    } else {
      setMensajeError('No se pueden agregar la informacion');
    }
  };

  useEffect(() => {
    // Llamar a la API para obtener las citas
    obtenerCitas();
  }, []);

  const obtenerCitas = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/citas');
      const data = await response.json();
      setCitas(data);
    } catch (error) {
      console.error('Error al obtener citas:', error);
    }
  };

  const eventos = citas.map(cita => ({
    id: cita.IdUser,
    title: cita.IdPaciente,
    start: new Date(cita.HorarioInicio),
    end: new Date(cita.HoraFin),
    description: cita.Descripcion,
    style: {
      backgroundColor: cita.Estado === 0 ? 'red' : 'green', // Color de fondo basado en el estado
      color: 'white', // Color del texto del evento
      borderColor: 'black' // Color del borde del evento
    }
  }));

  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2>Agregar Evento</h2>
          <form onSubmit={handleSubmit}>
            <ComponenteInput
              estado={title}
              cambiarEstado={setTitle}
              tipo="text"
              label="Título"
              placeholder="Ingresa el título"
              name="title"
              leyendaError="Agrega un titulo breve, solo letras"
              expresionRegular={expresiones.nombre}
            />

            <ComponenteInput
              estado={start}
              cambiarEstado={setStart}
              tipo="datetime-local"
              label="Fecha de Inicio"
              placeholder="Selecciona la fecha y hora de inicio"
              name="start"
              leyendaError="Ingrese una fecha y hora valida"
              expresionRegular={expresiones.fechaHora} // Ajusta según tus necesidades
            />

            <ComponenteInput
              estado={end}
              cambiarEstado={setEnd}
              tipo="datetime-local"
              label="Fecha de Fin"
              placeholder="Selecciona la fecha y hora de fin"
              name="end"
              leyendaError="Ingrese una fecha y hora valida"
              expresionRegular={expresiones.fechaHora} // Ajusta según tus necesidades
            />

            <ComponenteInput
              estado={description}
              cambiarEstado={setDescription}
              tipo="text"
              label="Descripción"
              placeholder="Ingresa la descripción"
              name="description"
              leyendaError="Descripcion demasiado larga, menor a 100 caracteres"
              expresionRegular={expresiones.nombre}
            />

            <button type="submit" className="btn btn-primary">
              Agregar Evento
            </button>
          </form>
          <div className="text-danger">
                  {mensajeError}
          </div>
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
