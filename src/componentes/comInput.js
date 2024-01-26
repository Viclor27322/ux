import React, { useState } from "react";

const ComponenteInput = ({
  estado,
  cambiarEstado,
  tipo,
  label,
  placeholder,
  name,
  leyendaError,
  expresionRegular,
}) => {
  const [val, cambiarValor] = useState("d-none");

  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
        cambiarValor("d-none");
      } else {
        cambiarEstado({ ...estado, valido: "false" });
        cambiarValor("d-block");
      }
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={tipo}
        className="form-control"
        id={name}
        placeholder={placeholder}
        value={estado.campo}
        onChange={onChange}
        onKeyUp={validacion}
        onBlur={validacion}
        valido={estado.valido}
        required
      />
      <div className={val}>
        <div className="text-danger">{leyendaError}</div>
      </div>
    </div>
  );
};

export default ComponenteInput;
