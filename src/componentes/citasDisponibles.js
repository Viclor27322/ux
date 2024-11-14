import React, { useState, useEffect } from "react";
import { Modal } from "bootstrap";
import Swal from "sweetalert2"; // Importa SweetAlert2
import Input from './comInput';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CheckoutForm from "./CheckoutForm"; // Asegúrate de importar tu formulario de pago

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Carga la clave pública de Stripe
const stripePromise = loadStripe("pk_live_51QK3p3KiNmXtnueI3z94e8nX8S4ttxOP0sfHk02U1CLbrlTP0qijyQOvHWFBF9LMCzGj3qQPm8jKwiHMNpsG8VgJ00uIf2Umb7");
const localizer = momentLocalizer(moment);

export default function CitasDisponibles() {
  const [citasDisponibles, setCitasDisponibles] = useState([]);
  const [selectedCita, setSelectedCita] = useState(null);
  const [paciente, setPaciente] = useState(null);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [showPaymentForm, setShowPaymentForm] = useState(false); // Nuevo estado para mostrar el formulario de pago
  const [email, setEmail] = useState({ campo: '', valido: null });
  const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
  const [apellidoP, cambiarApellidoP] = useState({ campo: '', valido: null });
  const [apellidoM, cambiarApellidoM] = useState({ campo: '', valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
  const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
  const [fechaNacimiento, cambiarFechaNacimiento] = useState({ campo: '', valido: null });

  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState({
    calificacion: 5,
    comentario: ""
  });

  const handleFeedbackSubmit = async () => {
    try {
      const response = await fetch("https://rest-api2-three.vercel.app/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pacienteId: paciente,
          comentario: feedback.comentario,
          calificacion: feedback.calificacion,
        }),
      });
      if (!response.ok) throw new Error("Error al enviar feedback");
  
      Swal.fire({
        icon: 'success',
        title: '¡Gracias por su feedback!',
        text: 'Su opinión nos ayuda a mejorar.',
      });
      setShowFeedbackForm(false); // Cierra el formulario
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "No se pudo enviar el feedback.",
      });
    }
  };

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/,
    fecha: /^\d{4}-\d{2}-\d{2}$/
  };

  useEffect(() => {
    obtenerCitasDisponibles();
  }, []);

  const obtenerCitasDisponibles = async () => {
    try {
      const response = await fetch(`https://rest-api2-three.vercel.app/api/citas-disponibles`);
      if (!response.ok) {
        throw new Error('Error al obtener las citas disponibles');
      }
      const citas = await response.json();
      setCitasDisponibles(citas);
    } catch (error) {
      Swal.fire({ // Usa SweetAlert2 para mostrar el error
        icon: 'error',
        title: 'Error',
        text: error.message,
      });
    }
  };

  const handleCitaSelection = (cita) => {
    setSelectedCita(cita);
    setShowPaymentForm(false); // Reinicia el estado del formulario de pago
    const modal = new Modal(document.getElementById("modal"), {});
    modal.show();
  };
  const eventos = citasDisponibles.map((cita) => ({
    id: cita.IdCita,
    title: cita.Nombre + " "+ cita.ApellidoP,
    start: new Date(moment.utc(cita.HorarioInicio).format("YYYY-MM-DD HH:mm:ss")),
    end: new Date(moment.utc(cita.HoraFin).format("YYYY-MM-DD HH:mm:ss")),
    description: cita.Descripcion,
  }));

  const handlePatientCheck = async (e) => {
    e.preventDefault(); // Evitar recarga de página
    try {
      const response = await fetch("https://rest-api2-three.vercel.app/api/pacientes-correo/" + email.campo);
      if (!response.ok) {
        throw new Error('Error al verificar paciente');
      }
      const data = await response.json();
      if (data.IdPaciente) {
        setPaciente(data.IdPaciente);
        setShowPaymentForm(true); // Muestra el formulario de pago si el paciente existe
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: "El paciente no se encontró, por favor, regístrese o asegúrese de ingresar correctamente su correo.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Error en el servidor al verificar paciente.",
      });
    }
  };
