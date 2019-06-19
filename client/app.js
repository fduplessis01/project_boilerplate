import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        uuid: 1
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
    return <h1>Food Truck App</h1>;
  }
}
export default App;
