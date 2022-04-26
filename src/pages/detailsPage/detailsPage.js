import React, { useState } from "react";
import "./detailsPage.css";
import logo from'../../assets/images/logo_pokedex.svg'
import noPicture from'../../assets/images/noPicture.png'
import { useParams, Link } from 'react-router-dom'


function DetailsPage () {

    const { name } = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState();
    const [pokemonSprite, setPokemonSprite] = useState();
    const [pokemonSecondSprite, setPokemonSecondSprite] = useState();
    const [secondType, setSecondType] = useState();


    //retrieve all pokemon data from the api
    const fetchPokemonData = async () => {
        const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const apiJson = await apiRes.json()
        const weight = parseInt(apiJson.weight);
        const height = parseInt(apiJson.height);
        if(apiJson.types[1]){
            const setSecondType = (apiJson.types[1].type.name)
        } else {
            const setSecondType = (null)
        }
        const pokemonObject = {
            name : name,
            sprite : apiJson.sprites.other.dream_world.front_default,
            secondSprite: apiJson.sprites.front_default, 
            shinySprite: apiJson.sprites.front_shiny, 
            id : apiJson.id,
            firstType : apiJson.types[0].type.name,
            secondType : secondType,
            height: height/10,
            weight: weight/100
        }

        //manage the sprites displayed according to those available
        if (pokemonObject.sprite){
            setPokemonSprite(pokemonObject.sprite)
            setPokemonSecondSprite(pokemonObject.secondSprite)
        } else if (pokemonObject.secondSprite) {
            setPokemonSprite(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonObject.id}.png`)
            setPokemonSecondSprite(pokemonObject.secondSprite)
        } else {
            setPokemonSprite(noPicture)
            setPokemonSecondSprite(noPicture)
        }
        setPokemonData(pokemonObject)
        setIsLoading(false)
    }

    //manage shiny sprites
    const isShiny = () => {
        if(pokemonData.shinySprite) {
            return (
                <div className="sprites">
                    <img src={pokemonData.shinySprite} className="pokemonSprite" alt="pokemon" />
                    <p>Shiny version</p>
                </div>
            )
        }
    }

    //manage second type
    const isSecondType = () =>{
        if(pokemonData.secondType){
            return (
                <div className="detailsContent detailTypes">
                    <p>Type :</p>
                    <div className={`${pokemonData.firstType}`}>{pokemonData.firstType}</div>
                    <div className={`${pokemonData.secondType}`}>{pokemonData.secondType}</div>
                </div>
            )
        }else{
            return (
                <div className="detailsContent detailTypes">
                    <p>Type :</p>
                    <div className={`${pokemonData.firstType}`}>{pokemonData.firstType}</div>
                </div>
            )
        }

    }

    //manage the loading time
    if (isLoading) {
        fetchPokemonData()
        return (
            <p>I'M LOADING</p>
        )
    } else {
        return( //display on the page
            <div className="detailsPage">

                {/* left side */}
                <div className={`detailsLeft ${pokemonData.firstType}`}>
                    <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
                    <img src={pokemonSprite} className="pokemonImage" alt="pokemon" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fillOpacity="1" d="M0,160L60,181.3C120,203,240,245,360,224C480,203,600,117,720,74.7C840,32,960,32,1080,48C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        </svg>
                    <p className="pokemonId">{pokemonData.id}</p>
                </div>

                {/* left side */}
                <div className="detailsRight">
                    <p className="pokemonTitle">{name}</p>
                    {isSecondType()}
                    <div className="detailsContent">
                        <p>Height :</p>
                        <p>{pokemonData.height} m </p>
                    </div>
                    <div className="detailsContent">
                        <p>Weight :</p>
                        <p>{pokemonData.weight} kg </p>
                    </div>
                    <p>Sprites :</p>
                    <div className="spritesContainer">
                        <div className="sprites">
                            <img src={pokemonSecondSprite} className="pokemonSprite" alt="pokemon" />
                            <p>Default Version</p>
                        </div>
                        {isShiny()}
                    </div>
                </div>
            </div>
        ) 
    }

};

export default DetailsPage;