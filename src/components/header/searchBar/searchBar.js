import React, {useState} from 'react'

function SearchBar (props) {

    return(
        <div>
            <input
                type="text"
                placeholder="Rechercher..."
                onChange = {event => {props.searchState(event.target.value)}}/>
        </div>
    )

}

export default SearchBar;