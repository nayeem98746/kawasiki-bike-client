import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import img1 from '../../Images/359333-kawasaki-ninja-h2r-presenta-300-cv-turbo.jpg'
import img2 from '../../Images/bike2.webp'
import img3 from '../../Images/bike3.webp'
import img4 from '../../Images/bike4.jpg'
import img5 from '../../Images/bike5.webp'
import img6 from '../../Images/bike6.jpg'
import './Services.css'

const services = [
    {   
        id:1,
        name:'Kawasaki Ninja H2R',
        img:img1,
        description:'The Kawasaki Ninja H2R gets its power from a 998cc, inline four-cylinder engine mated to a six-speed gearbox. The supercharged engine is good for product .',
        price:'55000',
    },
    {   
        id:2,
        name:'Kawasaki Ninja 300',
        img:img2,
        description:'Kawasaki Ninja 300 is powered by 296 cc engine.This Ninja 300 engine generates a power of 39 PS @ 11000 rpm and a torque of 26.1 Nm @ 10000 rpm.',
        price:'20000',
    },
    {   
        id:3,
        name:'Kawasaki Z900',
        img:img3,
        description:'The new Z900 ABS motorcycle receives a host of new advanced features and epitomizes Kawasaki is belief of what the ideal should be At 948cc with an ',
        price:'40000',
    },
    {   
        id:4,
        name:'Kawasaki Vulcan S',
        img:img4,
        description:'Unlike any other, the Vulcan® S cruiser is designed to transport riders into a sporty realm in edgy style. Blending  ride wit styling and a powerful 649cc engine.',
        price:'45000',
    },
    {   
        id:5,
        name:'Kawasaki Z250SL',
        img:img5,
        description:'Kawasaki has launched the most awaited naked version of Ninja 250 in Indonesia. It is known as the Kawasaki Z250 SL where SL stands for Sport Lightweight. ',
        price:'40000',
    },
    {   
        id:6,
        name:'Kawasaki KX450',
        img:img6,
        description:'With more Supercross and Motocross championships than any other manufacturer, the KX™ name is synonymous with winning.  ',
        price:'15000',
    },
]



const Services = () => {
    // const [services , setServices] = useState([])
    // useEffect( () => {
    //     fetch('')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // } ,[])
    return (
        <div className="row">
            <h2>Our Product</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    >    
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;