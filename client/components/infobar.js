import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Infobar = (props) => {

    return(
        <div className='infobar'>
            <div className='titleInfo'><h1>{props.info.name}</h1></div>
            <div className="addressInfo">
                    <span><FontAwesomeIcon icon="map-marker-alt" className="iconInfo" /> </span>
                    <span>{props.info.address}</span>
            </div>
            <div className="phoneInfo">
                    <span><FontAwesomeIcon icon="phone" className="iconInfo" /> </span>  
                    <span>{props.info.phone}</span>
            </div>
            <div className="emailInfo">
                    <span><FontAwesomeIcon icon="envelope-square" className="iconInfo" /> </span>
                    <span>{props.info.email}</span>
            </div>
            <div className="websiteInfo">
                    <span ><FontAwesomeIcon icon="window-maximize" className="iconInfo" /> </span>
                    <span>{props.info.url}</span>
            </div>
            <div className="menuInfo">
                    <span ><FontAwesomeIcon icon="clipboard-list" className="iconInfo" /> </span>
                    <span>{props.info.menu}</span>
            </div>
            <div className="categoryInfo">
                    <span ><FontAwesomeIcon icon="th-large" className="iconInfo" /> </span>
                    <span>{props.info.category}</span>
            </div>
            
            <div className="info">
                    <div><h4>Info on {props.info.name}</h4></div>
                    <div>{props.info.info}</div>
            </div>
            <img className='image' src={props.info.photo} />
           


        </div>

    )
}

export default Infobar;