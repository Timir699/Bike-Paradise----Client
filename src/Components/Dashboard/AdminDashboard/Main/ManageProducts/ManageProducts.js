
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useDisplay from '../../../../../Hooks/useDisplay';

const ManageProducts = () => {
    const {displayBikes, setDisplayBikes} = useDisplay();


    const deleteBike = (id) => {
        fetch(`https://bike-paradise.herokuapp.com/api/businessPackages/${id}`, {
            method: 'Delete' })
            .then(() => {
                fetch('https://bike-paradise.herokuapp.com/api/businessPackages')
                .then( res => res.json() )
                .then( data => setDisplayBikes(data) )
            } )
    }
    return (
        <div className="mt-5">
            <h2>Manage Products</h2>
            <Container>
                <Row>
                    {displayBikes?.map( bike => {
                        return (
                            <Col className="text-center mt-5 border border-2" xs={12} lg={6} >
                                <img className="w-100 mt-3" src={bike.image} alt="" />
                                <h3>Name : {bike.title}</h3>
                                <h3>Price :{bike.price}</h3>
                                <Button onClick={() => deleteBike(bike._id) } className="btn btn-danger">Delete</Button>
                                {/* <p className="mx-3">{bike.description}</p> */}
                                {/* <Button as={Link} to="/placeOrder" className="mb-3">Buy This Bike</Button>  */}
                            </Col>
                        )
                    })}
                </Row>
            </Container> 
        </div>
    );
};

export default ManageProducts;