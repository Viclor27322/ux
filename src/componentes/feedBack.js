import React, { useEffect, useState } from 'react';

export default function FeedbackList() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            const response = await fetch(`https://rest-api2-three.vercel.app/api/obtener_feedback`);
            const data = await response.json();
            setFeedbacks(data);
        };
        fetchFeedback();
    }, []);

    return (
        <div>
            <h3>Comentarios sobre la aplicacion</h3>
            {feedbacks.length > 0 ? (
                feedbacks.map((feedback) => (
                    <div key={feedback.id}>
                        <p><strong>Calificación:</strong> {feedback.calificacion}/5</p>
                        <p><strong>Comentario:</strong> {feedback.comentario}</p>
                        <p><small>{feedback.fecha}</small></p>
                    </div>
                ))
            ) : (
                <p>No hay comentarios para esta cita.</p>
            )}
        </div>
    );
}
