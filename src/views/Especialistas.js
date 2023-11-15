import React, { Component } from 'react';
import Navbar from '../componentes/navbar';
import Especialistas from '../componentes/especialistas';
import Nav from '../componentes/nav';
import Footer from '../componentes/footerr';
class Especialista extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <Navbar/>
            </div>
            <div>
                <Especialistas/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Especialista;