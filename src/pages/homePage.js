import React from "react";
import "./homePage.css";
import Cards from "../components/cards/cards";
import Header from "../components/header/header";
import DetailsPage from "./detailsPage/detailsPage";



function HomePage () {


    return(
        <div className="homeBody">
            {/* <DetailsPage/> */}
            <Header/>
            <div className="cardsContainer">
                <Cards imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" pokemonName="Ditto" pokemonId="001"/>
                <Cards imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" pokemonName="Bulbasaur" pokemonId="002"/>

            </div>
        </div>
    ) 
};

export default HomePage;