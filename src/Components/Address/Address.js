import React from 'react';
import { Container } from 'react-bootstrap';

const Address = () => {
    return (
        <div className="mt-5">
            <h2 className="text-center my-5">Address</h2>
            <Container>
            <div style={{width: "100%"}}><iframe title="sdgvsd" style={{ width:"100%",height: "400px"}} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=banani%2011+(Bikes%20Paradise)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
            </Container>
        </div>
    );
};

export default Address;