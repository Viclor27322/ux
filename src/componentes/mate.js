import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto';

function Mate() {
  const [citas, setCitas] = useState([
    { id: 1, glucosa: 135, fecha: '11/01/2024', estado: 'Normal' },
    { id: 2, glucosa: 138, fecha: '26/01/2024', estado: 'Normal' },
    { id: 3, glucosa: 130, fecha: '10/02/2024', estado: 'Normal' },
    { id: 4, glucosa: 142, fecha: '25/02/2024', estado: 'Elevado' },
    { id: 5, glucosa: 128, fecha: '10/03/2024', estado: 'Normal' },
    { id: 6, glucosa: 150, fecha: '25/03/2024', estado: 'Elevado' },
  ]);

  const [tInput, setTInput] = useState('');
  const [nivelGlucosa, setNivelGlucosa] = useState(0);
  const [lastDate, setLastDate] = useState('');

  useEffect(() => {
    setLastDate(citas[citas.length - 1].fecha);
  }, [citas]);

  const calcularNivelGlucosa = (t) => {
    if (t && citas.length >= 2) {
      const citaMasCercana = encontrarCitaMasCercana(t);
      const citaMenosCercana = citas.find(cita => cita.id === citaMasCercana.id - 1);
      const y = citaMasCercana.glucosa;
      const y2 = citaMenosCercana.glucosa;
      const time = calcularDias(citaMasCercana.fecha, citas[0].fecha);
      console.log(citaMasCercana);
      console.log(citaMenosCercana);
      const k = Math.log(y / y2) / (time);
      return y2 * Math.exp(k * (t));
    }
    return 0;
  };
  useEffect(() => {
    const ctx = document.getElementById('glucosaChart');
    const fechas = citas.map(cita => cita.fecha);
    const nivelesGlucosa = citas.map(cita => cita.glucosa);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: fechas,
        datasets: [{
          label: 'Nivel de Glucosa',
          data: nivelesGlucosa,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, [citas]);

  const graficar= ()=>{
    const ctx = document.getElementById('glucosaChart');
    const fechas = citas.map(cita => cita.fecha);
    const nivelesGlucosa = citas.map(cita => cita.glucosa);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: fechas,
        datasets: [{
          label: 'Nivel de Glucosa',
          data: nivelesGlucosa,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  const encontrarCitaMasCercana = (t) => {
    let citaMasCercana = citas[citas.length - 1]; // Empezamos con la última cita
    citas.forEach(cita => {
      const citaTime = calcularDias(cita.fecha, lastDate);
      const citaMasCercanaTime = calcularDias(citaMasCercana.fecha, lastDate);
      if (citaTime < t && citaTime < citaMasCercanaTime) {
        citaMasCercana = cita;
      } 
    });
    return citaMasCercana;
  };
  
  

  const encontrarCitaMenosCercana = (t) => {
    let citaMenosCercana = citas[0];
    citas.forEach(cita => {
      const citaTime = calcularDias(cita.fecha, lastDate);
      if (citaTime < t && citaTime > calcularDias(citaMenosCercana.fecha, lastDate)) {
        citaMenosCercana = cita;
      }
    });
    return citaMenosCercana;
  };

  const handleTInputChange = (e) => {
    setTInput(e.target.value);
  };

  const handleCalcularClick = () => {
    const t = parseInt(tInput);
    const nivel = calcularNivelGlucosa(t);
    setNivelGlucosa(nivel);
  };

  const calcularDias = (fechaInicial, fechaFinal) => {
    const partesFechaInicial = fechaInicial.split('/');
    const partesFechaFinal = fechaFinal.split('/');
    const fechaInicialObj = new Date(partesFechaInicial[2], partesFechaInicial[1] - 1, partesFechaInicial[0]);
    const fechaFinalObj = new Date(partesFechaFinal[2], partesFechaFinal[1] - 1, partesFechaFinal[0]);
    const diff = fechaFinalObj.getTime() - fechaInicialObj.getTime();
    return Math.abs(Math.ceil(diff / (1000 * 60 * 60 * 24))); // Valor absoluto para obtener siempre un resultado positivo
  };
  

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Calculadora de Glucosa</h1>
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Calcular glucosa para el día:</label>
          <input type="number" className="form-control" value={tInput} onChange={handleTInputChange} />
        </div>
        <div className="col">
          <button className="btn btn-primary mt-4" onClick={handleCalcularClick}>Calcular</button>
        </div>
      </div>
      {nivelGlucosa !== 0 && <p>Nivel de glucosa esperado: {nivelGlucosa.toFixed(2)} mg/dL</p>}
      <h2 className="mt-5">Datos de Ejemplo del Paciente</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nivel de Glucosa (mg/dL)</th>
            <th scope="col">Fecha</th>
            <th scope="col">Fecha en Días</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita, index) => (
            <tr key={cita.id}>
              <td>{cita.glucosa}</td>
              <td>{cita.fecha}</td>
              <td>{index === 0 ? 0 : calcularDias(citas[0].fecha, cita.fecha)}</td>
              <td>{cita.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row mb-3">
        <div className="col">
          <canvas id="glucosaChart"></canvas>
        </div>
      </div>
    </div>
  );
}

export default Mate;
