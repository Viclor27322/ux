import React, { Component } from 'react';
import Nav from '../componentes/nav';
import NavbarAdmin from '../componentes/navAdmin';
import Footer from '../componentes/footerr';
import Clasificacion from '../componentes/clasificaionHeridas';
class ClasificacionHeridas extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <Clasificacion/>
                {/* <iframe 
  src='https://proyecto-accr.onrender.com/' 
  style={{ 
    width: '100%', 
    height: '100vh', 
    border: 'none', 
    overflow: 'hidden',
    scrollbarColor: 'none', 
  }}
/> */}

            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default ClasificacionHeridas;