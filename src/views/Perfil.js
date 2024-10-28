import React, { Component } from 'react';
import Nav from '../componentes/nav';
import NavbarAdmin from '../componentes/navAdmin';
import UserPerfil from '../componentes/UserPerfil'
import Footer from '../componentes/footerr';
class Perfil extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <UserPerfil/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Perfil;