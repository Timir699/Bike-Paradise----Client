import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Reviews = () => {
    return (
        <div>
            <Container>
                <h2 className="text-center mt-5">Reviews</h2>
                <Row>
                    <Col className="text-center mt-5 border border-1 p-5" xs={12} lg={6} >
                        <p>Review Details</p>
                        <p>reviwe star</p>
                        <h4>user name</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;