import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Button} from 'react-bootstrap';
import { Link,  } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useDisplay from '../../Hooks/useDisplay';

const Bikes = ({isHome}) => {

    const {displayBikes} = useDisplay();
    const {user} = useAuth()
    const email = user.email

    const sendToDb = bike => {
        const {title, image, price} = bike;
        const bikeObj = {title, image, price, email}
        fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bikeObj)
        })
    }

    return (
        <div> 
            <h2 className="text-center mt-5">Our Bikes</h2>
            <Container>
                {isHome ? (
                    <Row> 
                    {displayBikes?.slice(0, 6).map( bike => {
                        return (
                            <Col className="text-center mt-5 border border-2" xs={12} lg={4} >
                                <img className="w-100 mt-3" src={bike.image} alt="" />
                                <h3>Name : {bike.title}</h3>
                                <h3>Price :{bike.price}</h3>
                                <p className="mx-3">{bike.description}</p>
                                <Button onClick={() => sendToDb(bike) } as={Link} to="/placeOrder" className="mb-3">Buy This Bike</Button> 
                            </Col>
                        )
                    })}
                </Row>
                ) : (
                    <Row> 
                    {displayBikes?.map( bike => {
                        return (
                            <Col className="text-center mt-5 border border-2" xs={12} lg={4} >
                                <img className="w-100 mt-3" src={bike.image} alt="" />
                                <h3>Name : {bike.title}</h3>
                                <h3>Price :{bike.price}</h3>
                                <p className="mx-3">{bike.description}</p>
                                <Button onClick={() => sendToDb(bike) } as={Link} to="/placeOrder" className="mb-3">Buy This Bike</Button> 
                            </Col>
                        )
                    })}
                </Row>
                ) } 
                
            </Container> 
        </div>
    );
};

export default Bikes;