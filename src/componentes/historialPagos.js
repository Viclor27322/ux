import React, { useState, useEffect } from 'react';

export default function HistorialPagos() {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const obtenerHistorial = async () => {
      try {
        const response = await fetch('https://rest-api2-three.vercel.app/api/historial-pagos');
        const data = await response.json();
        setHistorial(data);
      } catch (error) {
        console.error("Error al obtener el historial de pagos:", error);
      }
    };

    obtenerHistorial();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Historial de Pagos</h2>
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Paciente ID</th>
              <th>Monto</th>
              <th>Estado</th>
              <th>Fecha de Pago</th>
              <th>ID de Pago</th>
            </tr>
          </thead>
          <tbody>
            {historial.map((pago) => (
              <tr key={pago.paymentId}>
                <td>{pago.pacienteId}</td>
                <td>${(pago.amount / 100).toFixed(2)} MXN</td>
                <td>
                  <span
                    className={`badge ${pago.status === 'succeeded' ? 'bg-success' : 'bg-danger'}`}
                  >
                    {pago.status === 'succeeded' ? 'Exitoso' : 'Fallido'}
                  </span>
                </td>
                <td>{new Date(pago.paymentDate).toLocaleDateString()}</td>
                <td>{pago.paymentId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
