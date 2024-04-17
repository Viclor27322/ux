import React, { Component } from 'react';
import Nav from '../componentes/nav';
import HorariosAtencionn from '../componentes/horario';
import NavbarAdmin from '../componentes/navAdmin';
import Footer from '../componentes/footerr';
class horariosAtencion extends Component{
    render(){
    return(
        <div>
            <div>
                <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <HorariosAtencionn/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default horariosAtencion;