import React from "react";
import Clin from '../img/clin.jpg';

export default function Notas() {
    return (
        <div className="container">
            <h1 className="text-center pb-3">Notas</h1>
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
                <div className="row p-3 border mb-3 text-end">
                    <div className="col-md-9">
                        <h3 >Lorem ipsum dolor sit amet</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aenean ante, sollicitudin arcu sociis vestibulum nostra nam non penatibus ullamcorper, lectus fringilla mollis viverra scelerisque ultrices nulla pharetra. Aliquam justo vestibulum fringilla turpis phasellus mattis nisl dapibus vitae nulla, socios feugiat bibendum dignissim accumsan luctus sem consequat velit. Himenaeos tincidunt euismod ultricies libero cursus mi sodales vestibulum eleifend, purus nisi dis sem facilisi facilisis penatibus class pellentesque, at fermentum aliquam nibh phasellus turpis habitant socios.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <img src={Clin} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}
