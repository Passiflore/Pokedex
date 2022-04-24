import React from "react";
import "./detailsPage.css";
import pokemon from '../../assets/images/bulbizarre.png'


function DetailsPage () {

    return(
        <div className="detailsPage">
            <div className="detailsLeft">
                <img src={pokemon} className="pokemon" alt="pokemon" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#9AAAAA" fill-opacity="1" d="M0,160L60,181.3C120,203,240,245,360,224C480,203,600,117,720,74.7C840,32,960,32,1080,48C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
            </div>
            <div className="detailsRight">
                <p className="pokemonTitle">Bulbizarre</p>
                <p>Types</p>
                <p>Stats</p>
            </div>
        </div>
    ) 
};

export default DetailsPage;