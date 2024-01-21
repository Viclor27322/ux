import React from "react";
import Clin from '../img/clin.jpg';
import '../css/colores.css'

export default function Notas() {
    return (
        <div className="container">
            <h1 className="text-center pb-3 text-titulo ">Notas</h1>
            <div>
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
                <div className="row p-3 border mb-3 text-end">
                    <div className="col-md-9">
                        <h3  className="text-sub">Nutricion y ulcera de pie diabetico (UPD)</h3>
                        <p>
                            La UPD es una complicacion grave, asociadas a la neuropatia diabetica. Son heridas, dificiles de manejar ya que no cicatrizan o cicatrizan mal.
                            La nutricion ocupa un papel primordial en la cicatrizacion de las heridas, pues es necesario, un aporte extra de nutrientes para la reparecion de tejido.</p>
                    
                       </div>
                    <div className="col-md-3">
                        <img src={Clin} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}
