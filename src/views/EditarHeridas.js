import React, { Component } from 'react';
import Nav from '../componentes/nav';
import NavbarAdmin from '../componentes/navAdmin';
import Footer from '../componentes/footerr';
import EditarClasificacion from '../componentes/editarHeridas';
class EditarHeridas extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <EditarClasificacion/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default EditarHeridas;