import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useReview from '../../Hooks/useReview';

const Reviews = () => {

    const { Reviews} = useReview();

    return (
        <div>
            <Container>
                <h2 className="text-center mt-5">Reviews</h2>
                <Row>
                {Reviews?.map( review => (
                    <Col className="text-center mt-5 border border-1 p-5" xs={12} lg={6} >
                        
                            <div>
                                <h3>Bike Name : {review.title}</h3>
                                <h5>Review : {review.description}</h5>
                                <h4>Rating : {review.rating}</h4>
                                <h5>User: {review?.user?.email}</h5>
                            </div>
                        
                    </Col>
                ) )}
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;