import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Button} from 'react-bootstrap';
import { Link,  } from 'react-router-dom';

const Bikes = () => {

    const [bikeData, setBikeData] = useState([])

    useEffect(() => {
        fetch('/fakedb.json')
        .then( res => res.json())
        .then(data => setBikeData(data))
    }, [])

    return (
        <div> 
            <h2 className="text-center mt-5">Our Bikes</h2>
            <Container>
                <Row>
                    {bikeData.map( bike => {
                        return (
                            <Col className="text-center mt-5 border border-2" xs={12} lg={4} >
                                <img className="w-100 mt-3" src={bike.image} alt="" />
                                <h3>Name : {bike.title}</h3>
                                <h3>Price :{bike.price}</h3>
                                <p className="mx-3">{bike.details}</p>
                                <Button as={Link} to="/placeOrder" className="mb-3">Buy This Bike</Button> 
                            </Col>
                        )
                        
                    })}
                </Row>
               
            </Container> 
            
        </div>
    );
};

export default Bikes;