/*
  const actualizarCita = async (idPaciente) => {
    try {
      const response = await fetch(`https://rest-api2-three.vercel.app/api/citas-disponibles/${selectedCita.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          IdPaciente: idPaciente,
        }),
      });
      const data = await response.json();
      Swal.fire({ // Usa SweetAlert2 para mostrar mensaje de éxito
        icon: 'success',
        title: 'Cita actualizada',
        text: 'Se agendó su cita correctamente',
      });
      obtenerCitasDisponibles();
    } catch (error) {
      Swal.fire({ // Usa SweetAlert2 para mostrar el error
        icon: 'error',
        title: 'Error',
        text: "Error al actualizar cita",
      });
    }
  };*/
  const verificarFeedbackExistente = async (pacienteId) => {
    try {
      const response = await fetch(`https://rest-api2-three.vercel.app/api/existe_feedback/${pacienteId}`);
      const data = await response.json();
      console.log(data.exists);
      if (data.exists === false) {
        setShowFeedbackForm(true);
      }
    } catch (error) {
      console.error("Error al verificar el feedback:", error);
    }
  };

  const handlePaymentSuccess = async () => {
    // Actualizar la cita en el backend después de un pago exitoso
    try {
      const response = await fetch(`https://rest-api2-three.vercel.app/api/citas-disponibles/${selectedCita.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          IdPaciente: paciente, // Usa el id de paciente obtenido anteriormente
        }),
      });
      await response.json();
      Swal.fire({
        icon: 'success',
        title: 'Cita actualizada',
        text: 'Se agendó su cita correctamente',
      });
      obtenerCitasDisponibles();
      verificarFeedbackExistente(paciente);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Error al actualizar cita",
      });
    }
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
      const data = await response.json();
      Swal.fire({ // Usa SweetAlert2 para mostrar mensaje de éxito
        icon: 'success',
        title: 'Paciente agregado',
        text: 'Se agregó el nuevo paciente correctamente',
      });
      cambiarNombre({ campo: '', valido: null });
      cambiarApellidoP({ campo: '', valido: null });
      cambiarApellidoM({ campo: '', valido: null });
      cambiarCorreo({ campo: '', valido: null });
      cambiarTelefono({ campo: '', valido: null });
      cambiarFechaNacimiento({ campo: '', valido: null });
      //await actualizarCita(data.IdPaciente);
      setShowPaymentForm(true); // Muestra el formulario de pago después del registro
      //obtenerCitasDisponibles();
    } catch (error) {
      Swal.fire({ // Usa SweetAlert2 para mostrar el error
        icon: 'error',
        title: 'Error',
        text: "Error al agregar paciente",
      });
    }
  };

  return (
    <div className="container">
      <h1>Citas Disponibles</h1>
      <Calendar
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleCitaSelection}
        style={{ height: 500 }}
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día"
        }}
      />

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
                Confirmar Cita {selectedCita ? moment(selectedCita.start).format("YYYY-MM-DD HH:mm") : ""}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {showPaymentForm ? (
                <Elements stripe={stripePromise}>
                <CheckoutForm cita={paciente} onPaymentSuccess={handlePaymentSuccess} />
              </Elements>
              ) : !showForm ? (
                <div>
                  <p>Por favor, ingresa tu correo electrónico para verificar si ya eres paciente:</p>
                  <form className="form" onSubmit={handlePatientCheck}>
                    <Input
                      estado={email}
                      cambiarEstado={setEmail}
                      tipo="email"
                      label="Correo electrónico"
                      placeholder="Correo electrónico"
                      name="correo"
                      leyendaError="Asegúrate de agregar un correo correcto"
                      expresionRegular={expresiones.correo}
                    />
                    <div className="mb-3">
                      <button type="submit" className="btn btn-primary">Agendar</button>
                      <button type="button" className="btn btn-secondary" onClick={() => setShowForm(true)}>No soy paciente</button>
                    </div>
                  </form>
                </div>
              ) : (
                <div>
                  <h5>Formulario de registro de paciente</h5>
                  <form className="form" onSubmit={handleSubmit}>
                    <Input
                      estado={nombre}
                      cambiarEstado={cambiarNombre}
                      tipo="text"
                      label="Nombre del paciente"
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
                      leyendaError="Asegúrate de agregar un correo correcto"
                      expresionRegular={expresiones.correo}
                    />
                    <Input
                      estado={telefono}
                      cambiarEstado={cambiarTelefono}
                      tipo="tel"
                      label="Teléfono"
                      placeholder="Teléfono"
                      name="telefono"
                      leyendaError="Asegúrate de agregar un número de teléfono correcto"
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
                      leyendaError="Asegúrate de agregar una fecha de nacimiento"
                    />
                    <div className="mb-3">
                      <button type="submit" className="btn btn-primary">Registrarse y Agendar</button>
                      <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowForm(false)}>Regresar</button>
                    </div>
                  </form>
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
      {showFeedbackForm && (
    <div
    className="modal fade show"
    style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    tabIndex="-1"
    aria-labelledby="feedbackModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="feedbackModalLabel">Califica tu experiencia</h5>
          <button type="button" className="btn-close" onClick={() => setShowFeedbackForm(false)}></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Calificación (1-5)</label>
              <select
                className="form-select"
                value={feedback.calificacion}
                onChange={(e) => setFeedback({ ...feedback, calificacion: parseInt(e.target.value) })}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>{value}</option>
                ))}
              </select>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={() => setShowFeedbackForm(false)}>Cancelar</button>
          <button type="button" className="btn btn-primary" onClick={handleFeedbackSubmit}>Enviar Feedback</button>
        </div>
      </div>
    </div>
  </div>
    )}
    </div>
  );
}