import React from 'react';
import Services from '../../../components/Services/Services';
import Banner from '../Banner/Banner';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;