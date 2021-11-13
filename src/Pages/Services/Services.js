import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'





const Services = () => {
    const [services , setServices] = useState([])
    useEffect( () => {
        fetch('https://ancient-depths-09291.herokuapp.com/explore')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div className="row">
            <h2>Our Product</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    >    
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;