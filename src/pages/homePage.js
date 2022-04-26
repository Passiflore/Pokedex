import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import Cards from "../components/cards/cards";
import Header from "../components/header/header";
import DetailsPage from "./detailsPage/detailsPage";




function HomePage () {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState();
    const [pokemonData, setPokemonData] = useState();
    const [searchInput, setSearchInput] = useState("");
    const [typeSelection, setTypeSelection] = useState("");
    const [filteredPokemon, setFilteredPokemon] = useState("");
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
            secondSprite: apiJson.sprites.front_default, 
            id : apiJson.id,
            firstType : apiJson.types[0].type.name,
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

     // Filter and search pokemon
    useEffect( () => {

        if (pokemonData && typeSelection) {  // Filter
            const filteredByType = pokemonData.filter((pokemon) => {
                return pokemon.firstType === typeSelection;
            })

            setFilteredPokemon(filteredByType);

        } else if(pokemonData && searchInput) { // Search
            const filteredByName = pokemonData.filter((pokemon) =>{
                if(pokemon.name.indexOf(searchInput) > -1) return pokemon.name;
            })

            setFilteredPokemon(filteredByName);

        } else { // If None

            setFilteredPokemon(null);
        }
    }, [typeSelection, searchInput])


    // Show on page
    if (!isLoading && !filteredPokemon) {
            return(
                <div className="homeBody">
                    <Header searchState={setSearchInput} typeSelection={setTypeSelection}/>
                    <div className="cardsContainer">
                        {
                            pokemonData.map((pokemon, index) => {
                                
                                return <Link to={pokemon.name}><Cards imgUrl={pokemon.sprite} secondSprite={pokemon.secondSprite} pokemonName={pokemon.name} pokemonId={pokemon.id} pokemonFirstType={pokemon.firstType}/></Link>
                            })
                        }
                    </div>
                </div>
            ) 
        } else if (!isLoading && filteredPokemon) {
        return(
            <div className="homeBody">
                <Header searchState={setSearchInput} typeSelection={setTypeSelection}/>
                <div className="cardsContainer">
                    {
                        filteredPokemon.map((pokemon, index) => {
                            return <Link to={pokemon.name}><Cards imgUrl={pokemon.sprite} secondSprite={pokemon.secondSprite} pokemonName={pokemon.name} pokemonId={pokemon.id} pokemonFirstType={pokemon.firstType}/></Link>
                        })
                    }
                </div>
            </div>
        ) 
        
    }
};

export default HomePage;