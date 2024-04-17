import React, { Component } from 'react';
import Navbar from '../componentes/navbar';
import CitasDisponibles from '../componentes/citasDisponibles';
import Nav from '../componentes/nav';
import Footer from '../componentes/footerr';
class citasDisponibles extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <Navbar/>
            </div>
            <div>
                <CitasDisponibles/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default citasDisponibles;