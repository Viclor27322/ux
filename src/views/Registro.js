import React, { Component } from 'react';
import Nav from '../componentes/nav';
import Registros from '../componentes/Registro';
import Footer from '../componentes/footerr';
class Registro extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
            </div>
            <div>
                <Registros/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Registro;