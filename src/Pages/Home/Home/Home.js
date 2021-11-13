import React from 'react';
import About from '../../About/About';
import DeliveryMan from '../../DeliveryMan/DeliveryMan';

import Reviews from '../../Reviews/Reviews';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;