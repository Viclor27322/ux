import React, { Component } from 'react';
import Navbar from '../componentes/navbar';
import Nav from '../componentes/nav';
import Footer from '../componentes/footerr';
import Cookies from '../componentes/cookies';
class Cookie extends Component{
    render(){
    return(
        <div>
            <div>
                <Nav/>
                <Navbar/>
            </div>
            <div>
               <Cookies/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Cookie;