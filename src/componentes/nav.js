import React from "react";
import Logo from '../img/CirupieD.png';
import '../css/nav.css';
import Breadcrumbs from '../componentes/Migas';
import Chatbot from "./chatbot";

export default function Nav(){
    return(
        <div id="">
            
           <nav className="navbar navbar-light bg-light p-0 ">
                <div className="container-fluid ">
                <a className="navbar-brand" href="#">
                        <img src={Logo} alt="" width="100" height="40" className="d-inline-block align-text-top" />
                        
                    </a>
                    <Breadcrumbs />
                    
                </div> 
                <Chatbot />
                
            </nav>  
        </div>
        
    )
}