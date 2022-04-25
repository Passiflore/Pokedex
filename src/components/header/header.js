import React from "react";
import "./header.css";
import logo from '../../assets/images/logo_pokedex.svg'
import SearchBar from "./searchBar/searchBar";
import Filter from "./filter/filter";



function Header (props) {

    return(
        <div className="headerContainer">
            <div className="header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <SearchBar searchState={props.searchState}/>
                </div>
            </div>
            <div>
                <Filter typeSelection={props.typeSelection}/>
            </div>
        </div>
    ) 
};

export default Header;