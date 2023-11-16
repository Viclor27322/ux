import React, { Component } from 'react';
import Navbar from '../componentes/navbar';
import Nav from '../componentes/nav';
import Footer from '../componentes/footerr';
import Politicas from '../componentes/politicas';
class Privacidad extends Component{
    render(){
    return(
        <div>
            <div>
                <Nav/>
                <Navbar/>
            </div>
            <div>
                <Politicas/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Privacidad;