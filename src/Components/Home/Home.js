import React from 'react';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Bikes isHome={true} />
            <Reviews />
            <Address />
        </div>
    );
};

export default Home;