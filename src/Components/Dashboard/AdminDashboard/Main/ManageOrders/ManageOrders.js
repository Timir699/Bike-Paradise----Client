import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import '../ManageOrders/ManageOrders.css'
import OrderItem from './OrderItem/OrderItem';
const ManageOrders = () => {

    const [manageOrder, setManageOrder] = useState([])

    useEffect(() => {
        fetch('https://bike-paradise.herokuapp.com/api/orders')
        .then( res => res.json())
        .then( data => {
            setManageOrder(data)})
    }, [])

    return (
        <Container>
            <div className="manage-orders">
                <h2 className="text-center mb-5" >Manage orders</h2>
                {manageOrder?.map( service => {
                    return (
                        <OrderItem 
                        setManageOrder={setManageOrder}
                        service={service}
                        manageOrder={manageOrder}
                    />
                    )
                } )}
            </div>
        </Container>
    );
};

export default ManageOrders;