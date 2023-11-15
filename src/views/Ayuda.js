import React, { Component } from 'react';
import Navbar from '../componentes/navbar';
import Ayudas from '../componentes/ayuda';
import Nav from '../componentes/nav';
import Footer from '../componentes/footerr';
class Ayuda extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <Navbar/>
            </div>
            <div>
                <Ayudas/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Ayuda;