import React from 'react';
import '../styles/map/map.css'; 

const Map = (props) => {
    return(
        <div>
            <div className = 'map_container'>
                <img src = {require('../images/mapa.jpg')} alt = 'map' />
            </div>
        </div>
    )
}

export default Map; 