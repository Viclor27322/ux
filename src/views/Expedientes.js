import React, { Component } from 'react';
import Nav from '../componentes/nav';
import NavbarAdmin from '../componentes/navAdmin';
import Expedientes from '../componentes/expedientes';
import Footer from '../componentes/footerr';
class Expedientess extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <Expedientes/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Expedientess;