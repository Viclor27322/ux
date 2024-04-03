import React, { Component } from 'react';
import Nav from '../componentes/nav';
import RecuperacionPregunta from '../componentes/recuperacionPregunta';

import Footer from '../componentes/footerr';
class RecuperacionPreguntaa extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
            </div>
            <div>
                <RecuperacionPregunta/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default RecuperacionPreguntaa;