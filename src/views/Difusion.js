import React, { Component } from 'react';
import Nav from '../componentes/nav';
import NavbarAdmin from '../componentes/navAdmin';
import Difusion from '../componentes/difusion';
import Footer from '../componentes/footerr';
class Difusionn extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <Difusion/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Difusionn;