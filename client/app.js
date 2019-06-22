import React from "react";
import axios from "axios";
import Infobar from './components/infobar.js';
import Map from './components/map.js'
import OpenTime from './components/opentime.js'
import SearchBar from './components/searchbar.js'

import { GoogleMap, LoadScript } from '@react-google-maps/api'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faThLarge, faClipboardList,faYenSign, faClock, faChevronDown, faMapMarkerAlt, faPhone, faEnvelopeSquare, faWindowMaximize, faDirections } from '@fortawesome/free-solid-svg-icons'
import DropdownElement from "./components/dropdownelement.js";

library.add(faSearch, faThLarge, faClipboardList, faYenSign, faClock,faChevronDown,faMapMarkerAlt,faPhone, faEnvelopeSquare, faWindowMaximize, faDirections)


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: '',
      searchResults: {
        uuid: 0,
        GPS : {
        },
        openTimes : {
        sunday: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: []

        }
      },
      info: {
        uuid: 2,
        GPS : {
        },
        openTimes : {
        sunday: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: []

        }
      }
    }
   
    this.searchBarInputHandler = this.searchBarInputHandler.bind(this);
    this.selectFoodTruck = this.selectFoodTruck.bind(this);
  }

  componentDidMount(){
    axios.get('/readRecord', {params: {uuid: this.state.info.uuid}})
    .then((response)=>{
      console.log(response.data),
      this.setState({     
        info: response.data
      })
    })
    .catch((err)=>{
      console.log('Axios error in client get request', err)
    })
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.searchResults !== prevProps.searchResults) {
        console.log('test', this.props.searchResults)
        axios.get('/readRecord', {params: {uuid: this.props.searchResults.uuid}})
           .then((response)=>{
             console.log('component did update',response.data), 
             this.setState({
               info: response.data
              })
            })
            .catch((err)=>{
              console.log('Axios error in client get request', err)
            })
    }
  }

  selectFoodTruck(){
    if(this.state.searchResults.uuid !== 0 && this.state.searchResults.uuid !== undefined){
      console.log('searchresults.uuid',this.state.searchResults.uuid)
      this.setState({info: this.state.searchResults});
    }
 
}

searchBarInputHandler(e){
  this.setState({formInput: e.target.value}, ()=>{
      axios.get('/readName', {params : {name: this.state.formInput}})
      .then((response)=>{this.setState({searchResults: response.data})})
      .catch(()=>{console.log('there was an error posting the query')})
  })

}

  render() {
    return (
    <div>
      <h1>Find Your Fav Food Truck</h1>
      <div id= 'search-focus-opacity'   style={this.state.searchFocus}>
      </div>


       <SearchBar info={this.props.info} searchBarInputHandler={this.searchBarInputHandler} formInput={this.state.formInput} selectFoodTruck={this.selectFoodTruck}/>
      <Infobar info={this.state.info}/>
      <OpenTime info={this.state.info}/>
      <Map info={this.state.info}/>
    </div>)
  }
}
export default App;
