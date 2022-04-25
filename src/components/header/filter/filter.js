import React from 'react'
import "./filter.css";

function Filter (props) {
    function clickHandler(event){
        const selectedType = event.target.className;
        if(selectedType == 'none'){
            props.typeSelection(undefined);
        } else {
            props.typeSelection(selectedType);
        }
    }


    return(
        <div className="typeButton">
            <div onClick={clickHandler} className='normal'>Normal</div>
            <div onClick={clickHandler} className='fire'>Fire</div>
            <div onClick={clickHandler} className='water'>Water</div>
            <div onClick={clickHandler} className='grass'>Grass</div>
            <div onClick={clickHandler} className='electric'>Electric</div>
            <div onClick={clickHandler} className='ice'>Ice</div>
            <div onClick={clickHandler} className='fighting'>Fighting</div>
            <div onClick={clickHandler} className='poison'>Poison</div>
            <div onClick={clickHandler} className='ground'>Ground</div>
            <div onClick={clickHandler} className='flying'>Fly</div>
            <div onClick={clickHandler} className='psychic'>Psychic</div>
            <div onClick={clickHandler} className='bug'>Bug</div>
            <div onClick={clickHandler} className='rock'>Rock</div>
            <div onClick={clickHandler} className='ghost'>Ghost</div>
            <div onClick={clickHandler} className='dragon'>Dragon</div>
            <div onClick={clickHandler} className='dark'>Dark</div>
            <div onClick={clickHandler} className='steel'>Steel</div>
            <div onClick={clickHandler} className='fairy'>Fairy</div>
            <div onClick={clickHandler} className='none'>None</div>
        </div>
    )

}

export default Filter;