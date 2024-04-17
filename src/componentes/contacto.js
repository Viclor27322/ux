import React from "react";

import Clin from '../img/clin.jpg';
import contac from '../img/contac.png';
import direcc from '../img/direcc.png';

export default function Contactoo(){
    return(
        <div className="container">
            <h1 className="text-center">Contacto</h1>
            <div className="row p-3 border mb-3">
                    <div className="col-md-9">
                        <h3>Para atenderte con el mejor servicio</h3>
                        <p>Estamos para atenderte con la mejor atención especializada en pie diabético. Nuestro equipo de expertos está listo para ayudarte en cada paso del camino. Ya sea que necesites información adicional, programar una cita o resolver cualquier inquietud, no dudes en contactarnos. Estamos aquí para brindarte el cuidado que necesitas para mantener tus pies sanos y tu calidad de vida en óptimas condiciones.
                        </p>
                    </div>
            </div>
            <div className="container pt-2">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                               
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Direccion</h5>
                                        <p className="card-text">C. Cuauhtémoc 18, Capitán Antonio Reyes,
                                    </p>
                                    <p className="card-text">43000 Huejutla de Reyes, Hgo.
                                    </p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={direcc} className="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Contacto</h5>
                                        <p className="card-text">Telefono: +52 666 2222 999       
                                        </p>
                                        <p className="card-text">Correo: info@cirupied.com
                                        </p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={contac} className="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}