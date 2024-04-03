import React, { useState, useEffect } from "react";
import Clin from '../img/clin.jpg';
import '../css/colores.css'

export default function Notas() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [additionalContent, setAdditionalContent] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Simula la carga de más contenido al llegar al final de la página
    useEffect(() => {
        if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight) {
            loadMoreContent();
        }
    }, [scrollPosition]);

    const loadMoreContent = () => {
        // Aquí cargarías más contenido, por ejemplo, utilizando una API o generando contenido dinámicamente
        // Por simplicidad, aquí solo agregamos más elementos vacíos
        const newContent = Array.from({ length: 3}, (_, index) => ({
            id: additionalContent.length + index + 1,
            title: `Título ${additionalContent.length + index + 1}`,
            text: `Texto del contenido ${additionalContent.length + index + 1}`
        }));
        setAdditionalContent(prevContent => [...prevContent, ...newContent]);
    };

    return (
        <div className="container">
            <h1 className="text-center pb-3 text-titulo">Notas</h1>
            <div>
                {/* Renderiza el contenido inicial */}
                <div className="row p-3 border mb-3">
                    <div className="col-md-3">
                        <img src={Clin} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-sub">¿Que es el pie diabetico?</h3>
                        <p>
                            Es el sindrome que se presenta como un ataque agudo o cronico del pie caracterizado por uno o mas heridas cuya etiologia, complejidad  y gravedad es una variable en destruccion de tejidos  en extension y profundidad, zonas y aspectos anatomicos que pueden ser agravado por isquemia, infeccion, edema, y neuropatia, con riesgo de amputacion en los pacientes con diabetes.
                        </p>
                    </div>
                </div>
                <div className="row p-3 border mb-3">
                    <div className="col-md-3">
                        <img src={Clin} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-sub">¿Que es el pie diabetico?</h3>
                        <p>
                            Es el sindrome que se presenta como un ataque agudo o cronico del pie caracterizado por uno o mas heridas cuya etiologia, complejidad  y gravedad es una variable en destruccion de tejidos  en extension y profundidad, zonas y aspectos anatomicos que pueden ser agravado por isquemia, infeccion, edema, y neuropatia, con riesgo de amputacion en los pacientes con diabetes.
                        </p>
                    </div>
                </div>
                <div className="row p-3 border mb-3">
                    <div className="col-md-3">
                        <img src={Clin} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-sub">¿Que es el pie diabetico?</h3>
                        <p>
                            Es el sindrome que se presenta como un ataque agudo o cronico del pie caracterizado por uno o mas heridas cuya etiologia, complejidad  y gravedad es una variable en destruccion de tejidos  en extension y profundidad, zonas y aspectos anatomicos que pueden ser agravado por isquemia, infeccion, edema, y neuropatia, con riesgo de amputacion en los pacientes con diabetes.
                        </p>
                    </div>
                </div>
                <div className="row p-3 border mb-3">
                    <div className="col-md-3">
                        <img src={Clin} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-sub">¿Que es el pie diabetico?</h3>
                        <p>
                            Es el sindrome que se presenta como un ataque agudo o cronico del pie caracterizado por uno o mas heridas cuya etiologia, complejidad  y gravedad es una variable en destruccion de tejidos  en extension y profundidad, zonas y aspectos anatomicos que pueden ser agravado por isquemia, infeccion, edema, y neuropatia, con riesgo de amputacion en los pacientes con diabetes.
                        </p>
                    </div>
                </div>
                <div className="row p-3 border mb-3">
                    <div className="col-md-3">
                        <img src={Clin} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-9">
                        <h3 className="text-sub">¿Que es el pie diabetico?</h3>
                        <p>
                            Es el sindrome que se presenta como un ataque agudo o cronico del pie caracterizado por uno o mas heridas cuya etiologia, complejidad  y gravedad es una variable en destruccion de tejidos  en extension y profundidad, zonas y aspectos anatomicos que pueden ser agravado por isquemia, infeccion, edema, y neuropatia, con riesgo de amputacion en los pacientes con diabetes.
                        </p>
                    </div>
                </div>


                {/* Renderiza el contenido adicional cargado dinámicamente */}
                {additionalContent.map(item => (
                    <div key={item.id} className="row p-3 border mb-3 text-end">
                        <div className="col-md-9">
                            <h3 className="text-sub">{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                        <div className="col-md-3">
                            <img src={Clin} alt="" className="img-fluid" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
