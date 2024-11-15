import React, { Component } from 'react';
import Nav from '../componentes/nav';
import NavbarAdmin from '../componentes/navAdmin';
import FeedBack from '../componentes/feedBackView'
import Footer from '../componentes/footerr';
class FeedBackView extends Component{
    render(){
    return(
        <div>
            <div>
            <Nav/>
                <NavbarAdmin/>
            </div>
            <div>
                <FeedBack/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )      
  }
}

export default FeedBackView;