import React from "react";
import "./cards.css";
import pokemon from '../../assets/images/bulbizarre.png'


function Cards (props) {

    return(
        <div className="cardsBody">
            {/* <img src={pokemon} className="pokemon" alt="pokemon" />
            <p className="cardsTitle">Bulbizarre</p>
            <p className="cardsId">001</p> */}
            <img src={props.imgUrl} className="pokemon" alt="pokemon" />
            <p className="cardsTitle">{props.pokemonName}</p>
            <p className="cardsId">{props.pokemonId}</p>
        </div>
    ) 
};

export default Cards;