import React from "react";
import '../css/colores.css'

export default function Ayudas() {
    const faqs = [
        {
            question: "¿Dónde se encuentra la clínica?",
            answer: "Nuestra clínica está ubicada en Calle Cuauhtémoc número 18, Colonia Capitán Antonio Reyes, Huejutla, Hidalgo. Nos encontrarás en una zona de fácil acceso con instalaciones cómodas y adaptadas para atender a nuestros pacientes."
        },
        {
            question: "¿Cuál es el horario de atención?",
            answer: "Atendemos de lunes a sábado, de 8:00 a.m. a 2:00 p.m. Cerramos los domingos y días festivos. Para garantizar un servicio eficiente, te recomendamos agendar una cita con anticipación."
        },
        {
            question: "¿La clínica ofrece servicios de emergencia?",
            answer: "Sí, ofrecemos servicios de emergencia para situaciones urgentes relacionadas con el pie diabético. En caso de emergencia durante nuestro horario de atención, por favor llama al número de la clínica. Fuera de horario, contacta al número personal del médico para recibir asistencia inmediata."
        },
        {
            question: "¿Necesito una cita previa para ser atendido?",
            answer: "Sí, es recomendable agendar una cita previa para asegurar que podamos atenderte de manera oportuna y eficiente. Puedes programar tu cita llamando al número de la clínica o a través de nuestro sitio web."
        },
        {
            question: "¿Qué tipo de tratamientos ofrecen para el pie diabético?",
            answer: "Ofrecemos una amplia gama de tratamientos para el pie diabético, incluyendo: Evaluaciones médicas completas, Tratamiento médico y quirúrgico de úlceras y heridas, Manejo de infecciones, Cuidados preventivos y educativos, Cirugías correctivas cuando sean necesarias."
        },
        {
            question: "¿Qué debo llevar a mi primera cita?",
            answer: "Para tu primera cita, por favor trae: Estudios clínicos recientes (análisis de sangre, radiografías, etc.), Una lista de tus medicamentos actuales, Tu historial médico, Identificación y seguro médico (si aplica)."
        },
        {
            question: "¿Aceptan seguros médicos?",
            answer: "Sí, aceptamos una variedad de seguros médicos. Te recomendamos contactar a nuestro departamento de facturación llamando al número de la clínica para confirmar si tu seguro es aceptado y obtener información detallada sobre la cobertura."
        },
        {
            question: "¿Qué debo hacer si tengo una emergencia fuera del horario de atención?",
            answer: "Si tienes una emergencia fuera de nuestro horario de atención, te recomendamos contactar al número personal del médico para recibir orientación y asistencia."
        },
    ];

    return (
        <div className="container mt-5">
            <h1 className="text-center">Preguntas frecuentes</h1>
            <div className="pt-3">
                <p>Conoce cada una de las preguntas que podemos ayudarte a resolver o contáctanos para más información.</p>
            </div>
            <div className="accordion mt-4" id="faqAccordion">
                {faqs.map((faq, index) => (
                    <div className="accordion-item mb-3" key={index}>
                        <h3 className="accordion-header text-sub" id={`heading${index}`}>
                            <button 
                                className="accordion-button "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="true"
                                aria-controls={`collapse${index}`}
                            >
                                {faq.question}
                            </button>
                        </h3>
                        <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
