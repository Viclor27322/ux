import React, { Component } from 'react';
import Nav from '../componentes/nav';
import Recuperacionn from '../componentes/Recuperacion';
import Footer from '../componentes/footerr';
class Recuperacion extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
            </div>
            <div>
                <Recuperacionn/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Recuperacion;