import React, { Component } from 'react';
import Navbar from '../componentes/navbar';
import Notas from '../componentes/notas';
import Nav from '../componentes/nav';
import Footer from '../componentes/footerr';
class Nota extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <Navbar/>
            </div>
            <div>
                <Notas/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Nota;