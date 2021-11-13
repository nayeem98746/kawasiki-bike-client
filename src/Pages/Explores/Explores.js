import React, { useEffect, useState } from 'react';

import Explore from '../Explore/Explore';
import './Explores.css'




const Explores = () => {
    const [explores, setExplores] = useState([])
    useEffect( () => {
        fetch('https://ancient-depths-09291.herokuapp.com/explore2')
        .then(res => res.json())
        .then(data => setExplores(data))
    } ,[])

    return (
        <div className="row">
           <h2>OUR BIKE</h2>
           <div className="explore-container">
               {
                   explores.map(explore => <Explore
                   key={explore.id}
                   explore={explore}
                   
                   ></Explore>)
               }
           </div>
        </div>
    );
};

export default Explores;