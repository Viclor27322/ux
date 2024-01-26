import React, { Component } from 'react';
import Navbar from '../componentes/navbar';
import Inicio from '../componentes/home';
import Nav from '../componentes/nav';
import Footer from '../componentes/footerr';
import UserTable from '../componentes/Usuarios';
import NavbarAdmin from '../componentes/navAdmin';
class Usuarios extends Component{
    render(){
    return(
        <div id='home'>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <UserTable/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Usuarios;