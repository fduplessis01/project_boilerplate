import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar =(props) => {

    return (

        <div>
            <div className='searchform'>  
            <FontAwesomeIcon icon='search'/> 
            {/* <div id='searchbar' onClick={()=>{props.selectFoodTruck}}>Find Your Fav Food Truck</div> */}
            <input type="text"  size="35" id='searchbar-input' onChange={ props.searchBarInputHandler} placeholder='Find your Fav Food Truck   '/>
            <button onClick={props.selectFoodTruck}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar







