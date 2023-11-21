import React from "react";

import Logo from '../img/CirupieD.png';

export default function Inicio() {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6 order-2 order-md-1 ">
                    <div className="pb-3">
                       <div className="">
                        <h2 className="text-primary">
                            SOMOS UN EQUIPO MULTIDISCIPLINARIO DE PERSONAL DE LA SALUD, ENFOCADOS EN LA ATENCION DE PACIENTES CON PIE DIABETICO
                        </h2>
                        </div>
                        <div>
                            <h4 className="text-danger">Conserva tus pasos cuida tus pies</h4>
                        </div> 
                    </div>
                    <button className="btn btn-success p-2">Contactanos</button>
                </div>
                <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center">
                    <img src={Logo} alt="" className="w-75" />
                </div>
            </div>
            <div className="ps-5 pe-5">
                <div className="pt-5 pe-5">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title text-primary ">Mision</h3>
                                    <p class="card-text ">Proporcinar un servicio de atencion integral con la finalidad de prevenir, detectar, diagnosticar, tratar y rehabilitar a los pacientes con pie diabetico
                                    ..</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title text-primary">Vision</h3>
                                    <p class="card-text">Preservar la integridad de los pacientes que cursen con pie diabetico de acuerdo a cada caso y crear un cambio consciente en los pacientes y su entorno </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <h3>Mi ubicacion</h3>
                <iframe src="https://www.google.com.mx/maps/place/Uniformes+Mi+Enfermera+Favorita/@21.143713,-98.4231253,18.79z/data=!4m6!3m5!1s0x85d7276c67e734b7:0x1b50d75f53f760a5!8m2!3d21.1438829!4d-98.4233404!16s%2Fg%2F11jt18jjqx?entry=ttu"></iframe>
            </div>
        </div>
    );
}

