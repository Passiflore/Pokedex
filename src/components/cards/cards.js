import React from "react";
import "./cards.css";
import pokemon from '../../assets/images/bulbizarre.png'


function Cards (props) {
    if(props.imgUrl){
        return( 
        <div className={`cardsBody ${props.pokemonFirstType}`}>
            <img src={props.imgUrl} className="pokemon" alt="pokemon" />
            <p className="cardsTitle">{props.pokemonName}</p>
            <p className="cardsId">{props.pokemonId}</p>
        </div>)
    }
    else{
        return (
            <div className={`cardsBody ${props.pokemonFirstType}`}>
                <img src={props.secondSprite} className="pokemon" alt="pokemon" />
                <p className="cardsTitle">{props.pokemonName}</p>
                <p className="cardsId">{props.pokemonId}</p>
            </div> )
    }
}

export default Cards;