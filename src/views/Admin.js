import React, { Component } from 'react';
import Nav from '../componentes/nav';
import NavbarAdmin from '../componentes/navAdmin';
import Admin from '../componentes/admin';
import Footer from '../componentes/footerr';
class Adminn extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <Admin/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Adminn;