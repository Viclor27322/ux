import React from "react";
import Logo from '../img/CirupieD.png';
import slider1 from '../img/slider-1.jpg';
import slider2 from '../img/slider-4.jpg';
import slider3 from '../img/slider-5.jpg';

export default function Inicio() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block " alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slider3} className="d-block " alt="..." />

                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container pt-5">
            
            <div className="row">
                <div className="col-md-6 order-2 order-md-1 ">
                    <div className="pb-3">
                       <div className="">
                        <h2 className="text-titulo">
                            SOMOS UN EQUIPO MULTIDISCIPLINARIO DE PERSONAL DE LA SALUD, ENFOCADOS EN LA ATENCION DE PACIENTES CON PIE DIABETICO
                        </h2>
                        </div>
                        <div>
                            <h4 className="text-sub">Conserva tus pasos cuida tus pies</h4>
                        </div> 
                    </div>
                    <a href="/Contacto" className="btn btn-success p-2">Contactanos</a>
                </div>
                <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center">
                    <img src={Logo} alt="" className="w-75" />
                </div>
            </div>
            <div className="ps-5 pe-5">
                <div className="pt-5 pe-5">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card ">
                                <div className="card-body">
                                    <h3 className="card-title text-primary ">Mision</h3>
                                    <p className="card-text ">Proporcinar un servicio de atencion integral con la finalidad de prevenir, detectar, diagnosticar, tratar y rehabilitar a los pacientes con pie diabetico
                                    ..</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 ">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h3 className="card-title text-primary">Vision</h3>
                                    <p className="card-text">Preservar la integridad de los pacientes que cursen con pie diabetico de acuerdo a cada caso y crear un cambio consciente en los pacientes y su entorno </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

