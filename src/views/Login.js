import React, { Component } from 'react';
import Nav from '../componentes/nav';
import Login from '../componentes/login';
import Footer from '../componentes/footerr';
class Loginn extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
            </div>
            <div>
                <Login/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Loginn;