import React, { useState, useEffect } from "react";
import '../css/colores.css'

export default function Notas() {
    const [notas, setNotas] = useState([]);

    useEffect(() => {
        obtenerNotas();
    }, []);

    const obtenerNotas = async () => {
        fetch("https://rest-api2-three.vercel.app/api/notas")
            .then(response => response.json())
            .then(data => setNotas(data))
            .catch(error => console.error("Error al obtener notas:", error));
    };


    return (
        <div className="container">
            <h1 className="text-center pb-3 text-titulo">Notas</h1>
            <div>
                {/* Renderiza el contenido inicial */}
                <div className="row p-3 border mb-3">
                    {/* <div className="col-md-3">
                        <img src={"https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-medico-dibujado-mano_23-2150696182.jpg?size=626&ext=jpg"} alt="imagen de la nota" className="img-fluid" />
                    </div> */}
                    <div className="col-md-9">
                        <h3 className="text-sub">¿Que es el pie diabetico?</h3>
                        <p>
                            Es el sindrome que se presenta como un ataque agudo o cronico del pie caracterizado por uno o mas heridas cuya etiologia, complejidad  y gravedad, es una variable en destruccion de tejidos  en extension y profundidad, zonas y aspectos anatomicos que pueden ser agravado por isquemia, infeccion, edema, y neuropatia, con riesgo de amputacion en los pacientes con diabetes.
                        </p>
                    </div>
                </div>
                
                
                {notas.map(nota => (
                    <div className="row p-3 border mb-3">
                        {/* <div className="col-md-3">
                            <img src={"https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-medico-dibujado-mano_23-2150696182.jpg?size=626&ext=jpg"} alt="imagen de la nota" className="img-fluid w-100 h-100" />
                        </div> */}
                        <div className="col-md-9">
                            <h3 className="text-sub">{nota.Titulo}</h3>
                            <p>
                            {nota.Descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
