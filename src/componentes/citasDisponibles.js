import React, { useState, useEffect } from "react";
import { Modal } from "bootstrap";
import Swal from "sweetalert2"; // Importa SweetAlert2
import Input from './comInput';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const stripePromise = loadStripe('pk_live_51QK3p3KiNmXtnueI3z94e8nX8S4ttxOP0sfHk02U1CLbrlTP0qijyQOvHWFBF9LMCzGj3qQPm8jKwiHMNpsG8VgJ00uIf2Umb7'); // Reemplaza con tu clave pública de Stripe

export default function CitasDisponibles() {
  const [citasDisponibles, setCitasDisponibles] = useState([]);
  const [selectedCita, setSelectedCita] = useState(null);
  const [showForm, setShowForm] = useState(false); // Nuevo estado para controlar la visualización del formulario
  const [email, setEmail] = useState({ campo: '', valido: null });
  const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
  const [apellidoP, cambiarApellidoP] = useState({ campo: '', valido: null });
  const [apellidoM, cambiarApellidoM] = useState({ campo: '', valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
  const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
  const [fechaNacimiento, cambiarFechaNacimiento] = useState({ campo: '', valido: null });
  const [showPaymentForm, setShowPaymentForm] = useState(false); // Estado para mostrar formulario de pago


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
  const handleShowPaymentForm = () => setShowPaymentForm(true); // Muestra el formulario de pago


  const handleCitaSelection = (cita) => {
    setSelectedCita(cita);
    setShowPaymentForm(false); 
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

  const handlePatientCheck = async () => {
    try {
      const response = await fetch("https://rest-api2-three.vercel.app/api/pacientes-correo/" + email.campo);
      if (!response.ok) {
        throw new Error('Error al verificar paciente');
      }
      const data = await response.json();
      if (data.IdPaciente) {
        setShowPaymentForm(true); // Muestra el formulario de pago
        setSelectedCita({ ...selectedCita, IdPaciente: data.IdPaciente }); // Guarda IdPaciente con la cita
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Paciente no encontrado',
          text: 'Por favor, regístrate para continuar.',
        });
        setShowForm(true); // Muestra el formulario de registro
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Error en el servidor al verificar paciente.",
      });
    }
  };
  
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
      /*const data = await response.json();
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
      await actualizarCita(data.IdPaciente);
      obtenerCitasDisponibles();*/
      const data = await response.json();
    Swal.fire({ icon: 'success', title: 'Paciente registrado', text: 'Continúe al pago.' });
    cambiarNombre({ campo: '', valido: null });
      cambiarApellidoP({ campo: '', valido: null });
      cambiarApellidoM({ campo: '', valido: null });
      cambiarCorreo({ campo: '', valido: null });
      cambiarTelefono({ campo: '', valido: null });
      cambiarFechaNacimiento({ campo: '', valido: null });
    setShowForm(false);
    setShowPaymentForm(true); // Muestra el formulario de pago
    setSelectedCita({ ...selectedCita, IdPaciente: data.IdPaciente });
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
          next: "sig",
          previous: "ant",
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
      {showForm ? (
        // Si showForm es verdadero, muestra el formulario de registro
        <div>
          <h5>Formulario de registro de paciente</h5>
          <form className="form" onSubmit={handleSubmit}>
            {/* Campos de entrada para el registro */}
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
              leyendaError="Asegurate de agregar un correo correcto"
              expresionRegular={expresiones.correo}
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
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Registrar y Continuar al Pago</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowForm(false)}>Regresar</button>
            </div>
          </form>
        </div>
      ) : showPaymentForm ? (
        // Si showPaymentForm es verdadero, muestra el formulario de pago
        <Elements stripe={stripePromise}>
          <CheckoutForm
            cita={selectedCita}
            onPaymentSuccess={async () => {
              await actualizarCita(selectedCita.IdPaciente); // Agenda la cita después del pago exitoso
              setShowPaymentForm(false);
              Swal.fire({ icon: 'success', title: 'Pago exitoso', text: 'Su cita ha sido agendada' });
            }}
          />
        </Elements>
      ) : (
        // Vista inicial: verificar si el paciente ya está registrado
        <div>
          <p>Por favor, ingresa tu correo electrónico para verificar si ya eres paciente:</p>
          <form className="form" onSubmit={handlePatientCheck}>
            <Input
              estado={email}
              cambiarEstado={setEmail}
              tipo="email"
              label="Correo electronico"
              placeholder="Correo electronico"
              name="correo"
              leyendaError="Asegurate de agregar un correo correcto"
              expresionRegular={expresiones.correo}
            />
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Verificar</button>
              <button type="button" className="btn btn-secondary" onClick={() => setShowForm(true)}>No soy paciente</button>
            </div>
          </form>
        </div>
      )}
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
