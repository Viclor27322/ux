import React, { Component } from 'react';
import Nav from '../componentes/nav';
import NavbarAdmin from '../componentes/navAdmin';
import Footer from '../componentes/footerr';
import Evaluacion from '../componentes/evaluacionSistematizada';
class EvaluacionSistematizada extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <Evaluacion/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default EvaluacionSistematizada;