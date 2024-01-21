import React from "react";

export default function error404(){
    return(
        <div className="container">
            <div className="aling-center">
            <div className="row p-3 ">
                    <div className="col-md-7">
                        <h3 className="text-sub">La pagina no existe</h3>
                        <p>
                            Revise bien los paremetro ingresados o valores ya que la pagina que intenta acceder no se encuentra disponible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
