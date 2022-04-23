import React from "react";
import "./homePage.css";
import Cards from "../components/cards/cards";
import Header from "../components/header/header";



function HomePage () {

    return(
        <div className="homeBody">
            <Header/>
            <div className="cardsContainer">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
    ) 
};

export default HomePage;