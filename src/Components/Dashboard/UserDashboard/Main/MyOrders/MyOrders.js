import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../../../../Hooks/useAuth';


const MyOrders = () => {
    const { userData } = useAuth()
    console.log(userData);
    
    return (
        <div className="mt-5">
            <h2>My orders</h2>
            <Row>
                    {userData?.orders?.map( order => {
                        return (
                            <Col className="text-center mt-5 border border-2" xs={12} lg={6} >
                                <img className="w-100 mt-3" src={order.image} alt="" />
                                <h3>Name : {order.title}</h3>
                                <h3>Price :{order.price}</h3>
                                <h3>status :{order.status}</h3>
                                {/* <Button onClick={() => deleteBike(bike._id) } className="btn btn-danger">Delete</Button> */}
                                {/* <p className="mx-3">{bike.description}</p> */}
                                {/* <Button as={Link} to="/placeOrder" className="mb-3">Buy This Bike</Button>  */}
                            </Col>
                        )
                    })}
                </Row>
        </div>
    );
};

export default MyOrders;