import React, { Component } from 'react';
import Nav from '../componentes/nav';
import NavbarAdmin from '../componentes/navAdmin';
import Citas from '../componentes/citas';
import Footer from '../componentes/footerr';
class Cita extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <Citas/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Cita;