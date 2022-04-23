import React from "react";
import "./header.css";
import logo from '../../assets/images/logo_pokedex.svg'



function Header () {

    return(
        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <input className="haderInput" type="text"  placeholder="&#x1F50D; Rechercher"></input>
            </div>
        </div>
    ) 
};

export default Header;