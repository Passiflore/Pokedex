import React, { useState } from "react";
import "./homePage.css";
import Cards from "../components/cards/cards";
import Header from "../components/header/header";
import DetailsPage from "./detailsPage/detailsPage";




function HomePage () {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState();
    const [pokemonData, setPokemonData] = useState();
    let pokemonArray = [];




    // Fetching all the pokemon names from the api
    const fetchPokemonName = async (next) => {
        const apiRes = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1127');
        const apiJson = await apiRes.json();
        setPokemonList(apiJson.results)
    }

    // Fetching all the pokemon data by name
    const fetchPokemonData = async (pokemonName) => {
        const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const apiJson = await apiRes.json()
        const pokemonObject = {
            name : pokemonName,
            sprite : apiJson.sprites.other.dream_world.front_default,
            id : apiJson.id,
            fristType : apiJson.types[0].type.name,
            types : apiJson.types
        }
        return pokemonObject;
    }

    fetchPokemonName();
    if (pokemonList && isLoading) {
        pokemonList.forEach(async (element) => {
            const pokemonFetched = await fetchPokemonData(element.name);
            pokemonArray.push(pokemonFetched);
        });
        setPokemonData(pokemonArray)
        setIsLoading(false);
    }

    if (!isLoading) {
            return(
                <div className="homeBody">
                    {/* <DetailsPage/> */}
                    <Header/>
                    <div className="cardsContainer">
                        {
                            pokemonData.map((pokemon, index) => {
                                return <Cards imgUrl={pokemon.sprite} pokemonName={pokemon.name} pokemonId={pokemon.id} pokemonFirstType={pokemon.fristType}/>
                            })
                        }
                    
                        {/* <Cards imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" pokemonName="Ditto" pokemonId="001"/>
                        <Cards imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" pokemonName="Bulbasaur" pokemonId="002"/> */}
                    </div>
                </div>
            ) 
    }

    
};

export default HomePage;