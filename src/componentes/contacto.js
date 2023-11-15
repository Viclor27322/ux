import React from "react";

import Clin from '../img/clin.jpg';

export default function Contactoo(){
    return(
        <div className="container">
            <h1 className="text-center">Contacto</h1>
            <div className="row p-3 border mb-3">
                    <div className="col-md-9">
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean ante, sollicitudin arcu sociis vestibulum nostra nam non penatibus ullamcorper, lectus fringilla mollis viverra scelerisque ultrices nulla pharetra. Aliquam justo vestibulum fringilla turpis phasellus mattis nisl dapibus vitae nulla, socios feugiat bibendum dignissim accumsan luctus sem consequat velit. Himenaeos tincidunt euismod ultricies libero cursus mi sodales vestibulum eleifend, purus nisi dis sem facilisi facilisis penatibus class pellentesque, at fermentum aliquam nibh phasellus turpis habitant socios.
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
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={Clin} className="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src={Clin} className="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}