import React, { Component } from 'react';
import Nav from '../componentes/nav';
import NavbarAdmin from '../componentes/navAdmin';
import HistorialPagos from '../componentes/historialPagos';
import Footer from '../componentes/footerr';
class HistorialPagoss extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <HistorialPagos/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default HistorialPagoss;