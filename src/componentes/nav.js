import React from "react";
import Logo from '../img/CirupieD.png';
import '../css/nav.css';
import Breadcrumbs from '../componentes/Migas';

export default function Nav(){
    return(
        <div id="">
            
           <nav class="navbar navbar-light bg-light p-0 ">
                <div class="container-fluid ">
                <a class="navbar-brand" href="#">
                        <img src={Logo} alt="" width="100" height="40" class="d-inline-block align-text-top" />
                        
                    </a>
                    <Breadcrumbs />
                </div>
                
            </nav>  
        </div>
        
    )
}