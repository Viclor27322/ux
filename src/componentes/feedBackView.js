import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function FeedbackView() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [ratingCounts, setRatingCounts] = useState({});

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await fetch('https://rest-api2-three.vercel.app/api/obtener_feedback');
      const data = await response.json();
      setFeedbackData(data);

      // Contar la cantidad de cada calificación
      const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      data.forEach(feedback => {
        counts[feedback.calificacion] = (counts[feedback.calificacion] || 0) + 1;
      });
      setRatingCounts(counts);
    } catch (error) {
      console.error('Error al obtener feedback:', error);
    }
  };

  // Datos para la gráfica de barras de calificaciones
  const barChartData = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Cantidad de Calificaciones',
        data: [ratingCounts[1], ratingCounts[2], ratingCounts[3], ratingCounts[4], ratingCounts[5]],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="container">
      <h2>Resumen de Feedback</h2>

      {/* Gráfico de barras para el conteo de calificaciones */}
      <div className="chart-container" style={{ width: '70%', margin: '0 auto' }}>
        <Bar data={barChartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>

      {/* Lista de comentarios */}
      <div style={{ marginTop: '30px' }}>
        <h3>Comentarios</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {feedbackData.map((feedback) => (
            <li key={feedback.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
              <strong>Calificación:</strong> {feedback.calificacion} - <em>{feedback.fecha}</em>
              <p>{feedback.comentario}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
