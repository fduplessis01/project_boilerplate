import React from "react";
import axios from "axios";
import Infobar from './components/infobar.js';

//import { GoogleMap, LoadScript } from '@react-google-maps/api'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faClipboardList,faYenSign, faClock, faChevronDown, faMapMarkerAlt, faPhone, faEnvelopeSquare, faWindowMaximize, faDirections } from '@fortawesome/free-solid-svg-icons'
library.add(faThLarge, faClipboardList, faYenSign, faClock,faChevronDown,faMapMarkerAlt,faPhone, faEnvelopeSquare, faWindowMaximize, faDirections)


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        uuid: 2
      }
    }
  }

  componentDidMount(){
    axios.get('/readRecord', {params: {uuid: this.state.info.uuid}})
    .then((response)=>{
      console.log(response.data)
      this.setState({     
        info: response.data
      })
    })
    .catch((err)=>{
      console.log('Axios error in client get request', err)
    })
  }

  render() {
    return (
    <div>
      <h1>Food Truck App</h1>
      <Infobar info={this.state.info}/>
    </div>)
  }
}
export default App;
