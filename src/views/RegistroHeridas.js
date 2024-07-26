import React, { Component } from 'react';
import Nav from '../componentes/nav';
import NavbarAdmin from '../componentes/navAdmin';
import Footer from '../componentes/footerr';
import RegistroListHeridas from '../componentes/registroHeridas';
class RegistroHeridas extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <RegistroListHeridas/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default RegistroHeridas;