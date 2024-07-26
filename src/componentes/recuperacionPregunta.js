import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../componentes/comInput';
import Logo from '../img/CirupieD.png';
import Swal from 'sweetalert2';
import md5 from 'md5';


const RecuperacionPregunta = () => {
    const history = useNavigate();
    const [email, setEmail] = useState({ campo: '', valido: null });
    const [pregunta, setPregunta] = useState('');
    const [respuesta, setRespuesta] = useState({ campo: '', valido: null });
    const [formularioValido, setFormularioValido] = useState('');
    const [mostrarFormularioReset, setMostrarFormularioReset] = useState(false);
    const [password, setPassword] = useState({ campo: '', valido: null });
    const [confirmPassword, setConfirmPassword] = useState({ campo: '', valido: null });
    const [formularioValidoReset, setFormularioValidoReset] = useState('');

    const expresiones = {
        password: /^.{4,12}$/, // 4 a 12 dígitos.
      };
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.campo && pregunta && respuesta.campo) {
      try {
        const response = await fetch('https://rest-api2-three.vercel.app/api/users/recuperacionpregunta', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Correo: email.campo,
            IdPregunta: parseInt(pregunta),
            Respuesta: respuesta.campo,
          }),
        });

        if (response.ok) {
            setMostrarFormularioReset(true); 
        } else {
          // Si la solicitud no es exitosa, mostrar un mensaje de error
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al restablecer la contraseña. Verifica tu correo, pregunta y respuesta.',
          });
        }
      } catch (error) {
        console.error('Error al restablecer la contraseña:', error);
        // Mostrar un mensaje de error genérico
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al restablecer la contraseña. Inténtelo de nuevo más tarde.',
        });
      }
    } else {
      // Si hay campos vacíos, mostrar un mensaje de error
      setFormularioValido('Por favor, completa todos los campos.');
    }
  };

  const handleSubmitResetPassword = async (e) => {
    e.preventDefault();
    setFormularioValidoReset('');
  
    if (password.campo === confirmPassword.campo) {
      const hashedPassword = md5(password.campo);
      try {
        const response = await fetch(`https://rest-api2-three.vercel.app/api/users/reset-password-pregunta`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Correo: email.campo,
            IdPregunta: parseInt(pregunta),
            Respuesta: respuesta.campo,
            NuevaContraseña: hashedPassword
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          console.log('Contraseña restablecida con éxito', data);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Contraseña restablecida con éxito',
          });
          history('/Login');
        } else {
          console.error('Error al restablecer la contraseña:', data);
          setFormularioValidoReset('Ha existido un error en el servidor, inténtelo más tarde');
        }
      } catch (error) {
        console.error('Error al restablecer la contraseña:', error);
        setFormularioValidoReset('Ha existido un error en el servidor, inténtelo más tarde');
      }
    } else {
      setFormularioValidoReset('Las contraseñas deben coincidir');
    }
  };
  
  return (
    <div className="container">
      <div className="row justify-content-center mt-3 pb-5">
        <div className="col-md-4">
          <div className="card">
            <div className="d-flex justify-content-center align-items-center pb-3">
              <img src={Logo} alt="" width="250" height="200" className="r-50" />
            </div>
            {!mostrarFormularioReset ? (
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit}>
                  <Input
                    estado={email}
                    cambiarEstado={setEmail}
                    tipo="email"
                    label="Correo Electrónico:"
                    placeholder="Ingresa tu correo electrónico"
                    name="email"
                    leyendaError="Por favor, introduce un correo electrónico válido."
                  />
                  <div className="mb-3">
                    <label htmlFor="pregunta" className="form-label">Pregunta de Seguridad:</label>
                    <select id="pregunta" className="form-select" value={pregunta} onChange={(e) => setPregunta(e.target.value)}>
                      <option value="">Selecciona una pregunta</option>
                      <option value="1">¿Cuál es tu color favorito?</option>
                      <option value="2">¿Cómo se llamaba tu última mascota?</option>
                      <option value="3">¿Cuál es tu lugar favorito?</option>
                      <option value="4">¿Cuál es tu comida favorita?</option>
                    </select>
                  </div>
                  <Input
                    estado={respuesta}
                    cambiarEstado={setRespuesta}
                    tipo="text"
                    label="Respuesta:"
                    placeholder="Ingresa tu respuesta de seguridad"
                    name="respuesta"
                    leyendaError="Por favor, introduce una respuesta."
                  />
                  <div className="text-danger">{formularioValido}</div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block ">
                      Recuperacion
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="card-body">
                <form className="form" onSubmit={handleSubmitResetPassword}>
                  <Input
                    estado={password}
                    cambiarEstado={setPassword}
                    tipo="password"
                    label="Nueva Contraseña:"
                    placeholder="Ingresa la contraseña"
                    name="password"
                    leyendaError="La contraseña debe tener de 4 a 12 dígitos"
                    expresionRegular={expresiones.password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    estado={confirmPassword}
                    cambiarEstado={setConfirmPassword}
                    tipo="password"
                    label="Confirmar Contraseña:"
                    placeholder="Ingresa nuevamente la contraseña"
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <div className="text-danger">{formularioValidoReset}</div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block ">
                      Restablecer Contraseña
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecuperacionPregunta;
