import React, { Component } from 'react';
import Nav from '../componentes/nav';
import NavbarAdmin from '../componentes/navAdmin';
import EPerfil from '../componentes/editPerfil'
import Footer from '../componentes/footerr';
class EditPerfil extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <EPerfil/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default EditPerfil;