import React, { Component } from 'react';
import Nav from '../componentes/nav';
import Paciente from '../componentes/pacientes';
import NavbarAdmin from '../componentes/navAdmin';
import Footer from '../componentes/footerr';
class Pacientes extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <Paciente/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Pacientes;