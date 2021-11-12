import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'


// Banner Component
const Banner = () => {
    return (
        <div className="banner text-center">
            <div className="bg-overlay">
                <h2 className="mb-4">Welcome to Bike Paradise</h2>
                <Button as={Link} to="/bikes" variant="outline-primary">Our Bikes</Button>
            </div>

        </div>
    );
};

export default Banner;