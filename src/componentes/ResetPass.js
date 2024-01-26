import React, { useState, } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Input from '../componentes/comInput';
import Logo from '../img/CirupieD.png';

const ResetPassword = () => {
  const history = useNavigate();
  const { Correo } = useParams();
  const [password, setPassword] = useState({ campo: '', valido: null });
  const [confirmPassword, setConfirmPassword] = useState({ campo: '', valido: null });
  const [formularioValido, cambiarFormularioValido] = useState('');

  const expresiones = {
    password: /^.{4,12}$/, // 4 a 12 dígitos.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    cambiarFormularioValido('');

    if (password.campo === confirmPassword.campo) {
      const response = await fetch(`http://localhost:3001/api/users/reset-password/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Correo, Password: password.campo }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Contraseña restablecida con éxito', data);
        history('/Login');
      } else {
        console.error('Error al restablecer la contraseña:', data);
        cambiarFormularioValido('Ha existido un error en el servidor, inténtelo más tarde');
        // Muestra un mensaje de error al usuario
      }
    } else {
      cambiarFormularioValido('Las contraseñas deben coincidir');
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
            <h5>Restablecer Contraseña</h5>
            <div className="card-body">
              <form className="form" onSubmit={handleSubmit}>
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

                <div className="text-danger">{formularioValido}</div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block ">
                    Restablecer Contraseña
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
