import React, { useEffect, useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement);

export default function Expedientes() {
  const [dataExpedientes, setDataExpedientes] = useState([]);
  const [dataCitas, setDataCitas] = useState([]);

  useEffect(() => {
    // Fetching data from the APIs
    const fetchData = async () => {
      const expResponse = await fetch('http://localhost:3001/api/clasificacion_heridas');
      const citasResponse = await fetch('http://localhost:3001/api/citas');
      const expData = await expResponse.json();
      const citasData = await citasResponse.json();

      setDataExpedientes(expData);
      setDataCitas(citasData);
    };

    fetchData();
  }, []);

  // Process data for charts
  const aspectosTopograficos = dataExpedientes.reduce((acc, expediente) => {
    const aspecto = expediente.Registrar_Aspecto;
    acc[aspecto] = (acc[aspecto] || 0) + 1;
    return acc;
  }, {});

  const citasPorFecha = dataCitas.reduce((acc, cita) => {
    const fecha = new Date(cita.HorarioInicio).toLocaleDateString();
    acc[fecha] = (acc[fecha] || 0) + 1;
    return acc;
  }, {});

  const ExpedientesPorFecha = dataExpedientes.reduce((acc, expediente) => {
    const fecha = new Date(expediente.FechaCreacion).toLocaleDateString();
    acc[fecha] = (acc[fecha] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="container my-4">
    <div className="row mb-4">
      <div className="col-md-12 col-lg-4">
        <div className="card p-3 mb-3">
          <h2 className="h5">Distribución de Aspectos Topográficos</h2>
          <div className="chart-container">
            <Pie
              data={{
                labels: Object.keys(aspectosTopograficos),
                datasets: [{
                  label: 'Aspectos Topográficos',
                  data: Object.values(aspectosTopograficos),
                  backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                  borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                  borderWidth: 1,
                }],
              }}
            />
          </div>
        </div>
      </div>

      <div className="col-md-12 col-lg-4">
        <div className="card p-3 mb-3">
          <h2 className="h5">Cantidad de Citas por Fecha</h2>
          <div className="chart-container">
            <Line
              data={{
                labels: Object.keys(ExpedientesPorFecha),
                datasets: [{
                  label: 'Cantidad de Citas',
                  data: Object.values(ExpedientesPorFecha),
                  borderColor: 'rgba(75, 192, 192, 1)',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  fill: true,
                }],
              }}
            />
          </div>
        </div>
      </div>

      <div className="col-md-12 col-lg-4">
        <div className="card p-3">
          <h2 className="h5">Cantidad de Expedientes</h2>
          <div className="chart-container">
            <Line
              data={{
                labels: Object.keys(citasPorFecha),
                datasets: [{
                  label: 'Cantidad de Citas',
                  data: Object.values(citasPorFecha),
                  borderColor: 'rgba(75, 192, 192, 1)',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  fill: true,
                }],
              }}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      
    </div>
  </div>
  );
}
