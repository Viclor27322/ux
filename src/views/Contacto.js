import React, { Component } from 'react';
import Navbar from '../componentes/navbar';
import Contactoo from '../componentes/contacto';
import Nav from '../componentes/nav';
import Footer from '../componentes/footerr';
class Contacto extends Component{
    render(){
    return(
        <div>
            <div>
                <Nav/>
                <Navbar/>
            </div>
            <div>
                <Contactoo/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Contacto;