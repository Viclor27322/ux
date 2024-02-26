import React from "react";
import Clin from '../img/clin.jpg';

export default function Especialistas(){
    return(
        <div className="container">
            <h1 className="text-center">Informacion completa</h1>
            <div>
                <div className="row p-3 border mb-3">
                    <div className="col-md-3">
                        <img src={Clin} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-9">
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean ante, sollicitudin arcu sociis vestibulum nostra nam non penatibus ullamcorper, lectus fringilla mollis viverra scelerisque ultrices nulla pharetra. Aliquam justo vestibulum fringilla turpis phasellus mattis nisl dapibus vitae nulla, socios feugiat bibendum dignissim accumsan luctus sem consequat velit. Himenaeos tincidunt euismod ultricies libero cursus mi sodales vestibulum eleifend, purus nisi dis sem facilisi facilisis penatibus class pellentesque, at fermentum aliquam nibh phasellus turpis habitant socios.
                        </p>
                    </div>
                </div>
                <div className="ps-5 pe-5">
                <div className="pt-5 pe-5">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Dr Martin Gustavo Felipe Redondo</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit aenean ante, sollicitudin arcu sociis vestibulum </p>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Lorem ipsum</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit aenean ante, sollicitudin arcu sociis vestibulum </p>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Lorem ipsum</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit aenean ante, sollicitudin arcu sociis vestibulum </p>

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
