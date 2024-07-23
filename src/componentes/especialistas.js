import React from "react";
import espe from '../img/especialistas.jpg';

export default function Especialistas(){
    return(
        <div className="container">
            <h1 className="text-center">Informacion completa</h1>
            <div>
                <div className="row p-3 border mb-3">
                    <div className="col-md-3">
                        <img src={espe} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-9">
                        <h3>Especialistas de CirupieD</h3>
                        <p>Somos un grupo de especialistas dedicados a brindar atención integral a pacientes con pie diabético.En nuestra clínica de pie diabético, contamos con un equipo especializado compuesto por especialistas en cirugía general, nutrición, medicina integrada, angiólogos y cirujanos vasculares, medicina interna, junto con enfermeras especializadas. Trabajamos en conjunto para proporcionar atención integral y personalizada a nuestros pacientes diabéticos, enfocándonos en la prevención, tratamiento y cuidado de las complicaciones relacionadas con sus pies.
                        </p>
                    </div>
                </div>
                <div className="ps-5 pe-4">
                <div className="pt-4 pe-4">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">DR. Martin Gustavo Felipe Redondo</h5>
                                    <p className="card-text">Especialisata en cirugia general </p>
                                    <p className="card-text">"Salud y bienestar, unidos por la precisión y el cuidado."</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">L.N. Jeynie Alejandra Navarro Céspedes</h5>
                                    <p className="card-text">Nutriologa</p>
                                    <p className="card-text">"Promoviendo una vida saludable a través de la nutrición personalizada."</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Doc. Deysi Anabel Galvan Arellano</h5>
                                    <p className="card-text">Medicina integrada</p>
                                    <p className="card-text">"Enfoque integral para su bienestar físico y mental."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-5 pe-4">
                <div className="pt-4 pe-4">
                    <div className="row">
                    <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Doc.Emanuel Hernandez Luevano</h5>
                                    <p className="card-text">Angiología y cirugía vascular</p>
                                    <p className="card-text">"Cuidando su salud cardiovascular con experiencia y precisión."</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Miguel Ángel Ramos Ortigoza</h5>
                                    <p className="card-text">Medicina interna</p>
                                    <p className="card-text">"Comprometido con su salud integral a través de un enfoque personalizado."</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Enf. Jazmín Hernández Hernández</h5>
                                    <p className="card-text">Enfermera</p>
                                    <p className="card-text">"Compasión en cada cuidado, guía en cada paso."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            </div>
        </div>
    )
}

