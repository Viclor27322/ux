import React, { Component } from 'react';
import Navbar from '../componentes/navbar';
import Inicio from '../componentes/home';
import Nav from '../componentes/nav';
import Footer from '../componentes/footerr';
class Home extends Component{
    render(){
    return(
        <div id='home'>
            <div>
            <Nav/>
                <Navbar/>
            </div>
            <div>
                <Inicio/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default Home;