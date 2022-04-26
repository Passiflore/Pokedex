import React, {useState} from 'react'
import "./search.css";

function SearchBar (props) {

    return(
        <div className="searchBar">
            <input
                type="text"
                placeholder="Search..."
                onChange = {event => {props.searchState(event.target.value)}}/>
        </div>
    )

}

export default SearchBar;