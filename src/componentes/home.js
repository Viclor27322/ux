import React from "react";

import Logo from '../img/CirupieD.png';

export default function Inicio() {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6 order-2 order-md-1">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean ante, sollicitudin arcu sociis vestibulum nostra nam non penatibus ullamcorper, lectus fringilla mollis viverra scelerisque ultrices nulla pharetra. Aliquam justo vestibulum fringilla turpis phasellus mattis nisl dapibus vitae nulla, socios feugiat bibendum dignissim accumsan luctus sem consequat velit. Himenaeos tincidunt euismod ultricies libero cursus mi sodales vestibulum eleifend, purus nisi dis sem facilisi facilisis penatibus class pellentesque, at fermentum aliquam nibh phasellus turpis habitant socios.
                        </p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean ante, sollicitudin arcu sociis vestibulum nostra nam non penatibus ullamcorper, lectus fringilla mollis viverra scelerisque ultrices nulla pharetra. Aliquam justo vestibulum fringilla turpis phasellus mattis nisl dapibus vitae nulla, socios feugiat bibendum dignissim accumsan luctus sem consequat velit. Himenaeos tincidunt euismod ultricies libero cursus mi sodales vestibulum eleifend, purus nisi dis sem facilisi facilisis penatibus class pellentesque, at fermentum aliquam nibh phasellus turpis habitant socios.
                        </p>
                    </div>
                    <button className="btn btn-primary">Contactanos</button>
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
                                    <h5 class="card-title">Mision</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit aenean ante, sollicitudin arcu sociis vestibulum </p>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Vision</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit aenean ante, sollicitudin arcu sociis vestibulum </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

