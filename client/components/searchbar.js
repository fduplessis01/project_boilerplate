import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar =(props) => {

    return (

        <div>
            <div className='searchform'>  
            <FontAwesomeIcon icon='search'/> 
            <div id='searchbar' onClick={(e)=>{props.selectFoodTruck(e, props.info.uuid)}}>Find Your Fav Food Truck</div>
            <input type="text" id='searchbar-input' onChange={ props.searchBarInputHandler} placeholder='Find your Fav Food Truck'/>
            <div>
            <a onClick={(e)=>{props.selectFoodTruck(e, props.info.uuid)}} >{props.info.name}</a>
            </div>
            </div>
        </div>
    )
}

export default SearchBar







