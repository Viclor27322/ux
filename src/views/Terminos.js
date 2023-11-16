import React, { Component } from 'react';
import Navbar from '../componentes/navbar';
import Nav from '../componentes/nav';
import Footer from '../componentes/footerr';
import Terminoss from '../componentes/terminosycondiciones';
class Terminos extends Component{
    render(){
    return(
        <div>
            <div>
                <Nav/>
                <Navbar/>
            </div>
            <div>
                <Terminoss/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Terminos;