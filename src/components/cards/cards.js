import React from "react";
import "./cards.css";
import logo from '../../assets/images/bulbizarre.png'


function Cards () {

    return(
        <div className="cardsBody">
            <img src={logo} className="pokemon" alt="logo" />
            <p className="cardsTitle">Bulbizarre</p>
            <p className="cardsId">001</p>
        </div>
    ) 
};

export default Cards;