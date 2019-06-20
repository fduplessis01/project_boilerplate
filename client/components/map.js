import React from 'react';
import GoogleMapReact from 'google-map-react';

const apiKey = process.env.API_KEY;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = (props) => {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%' }} className='map' >
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={{
            lat: props.info.GPS.x,
            lng: props.info.GPS.y
          }}
          defaultZoom={16}
        >
          <AnyReactComponent
            lat={props.info.GPS.x}
            lng={props.info.GPS.y}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );

}









// import { GoogleMap, LoadScript } from '@react-google-maps/api';


// const apiKey = process.env.API_KEY;

// const Map = (props) => {

//     return(
//         <div className="boxTimeThreeInfo" >
//         <LoadScript
//           id="script-loader"
//           googleMapsApiKey={apiKey}
         
//         >
//           <GoogleMap
//             id='example-map'
//             mapContainerStyle={{
//                 height: '400px',
//                 width: '400px'
//               }}
//               zoom={16}
//               center={{

//                 lat: 30.2584046,
//                 lng: -176.5823
                  
//                 // lat: props.info.GPS.x,
//                 // lng: props.info.GPS.y
//               }}
              
           
//           >
           
//           </GoogleMap>
//         </LoadScript>
//         </div>
//     )
// }

export default Map;

